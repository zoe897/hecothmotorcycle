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

  /* ================= E-Moto E4 ================= */
  e4: {
    id: 'e4',
    category: 'electric',
    icon: 'fa-charging-station',
    image: 'assets/images/e4-main.jpg',
    gallery: [
      'assets/images/e4-1.jpg',
      'assets/images/e4-2.jpg',
      'assets/images/e4-3.jpg'
    ],
    name: {
      en: 'HECOTH E4',
      es: 'HECOTH E4',
      fr: 'HECOTH E4',
      ar: 'هيكوث E4',
      ru: 'HECOTH E4',
      pt: 'HECOTH E4'
    },
    description: {
      en: 'The HECOTH E4 is a high-performance electric motorcycle designed for urban commuters and light off-road use. With a 12kW peak motor and 72V LiFePO₄ battery, it delivers instant torque and a range of up to 140 km.',
      es: 'La HECOTH E4 es una moto eléctrica de alto rendimiento diseñada para desplazamientos urbanos y uso ligero fuera de carretera. Con un motor pico de 12kW y batería LiFePO₄ de 72V, entrega par instantáneo y una autonomía de hasta 140 km.',
      fr: 'La HECOTH E4 est une moto électrique haute performance conçue pour les trajets urbains et un usage léger hors route. Avec un moteur de pointe de 12kW et une batterie LiFePO₄ 72V, elle offre un couple instantané et une autonomie allant jusqu\'à 140 km.',
      ar: 'هيكوث E4 هي دراجة نارية كهربائية عالية الأداء مصممة للتنقل الحضري والاستخدام الخفيف على الطرق الوعرة. مع محرك بقوة 12 كيلوواط وبطارية LiFePO₄ بسعة 72 فولت، توفر عزمًا فوريًا ومدى يصل إلى 140 كم.',
      ru: 'HECOTH E4 — высокопроизводительный электрический мотоцикл, созданный для городских поездок и легкого бездорожья. С пиковым мотором 12 кВт и батареей LiFePO₄ 72 В обеспечивает мгновенный крутящий момент и запас хода до 140 км.',
      pt: 'A HECOTH E4 é uma moto elétrica de alto desempenho projetada para deslocamentos urbanos e uso leve off-road. Com motor de pico de 12kW e bateria LiFePO₄ de 72V, oferece torque instantâneo e autonomia de até 140 km.'
    },
    highlights: {
      en: ['Zero emissions', 'Fast charging (0-80% in 1.5h)', 'Swappable battery', 'Regenerative braking', 'Smart LCD display'],
      es: ['Cero emisiones', 'Carga rápida (0-80% en 1.5h)', 'Batería intercambiable', 'Frenado regenerativo', 'Pantalla LCD inteligente'],
      fr: ['Zéro émission', 'Charge rapide (0-80% en 1,5h)', 'Batterie interchangeable', 'Freinage régénératif', 'Écran LCD intelligent'],
      ar: ['صفر انبعاثات', 'شحن سريع (0-80% في 1.5 ساعة)', 'بطارية قابلة للتبديل', 'فرملة تجديدية', 'شاشة LCD ذكية'],
      ru: ['Нулевые выбросы', 'Быстрая зарядка (0-80% за 1,5 ч)', 'Сменная батарея', 'Рекуперативное торможение', 'Умный LCD-дисплей'],
      pt: ['Zero emissões', 'Carregamento rápido (0-80% em 1.5h)', 'Bateria substituível', 'Travagem regenerativa', 'Painel LCD inteligente']
    },
    specs: {
      'Motor': '12kW PMSM, liquid-cooled',
      'Battery': '72V 60Ah LiFePO₄ (swap-ready)',
      'Range': '140 km (urban)',
      'Top Speed': '110 km/h',
      'Charging': '0-80% in 1.5h (DC fast)',
      'Suspension': 'USD forks, mono shock',
      'Brakes': '4-piston calipers + ABS',
      'Weight': '135 kg',
      'Tire Size': '110/70-17 front, 140/70-17 rear',
      'MOQ': '10 units',
      'Lead Time': '45 days',
      'Warranty': '24 months'
    },
    keywords: 'electric motorcycle, e-moto, 12kW, 72V, zero emission, B2B electric motorcycle'
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

  /* ================= Fuel Moto F450 ================= */
  f450: {
    id: 'f450',
    category: 'fuel',
    icon: 'fa-gas-pump',
    image: 'assets/images/f450-main.jpg',
    gallery: [
      'assets/images/f450-1.jpg',
      'assets/images/f450-2.jpg',
      'assets/images/f450-3.jpg'
    ],
    name: {
      en: 'HECOTH F450',
      es: 'HECOTH F450',
      fr: 'HECOTH F450',
      ar: 'هيكوث F450',
      ru: 'HECOTH F450',
      pt: 'HECOTH F450'
    },
    description: {
      en: 'The HECOTH F450 is a rugged 450cc fuel motorcycle engineered for adventure and daily commuting. Its liquid-cooled EFI engine provides reliable power and torque across all terrains.',
      es: 'La HECOTH F450 es una moto de combustible robusta de 450cc diseñada para aventura y desplazamientos diarios. Su motor EFI refrigerado por líquido ofrece potencia y par fiables en todo tipo de terreno.',
      fr: 'La HECOTH F450 est une moto à essence robuste de 450cc conçue pour l\'aventure et les trajets quotidiens. Son moteur EFI refroidi par liquide offre une puissance et un couple fiables sur tous les terrains.',
      ar: 'هيكوث F450 هي دراجة وقود قوية بسعة 450 سي سي مصممة للمغامرات والتنقل اليومي. يوفر محرك EFI المبرد بالسائل قوة وعزمًا موثوقين على جميع التضاريس.',
      ru: 'HECOTH F450 — мощный 450-кубовый бензиновый мотоцикл, созданный для приключений и ежедневных поездок. Жидкостное охлаждение и впрыск EFI обеспечивают надёжную мощность и крутящий момент на любом покрытии.',
      pt: 'A HECOTH F450 é uma moto a combustão robusta de 450cc projetada para aventura e deslocamentos diários. O motor EFI refrigerado a líquido oferece potência e binário confiáveis em todos os terrenos.'
    },
    highlights: {
      en: ['450cc liquid-cooled engine', 'Electronic fuel injection', 'Aggressive off-road styling', 'Digital dashboard', 'LED lighting'],
      es: ['Motor 450cc refrigerado por líquido', 'Inyección electrónica de combustible', 'Estilo agresivo off-road', 'Panel digital', 'Iluminación LED'],
      fr: ['Moteur 450cc refroidi par liquide', 'Injection électronique', 'Style off-road agressif', 'Tableau de bord numérique', 'Éclairage LED'],
      ar: ['محرك 450 سي سي مبرد بالسائل', 'حقن إلكتروني للوقود', 'تصميم off-road جريء', 'لوحة عدادات رقمية', 'إضاءة LED'],
      ru: ['450-кубовый двигатель с жидкостным охлаждением', 'Электронный впрыск топлива', 'Агрессивный внедорожный стиль', 'Цифровая приборная панель', 'LED-освещение'],
      pt: ['Motor 450cc refrigerado a líquido', 'Injeção eletrónica de combustível', 'Estilo off-road agressivo', 'Painel digital', 'Iluminação LED']
    },
    specs: {
      'Engine': '450cc single-cylinder, liquid-cooled',
      'Power': '38 HP @ 8500 rpm',
      'Torque': '35 Nm @ 6500 rpm',
      'Fuel System': 'EFI',
      'Transmission': '6-speed',
      'Weight': '165 kg',
      'Seat Height': '890 mm',
      'Fuel Capacity': '14 L',
      'Brakes': 'Disc front & rear',
      'MOQ': '10 units',
      'Lead Time': '50 days',
      'Warranty': '24 months'
    },
    keywords: 'fuel motorcycle, 450cc motorcycle, EFI, off-road motorcycle, B2B fuel motorcycle'
  },

  /* ================= Parts Pro ================= */
  parts: {
    id: 'parts',
    category: 'parts',
    icon: 'fa-cogs',
    image: 'assets/images/parts-main.jpg',
    gallery: [
      'assets/images/parts-1.jpg',
      'assets/images/parts-2.jpg',
      'assets/images/parts-3.jpg'
    ],
    name: {
      en: 'HECOTH Parts Pro',
      es: 'HECOTH Parts Pro',
      fr: 'HECOTH Parts Pro',
      ar: 'هيكوث قطع الغيار برو',
      ru: 'HECOTH Parts Pro',
      pt: 'HECOTH Parts Pro'
    },
    description: {
      en: 'HECOTH Parts Pro offers a comprehensive range of OEM-quality motorcycle components. From sintered brake pads to O-ring chain kits and DRL LED lighting, we supply dealers worldwide.',
      es: 'HECOTH Parts Pro ofrece una gama completa de componentes de moto con calidad OEM. Desde pastillas de freno sinterizadas hasta kits de cadena O-ring e iluminación LED DRL, suministramos a distribuidores de todo el mundo.',
      fr: 'HECOTH Parts Pro propose une gamme complète de composants moto de qualité OEM. Des plaquettes de frein frittées aux kits de chaîne O-ring et éclairages LED DRL, nous approvisionnons les revendeurs du monde entier.',
      ar: 'تقدم هيكوث قطع الغيار برو مجموعة شاملة من مكونات الدراجات بجودة OEM. من وسادات الفرامل الملبدة إلى أطقم السلاسل O-ring وإضاءة LED DRL، نوفر للوكلاء في جميع أنحاء العالم.',
      ru: 'HECOTH Parts Pro предлагает широкий ассортимент мотоциклетных компонентов OEM-качества. От спечённых тормозных колодок до O-ring цепных комплектов и DRL LED-освещения — мы снабжаем дилеров по всему миру.',
      pt: 'A HECOTH Parts Pro oferece uma gama completa de componentes de moto com qualidade OEM. De pastilhas de travão sinterizadas a kits de corrente O-ring e iluminação LED DRL, fornecemos concessionários em todo o mundo.'
    },
    highlights: {
      en: ['200+ SKU in stock', 'OEM-grade materials', 'Sintered brake pads', 'O-ring chain kits', 'DRL LED headlights'],
      es: ['200+ SKU en stock', 'Materiales de grado OEM', 'Pastillas de freno sinterizadas', 'Kits de cadena O-ring', 'Faros LED DRL'],
      fr: ['200+ SKU en stock', 'Matériaux qualité OEM', 'Plaquettes de frein frittées', 'Kits de chaîne O-ring', 'Phares LED DRL'],
      ar: ['أكثر من 200 صنف في المخزون', 'مواد بجودة OEM', 'وسادات فرامل ملبدة', 'أطقم سلاسل O-ring', 'مصابيح LED DRL'],
      ru: ['200+ SKU на складе', 'Материалы уровня OEM', 'Спечённые тормозные колодки', 'O-ring цепные комплекты', 'DRL LED-фары'],
      pt: ['200+ SKU em stock', 'Materiais de qualidade OEM', 'Pastilhas sinterizadas', 'Kits de corrente O-ring', 'Faróis LED DRL']
    },
    specs: {
      'Brake Pads': 'Sintered, high-friction',
      'Chain Kit': '520 O-ring, 120 links',
      'LED Headlight': 'DRL, 6000K, IP67',
      'Air Filter': 'High-flow, washable',
      'Spark Plug': 'Iridium, long-life',
      'Sprockets': 'Hardened steel, 15T/45T',
      'Bearings': 'Sealed, ABEC-3',
      'MOQ': '50 units per SKU',
      'Lead Time': '30 days',
      'Warranty': '12 months'
    },
    keywords: 'motorcycle parts, brake pads, chain kit, LED headlight, OEM motorcycle parts, B2B parts supplier'
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
  }
};