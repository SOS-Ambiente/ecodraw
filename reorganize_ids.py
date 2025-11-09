import re
import sys

def reorganize_ids(input_file, output_file=None):
    """
    Reads data.js file and reorganizes IDs with type-based prefixes.
    F1, F2, F3... for FRUITS
    H1, H2, H3... for HERBS
    V1, V2, V3... for VEGETABLES
    R1, R2, R3... for ROOTS
    T1, T2, T3... for TREES
    C1, C2, C3... for CROPS
    I1, I2, I3... for INVASIVE_SPECIES
    """
    
    # Type prefix mapping
    TYPE_PREFIXES = {
        'FRUITS': 'F',
        'HERBS': 'H',
        'VEGETABLES': 'V',
        'ROOTS': 'R',
        'TREES': 'T',
        'CROPS': 'C',
        'INVASIVE_SPECIES': 'I'
    }
    
    # Read the file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
        sys.exit(1)
    
    # Find all item objects with their IDs and types
    # Pattern matches: { id: NUMBER, ... type: 'TYPE', ... }
    item_pattern = r'\{\s*id:\s*(\d+)\s*,.*?type:\s*[\'"](\w+)[\'"].*?\}'
    
    # Find all items
    items = []
    for match in re.finditer(item_pattern, content, re.DOTALL):
        old_id = match.group(1)
        item_type = match.group(2)
        start = match.start()
        items.append({
            'old_id': old_id,
            'type': item_type,
            'start': start,
            'match': match
        })
    
    if not items:
        print("No items with IDs and types found in the file.")
        sys.exit(1)
    
    print(f"Found {len(items)} items")
    
    # Count items by type to generate sequential IDs
    type_counters = {}
    for item in items:
        item_type = item['type']
        if item_type not in type_counters:
            type_counters[item_type] = 0
        type_counters[item_type] += 1
        
        # Generate new ID with prefix
        prefix = TYPE_PREFIXES.get(item_type, 'X')
        new_id = f"'{prefix}{type_counters[item_type]}'"
        item['new_id'] = new_id
    
    # Sort items by their position in the file (reverse order for replacement)
    items.sort(key=lambda x: x['start'], reverse=True)
    
    # Replace IDs in content
    new_content = content
    
    for item in items:
        old_id = item['old_id']
        new_id = item['new_id']
        
        # Find the exact position of "id: NUMBER," in this item
        item_text = item['match'].group(0)
        id_pattern = r'(id:\s*)' + re.escape(old_id) + r'(\s*,)'
        
        # Find position within the item
        id_match = re.search(id_pattern, item_text)
        if id_match:
            # Calculate absolute position in content
            abs_start = item['start'] + id_match.start(0) + len('id:')
            abs_start = new_content.find(old_id, item['start'])
            abs_end = abs_start + len(old_id)
            
            # Replace in content
            new_content = new_content[:abs_start] + new_id + new_content[abs_end:]
            
            print(f"  Changed ID {old_id} ({item['type']}) -> {new_id}")
    
    # Write to output file
    output_path = output_file if output_file else input_file
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"\nSuccessfully reorganized IDs in '{output_path}'")
        print(f"Total items: {len(items)}")
        print("\nSummary by type:")
        for item_type, count in sorted(type_counters.items()):
            prefix = TYPE_PREFIXES.get(item_type, 'X')
            print(f"  {item_type}: {count} items ({prefix}1-{prefix}{count})")
    except Exception as e:
        print(f"Error writing to file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    input_file = "src/components/Library/data.js"
    
    # Optional: specify output file as second argument
    output_file = sys.argv[1] if len(sys.argv) > 1 else None
    
    reorganize_ids(input_file, output_file)
