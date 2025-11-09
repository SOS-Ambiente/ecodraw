#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para buscar imagens de plantas/frutas por nome científico
Fontes: Wikipedia/Wikimedia → Fallback API de Botânica
"""

import json
import re
import os
import sys
import requests
from datetime import datetime
from urllib.parse import quote
import logging

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class PlantImageFinder:
    """Classe para buscar imagens de plantas usando nome científico"""

    def __init__(self, input_file='data.js', output_file='data_updated.js'):
        self.input_file = input_file
        self.output_file = output_file
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        self.images_found = 0
        self.images_failed = 0

    def extract_js_data(self):
        """Extrai o array JavaScript do arquivo"""
        try:
            with open(self.input_file, 'r', encoding='utf-8') as f:
                content = f.read()

            # Encontrar o array data
            match = re.search(r'const data = \[(.*?)\];', content, re.DOTALL)
            if not match:
                raise ValueError("Não foi encontrado 'const data' no arquivo")

            array_content = match.group(1)

            # Converter JavaScript para JSON válido
            # Remover comentários de linha
            json_content = re.sub(r'//.*?$', '', array_content, flags=re.MULTILINE)
            
            # Remover comentários de bloco
            json_content = re.sub(r'/\*.*?\*/', '', json_content, flags=re.DOTALL)

            # Adicionar aspas nas chaves (converter JS object para JSON)
            # Padrão: palavra seguida de dois pontos
            json_content = re.sub(r'(\w+):', r'"\1":', json_content)
            
            # Corrigir aspas simples para duplas em strings
            # Primeiro, proteger aspas simples dentro de strings já com aspas duplas
            json_content = re.sub(r"'([^']*)'", lambda m: '"' + m.group(1).replace('"', '\\"') + '"', json_content)

            # Adicionar colchetes para formar array JSON
            json_str = f'[{json_content}]'

            # Parsear JSON
            items = json.loads(json_str)
            logger.info(f"✓ Carregados {len(items)} itens do arquivo")
            return items

        except FileNotFoundError:
            logger.error(f"Arquivo não encontrado: {self.input_file}")
            sys.exit(1)
        except json.JSONDecodeError as e:
            logger.error(f"Erro ao parsear JSON: {e}")
            logger.error(f"Conteúdo problemático (primeiros 500 chars): {json_str[:500]}")
            sys.exit(1)
        except Exception as e:
            logger.error(f"Erro inesperado: {e}")
            sys.exit(1)

    def search_wikimedia(self, scientific_name):
        """Busca imagem na Wikimedia Commons"""
        try:
            # Construir URL para Wikimedia Commons API
            url = "https://commons.wikimedia.org/w/api.php"
            params = {
                'action': 'query',
                'format': 'json',
                'list': 'search',
                'srsearch': scientific_name,
                'srnamespace': '6',  # File namespace
                'srlimit': '5',
                'srprop': 'url'
            }

            response = self.session.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

            if data.get('query', {}).get('search'):
                result = data['query']['search'][0]
                file_title = result['title'].replace('File:', '')

                # Buscar URL da imagem
                image_url = self._get_wikimedia_image_url(file_title)
                if image_url:
                    logger.info(f"  ✓ Wikimedia: {scientific_name}")
                    return {
                        'source': 'wikimedia',
                        'url': image_url,
                        'title': result['title']
                    }

            return None

        except requests.RequestException as e:
            logger.warning(f"  ✗ Erro Wikimedia para {scientific_name}: {e}")
            return None

    def _get_wikimedia_image_url(self, file_title):
        """Obtém URL direto da imagem no Wikimedia"""
        try:
            url = "https://commons.wikimedia.org/w/api.php"
            params = {
                'action': 'query',
                'format': 'json',
                'titles': f'File:{file_title}',
                'prop': 'imageinfo',
                'iiprop': 'url'
            }

            response = self.session.get(url, params=params, timeout=10)
            data = response.json()

            pages = data.get('query', {}).get('pages', {})
            for page_id, page_data in pages.items():
                if 'imageinfo' in page_data:
                    return page_data['imageinfo'][0]['url']

            return None
        except Exception as e:
            logger.warning(f"  ✗ Erro ao obter URL Wikimedia: {e}")
            return None

    def search_tela_botanica(self, scientific_name):
        """Fallback: Busca na API Flora Tela Botânica (Flora Brasilis)"""
        try:
            # API Tela Botânica - não requer API key
            url = "https://api.tela-botanica.org/service:eflore:0.2/bdtfx/recherche/execute"
            params = {
                'masque.ns_nom': scientific_name,
                'format': 'json'
            }

            response = self.session.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

            if data.get('resultats'):
                resultado = data['resultats'][0]
                num_nom = resultado.get('num_nom')

                # Buscar imagens associadas
                image_url = self._get_tela_botanica_image(num_nom)
                if image_url:
                    logger.info(f"  ✓ Tela Botânica: {scientific_name}")
                    return {
                        'source': 'tela_botanica',
                        'url': image_url,
                        'num_nom': num_nom
                    }

            return None

        except Exception as e:
            logger.warning(f"  ✗ Erro Tela Botânica para {scientific_name}: {e}")
            return None

    def _get_tela_botanica_image(self, num_nom):
        """Obtém imagem da Tela Botânica"""
        try:
            url = f"https://api.tela-botanica.org/service:bdtfx:synchro_eflore:illustrations/{num_nom}"
            response = self.session.get(url, timeout=10)

            if response.status_code == 200:
                data = response.json()
                if data and len(data) > 0:
                    return data[0].get('url')

            return None
        except Exception as e:
            logger.warning(f"  ✗ Erro ao buscar imagem Tela Botânica: {e}")
            return None

    def search_inaturalist(self, scientific_name):
        """Fallback alternativo: iNaturalist API (público, sem API key)"""
        try:
            url = "https://api.inaturalist.org/v1/taxa/autocomplete"
            params = {
                'q': scientific_name,
                'per_page': '1'
            }

            response = self.session.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

            if data.get('results'):
                taxon = data['results'][0]
                if taxon.get('default_photo'):
                    photo_url = taxon['default_photo'].get('medium_url')
                    if photo_url:
                        logger.info(f"  ✓ iNaturalist: {scientific_name}")
                        return {
                            'source': 'inaturalist',
                            'url': photo_url,
                            'taxon_id': taxon.get('id')
                        }

            return None

        except Exception as e:
            logger.warning(f"  ✗ Erro iNaturalist para {scientific_name}: {e}")
            return None

    def find_image(self, scientific_name, item_id):
        """Procura imagem com fallbacks"""
        logger.info(f"[{item_id}] Procurando: {scientific_name}")

        # 1. Tentar Wikimedia primeiro
        result = self.search_wikimedia(scientific_name)
        if result:
            self.images_found += 1
            return result

        # 2. Fallback: Tela Botânica
        result = self.search_tela_botanica(scientific_name)
        if result:
            self.images_found += 1
            return result

        # 3. Fallback: iNaturalist
        result = self.search_inaturalist(scientific_name)
        if result:
            self.images_found += 1
            return result

        logger.warning(f"  ✗ Nenhuma imagem encontrada para {scientific_name}")
        self.images_failed += 1
        return None

    def update_items(self, items):
        """Atualiza items com URLs de imagens"""
        for item in items:
            scientific_name = item.get('scientificName')
            if scientific_name:
                image_data = self.find_image(scientific_name, item.get('id'))
                if image_data:
                    item['imageUrl'] = image_data['url']
                    item['imageSource'] = image_data['source']
                    item['imageUpdated'] = datetime.now().isoformat()

        return items

    def save_updated_file(self, items):
        """Salva items atualizados em arquivo JavaScript"""
        try:
            # Converter para JSON formatado com indentação de 2 espaços
            json_content = json.dumps(items, ensure_ascii=False, indent=2)

            # Criar conteúdo JavaScript (mantém compatibilidade com data.js)
            js_content = f"""const allItems = {json_content};

