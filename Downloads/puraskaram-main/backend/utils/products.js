const products = [
  {
    _id: "64b78b80cf982ba18a26b130",
    sku: "MAP-TAB-001",
    title: "Diamond Fibre Trophy",
    parent: "Trophies",
  
    tags: [
      "magnesium",
      "sleep",
      "stress"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213220/magrema-product_rewvjc.jpg",
    originalPrice: 950,
    price: 800,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213220/magrema-product_rewvjc.jpg"
 
    ],
    description: "MAGREMA is a magnesium glycinate supplement that helps in reducing stress, improving sleep quality, and supporting muscle relaxation. It plays a crucial role in maintaining nerve function and reducing fatigue. This product is ideal for individuals experiencing stress, anxiety, or sleep disturbances.",
    brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Sleep",
      id: "63b9a063d214e1a02a2a6af8"
    },
    unit: "Bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "latest-product",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b138",
    sku: "MAP-CAP-002",
    title: "PANCRELIV Liposomal Silymarin 60 Capsules",
    parent: "Liver & Pancreas",

    tags: [
      "liver",
      "detox",
      "silymarin"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213329/liposomal-product_g0dfxj.jpg",
    originalPrice: 1100,
    price: 920,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213329/liposomal-product_g0dfxj.jpg"
    
    ],
    description: "PANCRELIV is a liver support supplement formulated with liposomal silymarin, known for its detoxifying properties. It helps protect liver cells, improve liver function, and support detoxification processes in the body. This supplement is beneficial for individuals looking to maintain a healthy liver and overall digestive health.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Liver & Pancreas",
      id: "63a9a063d283e1a02a2a6afb"
    },
    unit: "Bottle",
    quantity: 60,
    colors: ["white"],
    type: "Supplement",
    itemInfo: "top-rated",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b13f",
    sku: "MAP-TAB-003",
    title: "SCORICH Liposomal Iron 60 Tablets",
    parent: "Women Health",
    
    tags: [
      "iron",
      "hemoglobin",
      "anemia"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213461/scorich-product_wpugzn.jpg",
    originalPrice: 800,
    price: 650,
    discount: 19,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213461/scorich-product_wpugzn.jpg"
    
    ],
    description: "SCORICH is an advanced iron supplement designed to improve hemoglobin levels and combat iron deficiency anemia. The liposomal formulation ensures better absorption and reduces common side effects like stomach discomfort. It is suitable for individuals with low iron levels and those needing improved energy and vitality.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Women Health",
      id: "63a9a063d283e1a02a2a6af9"
    },
    unit: "Bottle",
    quantity: 60,
   colors: ["white"],
    type: "Supplement",
    itemInfo: "best-selling",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b145",
    sku: "MAP-TAB-004",
    title: "SORFAR 60 Tablets",
    parent: "Diabetic",
    
    tags: [
      "diabetes",
      "sugar control"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213523/sofari-product_sej5wm.jpg",
    originalPrice: 1000,
    price: 850,
    discount: 15,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775213523/sofari-product_sej5wm.jpg"

    ],
    description: "SORFAR is formulated to help manage blood sugar levels effectively and support overall diabetic health. It works by improving glucose metabolism and maintaining stable energy levels throughout the day. This product is ideal for individuals looking for supportive care in managing diabetes.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Diabetic",
      id: "63a9a063d283e1a02a2a6afc"
    },
    unit: "Strip",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "latest-product",
    status: "active"
  },
  {
    _id: "64b78b80cf982ba18a26b141",
    sku: "MAP-TAB-005",
    title: "WELJOINT Liposomal Calcium 60 Tablets",
    parent: "Joints",
    
    tags: [
      "calcium",
      "bones",
      "joints"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775214078/calusim-product_hymqvi.jpg",
    originalPrice: 950,
    price: 800,
    discount: 16,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1775214078/calusim-product_hymqvi.jpg"
     
    ],
    description: "WELJOINT is a calcium supplement designed to support strong bones and healthy joints. It helps improve bone density and reduce the risk of bone-related issues. The advanced formulation ensures better absorption and effectiveness, making it suitable for daily use.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Joints",
      id: "63a9a063d283e1a02a2a6af8"
    },
    unit: "Bottle",
    quantity: 60,
     colors: ["white"],
    type: "Supplement",
    itemInfo: "best-selling",
    status: "active"
  },
  
   {
    _id: "63b78b80cf984ba18a26b243",
    sku: "MAP-CAP-006",
    title: "CURPEP Liposomal Nano Curcumin Capsules",
    parent: "Joints",

    tags: [
      "joint health",
      "anti-inflammatory",
      "immunity"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774509325/CURPEP_jmfwjj.png",
    originalPrice: 999,
    price: 799,
    discount: 20,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774509325/CURPEP_jmfwjj.png"
   
    ],
    description: "CURPEP Liposomal Nano Curcumin is a scientifically formulated supplement designed to support joint health and reduce inflammation. Enriched with 95% curcuminoids and enhanced with piperine, it ensures better absorption and effectiveness compared to regular curcumin supplements. This advanced formulation helps improve mobility, reduce stiffness, and support long-term joint function.In addition to joint care, CURPEP also provides strong antioxidant and immunity-boosting benefits. It helps combat oxidative stress, supports overall wellness, and is ideal for individuals dealing with chronic inflammation or active lifestyles.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Joints",
      id: "63a9a063d283e1a02a2a6af8"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Capsule",
    itemInfo: "top-rated",
    status: "active"
  },
  {
    _id: "85b78b80cf583ba18a25b263",
    sku: "MAP-CAP-007",
    title: "KEEP-D3 Vitamin D3 + K2 Tablets",
    parent: "Women Health",
  
    tags: [
      "vitamin d3",
      "k2",
      "bone health",
      "immunity"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774509866/KEEP_D3_ietrsv.png",
    originalPrice: 799,
    price: 649,
    discount: 19,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774509866/KEEP_D3_ietrsv.png"
   
    ],
    description: "KEEP-D3 combines Vitamin D3 and Vitamin K2 (MK-7) to promote strong bones and improve calcium absorption in the body. This powerful combination ensures that calcium is properly utilized and directed to bones, reducing the risk of bone weakness and fractures.It also plays a key role in supporting immunity and overall health. This supplement is especially beneficial for individuals with low vitamin D levels, helping improve strength, vitality, and long-term skeletal health.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Women Health",
      id: "63a9a063d283e1a02a2a6af9"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Tablet",
    itemInfo: "best-selling",
    status: "active"
  },
    {
    _id: "75b58b10cf585ba18a45b293",
    sku: "MAP-CAP-008",
    title: "MAAVIT Women Liposomal Multivitamin Tablets",
    parent: "Women Health",
   
    tags: [
      "women health",
      "multivitamin",
      "immunity",
      "energy"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510365/MAAVIT_WOMEN_ysb17h.png",
    originalPrice: 1099,
    price: 899,
    discount: 18,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510365/MAAVIT_WOMEN_ysb17h.png"
   
    ],
    description: "MAAVIT Women is a comprehensive multivitamin supplement specially designed to meet the nutritional needs of women. Enriched with liposomal technology, hyaluronic acid, and digestive enzymes, it supports energy levels, skin health, and better nutrient absorption. This formula helps maintain hormonal balance, strengthen bones and joints, and boost immunity. It is ideal for women looking to maintain an active lifestyle while ensuring overall wellness and daily nutritional support.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Women Health",
      id: "63a9a063d283e1a02a2a6af9"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Tablet",
    itemInfo: "latest-product",
    status: "active"
  },
   {
    _id: "96b28b12cf185ba26a45b293",
    sku: "MAP-CAP-009",
    title: "MAAVIT Men Liposomal Multivitamin Tablets",
    parent: "Men Health",
    
    tags: [
      "men health",
      "energy",
      "immunity",
      "stamina"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510472/MAAVIT_naqol8.png",
    originalPrice: 1099,
    price: 899,
    discount: 18,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510472/MAAVIT_naqol8.png"
   
    ],
    description: "MAAVIT Men is a specially formulated multivitamin designed to support energy, stamina, and overall health in men. It includes essential vitamins, minerals, grape seed extract, and digestive enzymes that enhance nutrient absorption and boost daily performance.This supplement helps improve immunity, strengthen bones and joints, and support an active lifestyle. It is ideal for men seeking better physical performance, endurance, and long-term health benefits.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Men Health",
      id: "63a9a063d283e1a02a2a6afd"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Tablet",
    itemInfo: "top-rated",
    status: "active"
  },
   {
    _id: "57b28b13cf285ba66a49b293",
    sku: "MAT-WX-010",
    title: "WELL X Herbal Energy Capsules",
    parent: "Sex Health",
    
    tags: [
      "stamina",
      "energy",
      "herbal",
      "performance"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510953/WELLX_wtejae.png",
    originalPrice: 1299,
    price: 999,
    discount: 23,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774510953/WELLX_wtejae.png"
   
    ],
    description: "WELL X is a powerful herbal supplement formulated with Tongkat Ali, Horny Goat Weed, Maca Root, and Muira Puama. It is designed to enhance stamina, energy levels, and physical performance naturally.This blend helps improve strength, endurance, and vitality while supporting overall male wellness. It is ideal for individuals looking to boost energy levels, muscle performance, and confidence in daily activities.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Sex Health",
      id: "63a9a063d283e1a02a2a6afe"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Capsule",
    itemInfo: "best-selling",
    status: "active"
  },
   {
    _id: "68b37b13cf586ba76a49b493",
    sku: "MAT-SLP-011",
    title: "ULTRAREST Melatonin Softgel Capsules",
    parent: "Sleep",

    tags: [
      "melatonin",
      "sleep",
      "relaxation",
      "stress"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774511471/ULTRAREST_szeknj.png",
    originalPrice: 899,
    price: 699,
    discount: 22,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774511471/ULTRAREST_szeknj.png"
   
    ],
    description: "ULTRAREST is a melatonin-based supplement designed to promote better sleep and relaxation. Enriched with hemp seed oil and Valeriana Wallichii, it helps calm the mind and regulate the natural sleep cycle.This formula is ideal for individuals experiencing stress, insomnia, or irregular sleep patterns. It supports restful sleep, improves recovery, and enhances overall mental well-being.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Sleep",
      id: "63b9a063d214e1a02a2a6af8"
    },
    unit: "Bottle",
    quantity: 60,
 colors: [
      
      "white"
    ],
    type: "Softgel",
    itemInfo: "latest-product",
    status: "active"
  },
   {
    _id: "67c81b14cf686ba76a49b584",
    sku: "MAT-PRO-012",
    title: "Diafriend Protein Diskettes Vanilla",
    parent: "Protein Biscuits",
    
    tags: [
      "protein",
      "diabetic",
      "nutrition",
      "fiber"
    ],
    image: "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774511778/Sunestalifesciences-1_yujyir.png",
    originalPrice: 599,
    price: 499,
    discount: 17,
    relatedImages: [
      "https://res.cloudinary.com/di7xgmxuj/image/upload/v1774511778/Sunestalifesciences-1_yujyir.png"
   
    ],
    description: "Diafriend Protein Diskettes are a nutritious and convenient snack enriched with 32% protein, vitamins, minerals, and herbal extracts. These vanilla-flavored diskettes are specially designed to support balanced nutrition while maintaining taste and quality.They are ideal for individuals managing diabetes or looking for a healthy snack alternative. With added fiber and essential nutrients, they help support digestion, energy levels, and overall well-being.",
     brand: {
      name: "Maathrey Wellness",
      id: "64b7735fae177ed4d70fb5c3"
    },
    category: {
      name: "Protein Biscuits",
      id: "63a3a053d283e1a02a2a6af8"
    },
    unit: "Box",
    quantity: 10,
 colors: [
      
      "white"
    ],
    type: "Biscuits",
    itemInfo: "top-rated",
    status: "active"
  }
]

module.exports = products;