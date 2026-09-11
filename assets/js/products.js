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

    /* ================= WY150 Street Bike (原 F450 位置) ================= */
  f450: {
    id: 'f450',
    category: 'fuel',
    icon: 'fa-motorcycle',
    image: 'assets/images/wy150-main.jpg',
    gallery: [
      'assets/images/wy150-1.jpg',
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