export default allItems;
"""

            with open(self.output_file, 'w', encoding='utf-8') as f:
                f.write(js_content)

            logger.info(f"✓ Arquivo atualizado salvo em: {self.output_file}")
            logger.info(f"  Total de itens: {len(items)}")

        except Exception as e:
            logger.error(f"Erro ao salvar arquivo: {e}")
            sys.exit(1)

    def print_summary(self):
        """Exibe resumo da execução"""
        total = self.images_found + self.images_failed
        success_rate = (self.images_found / total * 100) if total > 0 else 0

        print(f"""
╔════════════════════════════════════════╗
║         RESUMO DA EXECUÇÃO             ║
╠════════════════════════════════════════╣
║ Total processado:    {self.images_found + self.images_failed:>20} ║
║ Imagens encontradas: {self.images_found:>20} ║
║ Falhas:              {self.images_failed:>20} ║
║ Taxa de sucesso:     {success_rate:>19.1f}% ║
╚════════════════════════════════════════╝
        """)

    def run(self):
        """Executa o pipeline completo"""
        logger.info("🌿 Iniciando busca de imagens de plantas...")

        # 1. Carregar dados
        items = self.extract_js_data()

        # 2. Buscar imagens
        logger.info("🔍 Buscando imagens...")
        items_updated = self.update_items(items)

        # 3. Salvar arquivo
        logger.info("💾 Salvando arquivo atualizado...")
        self.save_updated_file(items_updated)

        # 4. Exibir resumo
        self.print_summary()

        logger.info("✨ Processo concluído!")


def check_dependencies():
    """Verifica se as dependências estão instaladas"""
    try:
        import requests
        return True
    except ImportError:
        logger.error("❌ Erro: Biblioteca 'requests' não encontrada!")
        logger.error("   Instale com: pip install requests")
        return False


def main():
    # Verificar dependências
    if not check_dependencies():
        sys.exit(1)
    
    # Configurar argumentos
    input_file = sys.argv[1] if len(sys.argv) > 1 else 'src/components/Library/data.js'
    output_file = sys.argv[2] if len(sys.argv) > 2 else 'src/components/Library/data_updated.js'

    # Verificar se arquivo de entrada existe
    if not os.path.exists(input_file):
        logger.error(f"❌ Arquivo não encontrado: {input_file}")
        logger.info("   Uso: python plant_image.py [input_file] [output_file]")
        sys.exit(1)

    # Executar
    logger.info(f"📂 Arquivo de entrada: {input_file}")
    logger.info(f"📂 Arquivo de saída: {output_file}\n")
    
    finder = PlantImageFinder(input_file, output_file)
    finder.run()


if __name__ == '__main__':
    main()
