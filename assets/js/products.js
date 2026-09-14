/* ============================================================
   HECOTH B2B · 产品数据（含多语言）
   ------------------------------------------------------------
   结构说明：
     name         : { en, es, fr, ar, ru, pt }
     description  : { en, es, fr, ar, ru, pt }
     highlights   : { en: [], es: [], fr: [], ar: [], ru: [], pt: [] }
     specs        : 只保留英文（技术参数全球通用）
   ============================================================ */

window.PRODUCTS = {

   /* ================= HECOTH E4 · Electric Street Motorcycle ================= */
  e4: {
    id: 'e4',
    category: 'electric',
    icon: 'fa-bolt',
    image: 'assets/images/e4-main.jpg',
    gallery: [
      'assets/images/e4-1.jpg',
      'assets/images/e4-2.jpg',
      'assets/images/e4-3.jpg'
    ],
    name: {
      en: 'HECOTH E4 Electric Street Motorcycle',
      es: 'HECOTH E4 Moto Eléctrica de Calle',
      fr: 'HECOTH E4 Moto Électrique de Route',
      ar: 'هيكوث E4 دراجة نارية كهربائية للشارع',
      ru: 'HECOTH E4 Электрический уличный мотоцикл',
      pt: 'HECOTH E4 Moto Elétrica de Rua'
    },
    description: {
      en: 'The HECOTH E4 is a modern urban electric street motorcycle powered by a 72V lithium battery, delivering a top speed of 90 km/h and a range of 100–120 km per charge. With a 5-hour charging time, 3 forward speeds + 1 reverse gear, dual disc brakes, and a lightweight 105 kg chassis, it is an ideal choice for city commuters, delivery fleets and rental businesses. Available in Red / Blue / Black. MOQ 30 units, 75 pcs per 40HQ container — OEM and ODM welcome.',
      es: 'La HECOTH E4 es una moto eléctrica de calle urbana moderna impulsada por una batería de litio de 72V, con velocidad máxima de 90 km/h y autonomía de 100–120 km por carga. Con 5 horas de carga, 3 velocidades hacia adelante + 1 reversa, frenos de disco doble y chasis ligero de 105 kg, es ideal para desplazamientos urbanos, flotas de reparto y negocios de alquiler. Disponible en Rojo / Azul / Negro. MOQ 30 unidades, 75 pcs por contenedor 40HQ — OEM y ODM bienvenidos.',
      fr: 'La HECOTH E4 est une moto électrique de route urbaine moderne propulsée par une batterie lithium 72V, offrant une vitesse de pointe de 90 km/h et une autonomie de 100–120 km par charge. Avec 5 heures de charge, 3 vitesses avant + 1 marche arrière, doubles freins à disque et un châssis léger de 105 kg, elle est idéale pour les trajets urbains, les flottes de livraison et la location. Disponible en Rouge / Bleu / Noir. MOQ 30 unités, 75 pcs par conteneur 40HQ — OEM et ODM bienvenus.',
      ar: 'هيكوث E4 هي دراجة نارية كهربائية حضرية حديثة تعمل ببطارية ليثيوم 72 فولت، بسرعة قصوى 90 كم/س ومدى 100–120 كم لكل شحنة. مع 5 ساعات شحن، 3 سرعات أمامية + سرعة خلفية واحدة، فرامل قرصية مزدوجة، وهيكل خفيف 105 كجم، فهي مثالية للتنقل الحضري وأساطيل التوصيل وأعمال التأجير. متوفرة باللون الأحمر / الأزرق / الأسود. الحد الأدنى للطلب 30 وحدة، 75 قطعة لكل حاوية 40HQ — نرحب بـ OEM و ODM.',
      ru: 'HECOTH E4 — современный городской электрический уличный мотоцикл с литиевой батареей 72 В, максимальной скоростью 90 км/ч и запасом хода 100–120 км на одном заряде. Время зарядки 5 часов, 3 передние скорости + 1 задняя, двойные дисковые тормоза и лёгкое шасси 105 кг — идеален для городских поездок, курьерских парков и проката. Доступен в красном / синем / чёрном цвете. MOQ 30 шт., 75 шт. в контейнере 40HQ — приветствуется OEM и ODM.',
      pt: 'A HECOTH E4 é uma moto elétrica de rua urbana moderna alimentada por bateria de lítio de 72V, com velocidade máxima de 90 km/h e autonomia de 100–120 km por carga. Com 5 horas de carregamento, 3 velocidades à frente + 1 marcha à ré, travões de disco duplos e chassis leve de 105 kg, é ideal para deslocamentos urbanos, frotas de entrega e aluguer. Disponível em Vermelho / Azul / Preto. MOQ 30 unidades, 75 pcs por contentor 40HQ — OEM e ODM bem-vindos.'
    },
    highlights: {
      en: ['72V lithium battery — 1200 cycle life', 'Top speed 90 km/h, range 100–120 km per charge', '5-hour charging time — full charge overnight', '3 forward speeds (I / II / III) + 1 reverse gear', 'Front & rear disc brakes — safe stopping', 'Lightweight 105 kg (without battery), max loading 150 kg', 'Available colors: Red / Blue / Black', 'MOQ 30 units — 75 pcs per 40HQ container', 'Perfect for city commute, delivery fleet and rental business'],
      es: ['Batería de litio 72V — 1200 ciclos', 'Velocidad máxima 90 km/h, autonomía 100–120 km por carga', 'Carga en 5 horas — carga completa durante la noche', '3 velocidades adelante (I / II / III) + 1 reversa', 'Frenos de disco delantero y trasero — frenado seguro', 'Ligera 105 kg (sin batería), carga máxima 150 kg', 'Colores disponibles: Rojo / Azul / Negro', 'MOQ 30 unidades — 75 pcs por contenedor 40HQ', 'Ideal para desplazamientos urbanos, reparto y alquiler'],
      fr: ['Batterie lithium 72V — 1200 cycles', 'Vitesse de pointe 90 km/h, autonomie 100–120 km par charge', 'Temps de charge 5 heures — charge complète la nuit', '3 vitesses avant (I / II / III) + 1 marche arrière', 'Freins à disque avant et arrière — freinage sûr', 'Légère 105 kg (sans batterie), charge max 150 kg', 'Couleurs disponibles : Rouge / Bleu / Noir', 'MOQ 30 unités — 75 pcs par conteneur 40HQ', 'Idéale pour trajets urbains, livraison et location'],
      ar: ['بطارية ليثيوم 72 فولت — 1200 دورة', 'سرعة قصوى 90 كم/س، مدى 100–120 كم لكل شحنة', 'وقت شحن 5 ساعات — شحن كامل بين عشية وضحاها', '3 سرعات أمامية (I / II / III) + 1 خلفية', 'فرامل قرصية أمامية وخلفية — توقف آمن', 'خفيفة 105 كجم (بدون بطارية)، تحميل أقصى 150 كجم', 'الألوان المتاحة: أحمر / أزرق / أسود', 'الحد الأدنى 30 وحدة — 75 قطعة لكل حاوية 40HQ', 'مثالية للتنقل الحضري والتوصيل والتأجير'],
      ru: ['Литиевая батарея 72 В — 1200 циклов', 'Максимальная скорость 90 км/ч, запас 100–120 км', 'Зарядка 5 часов — полный заряд за ночь', '3 передние скорости (I / II / III) + 1 задняя', 'Передние и задние дисковые тормоза — безопасное торможение', 'Лёгкий 105 кг (без батареи), макс. нагрузка 150 кг', 'Доступные цвета: красный / синий / чёрный', 'MOQ 30 шт. — 75 шт. в контейнере 40HQ', 'Идеален для города, доставки и проката'],
      pt: ['Bateria de lítio 72V — 1200 ciclos', 'Velocidade máxima 90 km/h, autonomia 100–120 km', 'Carregamento em 5 horas — carga completa durante a noite', '3 velocidades à frente (I / II / III) + 1 marcha à ré', 'Travões de disco dianteiro e traseiro — travagem segura', 'Leve 105 kg (sem bateria), carga máxima 150 kg', 'Cores disponíveis: Vermelho / Azul / Preto', 'MOQ 30 unidades — 75 pcs por contentor 40HQ', 'Ideal para deslocamentos urbanos, entregas e aluguer']
    },
    specs: {
      'Model': 'HECOTH E4 Electric Street Motorcycle',
      'Battery types': 'Lithium battery',
      'Max speed': '90 km/h',
      'Range': '100–120 km',
      'Battery life': '1200 cycle time',
      'Speed type': '3 Forward speed: I / II / III + 1 Reverse speed',
      'Charging Time': '5 hours',
      'Color Optional': 'Red / Blue / Black',
      'Packing': '1950 × 570 × 1180 mm',
      'L*W*H': '2019 × 719 × 1039 mm',
      'Wheel Base': '1293 mm',
      'Vehicle Weight': '105 kg (without battery)',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / disk',
      'Front / Rear Tyre': '110/70-17, 140/70-17',
      'Min. Ground Clearance': '169 mm',
      'Container Qty': '75 PCS / 40HQ',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'HECOTH E4, electric street motorcycle, electric motorcycle wholesale, electric street bike 90km/h, 72V lithium electric motorcycle, electric motorcycle supplier China, B2B electric motorcycle, MOQ 30 electric motorcycle, 3 speed electric motorcycle, 120km range electric bike, city commute electric motorcycle, delivery fleet electric motorcycle, rental electric motorcycle, electric motorcycle for Brazil, electric motorcycle for Europe, OEM electric motorcycle'
  },

  /* ================= Electric Street Motorcycle ================= */
  'street-ev': {
    id: 'street-ev',
    category: 'electric',
    icon: 'fa-bolt',
    image: 'assets/images/street-ev-main.jpg',
    gallery: [
      'assets/images/street-ev-1.jpg',
      'assets/images/street-ev-2.jpg',
      'assets/images/street-ev-3.jpg'
    ],
    name: {
      en: 'Electric Street Motorcycle',
      es: 'Moto Eléctrica de Calle',
      fr: 'Moto Électrique de Route',
      ar: 'دراجة نارية كهربائية للشارع',
      ru: 'Электрический уличный мотоцикл',
      pt: 'Moto Elétrica de Rua'
    },
    description: {
      en: 'The HECOTH Electric Street Motorcycle is a modern urban electric street bike powered by a 72V lithium battery, delivering a top speed of 90 km/h and a range of 100–120 km per charge. With a 5-hour charging time, 3 forward speeds + 1 reverse gear, and dual disc brakes, it is an ideal choice for city commuters, delivery fleets and rental businesses. MOQ 30 units, 75 pcs per 40HQ container — OEM and ODM welcome.',
      es: 'La Moto Eléctrica de Calle HECOTH es una moto urbana moderna impulsada por una batería de litio de 72V, con velocidad máxima de 90 km/h y autonomía de 100–120 km por carga. Con 5 horas de carga, 3 velocidades hacia adelante + 1 reversa y frenos de disco delantero y trasero, es ideal para desplazamientos urbanos, flotas de reparto y negocios de alquiler. MOQ 30 unidades, 75 pcs por contenedor 40HQ — OEM y ODM bienvenidos.',
      fr: 'La Moto Électrique de Route HECOTH est une moto urbaine moderne propulsée par une batterie lithium 72V, offrant une vitesse de pointe de 90 km/h et une autonomie de 100–120 km par charge. Avec 5 heures de charge, 3 vitesses avant + 1 marche arrière et doubles freins à disque, elle est idéale pour les trajets urbains, les flottes de livraison et la location. MOQ 30 unités, 75 pcs par conteneur 40HQ — OEM et ODM bienvenus.',
      ar: 'دراجة هيكوث الكهربائية للشارع هي دراجة حضرية حديثة تعمل ببطارية ليثيوم 72 فولت، بسرعة قصوى 90 كم/س ومدى 100–120 كم لكل شحنة. مع 5 ساعات شحن، 3 سرعات أمامية + سرعة خلفية واحدة، وفرامل قرصية أمامية وخلفية، فهي مثالية للتنقل الحضري وأساطيل التوصيل وأعمال التأجير. الحد الأدنى للطلب 30 وحدة، 75 قطعة لكل حاوية 40HQ — نرحب بـ OEM و ODM.',
      ru: 'HECOTH Электрический уличный мотоцикл — современный городской электробайк с литиевой батареей 72 В, максимальной скоростью 90 км/ч и запасом хода 100–120 км на одном заряде. Время зарядки 5 часов, 3 передние скорости + 1 задняя, двойные дисковые тормоза — идеален для городских поездок, курьерских парков и проката. MOQ 30 шт., 75 шт. в контейнере 40HQ — приветствуется OEM и ODM.',
      pt: 'A Moto Elétrica de Rua HECOTH é uma moto urbana moderna alimentada por bateria de lítio de 72V, com velocidade máxima de 90 km/h e autonomia de 100–120 km por carga. Com 5 horas de carregamento, 3 velocidades à frente + 1 marcha à ré e travões de disco dianteiro e traseiro, é ideal para deslocamentos urbanos, frotas de entrega e aluguer. MOQ 30 unidades, 75 pcs por contentor 40HQ — OEM e ODM bem-vindos.'
    },
    highlights: {
      en: ['72V lithium battery — 1200 cycle life', 'Top speed 90 km/h, range 100–120 km per charge', '5-hour charging time — full charge overnight', '3 forward speeds (I / II / III) + 1 reverse gear', 'Front & rear disc brakes', 'Lightweight 105 kg, max loading 150 kg', 'Available colors: Red / Blue / Black', 'MOQ 30 units — 75 pcs per 40HQ container', 'Perfect for city commute, delivery fleet and rental'],
      es: ['Batería de litio 72V — 1200 ciclos', 'Velocidad máxima 90 km/h, autonomía 100–120 km', 'Carga en 5 horas — carga completa durante la noche', '3 velocidades adelante (I / II / III) + 1 reversa', 'Frenos de disco delantero y trasero', 'Ligera 105 kg, carga máxima 150 kg', 'Colores disponibles: Rojo / Azul / Negro', 'MOQ 30 unidades — 75 pcs por contenedor 40HQ', 'Ideal para desplazamientos urbanos, reparto y alquiler'],
      fr: ['Batterie lithium 72V — 1200 cycles', 'Vitesse de pointe 90 km/h, autonomie 100–120 km', 'Temps de charge 5 heures — charge complète la nuit', '3 vitesses avant (I / II / III) + 1 marche arrière', 'Freins à disque avant et arrière', 'Légère 105 kg, charge max 150 kg', 'Couleurs disponibles : Rouge / Bleu / Noir', 'MOQ 30 unités — 75 pcs par conteneur 40HQ', 'Idéale pour trajets urbains, livraison et location'],
      ar: ['بطارية ليثيوم 72 فولت — 1200 دورة', 'سرعة قصوى 90 كم/س، مدى 100–120 كم', 'وقت شحن 5 ساعات — شحن كامل بين عشية وضحاها', '3 سرعات أمامية (I / II / III) + 1 خلفية', 'فرامل قرصية أمامية وخلفية', 'خفيفة 105 كجم، تحميل أقصى 150 كجم', 'الألوان المتاحة: أحمر / أزرق / أسود', 'الحد الأدنى 30 وحدة — 75 قطعة لكل حاوية 40HQ', 'مثالية للتنقل الحضري والتوصيل والتأجير'],
      ru: ['Литиевая батарея 72 В — 1200 циклов', 'Максимальная скорость 90 км/ч, запас 100–120 км', 'Зарядка 5 часов — полный заряд за ночь', '3 передние скорости (I / II / III) + 1 задняя', 'Передние и задние дисковые тормоза', 'Лёгкий 105 кг, макс. нагрузка 150 кг', 'Доступные цвета: красный / синий / чёрный', 'MOQ 30 шт. — 75 шт. в контейнере 40HQ', 'Идеален для города, доставки и проката'],
      pt: ['Bateria de lítio 72V — 1200 ciclos', 'Velocidade máxima 90 km/h, autonomia 100–120 km', 'Carregamento em 5 horas — carga completa durante a noite', '3 velocidades à frente (I / II / III) + 1 marcha à ré', 'Travões de disco dianteiro e traseiro', 'Leve 105 kg, carga máxima 150 kg', 'Cores disponíveis: Vermelho / Azul / Preto', 'MOQ 30 unidades — 75 pcs por contentor 40HQ', 'Ideal para deslocamentos urbanos, entregas e aluguer']
    },
    specs: {
      'Model': 'Electric Street Motorcycle',
      'Battery types': 'Lithium battery',
      'Max speed': '90 km/h',
      'Range': '100–120 km',
      'Battery life': '1200 cycle time',
      'Speed type': '3 Forward speed: I / II / III + 1 Reverse speed',
      'Charging Time': '5 hours',
      'Color Optional': 'Red / Blue / Black',
      'Packing': '1950 × 570 × 1180 mm',
      'L*W*H': '2019 × 719 × 1039 mm',
      'Wheel Base': '1293 mm',
      'Vehicle Weight': '105 kg (without battery)',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / disk',
      'Front / Rear Tyre': '110/70-17, 140/70-17',
      'Min. Ground Clearance': '169 mm',
      'Container Qty': '75 PCS / 40HQ',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'electric street motorcycle, electric motorcycle wholesale, electric street bike 90km/h, lithium battery motorcycle, 72V electric motorcycle, electric motorcycle supplier China, B2B electric motorcycle, MOQ 30 electric motorcycle, 3 speed electric motorcycle, 120km range electric bike'
  },

    /* ================= WY150 Street Bike (原 F450 位置) ================= */
  f450: {
    id: 'f450',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/wy150-main.jpg',
    gallery: [
      'assets/images/wy150-1.png',
      'assets/images/wy150-2.jpg',
      'assets/images/wy150-3.jpg'
    ],
    name: {
      en: 'WY150 Street Bike',
      es: 'WY150 Moto de Calle',
      fr: 'WY150 Moto de Route',
      ar: 'WY150 دراجة نارية للشارع',
      ru: 'WY150 Уличный мотоцикл',
      pt: 'WY150 Moto de Rua'
    },
    description: {
      en: 'The WY150 is a rugged 150cc air-cooled 4-stroke street bike built for daily commuting and utility use. Featuring a 5-speed international gearbox, CDI ignition, electric/kick start, front disc + rear drum brakes, a 11.5L fuel tank and a sturdy rear luggage rack, it delivers reliable performance, low fuel consumption and easy maintenance. MOQ 30 units — ideal for wholesale importers in Brazil, Africa, Latin America and the Middle East.',
      es: 'La WY150 es una moto de calle robusta de 150cc, 4 tiempos refrigerada por aire, diseñada para desplazamientos diarios y uso utilitario. Con caja internacional de 5 velocidades, encendido CDI, arranque eléctrico/pedal, freno de disco delantero + tambor trasero, depósito de 11.5L y portaequipajes trasero resistente, ofrece rendimiento fiable, bajo consumo y fácil mantenimiento. MOQ 30 unidades — ideal para importadores de Brasil, África, América Latina y Oriente Medio.',
      fr: 'La WY150 est une moto de route robuste 150cc, 4 temps refroidie par air, conçue pour les trajets quotidiens et l\'usage utilitaire. Avec boîte internationale 5 vitesses, allumage CDI, démarrage électrique/kick, frein à disque avant + tambour arrière, réservoir 11.5L et porte-bagages arrière solide, elle offre des performances fiables, une faible consommation et un entretien facile. MOQ 30 unités — idéale pour les importateurs au Brésil, en Afrique, en Amérique latine et au Moyen-Orient.',
      ar: 'WY150 هي دراجة نارية قوية للشارع بسعة 150 سي سي، رباعية الأشواط مبردة بالهواء، مصممة للتنقل اليومي والاستخدام العملي. مزودة بعلبة دولية 5 سرعات، وإشعال CDI، وبدء كهربائي/بالقدم، وفرامل قرصية أمامية + طبلية خلفية، وخزان 11.5 لتر، وحمالة أمتعة خلفية متينة، وتوفر أداءً موثوقاً واستهلاكاً منخفضاً للوقود وسهولة في الصيانة. الحد الأدنى 30 وحدة — مثالية لمستوردي البرازيل وأفريقيا وأمريكا اللاتينية والشرق الأوسط.',
      ru: 'WY150 — прочный 150-кубовый 4-тактный уличный мотоцикл с воздушным охлаждением, созданный для ежедневных поездок и утилитарного использования. Оснащён 5-ступенчатой международной КПП, зажиганием CDI, электро/кик-стартером, передним дисковым + задним барабанным тормозом, баком 11.5 л и прочным задним багажником — обеспечивает надёжную работу, низкий расход топлива и простое обслуживание. MOQ 30 шт. — идеален для оптовых импортёров Бразилии, Африки, Латинской Америки и Ближнего Востока.',
      pt: 'A WY150 é uma moto de rua robusta 150cc, 4 tempos refrigerada a ar, projetada para deslocamentos diários e uso utilitário. Com caixa internacional de 5 velocidades, ignição CDI, arranque elétrico/pedal, travão de disco dianteiro + tambor traseiro, depósito de 11.5L e bagageira traseira resistente, oferece desempenho fiável, baixo consumo e fácil manutenção. MOQ 30 unidades — ideal para importadores no Brasil, África, América Latina e Médio Oriente.'
    },
    highlights: {
      en: ['150cc 4-stroke air-cooled engine', '8.2KW / 8000rpm max power, 10N.m / 7500rpm max torque', 'International 5-speed manual gearbox', 'Electric / kick start + CDI ignition', 'Front disc + rear drum brake', '11.5L fuel tank — low consumption for daily commute', 'Sturdy rear luggage rack — practical for utility use', 'Lightweight 120 kg, max loading 150 kg', 'MOQ 30 units — perfect for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Motor 150cc 4T refrigerado por aire', 'Potencia máxima 8.2KW / 8000rpm, par máximo 10N.m / 7500rpm', 'Caja manual internacional de 5 velocidades', 'Arranque eléctrico/pedal + encendido CDI', 'Freno disco delantero + tambor trasero', 'Depósito de 11.5L — bajo consumo para uso diario', 'Portaequipajes trasero resistente — práctico para uso utilitario', 'Ligera 120 kg, carga máxima 150 kg', 'MOQ 30 unidades — para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Moteur 150cc 4T refroidi par air', 'Puissance max 8.2KW / 8000rpm, couple max 10N.m / 7500rpm', 'Boîte manuelle internationale 5 vitesses', 'Démarrage électrique/kick + allumage CDI', 'Frein à disque avant + tambour arrière', 'Réservoir 11.5L — faible consommation pour les trajets quotidiens', 'Porte-bagages arrière solide — pratique pour l\'usage utilitaire', 'Légère 120 kg, charge max 150 kg', 'MOQ 30 unités — pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['محرك 150 سي سي 4 أشواط مبرد بالهواء', 'قوة قصوى 8.2 كيلوواط / 8000 دورة، عزم أقصى 10 نيوتن.متر / 7500 دورة', 'علبة يدوية دولية 5 سرعات', 'بدء كهربائي/بالقدم + إشعال CDI', 'فرامل قرصية أمامية + طبلية خلفية', 'خزان 11.5 لتر — استهلاك منخفض للاستخدام اليومي', 'حمالة أمتعة خلفية متينة — عملية للاستخدام اليومي', 'خفيفة 120 كجم، حمولة قصوى 150 كجم', 'الحد الأدنى 30 وحدة — لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Двигатель 150cc 4T с воздушным охлаждением', 'Макс. мощность 8.2 кВт / 8000 об/мин, макс. крутящий момент 10 Н·м / 7500 об/мин', 'Международная 5-ступенчатая МКПП', 'Электро/кик-стартер + зажигание CDI', 'Передний дисковый + задний барабанный тормоз', 'Бак 11.5 л — низкий расход для ежедневных поездок', 'Прочный задний багажник — практичен в быту', 'Лёгкий 120 кг, макс. нагрузка 150 кг', 'MOQ 30 шт. — для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Motor 150cc 4T refrigerado a ar', 'Potência máx 8.2KW / 8000rpm, binário máx 10N.m / 7500rpm', 'Caixa manual internacional de 5 velocidades', 'Arranque elétrico/pedal + ignição CDI', 'Travão de disco dianteiro + tambor traseiro', 'Depósito de 11.5L — baixo consumo para uso diário', 'Bagageira traseira resistente — prática para uso utilitário', 'Leve 120 kg, carga máxima 150 kg', 'MOQ 30 unidades — para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'WY150',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '150cc',
      'Max. Power': '8.2KW / 8000r/min',
      'Max. Torque': '10N.m / 7500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric / kick',
      'Clutch': 'Manual',
      'Gear': 'International 5 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '2070 × 920 × 1280 mm',
      'Wheel Base': '1300 mm',
      'Seat Height': '820 mm',
      'Vehicle Weight': '120 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / drum',
      'Fuel Tank Volume': '11.5 L',
      'Front / Rear Tyre': 'Front 2.75-18, Rear 3.0-18',
      'Min. Ground Clearance': '150 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'WY150, WY150 street bike, 150cc street motorcycle, 150cc commuter motorcycle, 150cc utility motorcycle, 150cc street bike wholesale, 150cc motorcycle supplier China, commuter bike factory price, bulk 150cc street bike order, OEM 150cc motorcycle, motorcycle MOQ 30, 150cc street bike for Brazil, Africa 150cc motorcycle importer, 4 stroke street bike, air cooled street motorcycle, front disc rear drum brake motorcycle, 11.5L fuel tank street bike, motorcycle with rear rack'
  },

  /* ================= Parts Pro ================= */
    /* ============================================================
     摩托车配件系列（10 款主推出口配件）
     ============================================================ */

  /* ---------------- 1. 链条/链轮套件 ---------------- */
  'parts-chain-sprocket': {
    id: 'parts-chain-sprocket',
    category: 'parts',
    icon: 'fa-link',
    image: 'assets/images/parts-chain-sprocket.jpg',
    gallery: [
      'assets/images/parts-chain-sprocket-1.jpg',
      'assets/images/parts-chain-sprocket-2.jpg',
      'assets/images/parts-chain-sprocket-3.jpg'
    ],
    name: {
      en: 'Motorcycle Chain & Sprocket Kit',
      es: 'Kit de Cadena y Piñón para Moto',
      fr: 'Kit Chaîne et Pignon Moto',
      ar: 'طقم سلسلة وترس الدراجة النارية',
      ru: 'Комплект цепи и звёздочек для мотоцикла',
      pt: 'Kit de Corrente e Pinhão para Moto'
    },
    description: {
      en: 'High-strength motorcycle chain and sprocket kit, compatible with CG125, WAVE125, GN125, AX100 and other popular models. Made of 428H / 420 / 520 high-strength alloy steel, front 14T / rear 36T-42T customizable. Ideal for wholesale importers in South Africa, Nigeria, Malaysia, Brazil and the USA.',
      es: 'Kit de cadena y piñón de moto de alta resistencia, compatible con CG125, WAVE125, GN125, AX100 y otros modelos populares. Fabricado en acero de alta resistencia 428H / 420 / 520, piñón delantero 14T / trasero 36T-42T personalizable. Ideal para importadores mayoristas en Sudáfrica, Nigeria, Malasia, Brasil y EE.UU.',
      fr: 'Kit chaîne et pignon moto haute résistance, compatible avec CG125, WAVE125, GN125, AX100 et autres modèles populaires. Fabriqué en acier haute résistance 428H / 420 / 520, pignon avant 14T / arrière 36T-42T personnalisable. Idéal pour les importateurs grossistes en Afrique du Sud, Nigeria, Malaisie, Brésil et États-Unis.',
      ar: 'طقم سلسلة وترس دراجة نارية عالي القوة، متوافق مع CG125 وWAVE125 وGN125 وAX100 وغيرها من الطرازات الشائعة. مصنوع من فولاذ عالي القوة 428H / 420 / 520، ترس أمامي 14T / خلفي 36T-42T قابل للتخصيص. مثالي للمستوردين بالجملة في جنوب أفريقيا ونيجيريا وماليزيا والبرازيل والولايات المتحدة.',
      ru: 'Высокопрочный комплект цепи и звёздочек для мотоцикла, совместим с CG125, WAVE125, GN125, AX100 и другими популярными моделями. Изготовлен из высокопрочной стали 428H / 420 / 520, передняя 14T / задняя 36T-42T под заказ. Идеален для оптовых импортёров в ЮАР, Нигерии, Малайзии, Бразилии и США.',
      pt: 'Kit de corrente e pinhão de moto de alta resistência, compatível com CG125, WAVE125, GN125, AX100 e outros modelos populares. Fabricado em aço de alta resistência 428H / 420 / 520, pinhão dianteiro 14T / traseiro 36T-42T personalizável. Ideal para importadores grossistas na África do Sul, Nigéria, Malásia, Brasil e EUA.'
    },
    highlights: {
      en: ['428H / 420 / 520 high-strength alloy steel', 'Front 14T / Rear 36T-42T customizable', 'Tensile strength ≥18KN', 'Black / Zinc anti-rust treatment', 'Fits CG125, WAVE125, GN125, AX100', 'MOQ 50 sets', 'ISO 9001 certified', 'Top export transmission part for Africa & SEA'],
      es: ['Acero de alta resistencia 428H / 420 / 520', 'Delantero 14T / Trasero 36T-42T personalizable', 'Resistencia a la tracción ≥18KN', 'Tratamiento antioxidante negro / zinc', 'Compatible con CG125, WAVE125, GN125, AX100', 'MOQ 50 juegos', 'Certificación ISO 9001', 'Pieza de transmisión de exportación top para África y SEA'],
      fr: ['Acier haute résistance 428H / 420 / 520', 'Avant 14T / Arrière 36T-42T personnalisable', 'Résistance à la traction ≥18KN', 'Traitement antirouille noir / zinc', 'Compatible CG125, WAVE125, GN125, AX100', 'MOQ 50 ensembles', 'Certifié ISO 9001', 'Pièce de transmission export top pour Afrique et SEA'],
      ar: ['فولاذ عالي القوة 428H / 420 / 520', 'أمامي 14T / خلفي 36T-42T قابل للتخصيص', 'قوة شد ≥18KN', 'معالجة مضادة للصدأ أسود / زنك', 'متوافق مع CG125 وWAVE125 وGN125 وAX100', 'الحد الأدنى 50 طقم', 'معتمد ISO 9001', 'قطعة نقل تصدير أساسية لأفريقيا وجنوب شرق آسيا'],
      ru: ['Высокопрочная сталь 428H / 420 / 520', 'Передняя 14T / задняя 36T-42T под заказ', 'Прочность на разрыв ≥18KN', 'Антикоррозийная обработка чёрная / цинк', 'Совместим с CG125, WAVE125, GN125, AX100', 'MOQ 50 комплектов', 'Сертификат ISO 9001', 'Топовая экспортная трансмиссионная деталь для Африки и ЮВА'],
      pt: ['Aço de alta resistência 428H / 420 / 520', 'Dianteiro 14T / Traseiro 36T-42T personalizável', 'Resistência à tração ≥18KN', 'Tratamento antiferrugem preto / zinco', 'Compatível com CG125, WAVE125, GN125, AX100', 'MOQ 50 conjuntos', 'Certificado ISO 9001', 'Peça de transmissão de exportação top para África e SEA']
    },
    specs: {
      'Specification': '428H / 420 / 520 High Strength Alloy Steel',
      'Teeth': 'Front 14T / Rear 36T-42T Customizable',
      'Tensile Strength': '≥18KN',
      'Surface': 'Black / Zinc Anti-rust Treatment',
      'Fit Model': 'CG125, WAVE125, GN125, AX100',
      'MOQ': '50 Sets',
      'Certification': 'ISO 9001',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle chain sprocket kit, CG125 chain sprocket, 428H chain kit, motorcycle transmission parts, chain sprocket wholesale, China motorcycle parts supplier, South Africa motorcycle parts, Nigeria motorcycle chain, WAVE125 sprocket kit, GN125 chain kit'
  },

  /* ---------------- 2. 缸体活塞套件 ---------------- */
  'parts-cylinder-piston': {
    id: 'parts-cylinder-piston',
    category: 'parts',
    icon: 'fa-cog',
    image: 'assets/images/parts-cylinder-piston.jpg',
    gallery: [
      'assets/images/parts-cylinder-piston-1.jpg',
      'assets/images/parts-cylinder-piston-2.jpg',
      'assets/images/parts-cylinder-piston-3.jpg'
    ],
    name: {
      en: 'Motorcycle Cylinder Piston Kit',
      es: 'Kit de Cilindro y Pistón para Moto',
      fr: 'Kit Cylindre et Piston Moto',
      ar: 'طقم أسطوانة ومكبس الدراجة النارية',
      ru: 'Комплект цилиндра и поршня для мотоцикла',
      pt: 'Kit de Cilindro e Pistão para Moto'
    },
    description: {
      en: 'Engine overhaul cylinder piston kit for CG125 and other popular models. Aluminum alloy cylinder with cast iron liner, high wear resistance. Full set includes cylinder, piston, ring, pin, circlip and gasket. Ideal for engine rebuild and aftermarket replacement in Africa and Southeast Asia.',
      es: 'Kit de cilindro y pistón para revisión de motor CG125 y otros modelos populares. Cilindro de aleación de aluminio con camisa de hierro fundido, alta resistencia al desgaste. El conjunto completo incluye cilindro, pistón, anillo, pasador, circlip y junta. Ideal para reconstrucción de motores y reemplazo aftermarket en África y Sudeste Asiático.',
      fr: 'Kit cylindre et piston pour révision moteur CG125 et autres modèles populaires. Cylindre en alliage d\'aluminium avec chemise en fonte, haute résistance à l\'usure. L\'ensemble complet comprend cylindre, piston, segment, axe, circlip et joint. Idéal pour la reconstruction moteur et le remplacement aftermarket en Afrique et en Asie du Sud-Est.',
      ar: 'طقم أسطوانة ومكبس لإصلاح محرك CG125 وطرازات شائعة أخرى. أسطوانة من سبائك الألومنيوم مع بطانة من الحديد الزهر، مقاومة عالية للتآكل. تشمل المجموعة الكاملة الأسطوانة والمكبس والحلقة والمسمار والمشبك والحشية. مثالي لإعادة بناء المحرك والاستبدال بعد البيع في أفريقيا وجنوب شرق آسيا.',
      ru: 'Комплект цилиндра и поршня для капитального ремонта двигателя CG125 и других популярных моделей. Алюминиевый цилиндр с чугунной гильзой, высокая износостойкость. Полный комплект включает цилиндр, поршень, кольцо, палец, стопорное кольцо и прокладку. Идеален для капремонта двигателя и замены на вторичном рынке в Африке и Юго-Восточной Азии.',
      pt: 'Kit de cilindro e pistão para revisão de motor CG125 e outros modelos populares. Cilindro em liga de alumínio com camisa de ferro fundido, alta resistência ao desgaste. O conjunto completo inclui cilindro, pistão, anel, pino, circlip e junta. Ideal para reconstrução de motor e substituição aftermarket em África e Sudeste Asiático.'
    },
    highlights: {
      en: ['Bore size 52.4mm (CG125)', 'Aluminum alloy cylinder + cast iron liner', 'Full set: cylinder, piston, ring, pin, circlip, gasket', 'Compression ratio 9:1', 'High wear resistance', 'MOQ 20 sets', 'Perfect for engine overhaul in Africa & SEA'],
      es: ['Diámetro interior 52.4mm (CG125)', 'Cilindro de aleación de aluminio + camisa de hierro fundido', 'Conjunto completo: cilindro, pistón, anillo, pasador, circlip, junta', 'Relación de compresión 9:1', 'Alta resistencia al desgaste', 'MOQ 20 juegos', 'Perfecto para revisión de motor en África y SEA'],
      fr: ['Alésage 52.4mm (CG125)', 'Cylindre alliage d\'aluminium + chemise fonte', 'Ensemble complet : cylindre, piston, segment, axe, circlip, joint', 'Taux de compression 9:1', 'Haute résistance à l\'usure', 'MOQ 20 ensembles', 'Parfait pour la révision moteur en Afrique et SEA'],
      ar: ['قطر التجويف 52.4 مم (CG125)', 'أسطوانة ألومنيوم + بطانة حديد زهر', 'مجموعة كاملة: أسطوانة، مكبس، حلقة، مسمار، مشبك، حشية', 'نسبة الضغط 9:1', 'مقاومة عالية للتآكل', 'الحد الأدنى 20 طقم', 'مثالي لإصلاح المحرك في أفريقيا وجنوب شرق آسيا'],
      ru: ['Диаметр цилиндра 52.4 мм (CG125)', 'Алюминиевый цилиндр + чугунная гильза', 'Полный комплект: цилиндр, поршень, кольцо, палец, стопор, прокладка', 'Степень сжатия 9:1', 'Высокая износостойкость', 'MOQ 20 комплектов', 'Идеален для капремонта двигателя в Африке и ЮВА'],
      pt: ['Diâmetro do cilindro 52.4mm (CG125)', 'Cilindro de liga de alumínio + camisa de ferro fundido', 'Conjunto completo: cilindro, pistão, anel, pino, circlip, junta', 'Taxa de compressão 9:1', 'Alta resistência ao desgaste', 'MOQ 20 conjuntos', 'Perfeito para revisão de motor em África e SEA']
    },
    specs: {
      'Bore Size': '52.4mm (CG125)',
      'Material': 'Aluminum Alloy Cylinder + Cast Iron Liner',
      'Full Set': 'Cylinder, Piston, Ring, Pin, Circlip, Gasket',
      'Compression Ratio': '9:1',
      'Fit Model': 'CG125, WAVE125',
      'MOQ': '20 Sets',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle cylinder piston kit, CG125 cylinder kit, motorcycle engine parts, cylinder piston wholesale, China motorcycle engine parts, WAVE125 cylinder kit, motorcycle overhaul kit, engine rebuild parts, Africa motorcycle engine parts'
  },

  /* ---------------- 3. 离合器片 ---------------- */
  'parts-clutch-plate': {
    id: 'parts-clutch-plate',
    category: 'parts',
    icon: 'fa-circle-notch',
    image: 'assets/images/parts-clutch-plate.jpg',
    gallery: [
      'assets/images/parts-clutch-plate-1.jpg',
      'assets/images/parts-clutch-plate-2.jpg',
      'assets/images/parts-clutch-plate-3.jpg'
    ],
    name: {
      en: 'Motorcycle Clutch Friction Plate',
      es: 'Disco de Embrague para Moto',
      fr: 'Disque d\'Embrayage Moto',
      ar: 'قرص قابض الدراجة النارية',
      ru: 'Фрикционный диск сцепления для мотоцикла',
      pt: 'Disco de Embraiagem para Moto'
    },
    description: {
      en: 'Motorcycle clutch friction plate for CG125, GN125, WAVE125 and other popular models. Made of asbestos-free paper base material (EU standard), with excellent heat resistance and stable friction coefficient. Ideal for transmission overhaul and aftermarket replacement in Africa and Southeast Asia.',
      es: 'Disco de embrague para moto CG125, GN125, WAVE125 y otros modelos populares. Fabricado con material base de papel sin amianto (norma UE), con excelente resistencia al calor y coeficiente de fricción estable. Ideal para revisión de transmisión y reemplazo aftermarket en África y Sudeste Asiático.',
      fr: 'Disque d\'embrayage moto pour CG125, GN125, WAVE125 et autres modèles populaires. Fabriqué en papier sans amiante (norme UE), avec une excellente résistance à la chaleur et un coefficient de friction stable. Idéal pour la révision de transmission et le remplacement aftermarket en Afrique et en Asie du Sud-Est.',
      ar: 'قرص قابض دراجة نارية لـ CG125 وGN125 وWAVE125 وغيرها من الطرازات الشائعة. مصنوع من مادة ورقية خالية من الأسبستوس (معيار الاتحاد الأوروبي)، بمقاومة حرارة ممتازة ومعامل احتكاك مستقر. مثالي لإصلاح ناقل الحركة والاستبدال بعد البيع في أفريقيا وجنوب شرق آسيا.',
      ru: 'Фрикционный диск сцепления для CG125, GN125, WAVE125 и других популярных моделей. Изготовлен из безасбестового бумажного материала (стандарт ЕС), с отличной термостойкостью и стабильным коэффициентом трения. Идеален для ремонта трансмиссии и замены на вторичном рынке в Африке и ЮВА.',
      pt: 'Disco de embraiagem para CG125, GN125, WAVE125 e outros modelos populares. Fabricado em material de papel sem amianto (norma UE), com excelente resistência ao calor e coeficiente de atrito estável. Ideal para revisão de transmissão e substituição aftermarket em África e Sudeste Asiático.'
    },
    highlights: {
      en: ['Size: OD 110mm / ID 91mm / Thickness 3.0mm', 'Asbestos-free paper base (EU standard)', 'Temperature resistance: -20℃ ~ 220℃', 'Friction coefficient: 0.32–0.38', 'Fits CG125, GN125, WAVE125', 'MOQ 500 PCS', 'Stable friction for long service life'],
      es: ['Tamaño: DE 110mm / DI 91mm / Grosor 3.0mm', 'Base de papel sin amianto (norma UE)', 'Resistencia a la temperatura: -20℃ ~ 220℃', 'Coeficiente de fricción: 0.32–0.38', 'Compatible CG125, GN125, WAVE125', 'MOQ 500 PCS', 'Fricción estable para larga vida útil'],
      fr: ['Taille : DE 110mm / DI 91mm / Épaisseur 3.0mm', 'Papier sans amiante (norme UE)', 'Résistance thermique : -20℃ ~ 220℃', 'Coefficient de friction : 0.32–0.38', 'Compatible CG125, GN125, WAVE125', 'MOQ 500 PCS', 'Friction stable pour une longue durée de vie'],
      ar: ['المقاس: قطر خارجي 110 مم / داخلي 91 مم / سمك 3.0 مم', 'ورق خالٍ من الأسبستوس (معيار الاتحاد الأوروبي)', 'مقاومة الحرارة: -20℃ ~ 220℃', 'معامل الاحتكاك: 0.32–0.38', 'متوافق مع CG125 وGN125 وWAVE125', 'الحد الأدنى 500 قطعة', 'احتكاك مستقر لعمر خدمة طويل'],
      ru: ['Размер: OD 110 мм / ID 91 мм / Толщина 3.0 мм', 'Безасбестовая бумажная основа (стандарт ЕС)', 'Термостойкость: -20℃ ~ 220℃', 'Коэффициент трения: 0.32–0.38', 'Совместим с CG125, GN125, WAVE125', 'MOQ 500 шт.', 'Стабильное трение и долгий срок службы'],
      pt: ['Tamanho: DE 110mm / DI 91mm / Espessura 3.0mm', 'Papel sem amianto (norma UE)', 'Resistência à temperatura: -20℃ ~ 220℃', 'Coeficiente de atrito: 0.32–0.38', 'Compatível com CG125, GN125, WAVE125', 'MOQ 500 PCS', 'Atrito estável para longa vida útil']
    },
    specs: {
      'Size': 'OD 110mm / ID 91mm / Thickness 3.0mm',
      'Material': 'Asbestos-free Paper Base (EU Standard)',
      'Temperature Resistance': '-20℃ ~ 220℃',
      'Friction Coefficient': '0.32–0.38',
      'Fit Model': 'CG125, GN125, WAVE125',
      'MOQ': '500 PCS',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle clutch friction plate, CG125 clutch plate, clutch disc motorcycle, motorcycle clutch parts, clutch plate wholesale, China motorcycle clutch supplier, Africa motorcycle clutch, WAVE125 clutch plate, GN125 clutch disc, transmission wear parts'
  },

  /* ---------------- 4. LED 大灯 ---------------- */
  'parts-led-headlight': {
    id: 'parts-led-headlight',
    category: 'parts',
    icon: 'fa-lightbulb',
    image: 'assets/images/parts-led-headlight.jpg',
    gallery: [
      'assets/images/parts-led-headlight-1.jpg',
      'assets/images/parts-led-headlight-2.jpg',
      'assets/images/parts-led-headlight-3.jpg'
    ],
    name: {
      en: 'Motorcycle LED Headlight',
      es: 'Faro LED para Moto',
      fr: 'Phares LED Moto',
      ar: 'مصباح LED للدراجة النارية',
      ru: 'Светодиодная фара для мотоцикла',
      pt: 'Farol LED para Moto'
    },
    description: {
      en: 'High brightness motorcycle LED headlight retrofit part with DC 12V input, 30W/45W/60W optional. IP67 waterproof, 6000K white light, CE / RoHS / DOT optional certification. High profit export goods for USA, Europe and global retrofit markets.',
      es: 'Faro LED para moto de alta luminosidad con entrada DC 12V, potencia 30W/45W/60W opcional. Impermeable IP67, luz blanca 6000K, certificación CE / RoHS / DOT opcional. Producto de exportación de alta rentabilidad para EE.UU., Europa y mercados globales de retrofit.',
      fr: 'Phare LED moto haute luminosité avec entrée DC 12V, puissance 30W/45W/60W en option. Étanche IP67, lumière blanche 6000K, certification CE / RoHS / DOT en option. Produit d\'exportation à forte rentabilité pour les États-Unis, l\'Europe et les marchés mondiaux du retrofit.',
      ar: 'مصباح LED عالي السطوع للدراجة النارية بمدخل DC 12 فولت، بقوة 30/45/60 واط اختياري. مقاوم للماء IP67، ضوء أبيض 6000K، شهادة CE / RoHS / DOT اختيارية. سلعة تصديرية عالية الربح للولايات المتحدة وأوروبا وأسواق التعديل العالمية.',
      ru: 'Светодиодная фара для мотоцикла с высокой яркостью, вход DC 12 В, мощность 30/45/60 Вт на выбор. Водонепроницаемая IP67, белый свет 6000K, сертификация CE / RoHS / DOT опционально. Высокорентабельный экспортный товар для США, Европы и мировых рынков тюнинга.',
      pt: 'Farol LED de alta luminosidade para moto com entrada DC 12V, potência 30W/45W/60W opcional. Impermeável IP67, luz branca 6000K, certificação CE / RoHS / DOT opcional. Produto de exportação de alta rentabilidade para EUA, Europa e mercados globais de retrofit.'
    },
    highlights: {
      en: ['Voltage: DC 12V', 'Power: 30W / 45W / 60W optional', 'Waterproof: IP67', 'Color temperature: 6000K white light', 'Certification: CE, RoHS, DOT optional', 'MOQ 20 PCS', 'High profit retrofit export goods'],
      es: ['Voltaje: DC 12V', 'Potencia: 30W / 45W / 60W opcional', 'Impermeable: IP67', 'Temperatura de color: 6000K luz blanca', 'Certificación: CE, RoHS, DOT opcional', 'MOQ 20 PCS', 'Producto de retrofit de alta rentabilidad'],
      fr: ['Tension : DC 12V', 'Puissance : 30W / 45W / 60W en option', 'Étanche : IP67', 'Température de couleur : 6000K lumière blanche', 'Certification : CE, RoHS, DOT en option', 'MOQ 20 PCS', 'Produit de retrofit à forte rentabilité'],
      ar: ['الجهد: DC 12 فولت', 'القوة: 30/45/60 واط اختياري', 'مقاوم للماء: IP67', 'درجة حرارة اللون: 6000K ضوء أبيض', 'الشهادة: CE، RoHS، DOT اختياري', 'الحد الأدنى 20 قطعة', 'سلعة تعديل عالية الربح'],
      ru: ['Напряжение: DC 12 В', 'Мощность: 30 / 45 / 60 Вт на выбор', 'Водонепроницаемость: IP67', 'Цветовая температура: 6000K белый свет', 'Сертификация: CE, RoHS, DOT опционально', 'MOQ 20 шт.', 'Высокорентабельный товар для тюнинга'],
      pt: ['Tensão: DC 12V', 'Potência: 30W / 45W / 60W opcional', 'Impermeável: IP67', 'Temperatura de cor: 6000K luz branca', 'Certificação: CE, RoHS, DOT opcional', 'MOQ 20 PCS', 'Produto de retrofit de alta rentabilidade']
    },
    specs: {
      'Voltage': 'DC 12V',
      'Power': '30W / 45W / 60W Optional',
      'Waterproof': 'IP67',
      'Color Temperature': '6000K White Light',
      'Certification': 'CE, RoHS, DOT Optional',
      'MOQ': '20 PCS',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle LED headlight, LED motorcycle headlight wholesale, IP67 motorcycle headlight, motorcycle retrofit LED light, 12V motorcycle headlight, China LED motorcycle light supplier, DOT motorcycle headlight, high brightness motorcycle LED, motorcycle headlight retrofit, LED headlight for USA Europe'
  },

  /* ---------------- 5. LCD 仪表 ---------------- */
  'parts-lcd-speedometer': {
    id: 'parts-lcd-speedometer',
    category: 'parts',
    icon: 'fa-tachometer-alt',
    image: 'assets/images/parts-lcd-speedometer.jpg',
    gallery: [
      'assets/images/parts-lcd-speedometer-1.jpg',
      'assets/images/parts-lcd-speedometer-2.jpg',
      'assets/images/parts-lcd-speedometer-3.jpg'
    ],
    name: {
      en: 'LCD Digital Speedometer',
      es: 'Velocímetro Digital LCD',
      fr: 'Compteur Digital LCD',
      ar: 'عداد سرعة رقمي LCD',
      ru: 'Цифровой LCD-спидометр',
      pt: 'Velocímetro Digital LCD'
    },
    description: {
      en: 'Multi-function LCD digital speedometer for Yamaha BWS/Zuma125 and similar models. DC 12V input, IP67 waterproof. Displays speed, RPM, fuel, mileage, voltage and gear. Working temperature -20℃ ~ 70℃. Ideal for scooter and motorcycle retrofit markets worldwide.',
      es: 'Velocímetro digital LCD multifunción para Yamaha BWS/Zuma125 y modelos similares. Entrada DC 12V, impermeable IP67. Muestra velocidad, RPM, combustible, kilometraje, voltaje y marcha. Temperatura de trabajo -20℃ ~ 70℃. Ideal para mercados de retrofit de scooters y motos en todo el mundo.',
      fr: 'Compteur digital LCD multifonction pour Yamaha BWS/Zuma125 et modèles similaires. Entrée DC 12V, étanche IP67. Affiche vitesse, RPM, carburant, kilométrage, tension et rapport. Température de fonctionnement -20℃ ~ 70℃. Idéal pour les marchés du retrofit scooter et moto dans le monde entier.',
      ar: 'عداد سرعة رقمي LCD متعدد الوظائف لـ Yamaha BWS/Zuma125 والطرازات المشابهة. مدخل DC 12 فولت، مقاوم للماء IP67. يعرض السرعة ودورات المحرك والوقود والمسافة والجهد والترس. درجة حرارة التشغيل -20℃ ~ 70℃. مثالي لأسواق تعديل الدراجات النارية والسكوتر في جميع أنحاء العالم.',
      ru: 'Многофункциональный цифровой LCD-спидометр для Yamaha BWS/Zuma125 и аналогичных моделей. Вход DC 12 В, водонепроницаемость IP67. Отображает скорость, обороты, топливо, пробег, напряжение и передачу. Рабочая температура -20℃ ~ 70℃. Идеален для мировых рынков тюнинга скутеров и мотоциклов.',
      pt: 'Velocímetro digital LCD multifunções para Yamaha BWS/Zuma125 e modelos similares. Entrada DC 12V, impermeável IP67. Exibe velocidade, RPM, combustível, quilometragem, tensão e mudança. Temperatura de funcionamento -20℃ ~ 70℃. Ideal para mercados de retrofit de scooters e motos em todo o mundo.'
    },
    highlights: {
      en: ['Voltage: DC 12V', 'Waterproof: IP67', 'Display: Speed, RPM, Fuel, Mileage, Voltage, Gear', 'Working temp: -20℃ ~ 70℃', 'Fits Yamaha BWS/Zuma125 & similar', 'MOQ 10 sets', 'Multi-function digital dashboard retrofit'],
      es: ['Voltaje: DC 12V', 'Impermeable: IP67', 'Pantalla: Velocidad, RPM, Combustible, Kilometraje, Voltaje, Marcha', 'Temp. de trabajo: -20℃ ~ 70℃', 'Compatible Yamaha BWS/Zuma125 y similares', 'MOQ 10 juegos', 'Retrofit de panel digital multifunción'],
      fr: ['Tension : DC 12V', 'Étanche : IP67', 'Affichage : Vitesse, RPM, Carburant, Kilométrage, Tension, Rapport', 'Temp. de travail : -20℃ ~ 70℃', 'Compatible Yamaha BWS/Zuma125 et similaires', 'MOQ 10 ensembles', 'Retrofit de tableau de bord digital multifonction'],
      ar: ['الجهد: DC 12 فولت', 'مقاوم للماء: IP67', 'العرض: السرعة، دورات المحرك، الوقود، المسافة، الجهد، الترس', 'درجة حرارة التشغيل: -20℃ ~ 70℃', 'متوافق مع Yamaha BWS/Zuma125 وما شابه', 'الحد الأدنى 10 أطقم', 'تعديل لوحة عدادات رقمية متعددة الوظائف'],
      ru: ['Напряжение: DC 12 В', 'Водонепроницаемость: IP67', 'Дисплей: скорость, обороты, топливо, пробег, напряжение, передача', 'Рабочая температура: -20℃ ~ 70℃', 'Совместим с Yamaha BWS/Zuma125 и аналогами', 'MOQ 10 комплектов', 'Многофункциональный цифровой тюнинг приборной панели'],
      pt: ['Tensão: DC 12V', 'Impermeável: IP67', 'Ecrã: Velocidade, RPM, Combustível, Quilometragem, Tensão, Mudança', 'Temp. de funcionamento: -20℃ ~ 70℃', 'Compatível com Yamaha BWS/Zuma125 e similares', 'MOQ 10 conjuntos', 'Retrofit de painel digital multifunções']
    },
    specs: {
      'Voltage': 'DC 12V',
      'Waterproof': 'IP67',
      'Display': 'Speed, RPM, Fuel, Mileage, Voltage, Gear',
      'Working Temp': '-20℃ ~ 70℃',
      'Fit Model': 'Yamaha BWS / Zuma 125 & Similar',
      'MOQ': '10 Sets',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle LCD speedometer, digital speedometer motorcycle, LCD dashboard motorcycle, motorcycle digital meter wholesale, Yamaha BWS speedometer, Zuma125 digital dashboard, motorcycle retrofit dashboard, China motorcycle speedometer supplier, IP67 motorcycle meter'
  },

  /* ---------------- 6. 刹车盘/刹车片 ---------------- */
  'parts-brake-disc-pad': {
    id: 'parts-brake-disc-pad',
    category: 'parts',
    icon: 'fa-circle',
    image: 'assets/images/parts-brake-disc-pad.jpg',
    gallery: [
      'assets/images/parts-brake-disc-pad-1.jpg',
      'assets/images/parts-brake-disc-pad-2.jpg',
      'assets/images/parts-brake-disc-pad-3.jpg'
    ],
    name: {
      en: 'Brake Disc & Brake Pad Set',
      es: 'Disco de Freno y Pastillas',
      fr: 'Disque de Frein et Plaquettes',
      ar: 'قرص فرامل وطقم وسادات',
      ru: 'Тормозной диск и колодки',
      pt: 'Disco de Travão e Pastilhas'
    },
    description: {
      en: 'Motorcycle brake disc and brake pad set with excellent heat dissipation. 420 stainless steel disc (220mm OD, 3.0/3.5mm thickness) and semi-metal or ceramic pad options. Fits CG125, GN125, WAVE125 and other popular models. Ideal for wholesale brake parts buyers worldwide.',
      es: 'Disco de freno y pastillas de freno para moto con excelente disipación de calor. Disco de acero inoxidable 420 (220mm DE, 3.0/3.5mm grosor) y opciones de pastillas semi-metálicas o cerámicas. Compatible CG125, GN125, WAVE125 y otros modelos populares. Ideal para compradores mayoristas de frenos en todo el mundo.',
      fr: 'Disque de frein et plaquettes de frein moto avec excellente dissipation thermique. Disque en acier inoxydable 420 (DE 220mm, épaisseur 3.0/3.5mm) et options plaquettes semi-métalliques ou céramiques. Compatible CG125, GN125, WAVE125 et autres modèles populaires. Idéal pour les acheteurs grossistes de freins dans le monde entier.',
      ar: 'قرص فرامل وطقم وسادات فرامل للدراجة النارية مع تبديد حرارة ممتاز. قرص فولاذ مقاوم للصدأ 420 (قطر خارجي 220 مم، سمك 3.0/3.5 مم) وخيارات وسادات نصف معدنية أو سيراميك. متوافق مع CG125 وGN125 وWAVE125 وغيرها. مثالي لمشتري قطع الفرامل بالجملة في جميع أنحاء العالم.',
      ru: 'Тормозной диск и колодки для мотоцикла с отличным теплоотводом. Диск из нержавеющей стали 420 (OD 220 мм, толщина 3.0/3.5 мм) и варианты полуметаллических или керамических колодок. Совместим с CG125, GN125, WAVE125 и другими популярными моделями. Идеален для оптовых покупателей тормозных деталей по всему миру.',
      pt: 'Disco de travão e pastilhas de travão para moto com excelente dissipação de calor. Disco em aço inoxidável 420 (DE 220mm, espessura 3.0/3.5mm) e opções de pastilhas semi-metálicas ou cerâmicas. Compatível com CG125, GN125, WAVE125 e outros modelos populares. Ideal para compradores grossistas de travões em todo o mundo.'
    },
    highlights: {
      en: ['Disc material: 420 stainless steel', 'Disc size: 220mm OD, 3.0/3.5mm thickness', 'Pad material: Semi-metal / Ceramic optional', 'Fits CG125, GN125, WAVE125', 'Excellent heat dissipation', 'MOQ 100 sets', 'Top export brake parts for global market'],
      es: ['Material del disco: acero inoxidable 420', 'Tamaño del disco: 220mm DE, grosor 3.0/3.5mm', 'Material de pastillas: Semi-metálico / Cerámico opcional', 'Compatible CG125, GN125, WAVE125', 'Excelente disipación de calor', 'MOQ 100 juegos', 'Piezas de freno de exportación top para el mercado global'],
      fr: ['Matériau du disque : acier inoxydable 420', 'Taille du disque : DE 220mm, épaisseur 3.0/3.5mm', 'Matériau des plaquettes : Semi-métallique / Céramique en option', 'Compatible CG125, GN125, WAVE125', 'Excellente dissipation thermique', 'MOQ 100 ensembles', 'Pièces de freinage export top pour le marché mondial'],
      ar: ['مادة القرص: فولاذ مقاوم للصدأ 420', 'مقاس القرص: قطر خارجي 220 مم، سمك 3.0/3.5 مم', 'مادة الوسادات: نصف معدنية / سيراميك اختياري', 'متوافق مع CG125 وGN125 وWAVE125', 'تبديد حرارة ممتاز', 'الحد الأدنى 100 طقم', 'قطع فرامل تصديرية أساسية للسوق العالمية'],
      ru: ['Материал диска: нержавеющая сталь 420', 'Размер диска: OD 220 мм, толщина 3.0/3.5 мм', 'Материал колодок: полуметалл / керамика на выбор', 'Совместим с CG125, GN125, WAVE125', 'Отличный теплоотвод', 'MOQ 100 комплектов', 'Топовые экспортные тормозные детали для мирового рынка'],
      pt: ['Material do disco: aço inoxidável 420', 'Tamanho do disco: DE 220mm, espessura 3.0/3.5mm', 'Material das pastilhas: Semi-metálico / Cerâmico opcional', 'Compatível com CG125, GN125, WAVE125', 'Excelente dissipação de calor', 'MOQ 100 conjuntos', 'Peças de travão de exportação top para o mercado global']
    },
    specs: {
      'Disc Material': '420 Stainless Steel',
      'Disc Size': '220mm OD, 3.0/3.5mm Thickness',
      'Pad Material': 'Semi-metal / Ceramic Optional',
      'Fit Model': 'CG125, GN125, WAVE125',
      'MOQ': '100 Sets',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle brake disc, motorcycle brake pad set, CG125 brake disc, GN125 brake pads, brake disc wholesale, China motorcycle brake supplier, motorcycle brake parts, semi-metal brake pads, ceramic brake pads motorcycle, 220mm brake disc'
  },

  /* ---------------- 7. 排气管 ---------------- */
  'parts-exhaust-muffler': {
    id: 'parts-exhaust-muffler',
    category: 'parts',
    icon: 'fa-wind',
    image: 'assets/images/parts-exhaust-muffler.jpg',
    gallery: [
      'assets/images/parts-exhaust-muffler-1.jpg',
      'assets/images/parts-exhaust-muffler-2.jpg',
      'assets/images/parts-exhaust-muffler-3.jpg'
    ],
    name: {
      en: 'Stainless Steel Exhaust Muffler',
      es: 'Silenciador de Escape de Acero Inoxidable',
      fr: 'Silencieux d\'Échappement en Acier Inoxydable',
      ar: 'كاتم صوت من الفولاذ المقاوم للصدأ',
      ru: 'Глушитель из нержавеющей стали',
      pt: 'Silenciador de Escape em Aço Inoxidável'
    },
    description: {
      en: 'Universal modified stainless steel exhaust muffler for 200cc-400cc motorcycles. Made of 304 stainless steel, 51mm universal interface, temperature resistance ≤600℃, sound level 92db with adjustable silencer plug. Ideal for motorcycle modification and aftermarket replacement worldwide.',
      es: 'Silenciador de escape universal modificado de acero inoxidable para motos de 200cc-400cc. Fabricado en acero inoxidable 304, interfaz universal de 51mm, resistencia a la temperatura ≤600℃, nivel de sonido 92db con tapón silenciador ajustable. Ideal para modificación de motos y reemplazo aftermarket en todo el mundo.',
      fr: 'Silencieux d\'échappement universel modifié en acier inoxydable pour motos 200cc-400cc. Fabriqué en acier inoxydable 304, interface universelle 51mm, résistance thermique ≤600℃, niveau sonore 92db avec bouchon silencieux réglable. Idéal pour la modification de moto et le remplacement aftermarket dans le monde entier.',
      ar: 'كاتم صوت عالمي معدل من الفولاذ المقاوم للصدأ للدراجات النارية 200-400 سي سي. مصنوع من الفولاذ المقاوم للصدأ 304، واجهة عالمية 51 مم، مقاومة حرارة ≤600℃، مستوى صوت 92 ديسيبل مع سدادة كاتم قابلة للتعديل. مثالي لتعديل الدراجات النارية والاستبدال بعد البيع في جميع أنحاء العالم.',
      ru: 'Универсальный тюнинговый глушитель из нержавеющей стали для мотоциклов 200-400 куб.см. Изготовлен из нержавеющей стали 304, универсальный интерфейс 51 мм, термостойкость ≤600℃, уровень шума 92 дБ с регулируемой заглушкой. Идеален для тюнинга мотоциклов и замены на вторичном рынке по всему миру.',
      pt: 'Silenciador de escape universal modificado em aço inoxidável para motos 200cc-400cc. Fabricado em aço inoxidável 304, interface universal 51mm, resistência à temperatura ≤600℃, nível de som 92db com tampão silenciador ajustável. Ideal para modificação de moto e substituição aftermarket em todo o mundo.'
    },
    highlights: {
      en: ['Material: 304 stainless steel', 'Interface: 51mm universal caliber', 'Temp resistance: ≤600℃', 'Sound level: 92db (adjustable silencer plug)', 'Fits 200cc-400cc motorcycles', 'MOQ 10 PCS', 'Universal modified exhaust for global market'],
      es: ['Material: acero inoxidable 304', 'Interfaz: calibre universal 51mm', 'Resistencia temp.: ≤600℃', 'Nivel de sonido: 92db (tapón silenciador ajustable)', 'Compatible motos 200cc-400cc', 'MOQ 10 PCS', 'Escape modificado universal para el mercado global'],
      fr: ['Matériau : acier inoxydable 304', 'Interface : calibre universel 51mm', 'Résistance temp. : ≤600℃', 'Niveau sonore : 92db (bouchon silencieux réglable)', 'Compatible motos 200cc-400cc', 'MOQ 10 PCS', 'Échappement modifié universel pour le marché mondial'],
      ar: ['المادة: فولاذ مقاوم للصدأ 304', 'الواجهة: عيار عالمي 51 مم', 'مقاومة الحرارة: ≤600℃', 'مستوى الصوت: 92 ديسيبل (سدادة كاتم قابلة للتعديل)', 'متوافق مع الدراجات 200-400 سي سي', 'الحد الأدنى 10 قطع', 'كاتم صوت عالمي معدل للسوق العالمية'],
      ru: ['Материал: нержавеющая сталь 304', 'Интерфейс: универсальный 51 мм', 'Термостойкость: ≤600℃', 'Уровень шума: 92 дБ (регулируемая заглушка)', 'Совместим с мотоциклами 200-400 куб.см', 'MOQ 10 шт.', 'Универсальный тюнинговый глушитель для мирового рынка'],
      pt: ['Material: aço inoxidável 304', 'Interface: calibre universal 51mm', 'Resistência temp.: ≤600℃', 'Nível de som: 92db (tampão silenciador ajustável)', 'Compatível com motos 200cc-400cc', 'MOQ 10 PCS', 'Escape modificado universal para o mercado global']
    },
    specs: {
      'Material': '304 Stainless Steel',
      'Interface': '51mm Universal Caliber',
      'Temp Resistance': '≤600℃',
      'Sound Level': '92db (Silencer Plug Adjustable)',
      'Fit Model': '200cc–400cc Motorcycles',
      'MOQ': '10 PCS',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle exhaust muffler, stainless steel exhaust motorcycle, universal exhaust muffler, 51mm exhaust pipe, motorcycle modified exhaust, China motorcycle exhaust supplier, 200cc exhaust muffler, 400cc exhaust system, motorcycle slip on exhaust, exhaust muffler wholesale'
  },

  /* ---------------- 8. 发动机垫片套件 ---------------- */
  'parts-gasket-set': {
    id: 'parts-gasket-set',
    category: 'parts',
    icon: 'fa-layer-group',
    image: 'assets/images/parts-gasket-set.jpg',
    gallery: [
      'assets/images/parts-gasket-set-1.jpg',
      'assets/images/parts-gasket-set-2.jpg',
      'assets/images/parts-gasket-set-3.jpg'
    ],
    name: {
      en: 'Engine Full Gasket Set',
      es: 'Juego Completo de Juntas de Motor',
      fr: 'Kit Complet de Joints Moteur',
      ar: 'طقم حشيات محرك كامل',
      ru: 'Полный комплект прокладок двигателя',
      pt: 'Conjunto Completo de Juntas do Motor'
    },
    description: {
      en: 'Complete engine overhaul gasket kit for WAVE125, CG125 and other popular models. Made of asbestos-free composite paper, includes head gasket, cylinder gasket, crankcase gasket, oil seal and O-ring. Oil-proof, high-temp resistant, anti-leakage. Ideal for engine rebuild wholesale in Africa and Southeast Asia.',
      es: 'Juego completo de juntas para revisión de motor WAVE125, CG125 y otros modelos populares. Fabricado en papel compuesto sin amianto, incluye junta de culata, junta de cilindro, junta de cárter, retén de aceite y junta tórica. Resistente al aceite, a altas temperaturas y anti-fugas. Ideal para mayoristas de reconstrucción de motores en África y Sudeste Asiático.',
      fr: 'Kit complet de joints pour révision moteur WAVE125, CG125 et autres modèles populaires. Fabriqué en papier composite sans amiante, comprend joint de culasse, joint de cylindre, joint de carter, joint d\'huile et joint torique. Résistant à l\'huile, aux hautes températures et anti-fuites. Idéal pour les grossistes en reconstruction moteur en Afrique et en Asie du Sud-Est.',
      ar: 'طقم حشيات كامل لإصلاح محرك WAVE125 وCG125 وغيرها من الطرازات الشائعة. مصنوع من ورق مركب خالٍ من الأسبستوس، يشمل حشية الرأس وحشية الأسطوانة وحشية علبة المرافق وحشية الزيت وحلقة O. مقاوم للزيت ودرجات الحرارة العالية ومانع للتسرب. مثالي لتجارة إعادة بناء المحرك بالجملة في أفريقيا وجنوب شرق آسيا.',
      ru: 'Полный комплект прокладок для капремонта двигателя WAVE125, CG125 и других популярных моделей. Изготовлен из безасбестового композитного материала, включает прокладку ГБЦ, прокладку цилиндра, прокладку картера, сальник и O-ring. Маслостойкий, термостойкий, герметичный. Идеален для оптовой продажи при капремонте двигателей в Африке и ЮВА.',
      pt: 'Conjunto completo de juntas para revisão de motor WAVE125, CG125 e outros modelos populares. Fabricado em papel compósito sem amianto, inclui junta da cabeça, junta do cilindro, junta do cárter, retentor de óleo e O-ring. Resistente ao óleo, a altas temperaturas e anti-fugas. Ideal para grossistas de reconstrução de motores em África e Sudeste Asiático.'
    },
    highlights: {
      en: ['Material: Asbestos-free composite paper', 'Includes head gasket, cylinder gasket, crankcase gasket, oil seal, O-ring', 'Oil-proof, high-temp resistant, anti-leakage', 'Fits WAVE125, CG125', 'MOQ 1000 sets', 'Complete overhaul kit for engine rebuild'],
      es: ['Material: papel compuesto sin amianto', 'Incluye junta de culata, junta de cilindro, junta de cárter, retén de aceite, junta tórica', 'Resistente al aceite, a altas temperaturas, anti-fugas', 'Compatible WAVE125, CG125', 'MOQ 1000 juegos', 'Kit completo de revisión para reconstrucción de motor'],
      fr: ['Matériau : papier composite sans amiante', 'Comprend joint de culasse, joint de cylindre, joint de carter, joint d\'huile, joint torique', 'Résistant à l\'huile, hautes températures, anti-fuite', 'Compatible WAVE125, CG125', 'MOQ 1000 ensembles', 'Kit complet de révision pour reconstruction moteur'],
      ar: ['المادة: ورق مركب خالٍ من الأسبستوس', 'يشمل حشية الرأس، حشية الأسطوانة، حشية علبة المرافق، حشية الزيت، حلقة O', 'مقاوم للزيت، للحرارة العالية، مانع للتسرب', 'متوافق مع WAVE125 وCG125', 'الحد الأدنى 1000 طقم', 'طقم إصلاح كامل لإعادة بناء المحرك'],
      ru: ['Материал: безасбестовый композитный материал', 'Включает прокладку ГБЦ, цилиндра, картера, сальник, O-ring', 'Маслостойкий, термостойкий, герметичный', 'Совместим с WAVE125, CG125', 'MOQ 1000 комплектов', 'Полный комплект для капремонта двигателя'],
      pt: ['Material: papel compósito sem amianto', 'Inclui junta da cabeça, junta do cilindro, junta do cárter, retentor de óleo, O-ring', 'Resistente ao óleo, a altas temperaturas, anti-fugas', 'Compatível com WAVE125, CG125', 'MOQ 1000 conjuntos', 'Conjunto completo de revisão para reconstrução de motor']
    },
    specs: {
      'Material': 'Asbestos-free Composite Paper',
      'Include': 'Head Gasket, Cylinder Gasket, Crankcase Gasket, Oil Seal, O-ring',
      'Feature': 'Oil-proof, High Temp Resistant, Anti-leakage',
      'Fit Model': 'WAVE125, CG125',
      'MOQ': '1000 Sets',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle full gasket set, engine gasket kit, WAVE125 gasket set, CG125 gasket kit, motorcycle gasket wholesale, China motorcycle gasket supplier, engine overhaul gasket, head gasket motorcycle, crankcase gasket, motorcycle O-ring kit'
  },

  /* ---------------- 9. 后减震器 ---------------- */
  'parts-shock-absorber': {
    id: 'parts-shock-absorber',
    category: 'parts',
    icon: 'fa-arrows-alt-v',
    image: 'assets/images/parts-shock-absorber.jpg',
    gallery: [
      'assets/images/parts-shock-absorber-1.jpg',
      'assets/images/parts-shock-absorber-2.jpg',
      'assets/images/parts-shock-absorber-3.jpg'
    ],
    name: {
      en: 'Adjustable Rear Shock Absorber',
      es: 'Amortiguador Trasero Ajustable',
      fr: 'Amortisseur Arrière Réglable',
      ar: 'ممتص صدمات خلفي قابل للتعديل',
      ru: 'Регулируемый задний амортизатор',
      pt: 'Amortecedor Traseiro Ajustável'
    },
    description: {
      en: 'Hydraulic adjustable rear shock absorber for CG125 and off-road motorcycles. Made of 45# steel piston rod and aluminum alloy shell, stroke 120-150mm, spring preload adjustable, hydraulic damping. Ideal for suspension upgrade and aftermarket replacement for global motorcycle markets.',
      es: 'Amortiguador trasero hidráulico ajustable para CG125 y motos off-road. Fabricado con varilla de pistón de acero 45# y carcasa de aleación de aluminio, carrera 120-150mm, precarga de resorte ajustable, amortiguación hidráulica. Ideal para mejora de suspensión y reemplazo aftermarket para mercados globales.',
      fr: 'Amortisseur arrière hydraulique réglable pour CG125 et motos tout-terrain. Fabriqué avec tige de piston en acier 45# et boîtier en alliage d\'aluminium, course 120-150mm, précharge de ressort réglable, amortissement hydraulique. Idéal pour l\'amélioration de suspension et le remplacement aftermarket pour les marchés mondiaux.',
      ar: 'ممتص صدمات خلفي هيدروليكي قابل للتعديل لـ CG125 والدراجات الوعرة. مصنوع من قضيب مكبس فولاذي 45# وهيكل من سبائك الألومنيوم، شوط 120-150 مم، ضبط مسبق للنابض، تخميد هيدروليكي. مثالي لترقية التعليق والاستبدال بعد البيع لأسواق الدراجات العالمية.',
      ru: 'Гидравлический регулируемый задний амортизатор для CG125 и внедорожных мотоциклов. Изготовлен из стального штока 45# и алюминиевого корпуса, ход 120-150 мм, регулируемая предварительная нагрузка пружины, гидравлическое демпфирование. Идеален для апгрейда подвески и замены на вторичном рынке для мировых мотоциклетных рынков.',
      pt: 'Amortecedor traseiro hidráulico ajustável para CG125 e motos off-road. Fabricado com haste de pistão em aço 45# e carcaça em liga de alumínio, curso 120-150mm, pré-carga da mola ajustável, amortecimento hidráulico. Ideal para upgrade de suspensão e substituição aftermarket para mercados globais de motos.'
    },
    highlights: {
      en: ['Material: 45# steel piston rod + aluminum alloy shell', 'Stroke: 120–150mm', 'Spring preload adjustable', 'Hydraulic damping', 'Fits CG125, off-road motorcycles', 'MOQ 20 PCS', 'Suspension upgrade & replacement'],
      es: ['Material: varilla de pistón de acero 45# + carcasa de aleación de aluminio', 'Carrera: 120–150mm', 'Precarga de resorte ajustable', 'Amortiguación hidráulica', 'Compatible CG125, motos off-road', 'MOQ 20 PCS', 'Mejora y reemplazo de suspensión'],
      fr: ['Matériau : tige de piston en acier 45# + boîtier alliage d\'aluminium', 'Course : 120–150mm', 'Précharge de ressort réglable', 'Amortissement hydraulique', 'Compatible CG125, motos tout-terrain', 'MOQ 20 PCS', 'Amélioration et remplacement de suspension'],
      ar: ['المادة: قضيب مكبس فولاذي 45# + هيكل سبائك ألومنيوم', 'الشوط: 120-150 مم', 'ضبط مسبق للنابض', 'تخميد هيدروليكي', 'متوافق مع CG125 والدراجات الوعرة', 'الحد الأدنى 20 قطعة', 'ترقية واستبدال التعليق'],
      ru: ['Материал: стальной шток 45# + алюминиевый корпус', 'Ход: 120-150 мм', 'Регулируемая предварительная нагрузка пружины', 'Гидравлическое демпфирование', 'Совместим с CG125, внедорожными мотоциклами', 'MOQ 20 шт.', 'Апгрейд и замена подвески'],
      pt: ['Material: haste de pistão em aço 45# + carcaça em liga de alumínio', 'Curso: 120–150mm', 'Pré-carga da mola ajustável', 'Amortecimento hidráulico', 'Compatível com CG125, motos off-road', 'MOQ 20 PCS', 'Upgrade e substituição de suspensão']
    },
    specs: {
      'Material': '45# Steel Piston Rod + Aluminum Alloy Shell',
      'Stroke': '120–150mm',
      'Function': 'Spring Preload Adjustable',
      'Damping': 'Hydraulic Damping',
      'Fit Model': 'CG125, Off-road Motorcycles',
      'MOQ': '20 PCS',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle rear shock absorber, adjustable shock absorber motorcycle, CG125 shock absorber, hydraulic shock absorber, motorcycle suspension parts, shock absorber wholesale, China motorcycle shock supplier, off-road motorcycle shock, spring preload shock, motorcycle suspension upgrade'
  },

  /* ---------------- 10. 碟刹报警锁 ---------------- */
  'parts-disc-lock': {
    id: 'parts-disc-lock',
    category: 'parts',
    icon: 'fa-lock',
    image: 'assets/images/parts-disc-lock.jpg',
    gallery: [
      'assets/images/parts-disc-lock-1.jpg',
      'assets/images/parts-disc-lock-2.jpg',
      'assets/images/parts-disc-lock-3.jpg'
    ],
    name: {
      en: 'Alarm Disc Brake Lock',
      es: 'Candado de Disco con Alarma',
      fr: 'Antivol à Disque avec Alarme',
      ar: 'قفل قرص الفرامل مع إنذار',
      ru: 'Замок на тормозной диск с сигнализацией',
      pt: 'Cadeado de Disco com Alarme'
    },
    description: {
      en: 'Hot-selling anti-theft alarm disc brake lock for motorcycles and scooters. Aluminum alloy body with hardened steel pin, 110dB super loud alarm, IP54 waterproof, CR2 3V battery. Ideal for security parts wholesale in USA, Europe and worldwide.',
      es: 'Candado de disco con alarma antirrobo superventas para motos y scooters. Cuerpo de aleación de aluminio con pasador de acero endurecido, alarma de 110dB, impermeable IP54, batería CR2 3V. Ideal para mayoristas de piezas de seguridad en EE.UU., Europa y todo el mundo.',
      fr: 'Antivol à disque avec alarme antivol très vendu pour motos et scooters. Corps en alliage d\'aluminium avec axe en acier trempé, alarme 110dB, étanche IP54, pile CR2 3V. Idéal pour les grossistes en pièces de sécurité aux États-Unis, en Europe et dans le monde entier.',
      ar: 'قفل قرص فرامل مع إنذار مضاد للسرقة الأكثر مبيعًا للدراجات النارية والسكوتر. هيكل من سبائك الألومنيوم مع مسمار فولاذي مقسى، إنذار 110 ديسيبل، مقاوم للماء IP54، بطارية CR2 3 فولت. مثالي لتجار قطع الأمان بالجملة في الولايات المتحدة وأوروبا وجميع أنحاء العالم.',
      ru: 'Хитовый противоугонный замок на тормозной диск с сигнализацией для мотоциклов и скутеров. Алюминиевый корпус с закалённым стальным штифтом, сигнализация 110 дБ, водонепроницаемость IP54, батарея CR2 3V. Идеален для оптовой продажи охранных деталей в США, Европе и по всему миру.',
      pt: 'Cadeado de disco com alarme anti-roubo mais vendido para motos e scooters. Corpo em liga de alumínio com pino de aço temperado, alarme de 110dB, impermeável IP54, bateria CR2 3V. Ideal para grossistas de peças de segurança nos EUA, Europa e em todo o mundo.'
    },
    highlights: {
      en: ['Material: Aluminum alloy body + hardened steel pin', 'Alarm volume: 110dB super loud', 'Waterproof: IP54', 'Battery: CR2 3V', 'Universal fit for motorcycles & scooters', 'MOQ 20 sets', 'Hot-selling anti-theft security part'],
      es: ['Material: cuerpo de aleación de aluminio + pasador de acero endurecido', 'Volumen de alarma: 110dB súper fuerte', 'Impermeable: IP54', 'Batería: CR2 3V', 'Compatible universal motos y scooters', 'MOQ 20 juegos', 'Pieza de seguridad antirrobo superventas'],
      fr: ['Matériau : corps en alliage d\'aluminium + axe en acier trempé', 'Volume d\'alarme : 110dB super fort', 'Étanche : IP54', 'Pile : CR2 3V', 'Compatible universel motos et scooters', 'MOQ 20 ensembles', 'Pièce de sécurité antivol très vendue'],
      ar: ['المادة: هيكل سبائك ألومنيوم + مسمار فولاذي مقسى', 'مستوى الإنذار: 110 ديسيبل عالي جدًا', 'مقاوم للماء: IP54', 'البطارية: CR2 3 فولت', 'متوافق عالميًا مع الدراجات والسكوتر', 'الحد الأدنى 20 طقم', 'قطعة أمان مضادة للسرقة الأكثر مبيعًا'],
      ru: ['Материал: алюминиевый корпус + закалённый стальной штифт', 'Громкость сигнализации: 110 дБ', 'Водонепроницаемость: IP54', 'Батарея: CR2 3V', 'Универсальный для мотоциклов и скутеров', 'MOQ 20 комплектов', 'Хитовая охранная деталь против угона'],
      pt: ['Material: corpo em liga de alumínio + pino de aço temperado', 'Volume do alarme: 110dB super alto', 'Impermeável: IP54', 'Bateria: CR2 3V', 'Compatível universalmente com motos e scooters', 'MOQ 20 conjuntos', 'Peça de segurança anti-roubo mais vendida']
    },
    specs: {
      'Material': 'Aluminum Alloy Body + Hardened Steel Pin',
      'Alarm Volume': '110dB Super Loud',
      'Waterproof': 'IP54',
      'Battery': 'CR2 3V',
      'Fit Model': 'Universal for Motorcycles & Scooters',
      'MOQ': '20 Sets',
      'Lead Time': '7–15 Working Days',
      'Trade Term': 'EXW / FOB / CIF / DDP',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea'
    },
    keywords: 'motorcycle disc brake lock, alarm disc lock, anti-theft motorcycle lock, disc lock with alarm, motorcycle security lock, brake disc lock wholesale, China motorcycle lock supplier, 110dB disc lock, IP54 motorcycle lock, scooter disc lock'
  },

  /* ================= YFY200GY-12 ================= */
  yfy200: {
    id: 'yfy200',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/yfy200-main.jpg',
    gallery: [
      'assets/images/yfy200-1.jpg',
      'assets/images/yfy200-2.jpg',
      'assets/images/yfy200-3.jpg'
    ],
    name: {
      en: 'YFY200GY-12 Dirt Bike',
      es: 'YFY200GY-12 Moto de Cross',
      fr: 'YFY200GY-12 Moto Cross',
      ar: 'YFY200GY-12 دراجة ترابية',
      ru: 'YFY200GY-12 Кроссовый мотоцикл',
      pt: 'YFY200GY-12 Moto de Trilha'
    },
    description: {
      en: 'The YFY200GY-12 is a 200cc air-cooled 4-stroke dirt bike built for off-road performance and daily utility. Equipped with a 5-speed international gearbox, CDI ignition, electric/kick start, and a 14L fuel tank, it is an ideal model for Brazil, Africa, Middle East and Latin America markets. MOQ 30 units — OEM and ODM welcome.',
      es: 'La YFY200GY-12 es una moto de cross de 200cc, 4 tiempos, refrigerada por aire, diseñada para rendimiento off-road y uso diario. Equipada con caja de 5 velocidades internacional, encendido CDI, arranque eléctrico/pedal y depósito de 14L, es ideal para los mercados de Brasil, África, Oriente Medio y América Latina. MOQ 30 unidades — OEM y ODM bienvenidos.',
      fr: 'La YFY200GY-12 est une moto cross 200cc, 4 temps, refroidie par air, conçue pour la performance hors route et l\'usage quotidien. Équipée d\'une boîte 5 vitesses internationale, allumage CDI, démarrage électrique/kick et réservoir de 14L, elle est idéale pour les marchés du Brésil, d\'Afrique, du Moyen-Orient et d\'Amérique latine. MOQ 30 unités — OEM et ODM bienvenus.',
      ar: 'YFY200GY-12 هي دراجة ترابية بسعة 200 سي سي، رباعية الأشواط، مبردة بالهواء، مصممة للأداء على الطرق الوعرة والاستخدام اليومي. مزودة بعلبة تروس دولية بخمس سرعات، وإشعال CDI، وبدء كهربائي/بالقدم، وخزان وقود 14 لتر، وهي مثالية لأسواق البرازيل وأفريقيا والشرق الأوسط وأمريكا اللاتينية. الحد الأدنى للطلب 30 وحدة — نرحب بـ OEM و ODM.',
      ru: 'YFY200GY-12 — кроссовый мотоцикл 200cc, 4-тактный, с воздушным охлаждением, созданный для внедорожной езды и повседневного использования. Оснащён 5-ступенчатой международной КПП, зажиганием CDI, электро/кик-стартером и баком 14 л. Идеален для рынков Бразилии, Африки, Ближнего Востока и Латинской Америки. MOQ 30 шт. — приветствуется OEM и ODM.',
      pt: 'A YFY200GY-12 é uma moto de trilha 200cc, 4 tempos, refrigerada a ar, projetada para desempenho off-road e uso diário. Equipada com caixa internacional de 5 velocidades, ignição CDI, arranque elétrico/pedal e depósito de 14L, é ideal para os mercados do Brasil, África, Médio Oriente e América Latina. MOQ 30 unidades — OEM e ODM bem-vindos.'
    },
    highlights: {
      en: ['200cc 4-stroke air-cooled engine (150cc / 250cc optional)', '10KW / 7500rpm max power, 14.0N.m / 6500rpm max torque', 'International 5-speed manual gearbox', 'Electric / kick start + CDI ignition', '14L large fuel tank — long range', 'Front disc + rear drum brake, 300mm ground clearance', 'Max speed >100km/h, loading capacity 150kg', 'MOQ 30 units — perfect for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Motor 200cc 4T refrigerado por aire (150cc/250cc opcional)', 'Potencia máxima 10KW / 7500rpm, par máximo 14.0N.m / 6500rpm', 'Caja manual internacional de 5 velocidades', 'Arranque eléctrico/pedal + encendido CDI', 'Depósito grande de 14L — gran autonomía', 'Freno disco delantero + tambor trasero, altura libre 300mm', 'Velocidad máxima >100km/h, capacidad de carga 150kg', 'MOQ 30 unidades — perfecta para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Moteur 200cc 4T refroidi par air (150cc/250cc en option)', 'Puissance max 10KW / 7500rpm, couple max 14.0N.m / 6500rpm', 'Boîte manuelle internationale 5 vitesses', 'Démarrage électrique/kick + allumage CDI', 'Grand réservoir 14L — longue autonomie', 'Frein à disque avant + tambour arrière, garde au sol 300mm', 'Vitesse max >100km/h, charge max 150kg', 'MOQ 30 unités — parfaite pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['محرك 200 سي سي 4 أشواط مبرد بالهواء (150/250 سي سي اختياري)', 'قوة قصوى 10 كيلوواط / 7500 دورة، عزم أقصى 14.0 نيوتن.متر / 6500 دورة', 'علبة تروس يدوية دولية 5 سرعات', 'بدء كهربائي/بالقدم + إشعال CDI', 'خزان وقود كبير 14 لتر — مدى طويل', 'فرامل قرصية أمامية + طبلية خلفية، خلوص أرضي 300 مم', 'سرعة قصوى >100 كم/س، حمولة 150 كجم', 'الحد الأدنى 30 وحدة — مثالية لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Двигатель 200cc 4-тактный с воздушным охлаждением (150/250cc опционально)', 'Макс. мощность 10 кВт / 7500 об/мин, макс. крутящий момент 14.0 Н·м / 6500 об/мин', 'Международная 5-ступенчатая МКПП', 'Электро/кик-стартер + зажигание CDI', 'Большой топливный бак 14 л — большой запас хода', 'Передний дисковый + задний барабанный тормоз, клиренс 300 мм', 'Макс. скорость >100 км/ч, грузоподъёмность 150 кг', 'MOQ 30 шт. — идеален для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Motor 200cc 4T refrigerado a ar (150cc/250cc opcional)', 'Potência máx 10KW / 7500rpm, binário máx 14.0N.m / 6500rpm', 'Caixa manual internacional de 5 velocidades', 'Arranque elétrico/pedal + ignição CDI', 'Depósito grande de 14L — longa autonomia', 'Travão de disco dianteiro + tambor traseiro, altura ao solo 300mm', 'Velocidade máx >100km/h, carga máx 150kg', 'MOQ 30 unidades — perfeita para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'YFY200GY-12',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '200cc (150cc / 250cc optional)',
      'Max. Power': '10KW / 7500r/min',
      'Max. Torque': '14.0N.m / 6500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric / kick',
      'Clutch': 'Manual',
      'Gear': 'International 5 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '2075 × 870 × 1180 mm',
      'Wheel Base': '1360 mm',
      'Seat Height': '900 mm',
      'Vehicle Weight': '120 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / drum',
      'Fuel Tank Volume': '14 L',
      'Front / Rear Tyre': 'Front 90/90-19, Rear 110/90-17',
      'Min. Ground Clearance': '300 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'YFY200GY-12, 200cc dirt bike, dirt bike wholesale, dirt bike manufacturer China, off-road motorcycle 200cc, enduro motorcycle supplier, Brazil dirt bike, Africa dirt bike importer, OEM dirt bike, MOQ 30 dirt bike, 4 stroke dirt bike, air cooled dirt bike'
  },

  /* ================= YFY200GY-11 ================= */
  'yfy200-11': {
    id: 'yfy200-11',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/yfy200-11-main.jpg',
    gallery: [
      'assets/images/yfy200-11-1.jpg',
      'assets/images/yfy200-11-2.jpg',
      'assets/images/yfy200-11-3.jpg'
    ],
    name: {
      en: 'YFY200GY-11 Dirt Bike',
      es: 'YFY200GY-11 Moto de Cross',
      fr: 'YFY200GY-11 Moto Cross',
      ar: 'YFY200GY-11 دراجة ترابية',
      ru: 'YFY200GY-11 Кроссовый мотоцикл',
      pt: 'YFY200GY-11 Moto de Trilha'
    },
    description: {
      en: 'The YFY200GY-11 is a classic 200cc air-cooled 4-stroke dirt bike with a proven platform, ideal for budget-conscious importers in Brazil, Africa, Latin America and the Middle East. Featuring a 5-speed manual gearbox, CDI ignition, electric/kick start and a 14L fuel tank, this 2013-model bike offers unbeatable value for wholesale buyers. MOQ 30 units — OEM and ODM welcome.',
      es: 'La YFY200GY-11 es una moto de cross clásica de 200cc, 4T refrigerada por aire, con una plataforma probada, ideal para importadores con presupuesto ajustado en Brasil, África, América Latina y Oriente Medio. Con caja manual de 5 velocidades, encendido CDI, arranque eléctrico/pedal y depósito de 14L, este modelo 2013 ofrece un valor inigualable para mayoristas. MOQ 30 unidades — OEM y ODM bienvenidos.',
      fr: 'La YFY200GY-11 est une moto cross classique 200cc, 4T refroidie par air, avec une plateforme éprouvée, idéale pour les importateurs à budget serré au Brésil, en Afrique, en Amérique latine et au Moyen-Orient. Avec boîte manuelle 5 vitesses, allumage CDI, démarrage électrique/kick et réservoir 14L, ce modèle 2013 offre un rapport qualité-prix imbattable. MOQ 30 unités — OEM et ODM bienvenus.',
      ar: 'YFY200GY-11 هي دراجة ترابية كلاسيكية بسعة 200 سي سي، رباعية الأشواط مبردة بالهواء، بمنصة مثبتة، مثالية للمستوردين ذوي الميزانية المحدودة في البرازيل وأفريقيا وأمريكا اللاتينية والشرق الأوسط. مزودة بعلبة يدوية 5 سرعات وإشعال CDI وبدء كهربائي/بالقدم وخزان 14 لتر، يقدم هذا الطراز 2013 قيمة لا تُضاهى. الحد الأدنى 30 وحدة — نرحب بـ OEM و ODM.',
      ru: 'YFY200GY-11 — классический кроссовый мотоцикл 200cc, 4-тактный, с воздушным охлаждением, на проверенной платформе. Идеален для экономных импортёров в Бразилии, Африке, Латинской Америке и на Ближнем Востоке. 5-ступенчатая МКПП, зажигание CDI, электро/кик-стартер и бак 14 л. Эта модель 2013 года предлагает непревзойдённое соотношение цены и качества. MOQ 30 шт. — приветствуется OEM и ODM.',
      pt: 'A YFY200GY-11 é uma moto de trilha clássica 200cc, 4T refrigerada a ar, com plataforma comprovada, ideal para importadores com orçamento limitado no Brasil, África, América Latina e Médio Oriente. Com caixa manual de 5 velocidades, ignição CDI, arranque elétrico/pedal e depósito de 14L, este modelo 2013 oferece um valor imbatível para grossistas. MOQ 30 unidades — OEM e ODM bem-vindos.'
    },
    highlights: {
      en: ['Proven 200cc 4-stroke air-cooled engine (150cc / 250cc optional)', '10KW / 7500rpm max power, 14.0N.m / 6500rpm max torque', 'International 5-speed manual gearbox', 'Electric / kick start + CDI ignition', '14L large fuel tank — long range', 'Front disc + rear drum brake, 300mm ground clearance', 'Max speed >100km/h, loading capacity 150kg', 'Classic 2013 model — best cost-performance for bulk orders', 'MOQ 30 units — perfect for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Motor probado 200cc 4T refrigerado por aire (150cc/250cc opcional)', 'Potencia máxima 10KW / 7500rpm, par máximo 14.0N.m / 6500rpm', 'Caja manual internacional de 5 velocidades', 'Arranque eléctrico/pedal + encendido CDI', 'Depósito grande de 14L — gran autonomía', 'Freno disco delantero + tambor trasero, altura libre 300mm', 'Velocidad máxima >100km/h, carga 150kg', 'Modelo clásico 2013 — mejor relación calidad-precio', 'MOQ 30 unidades — para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Moteur éprouvé 200cc 4T refroidi par air (150cc/250cc en option)', 'Puissance max 10KW / 7500rpm, couple max 14.0N.m / 6500rpm', 'Boîte manuelle internationale 5 vitesses', 'Démarrage électrique/kick + allumage CDI', 'Grand réservoir 14L — longue autonomie', 'Frein à disque avant + tambour arrière, garde au sol 300mm', 'Vitesse max >100km/h, charge max 150kg', 'Modèle classique 2013 — meilleur rapport qualité-prix', 'MOQ 30 unités — pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['محرك مثبت 200 سي سي 4 أشواط مبرد بالهواء (150/250 اختياري)', 'قوة قصوى 10 كيلوواط / 7500 دورة، عزم أقصى 14.0 نيوتن.متر / 6500 دورة', 'علبة يدوية دولية 5 سرعات', 'بدء كهربائي/بالقدم + إشعال CDI', 'خزان كبير 14 لتر — مدى طويل', 'فرامل قرصية أمامية + طبلية خلفية، خلوص 300 مم', 'سرعة قصوى >100 كم/س، حمولة 150 كجم', 'طراز 2013 الكلاسيكي — أفضل قيمة مقابل السعر', 'الحد الأدنى 30 وحدة — لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Проверенный двигатель 200cc 4T с воздушным охлаждением (150/250cc опционально)', 'Макс. мощность 10 кВт / 7500 об/мин, макс. крутящий момент 14.0 Н·м / 6500 об/мин', 'Международная 5-ступенчатая МКПП', 'Электро/кик-стартер + зажигание CDI', 'Большой бак 14 л — большой запас хода', 'Передний дисковый + задний барабанный, клиренс 300 мм', 'Макс. скорость >100 км/ч, грузоподъёмность 150 кг', 'Классическая модель 2013 — лучшее соотношение цены и качества', 'MOQ 30 шт. — для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Motor comprovado 200cc 4T refrigerado a ar (150cc/250cc opcional)', 'Potência máx 10KW / 7500rpm, binário máx 14.0N.m / 6500rpm', 'Caixa manual internacional de 5 velocidades', 'Arranque elétrico/pedal + ignição CDI', 'Depósito grande de 14L — longa autonomia', 'Travão de disco dianteiro + tambor traseiro, altura ao solo 300mm', 'Velocidade máx >100km/h, carga 150kg', 'Modelo clássico 2013 — melhor custo-benefício', 'MOQ 30 unidades — para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'YFY200GY-11',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '200cc (150cc / 250cc optional)',
      'Max. Power': '10KW / 7500r/min',
      'Max. Torque': '14.0N.m / 6500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric / kick',
      'Clutch': 'Manual',
      'Gear': 'International 5 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '2075 × 870 × 1180 mm',
      'Wheel Base': '1360 mm',
      'Seat Height': '900 mm',
      'Vehicle Weight': '120 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / drum',
      'Fuel Tank Volume': '14 L',
      'Front / Rear Tyre': 'Front 90/90-19, Rear 110/90-17',
      'Min. Ground Clearance': '300 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'YFY200GY-11, 200cc dirt bike, cheap 200cc dirt bike, dirt bike wholesale, dirt bike manufacturer China, off-road motorcycle 200cc, enduro motorcycle supplier, Brazil dirt bike, Africa dirt bike importer, OEM dirt bike, MOQ 30 dirt bike'
  },
    /* ================= YFY150GY-1 ================= */
  'yfy150-1': {
    id: 'yfy150-1',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/yfy150-1-main.jpg',
    gallery: [
      'assets/images/yfy150-1-1.jpg',
      'assets/images/yfy150-1-2.jpg',
      'assets/images/yfy150-1-3.jpg'
    ],
    name: {
      en: 'YFY150GY-1 Dirt Bike',
      es: 'YFY150GY-1 Moto de Cross',
      fr: 'YFY150GY-1 Moto Cross',
      ar: 'YFY150GY-1 دراجة ترابية',
      ru: 'YFY150GY-1 Кроссовый мотоцикл',
      pt: 'YFY150GY-1 Moto de Trilha'
    },
    description: {
      en: 'The YFY150GY-1 is a lightweight 150cc air-cooled 4-stroke dirt bike, ideal for beginner riders and daily off-road utility. Featuring a 5-speed international gearbox, CDI ignition, electric/kick start and a 14L fuel tank, it delivers a perfect balance of economy and reliability. MOQ 30 units — perfect for wholesale importers in Brazil, Africa, Latin America and the Middle East.',
      es: 'La YFY150GY-1 es una moto de cross ligera de 150cc, 4 tiempos, refrigerada por aire, ideal para principiantes y uso diario off-road. Con caja internacional de 5 velocidades, encendido CDI, arranque eléctrico/pedal y depósito de 14L, ofrece un equilibrio perfecto entre economía y fiabilidad. MOQ 30 unidades — perfecta para importadores de Brasil, África, América Latina y Oriente Medio.',
      fr: 'La YFY150GY-1 est une moto cross légère 150cc, 4 temps, refroidie par air, idéale pour les débutants et l\'usage quotidien hors route. Avec boîte internationale 5 vitesses, allumage CDI, démarrage électrique/kick et réservoir 14L, elle offre un équilibre parfait entre économie et fiabilité. MOQ 30 unités — parfaite pour les importateurs au Brésil, en Afrique, en Amérique latine et au Moyen-Orient.',
      ar: 'YFY150GY-1 هي دراجة ترابية خفيفة بسعة 150 سي سي، رباعية الأشواط مبردة بالهواء، مثالية للمبتدئين والاستخدام اليومي على الطرق الوعرة. مزودة بعلبة دولية 5 سرعات وإشعال CDI وبدء كهربائي/بالقدم وخزان 14 لتر، وتوفر توازناً مثالياً بين الاقتصاد والموثوقية. الحد الأدنى 30 وحدة — مثالية لمستوردي البرازيل وأفريقيا وأمريكا اللاتينية والشرق الأوسط.',
      ru: 'YFY150GY-1 — лёгкий 150-кубовый 4-тактный кроссовый мотоцикл с воздушным охлаждением, идеален для начинающих и повседневного бездорожья. Оснащён 5-ступенчатой международной КПП, зажиганием CDI, электро/кик-стартером и баком 14 л, обеспечивает идеальный баланс экономичности и надёжности. MOQ 30 шт. — идеален для оптовых импортёров Бразилии, Африки, Латинской Америки и Ближнего Востока.',
      pt: 'A YFY150GY-1 é uma moto de trilha leve 150cc, 4 tempos, refrigerada a ar, ideal para iniciantes e uso diário off-road. Com caixa internacional de 5 velocidades, ignição CDI, arranque elétrico/pedal e depósito de 14L, oferece um equilíbrio perfeito entre economia e fiabilidade. MOQ 30 unidades — perfeita para importadores no Brasil, África, América Latina e Médio Oriente.'
    },
    highlights: {
      en: ['150cc 4-stroke air-cooled engine', '8.2KW / 8000rpm max power, 10N.m / 7500rpm max torque', 'International 5-speed manual gearbox', 'Electric / kick start + CDI ignition', '14L large fuel tank — long range', 'Front disc + rear drum brake, 290mm ground clearance', 'Max speed >100km/h, loading capacity 150kg', 'Lightweight 120 kg — easy to handle', 'MOQ 30 units — perfect for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Motor 150cc 4T refrigerado por aire', 'Potencia máxima 8.2KW / 8000rpm, par máximo 10N.m / 7500rpm', 'Caja manual internacional de 5 velocidades', 'Arranque eléctrico/pedal + encendido CDI', 'Depósito grande de 14L — gran autonomía', 'Freno disco delantero + tambor trasero, altura libre 290mm', 'Velocidad máxima >100km/h, carga 150kg', 'Ligera 120 kg — fácil de manejar', 'MOQ 30 unidades — para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Moteur 150cc 4T refroidi par air', 'Puissance max 8.2KW / 8000rpm, couple max 10N.m / 7500rpm', 'Boîte manuelle internationale 5 vitesses', 'Démarrage électrique/kick + allumage CDI', 'Grand réservoir 14L — longue autonomie', 'Frein à disque avant + tambour arrière, garde au sol 290mm', 'Vitesse max >100km/h, charge max 150kg', 'Légère 120 kg — facile à manier', 'MOQ 30 unités — pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['محرك 150 سي سي 4 أشواط مبرد بالهواء', 'قوة قصوى 8.2 كيلوواط / 8000 دورة، عزم أقصى 10 نيوتن.متر / 7500 دورة', 'علبة يدوية دولية 5 سرعات', 'بدء كهربائي/بالقدم + إشعال CDI', 'خزان كبير 14 لتر — مدى طويل', 'فرامل قرصية أمامية + طبلية خلفية، خلوص 290 مم', 'سرعة قصوى >100 كم/س، حمولة 150 كجم', 'خفيفة 120 كجم — سهلة المناورة', 'الحد الأدنى 30 وحدة — لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Двигатель 150cc 4T с воздушным охлаждением', 'Макс. мощность 8.2 кВт / 8000 об/мин, макс. крутящий момент 10 Н·м / 7500 об/мин', 'Международная 5-ступенчатая МКПП', 'Электро/кик-стартер + зажигание CDI', 'Большой бак 14 л — большой запас хода', 'Передний дисковый + задний барабанный, клиренс 290 мм', 'Макс. скорость >100 км/ч, грузоподъёмность 150 кг', 'Лёгкий 120 кг — прост в управлении', 'MOQ 30 шт. — для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Motor 150cc 4T refrigerado a ar', 'Potência máx 8.2KW / 8000rpm, binário máx 10N.m / 7500rpm', 'Caixa manual internacional de 5 velocidades', 'Arranque elétrico/pedal + ignição CDI', 'Depósito grande de 14L — longa autonomia', 'Travão de disco dianteiro + tambor traseiro, altura ao solo 290mm', 'Velocidade máx >100km/h, carga 150kg', 'Leve 120 kg — fácil de manobrar', 'MOQ 30 unidades — para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'YFY150GY-1',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '150cc',
      'Max. Power': '8.2KW / 8000r/min',
      'Max. Torque': '10N.m / 7500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric / kick',
      'Clutch': 'Manual',
      'Gear': 'International 5 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '2080 × 820 × 1180 mm',
      'Wheel Base': '1350 mm',
      'Seat Height': '890 mm',
      'Vehicle Weight': '120 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / drum',
      'Fuel Tank Volume': '14 L',
      'Front / Rear Tyre': 'Front 1.85-21, Rear 2.15-18',
      'Min. Ground Clearance': '290 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'YFY150GY-1, 150cc dirt bike, 150cc off-road motorcycle, small dirt bike wholesale, dirt bike manufacturer China, enduro motorcycle supplier, Brazil dirt bike, Africa dirt bike importer, OEM dirt bike, MOQ 30 dirt bike, 4 stroke dirt bike, air cooled dirt bike, 5 speed dirt bike, 14L fuel tank dirt bike, beginner dirt bike'
  },
    /* ================= YFY250/200 PY Dirt Bike ================= */
  'yfy250-py': {
    id: 'yfy250-py',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/yfy250-py-main.jpg',
    gallery: [
      'assets/images/yfy250-py-1.jpg',
      'assets/images/yfy250-py-2.jpg',
      'assets/images/yfy250-py-3.jpg'
    ],
    name: {
      en: 'YFY250/200 PY Dirt Bike',
      es: 'YFY250/200 PY Moto de Cross',
      fr: 'YFY250/200 PY Moto Cross',
      ar: 'YFY250/200 PY دراجة ترابية',
      ru: 'YFY250/200 PY Кроссовый мотоцикл',
      pt: 'YFY250/200 PY Moto de Trilha'
    },
    description: {
      en: 'The YFY250/200 PY is a high-performance dual-displacement dirt bike offering 250cc or 200cc air-cooled 4-stroke engine options. With front and rear disc brakes, a 5-speed international gearbox, CDI ignition, electric/kick start and a 14L fuel tank, it delivers the perfect balance of power, control and reliability for intermediate riders and off-road racing. MOQ 30 units — ideal for wholesale importers in Brazil, Africa, Latin America and the Middle East.',
      es: 'La YFY250/200 PY es una moto de cross de doble cilindrada de alto rendimiento, con opciones de motor 250cc o 200cc, 4 tiempos refrigerado por aire. Con frenos de disco delantero y trasero, caja internacional de 5 velocidades, encendido CDI, arranque eléctrico/pedal y depósito de 14L, ofrece el equilibrio perfecto entre potencia, control y fiabilidad para pilotos intermedios y competición off-road. MOQ 30 unidades — ideal para importadores de Brasil, África, América Latina y Oriente Medio.',
      fr: 'La YFY250/200 PY est une moto cross bi-cylindrée haute performance, avec moteur 250cc ou 200cc, 4 temps refroidi par air. Avec freins à disque avant et arrière, boîte internationale 5 vitesses, allumage CDI, démarrage électrique/kick et réservoir 14L, elle offre l\'équilibre parfait entre puissance, contrôle et fiabilité pour pilotes intermédiaires et compétition hors route. MOQ 30 unités — idéale pour importateurs au Brésil, en Afrique, en Amérique latine et au Moyen-Orient.',
      ar: 'YFY250/200 PY هي دراجة ترابية عالية الأداء بسعة مزدوجة، توفر خيارات محرك 250 سي سي أو 200 سي سي، رباعي الأشواط مبرد بالهواء. مع فرامل قرصية أمامية وخلفية، وعلبة دولية 5 سرعات، وإشعال CDI، وبدء كهربائي/بالقدم، وخزان 14 لتر، توفر التوازن المثالي بين القوة والتحكم والموثوقية للراكبين المتوسطين والسباقات على الطرق الوعرة. الحد الأدنى 30 وحدة — مثالية لمستوردي البرازيل وأفريقيا وأمريكا اللاتينية والشرق الأوسط.',
      ru: 'YFY250/200 PY — высокопроизводительный кроссовый мотоцикл с двумя вариантами объёма: 250cc или 200cc, 4-тактный с воздушным охлаждением. С передними и задними дисковыми тормозами, международной 5-ступенчатой КПП, зажиганием CDI, электро/кик-стартером и баком 14 л обеспечивает идеальный баланс мощности, контроля и надёжности для опытных райдеров и внедорожных гонок. MOQ 30 шт. — идеален для оптовых импортёров Бразилии, Африки, Латинской Америки и Ближнего Востока.',
      pt: 'A YFY250/200 PY é uma moto de trilha de dupla cilindrada de alto desempenho, com opções de motor 250cc ou 200cc, 4 tempos refrigerado a ar. Com travões de disco dianteiro e traseiro, caixa internacional de 5 velocidades, ignição CDI, arranque elétrico/pedal e depósito de 14L, oferece o equilíbrio perfeito entre potência, controlo e fiabilidade para pilotos intermédios e competição off-road. MOQ 30 unidades — ideal para importadores no Brasil, África, América Latina e Médio Oriente.'
    },
    highlights: {
      en: ['250cc / 200cc dual displacement options', '10.5KW / 7000rpm max power, 16.5N.m / 5500rpm max torque', 'Front & rear disc brakes for superior stopping power', 'International 5-speed manual gearbox', 'Electric / kick start + CDI ignition', '14L large fuel tank — long range for off-road racing', 'Seat height 850mm, ground clearance 280mm', 'Max speed >100km/h, loading capacity 150kg', 'MOQ 30 units — perfect for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Opciones de cilindrada dual 250cc / 200cc', 'Potencia máxima 10.5KW / 7000rpm, par máximo 16.5N.m / 5500rpm', 'Frenos de disco delantero y trasero — mayor potencia de frenado', 'Caja manual internacional de 5 velocidades', 'Arranque eléctrico/pedal + encendido CDI', 'Depósito grande de 14L — gran autonomía para competición', 'Altura de asiento 850mm, altura libre 280mm', 'Velocidad máxima >100km/h, carga 150kg', 'MOQ 30 unidades — para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Options de cylindrée double 250cc / 200cc', 'Puissance max 10.5KW / 7000rpm, couple max 16.5N.m / 5500rpm', 'Freins à disque avant et arrière — freinage supérieur', 'Boîte manuelle internationale 5 vitesses', 'Démarrage électrique/kick + allumage CDI', 'Grand réservoir 14L — longue autonomie pour la compétition', 'Hauteur de selle 850mm, garde au sol 280mm', 'Vitesse max >100km/h, charge max 150kg', 'MOQ 30 unités — pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['خيارات سعة مزدوجة 250/200 سي سي', 'قوة قصوى 10.5 كيلوواط / 7000 دورة، عزم أقصى 16.5 نيوتن.متر / 5500 دورة', 'فرامل قرصية أمامية وخلفية — قوة توقف فائقة', 'علبة يدوية دولية 5 سرعات', 'بدء كهربائي/بالقدم + إشعال CDI', 'خزان كبير 14 لتر — مدى طويل للسباقات', 'ارتفاع المقعد 850 مم، خلوص أرضي 280 مم', 'سرعة قصوى >100 كم/س، حمولة 150 كجم', 'الحد الأدنى 30 وحدة — لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Два варианта объёма: 250cc / 200cc', 'Макс. мощность 10.5 кВт / 7000 об/мин, макс. крутящий момент 16.5 Н·м / 5500 об/мин', 'Передние и задние дисковые тормоза — превосходное торможение', 'Международная 5-ступенчатая МКПП', 'Электро/кик-стартер + зажигание CDI', 'Большой бак 14 л — большой запас хода для гонок', 'Высота сиденья 850 мм, клиренс 280 мм', 'Макс. скорость >100 км/ч, грузоподъёмность 150 кг', 'MOQ 30 шт. — для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Opções de dupla cilindrada 250cc / 200cc', 'Potência máx 10.5KW / 7000rpm, binário máx 16.5N.m / 5500rpm', 'Travões de disco dianteiro e traseiro — travagem superior', 'Caixa manual internacional de 5 velocidades', 'Arranque elétrico/pedal + ignição CDI', 'Depósito grande de 14L — longa autonomia para competição', 'Altura do assento 850mm, altura ao solo 280mm', 'Velocidade máx >100km/h, carga 150kg', 'MOQ 30 unidades — para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'YFY250/200 PY',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '250cc / 200cc (optional)',
      'Max. Power': '10.5KW / 7000r/min',
      'Max. Torque': '16.5N.m / 5500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric / kick',
      'Clutch': 'Manual',
      'Gear': 'International 5 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '2200 × 815 × 1190 mm',
      'Wheel Base': '1400 mm',
      'Seat Height': '850 mm',
      'Vehicle Weight': '120 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / disk',
      'Fuel Tank Volume': '14 L',
      'Front / Rear Tyre': '90/90-19, 110/90-17',
      'Min. Ground Clearance': '280 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'YFY250/200 PY, 250cc dirt bike, 200cc dirt bike, 250cc enduro motorcycle, dual displacement dirt bike, 250cc dirt bike wholesale, 250cc dirt bike supplier China, enduro motorcycle supplier, Brazil dirt bike, Africa dirt bike importer, OEM dirt bike, MOQ 30 dirt bike, 4 stroke dirt bike, air cooled dirt bike, 5 speed dirt bike, 14L fuel tank dirt bike, front rear disc brake dirt bike, off-road racing motorcycle'
  },
    /* ================= YFY250R Street Motorcycle ================= */
  'yfy250r': {
    id: 'yfy250r',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/yfy250r-main.jpg',
    gallery: [
      'assets/images/yfy250r-1.jpg',
      'assets/images/yfy250r-2.jpg',
      'assets/images/yfy250r-3.jpg'
    ],
    name: {
      en: 'YFY250R Street Motorcycle',
      es: 'YFY250R Moto de Calle',
      fr: 'YFY250R Moto de Route',
      ar: 'YFY250R دراجة نارية للشارع',
      ru: 'YFY250R Уличный мотоцикл',
      pt: 'YFY250R Moto de Rua'
    },
    description: {
      en: 'The YFY250R is a modern 250cc air-cooled 4-stroke street motorcycle designed for urban commuting and daily utility. Featuring a 6-speed international gearbox, CDI ignition, electric start, front and rear disc brakes and a 13L fuel tank, it delivers an ideal blend of power, agility and reliability. With a low seat height of 800mm and lightweight 140kg chassis, it is perfect for city riders and fleet operators. MOQ 30 units — great for wholesale importers in Brazil, Africa, Latin America and the Middle East.',
      es: 'La YFY250R es una moto de calle moderna de 250cc, 4 tiempos refrigerada por aire, diseñada para desplazamientos urbanos y uso diario. Con caja internacional de 6 velocidades, encendido CDI, arranque eléctrico, frenos de disco delantero y trasero y depósito de 13L, ofrece una combinación ideal de potencia, agilidad y fiabilidad. Con una altura de asiento de 800mm y chasis ligero de 140kg, es perfecta para motociclistas urbanos y flotas. MOQ 30 unidades — excelente para importadores de Brasil, África, América Latina y Oriente Medio.',
      fr: 'La YFY250R est une moto de route moderne 250cc, 4 temps refroidie par air, conçue pour les trajets urbains et l\'usage quotidien. Avec boîte internationale 6 vitesses, allumage CDI, démarrage électrique, freins à disque avant et arrière et réservoir 13L, elle offre un mélange idéal de puissance, d\'agilité et de fiabilité. Avec une hauteur de selle de 800mm et un châssis léger de 140kg, elle est parfaite pour les motards urbains et les flottes. MOQ 30 unités — excellent pour les importateurs au Brésil, en Afrique, en Amérique latine et au Moyen-Orient.',
      ar: 'YFY250R هي دراجة نارية حديثة للشارع بسعة 250 سي سي، رباعية الأشواط مبردة بالهواء، مصممة للتنقل الحضري والاستخدام اليومي. مزودة بعلبة دولية 6 سرعات وإشعال CDI وبدء كهربائي وفرامل قرصية أمامية وخلفية وخزان 13 لتر، وتوفر مزيجاً مثالياً من القوة والرشاقة والموثوقية. مع ارتفاع مقعد منخفض 800 مم وهيكل خفيف 140 كجم، فهي مثالية لسائقي المدن وأساطيل التوصيل. الحد الأدنى 30 وحدة — ممتازة لمستوردي البرازيل وأفريقيا وأمريكا اللاتينية والشرق الأوسط.',
      ru: 'YFY250R — современный 250-кубовый 4-тактный уличный мотоцикл с воздушным охлаждением, созданный для городских поездок и повседневного использования. Оснащён 6-ступенчатой международной КПП, зажиганием CDI, электростартером, передними и задними дисковыми тормозами и баком 13 л, обеспечивает идеальный баланс мощности, маневренности и надёжности. Низкая высота сиденья 800 мм и лёгкое шасси 140 кг делают его идеальным для городских райдеров и курьерских парков. MOQ 30 шт. — отлично подходит для оптовых импортёров Бразилии, Африки, Латинской Америки и Ближнего Востока.',
      pt: 'A YFY250R é uma moto de rua moderna 250cc, 4 tempos refrigerada a ar, projetada para deslocamentos urbanos e uso diário. Com caixa internacional de 6 velocidades, ignição CDI, arranque elétrico, travões de disco dianteiro e traseiro e depósito de 13L, oferece uma combinação ideal de potência, agilidade e fiabilidade. Com altura do assento de 800mm e chassis leve de 140kg, é perfeita para motociclistas urbanos e frotas. MOQ 30 unidades — excelente para importadores no Brasil, África, América Latina e Médio Oriente.'
    },
    highlights: {
      en: ['250cc 4-stroke air-cooled engine (150cc / 200cc optional)', '12.5KW / 8000rpm max power, 17N.m / 6500rpm max torque', 'International 6-speed manual gearbox', 'Electric start + CDI ignition', 'Front & rear disc brakes — superior stopping power', '13L fuel tank — long range for daily commute', 'Low seat height 800mm — perfect for city riders', 'Lightweight 140 kg, max loading 150 kg', 'MOQ 30 units — ideal for Brazil, Nigeria, Peru, UAE, Algeria importers'],
      es: ['Motor 250cc 4T refrigerado por aire (150cc/200cc opcional)', 'Potencia máxima 12.5KW / 8000rpm, par máximo 17N.m / 6500rpm', 'Caja manual internacional de 6 velocidades', 'Arranque eléctrico + encendido CDI', 'Frenos de disco delantero y trasero — mayor potencia de frenado', 'Depósito de 13L — gran autonomía para uso diario', 'Altura de asiento baja 800mm — perfecta para la ciudad', 'Ligera 140 kg, carga máxima 150 kg', 'MOQ 30 unidades — ideal para importadores de Brasil, Nigeria, Perú, EAU, Argelia'],
      fr: ['Moteur 250cc 4T refroidi par air (150cc/200cc en option)', 'Puissance max 12.5KW / 8000rpm, couple max 17N.m / 6500rpm', 'Boîte manuelle internationale 6 vitesses', 'Démarrage électrique + allumage CDI', 'Freins à disque avant et arrière — freinage supérieur', 'Réservoir 13L — longue autonomie pour les trajets quotidiens', 'Hauteur de selle basse 800mm — parfaite pour la ville', 'Légère 140 kg, charge max 150 kg', 'MOQ 30 unités — idéale pour importateurs Brésil, Nigeria, Pérou, EAU, Algérie'],
      ar: ['محرك 250 سي سي 4 أشواط مبرد بالهواء (150/200 اختياري)', 'قوة قصوى 12.5 كيلوواط / 8000 دورة، عزم أقصى 17 نيوتن.متر / 6500 دورة', 'علبة يدوية دولية 6 سرعات', 'بدء كهربائي + إشعال CDI', 'فرامل قرصية أمامية وخلفية — قوة توقف فائقة', 'خزان 13 لتر — مدى طويل للاستخدام اليومي', 'ارتفاع مقعد منخفض 800 مم — مثالي لسائقي المدن', 'خفيفة 140 كجم، حمولة قصوى 150 كجم', 'الحد الأدنى 30 وحدة — لمستوردي البرازيل ونيجيريا وبيرو والإمارات والجزائر'],
      ru: ['Двигатель 250cc 4T с воздушным охлаждением (150/200cc опционально)', 'Макс. мощность 12.5 кВт / 8000 об/мин, макс. крутящий момент 17 Н·м / 6500 об/мин', 'Международная 6-ступенчатая МКПП', 'Электростартер + зажигание CDI', 'Передние и задние дисковые тормоза — превосходное торможение', 'Бак 13 л — большой запас хода для ежедневных поездок', 'Низкая высота сиденья 800 мм — идеально для города', 'Лёгкий 140 кг, макс. нагрузка 150 кг', 'MOQ 30 шт. — для импортёров Бразилии, Нигерии, Перу, ОАЭ, Алжира'],
      pt: ['Motor 250cc 4T refrigerado a ar (150cc/200cc opcional)', 'Potência máx 12.5KW / 8000rpm, binário máx 17N.m / 6500rpm', 'Caixa manual internacional de 6 velocidades', 'Arranque elétrico + ignição CDI', 'Travões de disco dianteiro e traseiro — travagem superior', 'Depósito de 13L — longa autonomia para uso diário', 'Altura do assento baixa 800mm — perfeita para a cidade', 'Leve 140 kg, carga máxima 150 kg', 'MOQ 30 unidades — para importadores do Brasil, Nigéria, Peru, EAU, Argélia']
    },
    specs: {
      'Model': 'YFY250R',
      'Engine Type': '4 stroke, single cylinder, air cooling',
      'Displacement': '250cc (150cc / 200cc optional)',
      'Max. Power': '12.5KW / 8000rpm',
      'Max. Torque': '17N.m / 6500r/min',
      'Cooling Type': 'Air cooling',
      'Fuel Delivery': 'Carburetor',
      'Start Method': 'Electric',
      'Clutch': 'Manual',
      'Gear': 'International 6 gears',
      'Ignition Method': 'CDI',
      'Max. Speed': '>100 km/h',
      'L*W*H': '1980 × 780 × 1150 mm',
      'Wheel Base': '1330 mm',
      'Seat Height': '800 mm',
      'Vehicle Weight': '140 kg',
      'Max. Loading': '150 kg',
      'Front / Rear Brake': 'Disk / disk',
      'Fuel Tank Volume': '13 L',
      'Front / Rear Tyre': '110/70-17, 140/70-17',
      'Min. Ground Clearance': '180 mm',
      'Battery': '12V 6.5A',
      'MOQ': '30 units',
      'Packing Term': 'Standard exporting packaging',
      'Shipping': 'By sea',
      'Delivery Time': 'Within 30–45 days after prepayment',
      'Lead Time': '30–45 days'
    },
    keywords: 'YFY250R, 250cc street motorcycle, 250cc naked bike, 250cc sport street bike, 250cc commuter motorcycle, 6 speed street motorcycle, 250cc street motorcycle wholesale, 250cc street bike supplier China, street motorcycle MOQ 30, 250cc street motorcycle for Brazil, Africa street bike importer, OEM 250cc motorcycle, 4 stroke street bike, air cooled street motorcycle, front rear disc brake motorcycle, 13L fuel tank street bike'
  },
};