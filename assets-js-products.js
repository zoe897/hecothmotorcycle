/* ============================================================
   HECOTH B2B · 产品数据
   ------------------------------------------------------------
   📌 如何替换图片：
     1. 将真实产品照片放进 assets/images/ 文件夹
     2. 主图建议 800×600，缩略图 400×300
     3. 命名：e4-main.jpg, e4-1.jpg, e4-2.jpg, e4-3.jpg 等
     4. 图片不存在时会自动 fallback 到 placeholder.svg
   ============================================================ */

window.PRODUCTS = {
  e4: {
    id: 'e4',
    name: 'HECOTH E4',
    category: 'electric',
    icon: 'fa-charging-station',
    image: 'assets/images/e4-main.jpg',
    gallery: [
      'assets/images/e4-1.jpg',
      'assets/images/e4-2.jpg',
      'assets/images/e4-3.jpg'
    ],
    description: 'The HECOTH E4 is a high-performance electric motorcycle designed for urban commuters and light off-road use. With a 12kW peak motor and 72V LiFePO₄ battery, it delivers instant torque and a range of up to 140 km.',
    highlights: [
      'Zero emissions',
      'Fast charging (0-80% in 1.5h)',
      'Swappable battery',
      'Regenerative braking',
      'Smart LCD display'
    ],
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

  f450: {
    id: 'f450',
    name: 'HECOTH F450',
    category: 'fuel',
    icon: 'fa-gas-pump',
    image: 'assets/images/f450-main.jpg',
    gallery: [
      'assets/images/f450-1.jpg',
      'assets/images/f450-2.jpg',
      'assets/images/f450-3.jpg'
    ],
    description: 'The HECOTH F450 is a rugged 450cc fuel motorcycle engineered for adventure and daily commuting. Its liquid-cooled EFI engine provides reliable power and torque across all terrains.',
    highlights: [
      '450cc liquid-cooled engine',
      'Electronic fuel injection',
      'Aggressive off-road styling',
      'Digital dashboard',
      'LED lighting'
    ],
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

  parts: {
    id: 'parts',
    name: 'HECOTH Parts Pro',
    category: 'parts',
    icon: 'fa-cogs',
    image: 'assets/images/parts-main.jpg',
    gallery: [
      'assets/images/parts-1.jpg',
      'assets/images/parts-2.jpg',
      'assets/images/parts-3.jpg'
    ],
    description: 'HECOTH Parts Pro offers a comprehensive range of OEM-quality motorcycle components. From sintered brake pads to O-ring chain kits and DRL LED lighting, we supply dealers worldwide.',
    highlights: [
      '200+ SKU in stock',
      'OEM-grade materials',
      'Sintered brake pads',
      'O-ring chain kits',
      'DRL LED headlights'
    ],
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
  }
};