const allItems = [
  {
    "id": "F1",
    "name": "Açaí",
    "scientificName": "Euterpe oleracea",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#6532FF",
    "nutritionScore": 9.5,
    "commercialValue": "HIGH",
    "description": "Pequena drupa redonda, roxo-preta, da floresta Amazônica. Superfood com alto teor de antioxidantes, vitamina C e ômega-3. Fruta \"versátil\": polpa para açaí bowl, sucos, sorvetes",
    "detailedInfo": "O açaí é uma das frutas mais nutritivas do mundo, com polifenóis e antioxidantes que excedem a maioria das frutas convencionais. Sua produção sustentável na Amazônia contribui para conservação florestal.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Comercial",
      "Medicinal",
      "Cosmética"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "8-15m",
    "climate": "Tropical húmido",
    "soilType": "Várzea, terra firme",
    "certification": [
      "Orgânico",
      "Fair Trade"
    ],
    "keywords": [
      "superfood",
      "antioxidante",
      "amazônico",
      "polpa"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Euterpe_oleracea_MHNT.BOT.2008.1.39.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:20.848185"
  },
  {
    "id": "F2",
    "name": "Cupuaçu",
    "scientificName": "Theobroma grandiflorum",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#8B4513",
    "nutritionScore": 8.2,
    "commercialValue": "HIGH",
    "description": "Fruta amazônica relacionada ao cacau. Polpa ácida-doce, aromática. Excelente para sucos, sorvetes, doces, chocolate amazônico. Madeira útil",
    "detailedInfo": "Fruto lenhoso com casca espessa marrom, contendo polpa branca cremosa muito aromática. Altamente versátil em indústria alimentícia e cosmética.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Industrial",
      "Cosmética"
    ],
    "harvestMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "spacing": "8-10m",
    "climate": "Tropical húmido",
    "soilType": "Bem drenado, rico em matéria orgânica",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "cacau",
      "amazônico",
      "aromático",
      "chocolate"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Theobroma_grandiflorum%2C_source_of_Cupulate_Chocolate_%289906147393%29.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:22.040328"
  },
  {
    "id": "F3",
    "name": "Jabuticaba",
    "scientificName": "Plinia cauliflora",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#4B0082",
    "nutritionScore": 7.8,
    "commercialValue": "MEDIUM",
    "description": "Fruta que cresce diretamente no tronco. Doce e um pouco azeda. Importante para aves silvestres. Polpa para geleias, doces, vinhos artesanais",
    "detailedInfo": "Árvore caducifólia com frutificação caulinar (caulifloria). Frutos pequenos de 2-3cm com polpa gelatinosa doce. Importante para avifauna local.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Ornamental",
      "Medicinal"
    ],
    "harvestMonths": [
      10,
      11,
      12
    ],
    "spacing": "6-8m",
    "climate": "Subtropical a tropical",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "nativa",
      "geléia",
      "silvestre",
      "atlântica"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Plinia_cauliflora_2.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:22.956464"
  },
  {
    "id": "F4",
    "name": "Caju",
    "scientificName": "Anacardium occidentale",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FF6347",
    "nutritionScore": 8.1,
    "commercialValue": "HIGH",
    "description": "Fruta vermelha-amarela com castanha em forma de rim. Pseudofruto sucoso. Suco, polpa seca, castanha roasted, mel de caju",
    "detailedInfo": "Pseudofruto com dupla \"utilidade\": polpa comestível e castanha com óleo valioso. A castanha requer processamento especial para neutralizar óleo cáustico.",
    "region": "Nordeste",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Industrial",
      "Comercial"
    ],
    "harvestMonths": [
      9,
      10,
      11,
      12
    ],
    "spacing": "7-10m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso a argiloso",
    "certification": [
      "Nativa",
      "Fair Trade"
    ],
    "keywords": [
      "castanha",
      "nordestino",
      "comercial",
      "polpa"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/24/Anacardium_occidentale_from_Margarita_island.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:23.877964"
  },
  {
    "id": "F5",
    "name": "Maracujá",
    "scientificName": "Passiflora edulis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#9370DB",
    "nutritionScore": 7.5,
    "commercialValue": "HIGH",
    "description": "Fruta da paixão com polpa aromática. Trepadeira cultivada em todo Brasil. Alto valor comercial. Sucos, polpa congelada, doces",
    "detailedInfo": "Liana semi-lenhosa com flores exóticas e frutos com epicarpo coriáceo. Extremamente \"versátil\": suco, geleia, sorbete, bebidas.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "3-4m",
    "climate": "Subtropical a tropical",
    "soilType": "Bem drenado, mulch recomendado",
    "certification": [
      "Nativa",
      "Orgânico"
    ],
    "keywords": [
      "trepadeira",
      "paixão",
      "comercial",
      "suco"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Passionfruit_and_cross_section.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:24.452449"
  },
  {
    "id": "F6",
    "name": "Pitanga",
    "scientificName": "Eugenia uniflora",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#DC143C",
    "nutritionScore": 8.3,
    "commercialValue": "MEDIUM",
    "description": "Pequena fruta tipo cereja vermelha. Forte atrativo para aves. Polpa suculenta. Vitamina C concentrada",
    "detailedInfo": "Arbusto caducifólio muito produtivo com frutos em formato de 8 lóbulos. Extraordinário para biodiversidade e nutrição humana.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Ornamental",
      "Medicinal",
      "Melífero"
    ],
    "harvestMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "spacing": "4-5m",
    "climate": "Subtropical",
    "soilType": "Profundo, bem estruturado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cereja",
      "nativa",
      "avifauna",
      "vitamina"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pitanga-eugenia-uniflora.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:25.414001"
  },
  {
    "id": "F7",
    "name": "Graviola",
    "scientificName": "Annona muricata",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#32CD32",
    "nutritionScore": 8.4,
    "commercialValue": "MEDIUM",
    "description": "Fruta grande verde com polpa branca e fibrosa. Sucos, vitaminas, sorvetes. Propriedades medicinais em estudo científico",
    "detailedInfo": "Árvore pequena com fruto grande verde de superfície irregular espinhenta. Polpa cremosa branca muito aromática. Propriedades anti-cancerígenas sob investigação.",
    "region": "Norte",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética"
    ],
    "harvestMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "spacing": "8-10m",
    "climate": "Tropical húmido",
    "soilType": "Bem drenado, rico em matéria orgânica",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "sorvete",
      "medicinal",
      "amazônico",
      "suco"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Soursop%2C_Annona_muricata.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:26.028857"
  },
  {
    "id": "F8",
    "name": "Acerola",
    "scientificName": "Malpighia emarginata",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FF4500",
    "nutritionScore": 9.7,
    "commercialValue": "HIGH",
    "description": "Cereja vermelha pequena. Campeã em vitamina C (até 4600mg/100g). Alto valor comercial. Sucos, polpa congelada, pó",
    "detailedInfo": "Arbusto com frutos diminutos vermelhos contendo concentração de vitamina C 20x superior às laranjas. Fundamental para suplementação natural.",
    "region": "Nordeste",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "spacing": "3-4m",
    "climate": "Tropical semiárido",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa",
      "Comercial"
    ],
    "keywords": [
      "vitamina",
      "superfood",
      "nordestino",
      "comercial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Malpighia_glabra_blossom_and_fruit.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:27.257772"
  },
  {
    "id": "F9",
    "name": "Guaraná",
    "scientificName": "Paullinia cupana",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#8B0000",
    "nutritionScore": 8.0,
    "commercialValue": "HIGH",
    "description": "Fruta energética amazônica. Sementes com cafeína natural (até 6%). Bebida tradicional indígena. Pó energético",
    "detailedInfo": "Trepadeira lenhosa com sementes em fruto tipo cápsula contendo cafeína natural (2-6x mais que café). Bebida tradicional indígena, agora commodity global.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Energética",
      "Medicinal",
      "Comercial"
    ],
    "harvestMonths": [
      8,
      9,
      10,
      11
    ],
    "spacing": "5-6m",
    "climate": "Tropical húmido",
    "soilType": "Várzea ou terra firme",
    "certification": [
      "Nativa",
      "Fair Trade"
    ],
    "keywords": [
      "energia",
      "cafeína",
      "indígena",
      "amazônico"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Guarana_-_Paullinia_cupana.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:28.281576"
  },
  {
    "id": "F10",
    "name": "Pequi",
    "scientificName": "Caryocar brasiliense",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FF8C00",
    "nutritionScore": 8.5,
    "commercialValue": "MEDIUM",
    "description": "Sabor e aroma forte e único do Cerrado. Polpa oleosa com caroço. Óleo comestível valioso. Valor cultural indígena",
    "detailedInfo": "Árvore média do Cerrado com fruto aromaticamente intenso contendo polpa oleosa e caroço duro. Óleo tradicional com valor culinário e medicinal.",
    "region": "Cerrado",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética",
      "Culinária"
    ],
    "harvestMonths": [
      10,
      11,
      12
    ],
    "spacing": "8-12m",
    "climate": "Tropical semiárido (Cerrado)",
    "soilType": "Profundo, aerado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cerrado",
      "óleo",
      "cultural",
      "aromático"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/78/Pequi01.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:29.306232"
  },
  {
    "id": "F11",
    "name": "Buriti",
    "scientificName": "Mauritia flexuosa",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFA500",
    "nutritionScore": 8.6,
    "commercialValue": "MEDIUM",
    "description": "Palmeira frutífera. Rico em vitamina A (carotenoides). Polpa alaranjada. Importante culturalmente no Nordeste",
    "detailedInfo": "Palmeira de grande porte com infrutescência densamente agregada. Polpa alaranjada em frutos drupáceos muito nutritivos em carotenoides.",
    "region": "Cerrado/Amazônia",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética"
    ],
    "harvestMonths": [
      8,
      9,
      10
    ],
    "spacing": "10-15m",
    "climate": "Tropical húmido",
    "soilType": "Solos mal drenados, brejos",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "palmeira",
      "caroteno",
      "nordestino",
      "vitamina"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/Mauritia_flexuosa_MHNT.BOT.2005.0.974.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:29.873387"
  },
  {
    "id": "F12",
    "name": "Camu-camu",
    "scientificName": "Myrciaria dubia",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#DC143C",
    "nutritionScore": 9.8,
    "commercialValue": "HIGH",
    "description": "Superfruit amazônico. Maior concentração de vitamina C do mundo (até 6000mg/100g). Polpa ácida para sucos e suplementos",
    "detailedInfo": "Arbusto ribeirinho com frutos pequenos vermelhos. Contém 50-60x mais vitamina C que laranja. Crescente demanda internacional.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Comercial",
      "Suplemento"
    ],
    "harvestMonths": [
      11,
      12,
      1,
      2
    ],
    "spacing": "3-4m",
    "climate": "Tropical húmido",
    "soilType": "Várzea, solos inundáveis",
    "certification": [
      "Nativa",
      "Orgânico"
    ],
    "keywords": [
      "vitamina",
      "superfood",
      "amazônico",
      "exportação"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Camu-camu.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:30.840007"
  },
  {
    "id": "F13",
    "name": "Araçá",
    "scientificName": "Psidium cattleianum",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFD700",
    "nutritionScore": 7.9,
    "commercialValue": "LOW",
    "description": "Fruta nativa tipo goiaba pequena. Sabor doce-ácido único. Amarela ou vermelha. Geleias, sucos, consumo in natura",
    "detailedInfo": "Arbusto da Mata Atlântica com frutos aromáticos. Rico em vitamina C e compostos fenólicos. Potencial para cultivo comercial.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Ornamental",
      "Medicinal"
    ],
    "harvestMonths": [
      2,
      3,
      4
    ],
    "spacing": "4-5m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "goiaba",
      "nativa",
      "aromática",
      "geléia"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/97/Psidium_cattleianum_fruit.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:31.966333"
  },
  {
    "id": "F14",
    "name": "Cambuci",
    "scientificName": "Campomanesia phaea",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#90EE90",
    "nutritionScore": 8.1,
    "commercialValue": "MEDIUM",
    "description": "Fruta endêmica Mata Atlântica. Formato de disco voador. Sabor cítrico único. Crescente valorização gastronômica",
    "detailedInfo": "Árvore ameaçada com frutos verdes achatados. Aroma intenso cítrico-floral. Redescoberta pela gastronomia paulista.",
    "region": "Mata Atlântica (SP)",
    "uses": [
      "Alimentar",
      "Gastronômica",
      "Conservação"
    ],
    "harvestMonths": [
      1,
      2,
      3
    ],
    "spacing": "6-8m",
    "climate": "Subtropical",
    "soilType": "Rico em matéria orgânica",
    "certification": [
      "Nativa",
      "Ameaçada"
    ],
    "keywords": [
      "endêmica",
      "gourmet",
      "cítrico",
      "rara"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/78/Webysther_20190219234306_-_Fruta_do_cambuci_%28Campomanesia_phaea%29_verde.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:32.887894"
  },
  {
    "id": "F15",
    "name": "Uvaia",
    "scientificName": "Eugenia pyriformis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFD700",
    "nutritionScore": 7.7,
    "commercialValue": "LOW",
    "description": "Fruta nativa amarela. Sabor doce-ácido delicado. Polpa suculenta. Consumo fresco, geleias, licores",
    "detailedInfo": "Árvore pequena da Mata Atlântica. Frutos amarelos em formato de pera. Alta perecibilidade limita comercialização.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Ornamental"
    ],
    "harvestMonths": [
      10,
      11,
      12
    ],
    "spacing": "5-6m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "amarela",
      "doce",
      "nativa",
      "delicada"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/37/Uvaia_Fruto1.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:33.709581"
  },
  {
    "id": "F16",
    "name": "Bacuri",
    "scientificName": "Platonia insignis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFA500",
    "nutritionScore": 8.3,
    "commercialValue": "MEDIUM",
    "description": "Fruta amazônica com casca dura. Polpa branca cremosa e ácida. Sorvetes, sucos, doces. Óleo medicinal da semente",
    "detailedInfo": "Árvore de grande porte. Fruto com casca espessa e polpa aromática. Crescimento lento mas alta produtividade.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Medicinal",
      "Cosmética"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4
    ],
    "spacing": "10-12m",
    "climate": "Tropical húmido",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "amazônico",
      "cremosa",
      "óleo",
      "medicinal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Platonia_insignis_MHNT.BOT.2010.6.50.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:34.630241"
  },
  {
    "id": "H1",
    "name": "Boldo",
    "scientificName": "Peumus boldus",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#228B22",
    "efficacyScore": 8.5,
    "commercialValue": "MEDIUM",
    "description": "Planta medicinal do Chile. Muito popular no Brasil. Chás para digestão, fígado. Folhas aromáticas. Fitoterápico consolidado",
    "detailedInfo": "Arbusto frondoso com folhas aromáticas utilizadas em chás para estimular digestão e função hepática. Consolidado no mercado fitoterápico brasileiro.",
    "region": "Sul",
    "uses": [
      "Medicinal",
      "Fitoterápico",
      "Culinária"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "1.5-2m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Fitoterápico"
    ],
    "keywords": [
      "digestão",
      "fígado",
      "medicinal",
      "chá"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Peumus_boldus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-104.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:35.654401"
  },
  {
    "id": "H2",
    "name": "Carqueja",
    "scientificName": "Baccharis trimera",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#3CB371",
    "efficacyScore": 8.0,
    "commercialValue": "LOW",
    "description": "Arbusto medicinal nativo. Digestão, anti-inflamatória. Tradicional culinária gaúcha. Chás, bebidas",
    "detailedInfo": "Arbusto nativo sul-brasileiro com propriedades anti-inflamatórias e digestivas bem documentadas. Essencial na culinária gaúcha tradicional.",
    "region": "Sul/Sudeste",
    "uses": [
      "Medicinal",
      "Fitoterápico",
      "Culinária"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "1-1.5m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "gaúcho",
      "digestão",
      "nativo",
      "antiinflamatório"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/45/Baccharis_trimera.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:36.637955"
  },
  {
    "id": "H3",
    "name": "Pata-de-vaca",
    "scientificName": "Bauhinia forficata",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#2E8B57",
    "efficacyScore": 7.5,
    "commercialValue": "LOW",
    "description": "Planta nativa. Folhas com formato de pata de vaca. Tradicional para diabetes. Plantas ornamentais com flores rosa",
    "detailedInfo": "Arbusto nativo com folhas bilobadas no ápice. Tradicional na medicina popular para regulação de glicemia. Flores rosas vistosas.",
    "region": "Mata Atlântica",
    "uses": [
      "Medicinal",
      "Ornamental",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "3-4m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "diabetes",
      "ornamental",
      "nativo",
      "flores"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bauhinia_forficata_01.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:37.599637"
  },
  {
    "id": "H4",
    "name": "Quebra-pedra",
    "scientificName": "Phyllanthus niruri",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#8FBC8F",
    "efficacyScore": 7.8,
    "commercialValue": "LOW",
    "description": "Planta medicinal nativa herbácea. Tradicional para cálculos renais. Chás, xaropes. Conhecimento popular consolidado",
    "detailedInfo": "Herbácea pequena nativa com folhas pequenas alternadas. Tradicionalmente usada em medicine popular para problemas urinários e renais.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.3-0.5m",
    "climate": "Tropical",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "rins",
      "cálculo",
      "medicinal",
      "nativo"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Quebra-Pedra._Phyllanthus_niruri.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:38.520985"
  },
  {
    "id": "H5",
    "name": "Alecrim",
    "scientificName": "Rosmarinus officinalis",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#228B22",
    "efficacyScore": 8.2,
    "commercialValue": "MEDIUM",
    "description": "Erva aromática culinárias mediterrânea. Introduzida, muito cultivada Brasil. Condimento e medicinal. Chás, óleos essenciais",
    "detailedInfo": "Arbusto perene aromático com folhas agulhadas. Versátil em culinária e medicina. Óleos essenciais com propriedades anti-inflamatórias e circulatórias.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Medicinal",
      "Cosmética",
      "Aromática"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.6-1m",
    "climate": "Temperado a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Introduzido"
    ],
    "keywords": [
      "aromoático",
      "culinárias",
      "mediterrânea",
      "medicinal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rosmarinus_officinalis133095382.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:39.236903"
  },
  {
    "id": "H6",
    "name": "Manjericão",
    "scientificName": "Ocimum basilicum",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#32CD32",
    "efficacyScore": 7.5,
    "commercialValue": "MEDIUM",
    "description": "Erva aromática culinária italiana. Folhas frescas em molho, saladas. Medicinal digestiva. Muito cultivada Brasil casas",
    "detailedInfo": "Herbácea anual aromática com folhas verdes brilhantes. Essencial em culinária mediterrânea. Propriedades antioxidantes e digestivas.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Medicinal",
      "Aromática"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.3-0.5m",
    "climate": "Tropical a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "pesto",
      "italiano",
      "culinária",
      "aromático"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/32/Ocimum_Basilicum_leaf_lighted_by_the_left.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:40.261144"
  },
  {
    "id": "H7",
    "name": "Hortelã",
    "scientificName": "Mentha spp.",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#90EE90",
    "efficacyScore": 8.0,
    "commercialValue": "MEDIUM",
    "description": "Erva aromática versátil. Chás, bebidas frias, doces. Medicinal digestiva. Muito popular Brasil. Cultivo fácil",
    "detailedInfo": "Herbácea perene aromática muito produtiva. Extraordinariamente versátil em culinária, bebidas e medicina. Fácil cultivo e rápida regeneração.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Medicinal",
      "Aromática",
      "Cosmética"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.5-1m",
    "climate": "Temperado a tropical",
    "soilType": "Variável, prefere úmido",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "chá",
      "digestão",
      "aromática",
      "popular"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Kr%C3%A4uterbutter1.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:41.183839"
  },
  {
    "id": "H8",
    "name": "Gengibre",
    "scientificName": "Zingiber officinale",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#FFA07A",
    "efficacyScore": 8.5,
    "commercialValue": "HIGH",
    "description": "Raiz aromática introduzida. Cultivada Sudeste (SP). Culinária asiática. Chás medicinais. Condimento versátil",
    "detailedInfo": "Rizoma aromático com propriedades anti-inflamatórias, digestivas e anti-eméticas bem comprovadas. Fundamental em cuisines asiáticas.",
    "region": "Sudeste",
    "uses": [
      "Culinária",
      "Medicinal",
      "Cosmética"
    ],
    "harvestMonths": [
      5,
      6,
      7,
      8
    ],
    "spacing": "0.3-0.4m",
    "climate": "Tropical",
    "soilType": "Bem drenado, mulch recomendado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "anti-inflamatório",
      "digestão",
      "asiático",
      "comercial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Ginger_Plant_vs.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:42.104698"
  },
  {
    "id": "H9",
    "name": "Açafrão-da-terra",
    "scientificName": "Curcuma longa",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#FFD700",
    "efficacyScore": 9.0,
    "commercialValue": "HIGH",
    "description": "Cúrcuma, raiz dourada. Introduzida, medicinal anti-inflamatória. Medicina Ayurvédica. Muito usada culinária indiana",
    "detailedInfo": "Rizoma laranja-ouro contendo curcumina com extraordinárias propriedades anti-inflamatórias. Central na medicina Ayurvédica e culinária indiana.",
    "region": "Sudeste",
    "uses": [
      "Culinária",
      "Medicinal",
      "Cosmética",
      "Anti-inflamatória"
    ],
    "harvestMonths": [
      5,
      6,
      7,
      8
    ],
    "spacing": "0.3-0.4m",
    "climate": "Tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "curcumina",
      "ayurvedá",
      "indianos",
      "antiinflamatório"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Curcuma_longa_roots.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:43.027023"
  },
  {
    "id": "H10",
    "name": "Capim-limão",
    "scientificName": "Cymbopogon citratus",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#90EE90",
    "efficacyScore": 7.8,
    "commercialValue": "MEDIUM",
    "description": "Erva aromática cítrica. Chás calmantes, culinária asiática. Repelente natural de insetos. Óleo essencial",
    "detailedInfo": "Gramínea perene aromática com folhas longas. Propriedades calmantes, digestivas e antimicrobianas. Muito cultivada em hortas caseiras.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Culinária",
      "Aromática",
      "Repelente"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.5-1m",
    "climate": "Tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "calmante",
      "chá",
      "cítrico",
      "repelente"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/YosriNov04Pokok_Serai.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:44.051756"
  },
  {
    "id": "H11",
    "name": "Erva-cidreira",
    "scientificName": "Melissa officinalis",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#98FB98",
    "efficacyScore": 8.3,
    "commercialValue": "MEDIUM",
    "description": "Melissa, erva calmante. Chás para ansiedade e insônia. Aroma de limão. Propriedades antivirais",
    "detailedInfo": "Herbácea perene com folhas aromáticas. Comprovada eficácia em redução de ansiedade e melhora do sono. Óleo essencial valioso.",
    "region": "Sul/Sudeste",
    "uses": [
      "Medicinal",
      "Aromática",
      "Cosmética"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.4-0.6m",
    "climate": "Temperado a subtropical",
    "soilType": "Rico em matéria orgânica",
    "certification": [
      "Orgânico",
      "Fitoterápico"
    ],
    "keywords": [
      "calmante",
      "ansiedade",
      "melissa",
      "sono"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Melissa_officinalis_1.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:44.639792"
  },
  {
    "id": "H12",
    "name": "Camomila",
    "scientificName": "Matricaria chamomilla",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#FFFACD",
    "efficacyScore": 8.5,
    "commercialValue": "HIGH",
    "description": "Flor medicinal clássica. Chás calmantes e digestivos. Anti-inflamatória. Cosmética para pele sensível",
    "detailedInfo": "Herbácea anual com flores brancas e amarelas. Propriedades calmantes, anti-inflamatórias e cicatrizantes bem documentadas.",
    "region": "Sul",
    "uses": [
      "Medicinal",
      "Cosmética",
      "Aromática"
    ],
    "harvestMonths": [
      9,
      10,
      11,
      12
    ],
    "spacing": "0.2-0.3m",
    "climate": "Temperado",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico",
      "Fitoterápico"
    ],
    "keywords": [
      "calmante",
      "digestão",
      "cosmética",
      "flores"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Chamomile%40original_size.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:45.690208"
  },
  {
    "id": "H13",
    "name": "Sálvia",
    "scientificName": "Salvia officinalis",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#9370DB",
    "efficacyScore": 8.0,
    "commercialValue": "MEDIUM",
    "description": "Erva aromática medicinal. Propriedades antioxidantes e anti-inflamatórias. Culinária mediterrânea. Chás terapêuticos",
    "detailedInfo": "Arbusto perene com folhas aveludadas. Usado tradicionalmente para memória e cognição. Óleo essencial com propriedades antimicrobianas.",
    "region": "Sul/Sudeste",
    "uses": [
      "Medicinal",
      "Culinária",
      "Aromática"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.4-0.6m",
    "climate": "Temperado",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "memória",
      "antioxidante",
      "mediterrânea",
      "aromática"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Salvia_officinalis_in_Cardaillac_%281%29.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:46.611437"
  },
  {
    "id": "F17",
    "name": "Laranja",
    "scientificName": "Citrus sinensis",
    "type": "FRUITS",
    "origin": "INTRODUCED",
    "color": "#FF8C00",
    "nutritionScore": 8.0,
    "commercialValue": "HIGH",
    "description": "Cítrica introduzida, naturalizada. Brasil maior produtor/exportador mundial de suco. Laranja Pêra, Valencia, outras variedades",
    "detailedInfo": "Arbusto frutífero muito cultivado em São Paulo e Bahia. Brasil produz 30% do suco de laranja mundial. Variedades distintas para consumo fresco e suco.",
    "region": "Sudeste/Sul",
    "uses": [
      "Alimentar",
      "Industrial",
      "Comercial"
    ],
    "harvestMonths": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "spacing": "6-8m",
    "climate": "Subtropical",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "suco",
      "comercial",
      "cítrica",
      "exportação"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/df/Citrus-sinensis-fruto.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:47.840678"
  },
  {
    "id": "F18",
    "name": "Limão",
    "scientificName": "Citrus limon",
    "type": "FRUITS",
    "origin": "INTRODUCED",
    "color": "#FFD700",
    "nutritionScore": 7.5,
    "commercialValue": "HIGH",
    "description": "Fruta cítrica ácida essencial. Culinária brasileira fundamental. Suco, tempero, conservante natural",
    "detailedInfo": "Fruto cítrico elíptico amarelo com polpa ácida (2.5-3.5% ácido cítrico). Essencial em culinária luso-brasileira e conservação de alimentos.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Industrial",
      "Medicinal",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "4-6m",
    "climate": "Subtropical a tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "cítrica",
      "suco",
      "tempero",
      "brasileiro"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lemon.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:48.455164"
  },
  {
    "id": "F19",
    "name": "Tangerina",
    "scientificName": "Citrus reticulata",
    "type": "FRUITS",
    "origin": "INTRODUCED",
    "color": "#FF8C00",
    "nutritionScore": 7.8,
    "commercialValue": "MEDIUM",
    "description": "Fruta cítrica facilmente descascável. Muito consumida Brasil. Suco, fruta fresca. Pouco amarga",
    "detailedInfo": "Fruto cítrico menor que laranja com casca fina facilmente descascável. Polpa adocicada com pouca acidez. Muito consumida in natura no Brasil.",
    "region": "Sudeste/Sul",
    "uses": [
      "Alimentar",
      "Industrial",
      "Comercial"
    ],
    "harvestMonths": [
      4,
      5,
      6,
      7
    ],
    "spacing": "4-6m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "doce",
      "cítrica",
      "descascável",
      "brasileira"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:49.580790"
  },
  {
    "id": "V1",
    "name": "Alface",
    "scientificName": "Lactuca sativa",
    "type": "VEGETABLES",
    "origin": "INTRODUCED",
    "color": "#90EE90",
    "nutritionScore": 6.5,
    "commercialValue": "HIGH",
    "description": "Hortaliça folhosa mais consumida mundo. Brasil cultiva muitas \"variedades\": crespa, lisa, roxa, romana. \"Produção\": ~87 mil ha (49,9%)",
    "detailedInfo": "Brassicácea folhosa com variedades distintas. Maior hortaliça folhosa cultivada Brasil. Crocante com folhas tenras.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.25-0.3m",
    "climate": "Temperado",
    "soilType": "Bem estruturado, rico em matéria orgânica",
    "certification": [
      "Comercial",
      "Orgânico"
    ],
    "keywords": [
      "salada",
      "folhosa",
      "comercial",
      "crocante"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Lactuca_sativa_%27Lollo_Bionda%27.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:50.202610"
  },
  {
    "id": "V2",
    "name": "Rúcula",
    "scientificName": "Eruca vesicaria",
    "type": "VEGETABLES",
    "origin": "INTRODUCED",
    "color": "#228B22",
    "nutritionScore": 7.2,
    "commercialValue": "MEDIUM",
    "description": "Folha pimentada e amarga. Segunda hortaliça folhosa mais plantada Brasil. Saladas gourmet, suco verde. ~40 mil ha (22,8%)",
    "detailedInfo": "Brassicácea com folhas deeply lobed e sabor picante distintivo. Muito nutritiva em vitaminas e minerais. Popular em culinária gourmet.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.15-0.2m",
    "climate": "Temperado",
    "soilType": "Bem drenado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "pimentada",
      "gourmet",
      "salada",
      "nutritiva"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Rucolabl%C3%BCte_Raureif-20241201-RM-110142.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:51.217476"
  },
  {
    "id": "V3",
    "name": "Couve",
    "scientificName": "Brassica oleracea var. acephala",
    "type": "VEGETABLES",
    "origin": "INTRODUCED",
    "color": "#008000",
    "nutritionScore": 8.5,
    "commercialValue": "MEDIUM",
    "description": "Couve-manteiga tradicional brasileira. Farofa, feijoada, suco verde. Muito nutritiva (ferro, cálcio). Cultural importante",
    "detailedInfo": "Brassicácea com folhas grandes verdes sem formar cabeça. Tradicional em culinária luso-brasileira. Exceptuamente nutritiva em cálcio e ferro.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Comercial",
      "Medicinal"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.5-0.7m",
    "climate": "Temperado a subtropical",
    "soilType": "Rico em matéria orgânica",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "feijoada",
      "nutritiva",
      "brasileira",
      "sucos"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/18/Brassica_oleracea_var._acephala_f._tricolor_%28Kamisu_City%2C_Ibaraki_Prefecture%29_02.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:52.349322"
  },
  {
    "id": "V4",
    "name": "Tomate",
    "scientificName": "Solanum lycopersicum",
    "type": "VEGETABLES",
    "origin": "INTRODUCED",
    "color": "#DC143C",
    "nutritionScore": 7.8,
    "commercialValue": "HIGH",
    "description": "Solanácea muito cultivada Brasil. Essencial culinária. \"Variedades\": cereja, italiano, caqui. Consumo altíssimo",
    "detailedInfo": "Solanácea com frutos vermelho-alaranjados. Altamente versátil em culinária brasileira. Variedades \"especializadas\": cereja (pequeno), italiano (oblongo).",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Industrial",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.5-1m",
    "climate": "Tropical a subtropical",
    "soilType": "Profundo, bem estruturado",
    "certification": [
      "Comercial",
      "Orgânico"
    ],
    "keywords": [
      "culinária",
      "vermelho",
      "versátil",
      "comercial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:53.369362"
  },
  {
    "id": "V5",
    "name": "Pimentão",
    "scientificName": "Capsicum annuum",
    "type": "VEGETABLES",
    "origin": "INTRODUCED",
    "color": "#FF6347",
    "nutritionScore": 7.5,
    "commercialValue": "HIGH",
    "description": "Solanácea. \"Cores\": vermelho, amarelo, verde. Culinária fundamental. Variedades doce. Muito produzido Brasil",
    "detailedInfo": "Solanácea com fruto grande campanulado colorido. Variedades adocicadas cultivadas comercialmente. Excelente fonte de vitamina C.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Industrial",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.6-1m",
    "climate": "Tropical a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Comercial",
      "Orgânico"
    ],
    "keywords": [
      "doce",
      "colorido",
      "vitamina",
      "comercial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:54.393862"
  },
  {
    "id": "R1",
    "name": "Mandioca",
    "scientificName": "Manihot esculenta",
    "type": "ROOTS",
    "origin": "NATIVE",
    "color": "#8B4513",
    "nutritionScore": 7.0,
    "commercialValue": "HIGH",
    "description": "Cassava, alimento básico brasileiro. Raiz amilácea branca/amarela. Farinha, polvilho, goma, tapioca. Consumo cultural altíssimo",
    "detailedInfo": "Arbusto com raízes tuberosas amiláceas. Fundamental na alimentação brasileira por séculos. Baixa demanda nutricional, adaptada a solos pobres.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Industrial",
      "Medicinal"
    ],
    "harvestMonths": [
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.8-1.5m",
    "climate": "Tropical",
    "soilType": "Variável, adaptada a pobres",
    "certification": [
      "Nativa",
      "Orgânico"
    ],
    "keywords": [
      "farinha",
      "tapioca",
      "brasileiro",
      "básico"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Manihot_esculenta_MHNT.BOT.2004.0.508.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:55.417211"
  },
  {
    "id": "R2",
    "name": "Batata-doce",
    "scientificName": "Ipomoea batatas",
    "type": "ROOTS",
    "origin": "NATIVE",
    "color": "#D2691E",
    "nutritionScore": 7.8,
    "commercialValue": "MEDIUM",
    "description": "Tubérculo doce naturam caramelizado. \"Variedades\": branca, roxa, amarela. Versátil, muito nutritiva. Consumo cultural importante",
    "detailedInfo": "Convolvulácea com tubérculos amiláceos naturalmente doces. Ricas em carotenoides, especialmente variedade roxa. Baixo índice glicêmico.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Industrial",
      "Medicinal"
    ],
    "harvestMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "spacing": "0.3-0.5m",
    "climate": "Tropical a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa",
      "Orgânico"
    ],
    "keywords": [
      "doce",
      "caroteno",
      "nutritiva",
      "saudável"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Ipomoea_batatas_%28Sweet_Potato%29_Flower.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:56.645944"
  },
  {
    "id": "R3",
    "name": "Cenoura",
    "scientificName": "Daucus carota subsp. sativus",
    "type": "ROOTS",
    "origin": "INTRODUCED",
    "color": "#FF8C00",
    "nutritionScore": 7.5,
    "commercialValue": "HIGH",
    "description": "Raiz alaranjada introduzida. Uma das hortaliças mais consumidas Brasil. Versátil crua, refogada, sucos",
    "detailedInfo": "Raiz subterrânea alaranjada com altos níveis de beta-caroteno. Versatilidade excepcional em \"culinária\": crua, cozida, suco.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Medicinal",
      "Industrial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.05-0.08m",
    "climate": "Temperado",
    "soilType": "Bem drenado, profundo",
    "certification": [
      "Comercial",
      "Orgânico"
    ],
    "keywords": [
      "alaranjada",
      "caroteno",
      "suco",
      "versatilidade"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/32/Carrots_of_many_colors.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:57.375937"
  },
  {
    "id": "R4",
    "name": "Beterraba",
    "scientificName": "Beta vulgaris",
    "type": "ROOTS",
    "origin": "INTRODUCED",
    "color": "#8B0000",
    "nutritionScore": 7.2,
    "commercialValue": "MEDIUM",
    "description": "Raiz vermelha, branca (manteiga), dourada. Hortaliça comum introduzida. Consumo cru em saladas, refogada, suco detox",
    "detailedInfo": "Raiz subterrânea com coloração vermelha, branca ou dourada. Rica em betalaina (pigmento antioxidante). Muito popular em dietas detox.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Medicinal",
      "Industrial"
    ],
    "harvestMonths": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "spacing": "0.08-0.1m",
    "climate": "Temperado",
    "soilType": "Bem estruturado",
    "certification": [
      "Orgânico"
    ],
    "keywords": [
      "detox",
      "antioxidante",
      "suco",
      "colorida"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Beta_vulgaris%2C_San_Francisco_farmers_market.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:58.387689"
  },
  {
    "id": "T1",
    "name": "Pau-brasil",
    "scientificName": "Caesalpinia echinata",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#8B0000",
    "commercialValue": "HISTORIC",
    "description": "Árvore nacional símbolo Brasil. Madeira vermelha valiosa historicamente. Ameaçada, protegida. Ornamental com flores amarelas",
    "detailedInfo": "Árvore média protegida com madeira vermelha historicamente valiosa para tintura. Nome do país. Flores amarelas vistosas na primavera.",
    "region": "Mata Atlântica",
    "uses": [
      "Madeira",
      "Tintorial",
      "Ornamental",
      "Simbólico",
      "Ecologia"
    ],
    "harvestMonths": [
      9,
      10,
      11
    ],
    "spacing": "10-12m",
    "climate": "Tropical",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Protegido",
      "CITES"
    ],
    "keywords": [
      "nacional",
      "madeira",
      "histórico",
      "protegido"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Brazilwood_tree_in_Vit%C3%B3ria%2C_ES%2C_Brazil.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:53:59.310180"
  },
  {
    "id": "T2",
    "name": "Ipê",
    "scientificName": "Tabebuia spp.",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#FFD700",
    "commercialValue": "MEDIUM",
    "description": "Árvore ornamental com florações espetaculares amarelas, roxas, rosas. Ipê-amarelo, roxo. Muito usada paisagismo urbano Brasil",
    "detailedInfo": "Gênero Tabebuia com espécies com cores florais distintas. Madeira dura valiosa. Extremamente popular em arborização urbana.",
    "region": "Todo Brasil",
    "uses": [
      "Ornamental",
      "Madeira",
      "Medicinal",
      "Arborização"
    ],
    "harvestMonths": [
      8,
      9,
      10,
      11
    ],
    "spacing": "8-12m",
    "climate": "Tropical a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "amarelo",
      "flores",
      "urbano",
      "paisagismo"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tabebuia_aurea_fruit_%26_flowers_W_IMG_7055.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:00.059550"
  },
  {
    "id": "T3",
    "name": "Jacarandá",
    "scientificName": "Jacaranda mimosifolia",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#4B0082",
    "commercialValue": "HIGH",
    "description": "Madeira nobre com flores roxas espetaculares primavera. Móveis finos, marcenaria. Imponente paisagismo urbano",
    "detailedInfo": "Árvore de madeira nobre com flores roxas massivamente abundantes na primavera. Extraordinariamente cobiçada para marcenaria fina.",
    "region": "Sudeste/Sul",
    "uses": [
      "Madeira",
      "Ornamental",
      "Marcenaria"
    ],
    "harvestMonths": [
      9,
      10
    ],
    "spacing": "10-15m",
    "climate": "Tropical a subtropical",
    "soilType": "Profundo",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "roxo",
      "madeira",
      "nobre",
      "flores"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jacaranda_mimosifolia_3994.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:00.844967"
  },
  {
    "id": "C1",
    "name": "Cana-de-açúcar",
    "scientificName": "Saccharum officinarum L.",
    "type": "CROPS",
    "origin": "INTRODUCED",
    "color": "#90EE90",
    "commercialValue": "HIGHEST",
    "description": "Introduzida colonização. Maior cultura comercial Brasil. \"Produção\": açúcar, etanol biocombustível. Domina Sudeste",
    "detailedInfo": "Gramínea tropical domesticada com alto potencial de acúmulo de sacarose. Principal commodity agrícola brasileira. \"Produção\": 780 Mt/ano (2022).",
    "region": "Sudeste/Centro-Oeste",
    "uses": [
      "Industrial",
      "Alimentar",
      "Energética",
      "Comercial"
    ],
    "harvestMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "spacing": "0.8-1m",
    "climate": "Tropical",
    "soilType": "Profundo, bem estruturado",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "açúcar",
      "etanol",
      "comercial",
      "commodity"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Saccharum_officinarum_L._-_Indonesia_01.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:01.868951"
  },
  {
    "id": "C2",
    "name": "Soja",
    "scientificName": "Glycine max (L.) Merr.",
    "type": "CROPS",
    "origin": "INTRODUCED",
    "color": "#228B22",
    "commercialValue": "HIGHEST",
    "description": "Oleaginosa asiática. Principal commodity Brasil mundo. Centro-Oeste maior produção. Exportação mássica",
    "detailedInfo": "Leguminosa com sementes oleaginosas. Maior produção Centro-Oeste Brasil (55% global). Segunda commodity mais comercializada mundo.",
    "region": "Centro-Oeste",
    "uses": [
      "Industrial",
      "Alimentar",
      "Ração animal",
      "Comercial"
    ],
    "harvestMonths": [
      2,
      3,
      4,
      5
    ],
    "spacing": "0.4-0.5m",
    "climate": "Subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Comercial",
      "OMG"
    ],
    "keywords": [
      "oleaginosa",
      "commodity",
      "exportação",
      "ração"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Leiden_University_Library_-_Seikei_Zusetsu_vol._18%2C_page_002_-_%E5%A4%A7%E8%B1%86_-_Glycine_max_%28L.%29_Merr.%2C_1804.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:03.097365"
  },
  {
    "id": "I1",
    "name": "Capim-annoni",
    "scientificName": "Eragrostis plana Nees",
    "type": "INVASIVE_SPECIES",
    "origin": "INTRODUCED",
    "color": "#D4AF37",
    "commercialValue": "NEGATIVE",
    "description": "Gramínea africana invasora confirmada. Danifica 500 mil hectares RS pastagens. Alelopática. Difícil controle muito agressiva",
    "detailedInfo": "Invasora confirmada com propriedades alelopáticas severas. Danos estimados em bilhões anuais ao setor pecuário do RS. Controle extremamente difícil.",
    "region": "Sul (RS)",
    "uses": [],
    "harvestMonths": [],
    "spacing": "N/A",
    "climate": "Temperado",
    "soilType": "Variável",
    "warning": "ESPÉCIE INVASORA CONFIRMADA - Danos econômicos altíssimos pecuária",
    "severity": "CRÍTICA",
    "certification": [
      "Espécie Invasora"
    ],
    "keywords": [
      "invasora",
      "danosa",
      "africana",
      "pecuária"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Books_from_the_Biodiversity_Heritage_Library_%28IA_mobot31753000788452%29.pdf",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:03.916881"
  },
  {
    "id": "I2",
    "name": "Eucalipto",
    "scientificName": "Eucalyptus spp.",
    "type": "INVASIVE_SPECIES",
    "origin": "INTRODUCED",
    "color": "#228B22",
    "commercialValue": "MEDIUM",
    "description": "Árvore australiana. Monocultura comercial Brasil celulose papel. Potencial invasor significativo campos naturais Sul",
    "detailedInfo": "Sob monitoramento para potencial invasão ecossistemas naturais. Plantação comercial de 9 milhões hectares Brasil.",
    "region": "Todo Brasil",
    "uses": [
      "Madeira",
      "Celulose",
      "Energia"
    ],
    "harvestMonths": [],
    "spacing": "3-4m",
    "climate": "Subtropical a tropical",
    "soilType": "Variável",
    "warning": "Sob monitoramento para potencial invasão ecossistemas naturais",
    "severity": "MÉDIA",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "plantação",
      "celulose",
      "australiano",
      "monocultura"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Eucalyptus_spp._%282276477434%29.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:04.838379"
  },
  {
    "id": "F20",
    "name": "Gabiroba",
    "scientificName": "Campomanesia pubescens",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#9ACD32",
    "nutritionScore": 7.6,
    "commercialValue": "LOW",
    "description": "Fruta nativa dos Cerrados. Arbusto com frutos redondos verde-amarelados. Polpa suculenta. Sucos, doces, licores artesanais",
    "detailedInfo": "Arbusto do Cerrado com frutos pequenos redondos. \"Distribuição\": Sul, Sudeste, Nordeste, Centro-Oeste. Potencial gastronômico crescente.",
    "region": "Cerrado",
    "uses": [
      "Alimentar",
      "Gastronômica",
      "Licores"
    ],
    "harvestMonths": [
      10,
      11,
      12,
      1
    ],
    "spacing": "3-4m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cerrado",
      "fruta",
      "licor",
      "artesanal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/34/Guabiroba_fruto.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:05.862374"
  },
  {
    "id": "F21",
    "name": "Tarumã-do-cerrado",
    "scientificName": "Vitex polygama",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#2F4F4F",
    "nutritionScore": 7.4,
    "commercialValue": "LOW",
    "description": "Árvore do Cerrado, 6-20m altura. Frutos azul-escuro tipo azeitona. Atrai aves. Vinhos, licores, geleias",
    "detailedInfo": "Espécie arbórea que alcança 6-20 metros. Frutos adocicados semelhantes a azeitonas pretas. Excelente para reflorestamento e paisagismo.",
    "region": "Cerrado",
    "uses": [
      "Alimentar",
      "Paisagismo",
      "Reflorestamento",
      "Bebidas"
    ],
    "harvestMonths": [
      9,
      10,
      11
    ],
    "spacing": "8-10m",
    "climate": "Tropical semiárido",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cerrado",
      "árvore",
      "bebida",
      "reflorestamento"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Spring_1921_wholesale_trade_list_-_of_the_Elizabeth_Nursery_Company_%3B_E._Runyan%2C_pres._and_treas._%28IA_CAT31305304%29.pdf",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:06.587970"
  },
  {
    "id": "F22",
    "name": "Perinha-do-cerrado",
    "scientificName": "Eugenia klotzschiana",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFB6C1",
    "nutritionScore": 7.3,
    "commercialValue": "LOW",
    "description": "Arbusto nativo dos Cerrados. Frutos pequenos tipo pêra. Sucos, sorvetes, geleias. Espécie ameaçada em declínio",
    "detailedInfo": "Arbusto dos campos e Cerrados de todo Brasil. Frutos pequenos para sucos, sorvetes e bolos. Potencial para recuperação de áreas degradadas.",
    "region": "Cerrado/Campos",
    "uses": [
      "Alimentar",
      "Reflorestamento",
      "Conservação"
    ],
    "harvestMonths": [
      10,
      11,
      12
    ],
    "spacing": "3-4m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso",
    "certification": [
      "Nativa",
      "Ameaçada"
    ],
    "keywords": [
      "cerrado",
      "campo",
      "rara",
      "conservação"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flickr_-_Jo%C3%A3o_de_Deus_Medeiros_-_Eugenia_klotzschiana_%281%29.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:07.399164"
  },
  {
    "id": "F23",
    "name": "Grumixama",
    "scientificName": "Eugenia brasiliensis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#1C1C1C",
    "nutritionScore": 8.0,
    "commercialValue": "LOW",
    "description": "Frutífera nativa Mata Atlântica. Frutos preto-roxos pequenos. Excelente para geleias, licores, sucos",
    "detailedInfo": "Arbusto/árvore pequena da Mata Atlântica. Frutos pequenos negros com polpa aromática. Ótimo potencial para cultivo artesanal.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Gastronômica",
      "Ornamental"
    ],
    "harvestMonths": [
      11,
      12,
      1,
      2
    ],
    "spacing": "4-5m",
    "climate": "Subtropical",
    "soilType": "Bem drenado, rico em matéria orgânica",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "atlântica",
      "geléia",
      "licor",
      "aromática"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Eugenia_brasiliensis.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:08.215798"
  },
  {
    "id": "F24",
    "name": "Jerivá",
    "scientificName": "Syagrus romanzoffiana",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFA500",
    "nutritionScore": 6.8,
    "commercialValue": "MEDIUM",
    "description": "Palmeira nativa. Frutos alaranjados pequenos. Importante para avifauna. Palmito, óleo, ornamental",
    "detailedInfo": "Palmeira nativa encontrada de Minas Gerais ao Rio Grande do Sul. Frutos pequenos alaranjados ricos em carotenoides. Importante para biodiversidade.",
    "region": "Mata Atlântica/Sul",
    "uses": [
      "Alimentar",
      "Palmito",
      "Ornamental",
      "Melífero"
    ],
    "harvestMonths": [
      3,
      4,
      5
    ],
    "spacing": "6-8m",
    "climate": "Subtropical",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "palmeira",
      "palmito",
      "ornamental",
      "caroteno"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Starr_020617-0019_Syagrus_romanzoffiana.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:09.037536"
  },
  {
    "id": "F25",
    "name": "Juçara",
    "scientificName": "Euterpe edulis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#8B0000",
    "nutritionScore": 8.9,
    "commercialValue": "HIGH",
    "description": "Palmeira nativa Mata Atlântica. Frutos roxos tipo açaí. Polpa nutritiva. Ameaçada, cultivo sustentável. Alto valor comercial",
    "detailedInfo": "Palmeira endêmica Mata Atlântica com frutos negros semelhantes ao açaí. Altamente nutritiva. Ameaçada de extinção, requer cultivo sustentável.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Comercial",
      "Conservação",
      "Palmito"
    ],
    "harvestMonths": [
      4,
      5,
      6,
      7
    ],
    "spacing": "8-10m",
    "climate": "Subtropical úmido",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Nativa",
      "Ameaçada",
      "CITES"
    ],
    "keywords": [
      "atlântica",
      "endêmica",
      "ameaçada",
      "superfood"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Euterpe_edulis.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:09.649593"
  },
  {
    "id": "F26",
    "name": "Araticum",
    "scientificName": "Annona crassiflora",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#DEB887",
    "nutritionScore": 7.9,
    "commercialValue": "LOW",
    "description": "Arbusto do Cerrado, cresce lentamente. Polpa branca cremosa mole quando madura. Consumo fresco, sucos, sorvetes",
    "detailedInfo": "Árvore característica do Cerrado, 4-8 metros altura. Crescimento lento, frutifica aos 2 metros. Fruto saboroso muito apreciado.",
    "region": "Cerrado",
    "uses": [
      "Alimentar",
      "Medicinal"
    ],
    "harvestMonths": [
      11,
      12,
      1
    ],
    "spacing": "8-10m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso, seco",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cerrado",
      "cremosa",
      "fresco",
      "tradicional"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Annona_crassiflora_Mart.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:10.571520"
  },
  {
    "id": "F27",
    "name": "Taperebá (Cajá)",
    "scientificName": "Spondias mombin",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFD700",
    "nutritionScore": 7.5,
    "commercialValue": "MEDIUM",
    "description": "Árvore amazônica/nordestina, até 30m. Frutos amarelos ácidos. Sucos, sorvetes, polpas congeladas. Distribuição ampla Norte-Nordeste",
    "detailedInfo": "Espécie arbórea de grande porte com distribuição desde Amazonas até Minas Gerais. Frutos muito apreciados em bebidas e sobremesas.",
    "region": "Amazônia/Nordeste",
    "uses": [
      "Alimentar",
      "Comercial",
      "Medicinal"
    ],
    "harvestMonths": [
      8,
      9,
      10
    ],
    "spacing": "10-15m",
    "climate": "Tropical húmido",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "amazônico",
      "suco",
      "tropical",
      "polpa"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/16/Spondias_mombin_%28Fruit%29_sur_un_papier_blanc_au_B%C3%A9nin_03.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:11.595066"
  },
  {
    "id": "F28",
    "name": "Cambucá",
    "scientificName": "Plinia edulis",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#FFD700",
    "nutritionScore": 7.6,
    "commercialValue": "LOW",
    "description": "Árvore nativa Mata Atlântica até 20m. Frutos doces levemente ácidos. Reflorestamento, paisagismo, alimento fauna",
    "detailedInfo": "Árvore nativa ocorrendo quase exclusivamente em floresta preservada. Frutos doces e levemente ácidos muito aromáticos.",
    "region": "Mata Atlântica",
    "uses": [
      "Alimentar",
      "Reflorestamento",
      "Ornamental"
    ],
    "harvestMonths": [
      1,
      2,
      3
    ],
    "spacing": "8-10m",
    "climate": "Subtropical",
    "soilType": "Bem drenado, rico em matéria orgânica",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "atlântica",
      "reflorestamento",
      "aromática",
      "rara"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Cambuca.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:12.415560"
  },
  {
    "id": "F29",
    "name": "Castanha-do-Pará",
    "scientificName": "Bertholletia excelsa",
    "type": "FRUITS",
    "origin": "NATIVE",
    "color": "#8B4513",
    "nutritionScore": 8.7,
    "commercialValue": "HIGH",
    "description": "Árvore amazônica gigante até 60m. Castanhas oleosas alto valor. Exportação mássica. Selênio, magnésio concentrados",
    "detailedInfo": "Árvore de grande porte endêmica Amazônia com frutos duros contendo castanhas oleosas de altíssimo valor. Maturação 14 meses.",
    "region": "Amazônia",
    "uses": [
      "Alimentar",
      "Comercial",
      "Cosmética",
      "Exportação"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5
    ],
    "spacing": "20-30m",
    "climate": "Tropical húmido",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Nativa",
      "Fair Trade"
    ],
    "keywords": [
      "amazônica",
      "castanha",
      "exportação",
      "selênio"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Bertholletia_excelsa.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:13.336752"
  },
  {
    "id": "H14",
    "name": "Aroeira",
    "scientificName": "Myracrodruon urundeuva",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#8B4513",
    "efficacyScore": 8.3,
    "commercialValue": "MEDIUM",
    "description": "Árvore medicinal nativa da Caatinga. Cicatrizante, anti-inflamatória. Casca e entrecasca em chás, pó, garrafadas",
    "detailedInfo": "Árvore nativa do Nordeste com uso medicinal comprovado. Propriedades cicatrizantes e anti-inflamatórias. Uso tradicional sécular.",
    "region": "Caatinga (Nordeste)",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "6-8m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "cicatrizante",
      "inflamação",
      "nordestino",
      "tradicional"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/89/Myracrodruon_urundeuva.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:14.464003"
  },
  {
    "id": "H15",
    "name": "Angico",
    "scientificName": "Anadenanthera colubrina",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#228B22",
    "efficacyScore": 7.9,
    "commercialValue": "LOW",
    "description": "Árvore medicinal nativa Caatinga. Depurativa, anti-gripal, tossífera. Casca em chás, lambedores. Propriedades respiratórias",
    "detailedInfo": "Árvore medicinal tradicional nordestina com propriedades depurativas comprovadas. Uso para gripes, tosses, febres e diarreias.",
    "region": "Caatinga (Nordeste)",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "8-10m",
    "climate": "Tropical semiárido",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "depurativa",
      "tosse",
      "gripal",
      "nordestino"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/be/Anadenanthera_colubrina_tree.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:15.488623"
  },
  {
    "id": "H16",
    "name": "Imburana-de-cheiro",
    "scientificName": "Amburana cearensis",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#D2B48C",
    "efficacyScore": 7.7,
    "commercialValue": "LOW",
    "description": "Árvore medicinal endêmica Caatinga. Expectorante, anti-inflamatória. Casca, sementes em chás, garrafadas artesanais",
    "detailedInfo": "Árvore endêmica da Caatinga nordestina com cascas aromáticas. Propriedades expectorantes e descongestoras de vias aéreas.",
    "region": "Caatinga (Ceará)",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "8-10m",
    "climate": "Tropical semiárido",
    "soilType": "Arenoso",
    "certification": [
      "Nativa",
      "Endêmica"
    ],
    "keywords": [
      "expectorante",
      "respiratória",
      "nordestino",
      "aromática"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/40/Amburana_cearensis.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:16.307708"
  },
  {
    "id": "H17",
    "name": "Guaco",
    "scientificName": "Mikania glomerata",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#228B22",
    "efficacyScore": 8.1,
    "commercialValue": "MEDIUM",
    "description": "Trepadeira medicinal nativa brasileira. Bronquite, tosse, asma. Xaropes, chás. Reconhecida SUS/RENAME. Muito utilizada",
    "detailedInfo": "Planta fitoterápica oficial do SUS. Trepadeira com propriedades expectorantes e anti-inflamatórias respiratórias.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "2-3m",
    "climate": "Tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa",
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "bronquite",
      "tosse",
      "oficial",
      "respiratória"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Mikania_glomerata.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:17.246463"
  },
  {
    "id": "H18",
    "name": "Espinheira-santa",
    "scientificName": "Maytenus ilicifolia",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#2E8B57",
    "efficacyScore": 8.2,
    "commercialValue": "MEDIUM",
    "description": "Arbusto medicinal nativo Sul-Sudeste. Úlceras, gastrite, proteção gástrica. Fitoterápico RENAME/SUS. Muito usada",
    "detailedInfo": "Planta medicinal oficial do SUS com propriedades gastroprotoras comprovadas. Nativa de Paraná, Santa Catarina, São Paulo.",
    "region": "Sul/Sudeste",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "2-3m",
    "climate": "Subtropical",
    "soilType": "Bem estruturado",
    "certification": [
      "Nativa",
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "úlcera",
      "gastrite",
      "proteção",
      "oficial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Maytenus_ilicifolia.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:18.253008"
  },
  {
    "id": "H19",
    "name": "Unha-de-gato",
    "scientificName": "Uncaria tomentosa",
    "type": "HERBS",
    "origin": "NATIVE",
    "color": "#8B7355",
    "efficacyScore": 8.0,
    "commercialValue": "HIGH",
    "description": "Trepadeira amazônica medicinal. Imunológica, anti-inflamatória. Fitoterápico RENAME. Exportação crescente. Alto valor",
    "detailedInfo": "Trepadeira amazônica com propriedades imunomoduladoras e anti-inflamatórias sistêmicas. Fitoterápico oficial do SUS.",
    "region": "Amazônia",
    "uses": [
      "Medicinal",
      "Fitoterápico",
      "Exportação"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "3-4m",
    "climate": "Tropical húmido",
    "soilType": "Bem drenado, mulch recomendado",
    "certification": [
      "Nativa",
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "imunológica",
      "amazônica",
      "exportação",
      "inflamação"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Uncaria_tomentosa.png",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:19.174347"
  },
  {
    "id": "H20",
    "name": "Alcachofra",
    "scientificName": "Cynara scolymus",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#9370DB",
    "efficacyScore": 8.3,
    "commercialValue": "MEDIUM",
    "description": "Hortaliça medicinal introduzida. Hepatoprotetora, colerética. Chás, cápsulas. Fitoterápico RENAME/SUS oficial",
    "detailedInfo": "Planta fitoterápica oficial do SUS com propriedades hepatoprotetoras comprovadas. Cultivada Sul-Sudeste Brasil.",
    "region": "Sul/Sudeste",
    "uses": [
      "Medicinal",
      "Fitoterápico",
      "Culinária"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.8-1m",
    "climate": "Temperado",
    "soilType": "Bem drenado, rico em matéria orgânica",
    "certification": [
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "fígado",
      "oficial",
      "hepatoprotetora",
      "medicinal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cynara_cardunculus_var._scolymus_in_Jardin_des_Plante_de_Paris.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:20.141967"
  },
  {
    "id": "H21",
    "name": "Babosa (Aloe vera)",
    "scientificName": "Aloe vera",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#90EE90",
    "efficacyScore": 8.0,
    "commercialValue": "MEDIUM",
    "description": "Suculenta medicinal introduzida. Cicatrizante, anti-inflamatória, laxante. Gel tópico, xarope. Fitoterápico RENAME/SUS",
    "detailedInfo": "Planta medicinal oficial do SUS com gel com propriedades cicatrizantes e anti-inflamatórias bem documentadas.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Cosmética",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.4-0.5m",
    "climate": "Tropical",
    "soilType": "Arenoso bem drenado",
    "certification": [
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "cicatrizante",
      "cosmética",
      "gel",
      "oficial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Aloe_vera_flower_bud.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:20.675178"
  },
  {
    "id": "H22",
    "name": "Hortelã-do-campo (Poejo)",
    "scientificName": "Mentha pulegium",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#7CB342",
    "efficacyScore": 7.6,
    "commercialValue": "LOW",
    "description": "Erva medicinal aromática. Chás digestivos e anti-eméticos. Tradicional Brasil. Repelente inseticida natural",
    "detailedInfo": "Herbácea aromática com propriedades digestivas e anti-eméticas. Repelente natural contra insetos domésticos.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Repelente",
      "Aromática"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.4-0.6m",
    "climate": "Temperado a subtropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "digestivo",
      "repelente",
      "aromática",
      "medicinal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Mentha_Pulegium_11.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:21.222002"
  },
  {
    "id": "H23",
    "name": "Transagem (Plantago)",
    "scientificName": "Plantago ovata",
    "type": "HERBS",
    "origin": "INTRODUCED",
    "color": "#9ACD32",
    "efficacyScore": 7.8,
    "commercialValue": "MEDIUM",
    "description": "Herbácea medicinal laxante natural. Fibras solúveis. Chás, pó. Fitoterápico RENAME/SUS oficial",
    "detailedInfo": "Planta medicinal oficial do SUS com propriedades laxantes suaves comprovadas. Rica em fibras solúveis.",
    "region": "Todo Brasil",
    "uses": [
      "Medicinal",
      "Fitoterápico"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.15-0.2m",
    "climate": "Temperado",
    "soilType": "Bem estruturado",
    "certification": [
      "Fitoterápico SUS",
      "RENAME"
    ],
    "keywords": [
      "laxante",
      "fibra",
      "oficial",
      "medicinal"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Plantago_ovata_form.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:21.837813"
  },
  {
    "id": "R5",
    "name": "Taro (Inhame)",
    "scientificName": "Colocasia esculenta",
    "type": "ROOTS",
    "origin": "NATIVE",
    "color": "#8B4513",
    "nutritionScore": 7.1,
    "commercialValue": "MEDIUM",
    "description": "Tubérculo nativo/naturalisado Brasil. Cultivar tradicional afro-brasileira. Raiz amilácea. Refogados, caldos, açordos",
    "detailedInfo": "Tubérculo amiláceo com grande importância cultural afro-brasileira. Adaptado a solos úmidos e mal drenados.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Cultural",
      "Medicinal"
    ],
    "harvestMonths": [
      5,
      6,
      7,
      8
    ],
    "spacing": "0.4-0.6m",
    "climate": "Tropical",
    "soilType": "Úmido, mal drenado",
    "certification": [
      "Nativa",
      "Tradicional"
    ],
    "keywords": [
      "afro-brasileira",
      "tradicional",
      "amiláceo",
      "cultural"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Taro_leaf_underside%2C_backlit_by_sun_-_edit.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:22.835572"
  },
  {
    "id": "R6",
    "name": "Cará-do-ar",
    "scientificName": "Dioscorea alata",
    "type": "ROOTS",
    "origin": "NATIVE",
    "color": "#A0826D",
    "nutritionScore": 6.9,
    "commercialValue": "LOW",
    "description": "Tubérculo nativo/tradicional Brasil. Trepadeira com rizóforos aéreos. Alimento tradicional quilombola",
    "detailedInfo": "Espécie tradicional brasileira com propriedade única de tubérculos aéreos. Importante para segurança alimentar tradicional.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Cultural",
      "Tradicional"
    ],
    "harvestMonths": [
      4,
      5,
      6
    ],
    "spacing": "1-1.5m",
    "climate": "Tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Nativa",
      "Tradicional"
    ],
    "keywords": [
      "tradicional",
      "aéreo",
      "quilombola",
      "segurança"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/%E0%B4%95%E0%B4%BE%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%BF%E0%B5%BD-%E0%B4%95%E0%B4%BF%E0%B4%B4%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%8D.JPG",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:23.781052"
  },
  {
    "id": "R7",
    "name": "Inhame-roxo",
    "scientificName": "Dioscorea alata var. purpurea",
    "type": "ROOTS",
    "origin": "NATIVE",
    "color": "#4B0082",
    "nutritionScore": 7.3,
    "commercialValue": "MEDIUM",
    "description": "Tubérculo roxo com antocianinas. Afro-brasileiro. Alta carga antioxidante. Refogados, sucos, farofas tradicionais",
    "detailedInfo": "Variedade tradicional de inhame com polpa roxa rica em antocianinas. Importante na gastronomia afro-brasileira.",
    "region": "Todo Brasil",
    "uses": [
      "Alimentar",
      "Cultural",
      "Medicinal"
    ],
    "harvestMonths": [
      5,
      6,
      7,
      8
    ],
    "spacing": "0.5-0.7m",
    "climate": "Tropical",
    "soilType": "Bem estruturado",
    "certification": [
      "Nativa",
      "Tradicional"
    ],
    "keywords": [
      "antocianina",
      "roxo",
      "afro-brasileiro",
      "antioxidante"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Catalog_of_plant_germplasm_available_from_the_Subtropical_Horticulture_Research_Unit%2C_Miami%2C_Florida_%28IA_CAT31356273%29.pdf",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:24.600010"
  },
  {
    "id": "R8",
    "name": "Rabanete",
    "scientificName": "Raphanus sativus",
    "type": "ROOTS",
    "origin": "INTRODUCED",
    "color": "#FF6347",
    "nutritionScore": 6.2,
    "commercialValue": "HIGH",
    "description": "Raiz vermelha, branca, roxa muito cultivada Brasil. Hortaliça comum. Saladas, radiches, pó. Crescimento rápido",
    "detailedInfo": "Brassicácea com raízes crocantes. Cultivo rápido e fácil. Muito produzida em hortas comerciais e domésticas Brasil.",
    "region": "Todo Brasil",
    "uses": [
      "Culinária",
      "Comercial"
    ],
    "harvestMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "spacing": "0.05-0.08m",
    "climate": "Temperado",
    "soilType": "Bem drenado, profundo",
    "certification": [
      "Comercial",
      "Orgânico"
    ],
    "keywords": [
      "rápido",
      "salada",
      "comercial",
      "fácil"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Raphanus_sativus_of_Salem.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:25.523384"
  },
  {
    "id": "T4",
    "name": "Peroba-rosa",
    "scientificName": "Aspidosperma polyneuron",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#CD5C5C",
    "commercialValue": "HIGH",
    "description": "Árvore nativa de madeira nobre avermelhada. Móveis finos, marcenaria, pisos. Ameaçada. Reflorestamento estratégico",
    "detailedInfo": "Árvore de madeira nobre durável e resistente. Altamente cobiçada para móveis finos. Ameaçada de extinção.",
    "region": "Mata Atlântica",
    "uses": [
      "Madeira",
      "Móveis",
      "Conservação"
    ],
    "harvestMonths": [
      9,
      10
    ],
    "spacing": "10-15m",
    "climate": "Subtropical",
    "soilType": "Profundo",
    "certification": [
      "Nativa",
      "Ameaçada",
      "Proteção"
    ],
    "keywords": [
      "madeira nobre",
      "vermelho",
      "ameaçada",
      "móvel"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/PALO_ROSA.jpeg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:26.297455"
  },
  {
    "id": "T5",
    "name": "Cedro-rosa",
    "scientificName": "Cedrela fissilis",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#D2691E",
    "commercialValue": "HIGH",
    "description": "Árvore nativa madeira nobre aromática. Móveis fino, compensados. Madeira muito valiosa. Ameaçada extrativismo",
    "detailedInfo": "Árvore de grande porte com madeira aromática rosa valiosa. Ameaçada pelo extrativismo. Reflorestamento importante.",
    "region": "Amazônia/Mata Atlântica",
    "uses": [
      "Madeira",
      "Móveis",
      "Compensados"
    ],
    "harvestMonths": [
      9,
      10
    ],
    "spacing": "12-15m",
    "climate": "Tropical",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Nativa",
      "Ameaçada",
      "CITES"
    ],
    "keywords": [
      "madeira nobre",
      "aromática",
      "ameaçada",
      "exportação"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Cedrela_fissilis_2.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:27.263813"
  },
  {
    "id": "T6",
    "name": "Teca",
    "scientificName": "Tectona grandis",
    "type": "TREES",
    "origin": "INTRODUCED",
    "color": "#8B7355",
    "commercialValue": "HIGHEST",
    "description": "Árvore introduzida cultivo em larga escala Brasil. Madeira premium durável. Móveis, decking, barcos. Exportação",
    "detailedInfo": "Árvore introduzida com madeira de altíssima qualidade. Cultivo extensivo Centro-Oeste/Nordeste Brasil.",
    "region": "Centro-Oeste/Nordeste",
    "uses": [
      "Madeira",
      "Móveis",
      "Exportação"
    ],
    "harvestMonths": [],
    "spacing": "3-4m",
    "climate": "Tropical",
    "soilType": "Bem drenado",
    "certification": [
      "Comercial"
    ],
    "keywords": [
      "madeira premium",
      "durável",
      "exportação",
      "comercial"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tectona_grandis_kz01.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:28.185943"
  },
  {
    "id": "T7",
    "name": "Araucária",
    "scientificName": "Araucaria angustifolia",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#228B22",
    "commercialValue": "HIGH",
    "description": "Conífera nativa gigante Sul. Pinhão comestível. Madeira valiosa. Ameaçada em extinção crítica. Símbolo PAR",
    "detailedInfo": "Árvore emblemática do Sul Brasil com pinhões comestíveis. Ameaçada criticamente. Proteção CITES.",
    "region": "Sul (PR, SC, RS)",
    "uses": [
      "Madeira",
      "Alimento (pinhão)",
      "Conservação"
    ],
    "harvestMonths": [
      2,
      3,
      4
    ],
    "spacing": "15-20m",
    "climate": "Subtropical",
    "soilType": "Profundo, bem drenado",
    "certification": [
      "Nativa",
      "Ameaçada",
      "CITES",
      "Símbolo"
    ],
    "keywords": [
      "pinhão",
      "gigante",
      "ameaçada",
      "símbolo"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Arauc%C3%A1rias_ao_fundo_Parque_Nacional_da_Serra_da_Bocaina_-_denoise.jpg",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:29.108112"
  },
  {
    "id": "T8",
    "name": "Gonçalo-alves",
    "scientificName": "Astronium fraxinifolium",
    "type": "TREES",
    "origin": "NATIVE",
    "color": "#8B0000",
    "commercialValue": "MEDIUM",
    "description": "Árvore madeira dura nativa de larga distribuição. Marcenaria, instrumentos musicais. Madeira muito durável",
    "detailedInfo": "Árvore com madeira extremamente dura e durável. Distribuição ampla Brasil central. Uso em instrumentos musicais.",
    "region": "Centro-Oeste/Nordeste",
    "uses": [
      "Madeira",
      "Instrumentos",
      "Marcenaria"
    ],
    "harvestMonths": [
      9,
      10
    ],
    "spacing": "10-12m",
    "climate": "Tropical semiárido",
    "soilType": "Variável",
    "certification": [
      "Nativa"
    ],
    "keywords": [
      "madeira dura",
      "instrumentos",
      "durável",
      "marcenaria"
    ],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/ANACARDIACEAE_astronium_fraxinifolium_Schott%2C_INMA_%28MBML001265%29.pdf",
    "imageSource": "wikimedia",
    "imageUpdated": "2025-11-09T09:54:29.926736"
  }
];

export default allItems;
