export interface ServiceItem {
  duration: string;
  zone: string;
  price: number;
  from?: boolean; // true, если цена указана как "от"
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface DiscountPackage {
  name: string;
  services: string[];
  originalPrice: number;
  discountedPrice: number;
}

export interface PriceListItem {
  name: string;
  price: number;
  from?: boolean; 
}

export interface PriceListCategory {
  title: string;
  items: PriceListItem[];
}

export const alexandriteServices = {
  faceNeck: [
    { duration: '10 мин.', zone: 'Верхняя губа', price: 950 },
    { duration: '10 мин.', zone: 'Подбородок', price: 1100 },
    { duration: '10 мин.', zone: 'Виски', price: 1000 },
    { duration: '10 мин.', zone: 'Лоб', price: 750 },
    { duration: '10 мин.', zone: 'Межбровье', price: 800 },
    { duration: '20 мин.', zone: 'Щёки', price: 1200 },
    { duration: '20 мин.', zone: 'Уши', price: 750 },
    { duration: '30 мин.', zone: 'Лицо полностью', price: 3000 },
    { duration: '20 мин.', zone: 'Шея (передняя или задняя пов-ть)', price: 1700 },
    { duration: '30 мин.', zone: 'Шея полностью', price: 3000 },
  ],
  backStomach: [
    { duration: '20 мин.', zone: 'Плечи', price: 3500 },
    { duration: '40 мин.', zone: 'Спина', price: 5200 },
    { duration: '20 мин.', zone: 'Поясница', price: 3250 },
    { duration: '10 мин.', zone: 'Декольте', price: 2350 },
    { duration: '20 мин.', zone: 'Живот', price: 3600 },
    { duration: '10 мин.', zone: 'Белая линия живота', price: 1300 },
    { duration: '10 мин.', zone: 'Ареолы', price: 900 },
    { duration: '15 мин.', zone: 'Крестец', price: 1550 },
  ],
  arms: [
    { duration: '20 мин.', zone: 'Руки до локтя (верх или низ)', price: 3250 },
    { duration: '30 мин.', zone: 'Руки полностью + кисти', price: 3900 },
    { duration: '10 мин.', zone: 'Кисти рук', price: 1200 },
    { duration: '10 мин.', zone: 'Подмышки', price: 1500 },
  ],
  legs: [
    { duration: '20 мин.', zone: 'Бёдра (передняя, задняя или внутрен. пов-ть)', price: 3000 },
    { duration: '30 мин.', zone: 'Бёдра полностью', price: 4150 },
    { duration: '30 мин.', zone: 'Голени', price: 3500 },
    { duration: '40 мин.', zone: 'Голени + колени', price: 4150 },
    { duration: '60 мин.', zone: 'Ноги полностью + пальцы стоп', price: 6500 },
    { duration: '10 мин.', zone: 'Пальцы стоп', price: 900 },
    { duration: '10 мин.', zone: 'Колени', price: 900 },
  ],
  intimate: [
    { duration: '10 мин.', zone: 'Лобок', price: 2200 },
    { duration: '10 мин.', zone: 'Половые губы', price: 1300 },
    { duration: '20 мин.', zone: 'Глубокое бикини', price: 3900 },
    { duration: '20 мин.', zone: 'Классическое бикини', price: 3000 },
    { duration: '10 мин.', zone: 'Межъягодичная складка', price: 1300 },
    { duration: '20 мин.', zone: 'Ягодицы', price: 3900 },
  ],
};

export const diodeServices = {
  faceNeck: [
    { duration: '10 мин.', zone: 'Верхняя губа', price: 500 },
    { duration: '10 мин.', zone: 'Подбородок', price: 600 },
    { duration: '10 мин.', zone: 'Виски', price: 600 },
    { duration: '10 мин.', zone: 'Лоб', price: 600 },
    { duration: '10 мин.', zone: 'Межбровье', price: 400 },
    { duration: '20 мин.', zone: 'Щёки', price: 800 },
    { duration: '20 мин.', zone: 'Уши', price: 500 },
    { duration: '30 мин.', zone: 'Лицо полностью', price: 2100 },
    { duration: '20 мин.', zone: 'Шея (передняя или задняя пов-ть)', price: 800 },
    { duration: '30 мин.', zone: 'Шея полностью', price: 2100 },
  ],
  backStomach: [
    { duration: '20 мин.', zone: 'Плечи', price: 2000 },
    { duration: '40 мин.', zone: 'Спина и поясница', price: 3500 },
    { duration: '20 мин.', zone: 'Поясница', price: 2000 },
    { duration: '10 мин.', zone: 'Декольте', price: 1200 },
    { duration: '20 мин.', zone: 'Живот', price: 2000 },
    { duration: '10 мин.', zone: 'Белая линия живота', price: 750 },
    { duration: '10 мин.', zone: 'Ореолы', price: 600 },
    { duration: '15 мин.', zone: 'Крестец', price: 1000 },
  ],
  arms: [
    { duration: '20 мин.', zone: 'Руки до локтя (верх или низ)', price: 2000 },
    { duration: '30 мин.', zone: 'Руки полностью + кисти', price: 2500 },
    { duration: '10 мин.', zone: 'Кисти рук', price: 600 },
    { duration: '10 мин.', zone: 'Подмышки', price: 800 },
  ],
  legs: [
    { duration: '20 мин.', zone: 'Бёдра (передняя, задняя или внутрен. пов-ть)', price: 1500 },
    { duration: '30 мин.', zone: 'Бёдра полностью', price: 2800 },
    { duration: '30 мин.', zone: 'Голени', price: 2000 },
    { duration: '40 мин.', zone: 'Голени + колени', price: 2400 },
    { duration: '60 мин.', zone: 'Ноги полностью + пальцы стоп', price: 4200 },
    { duration: '10 мин.', zone: 'Пальцы стоп', price: 500 },
    { duration: '10 мин.', zone: 'Колени', price: 400 },
  ],
  intimate: [
    { duration: '10 мин.', zone: 'Лобок', price: 1200 },
    { duration: '10 мин.', zone: 'Половые губы', price: 800 },
    { duration: '20 мин.', zone: 'Глубокое бикини', price: 2100 },
    { duration: '20 мин.', zone: 'Классическое бикини', price: 1600 },
    { duration: '10 мин.', zone: 'Межъягодичная складка', price: 800 },
    { duration: '20 мин.', zone: 'Ягодицы', price: 2500 },
  ],
};

export const alexandritePackages: DiscountPackage[] = [
  {
    name: 'БАЗОВЫЙ',
    services: ['Глубокое бикини', 'подмышки'],
    originalPrice: 5400,
    discountedPrice: 4300,
  },
  {
    name: 'КЛАССИЧЕСКИЙ',
    services: ['Глубокое бикини', 'подмышки', 'голени'],
    originalPrice: 8600,
    discountedPrice: 7100,
  },
  {
    name: 'МАКСИМУМ',
    services: ['Глубокое бикини', 'подмышки', 'ноги', '(малая зона на лице)'],
    originalPrice: 11900,
    discountedPrice: 9500,
  },
  {
    name: 'ТОТАЛЬНЫЙ',
    services: ['Глубокое бикини', 'подмышки', 'ноги полностью', 'руки полностью', '(малая зона на выбор)'],
    originalPrice: 15800,
    discountedPrice: 12600,
  },
];

export const diodePackages: DiscountPackage[] = [
  {
    name: 'БАЗОВЫЙ',
    services: ['Глубокое бикини', 'подмышки'],
    originalPrice: 2900,
    discountedPrice: 2450,
  },
  {
    name: 'КЛАССИЧЕСКИЙ',
    services: ['Глубокое бикини', 'подмышки', 'голени'],
    originalPrice: 5300,
    discountedPrice: 4250,
  },
  {
    name: 'МАКСИМУМ',
    services: ['Глубокое бикини', 'подмышки', 'ноги полностью', '(малая зона на лице)'],
    originalPrice: 7100,
    discountedPrice: 5700,
  },
  {
    name: 'ТОТАЛЬНЫЙ',
    services: ['Глубокое бикини', 'подмышки', 'ноги полностью', 'руки полностью', '(малая зона на выбор)'],
    originalPrice: 9600,
    discountedPrice: 7700,
  },
];

export const bodyContouringServices = {
  subdermalMassage: [
    { duration: '20 мин.', zone: 'Спина', price: 1500 },
    { duration: '20 мин.', zone: 'Живот', price: 1200 },
    { duration: '40 мин.', zone: 'Ноги', price: 2500 },
    { duration: '20 мин.', zone: 'Ягодицы', price: 1300 },
    { duration: '25 мин.', zone: 'Голени', price: 1200 },
    { duration: '20 мин.', zone: 'Бедра', price: 1500 },
    { duration: '50 мин.', zone: 'Ноги + ягодицы', price: 2800 },
    { duration: '55 мин.', zone: 'Ноги + ягодицы + живот', price: 3200 },
    { duration: '55 мин.', zone: 'Все тело', price: 3500 },
  ],
  lpgMassage: [
    { duration: '30 мин.', zone: 'Лицо', price: 1300 },
    { duration: '45 мин.', zone: 'Лицо + шея + декольте', price: 1800 },
    { duration: '55 мин.', zone: 'Все тело', price: 3200 },
    { duration: '90 мин.', zone: 'Все тело', price: 4500 },
  ],
  bodyContouring: [
    { duration: '20 мин.', zone: '1 зона', price: 3500 },
    { duration: '40 мин.', zone: '2 зоны', price: 6000 },
    { duration: '1 час', zone: '3 зоны', price: 8500 },
    { duration: '1 ч. 20 мин.', zone: '4 зоны', price: 11000 },
    { duration: '1 ч. 40 мин.', zone: '5 зон', price: 14000 },
    { duration: '2 часа', zone: '6 зон', price: 16000 },
    { duration: '2 ч. 30 мин.', zone: '7 зон', price: 19000 },
    { duration: '3 часа', zone: '8 зон', price: 22000 },
    { duration: '3 часа', zone: '9 зон', price: 24500 },
    { duration: '15 мин.', zone: '1-я процедура (1 зона, 15х15 см)', price: 2500 },
  ],
  cavitation: [
    { duration: '20 мин.', zone: 'Спина', price: 1500 },
    { duration: '30 мин.', zone: 'Бока', price: 1500 },
    { duration: '20 мин.', zone: 'Живот', price: 1000 },
    { duration: '30 мин.', zone: 'Бедра', price: 2000 },
    { duration: '30 мин.', zone: 'Голени', price: 1500 },
    { duration: '45 мин.', zone: 'Ноги', price: 2500 },
    { duration: '25 мин.', zone: 'Ягодицы', price: 1500 },
    { duration: '40 мин.', zone: 'Бедра + ягодицы', price: 3000 },
    { duration: '40 мин.', zone: 'Бедра + живот', price: 2500 },
  ],
  rfLifting: [
    { duration: '20 мин.', zone: 'Спина', price: 1300 },
    { duration: '30 мин.', zone: 'Бока', price: 1400 },
    { duration: '25 мин.', zone: 'Живот', price: 1000 },
    { duration: '40 мин.', zone: 'Бедра', price: 2000 },
    { duration: '30 мин.', zone: 'Голени', price: 2000 },
    { duration: '60 мин.', zone: 'Ноги', price: 2500 },
    { duration: '20 мин.', zone: 'Ягодицы', price: 1500 },
    { duration: '25 мин.', zone: 'Лицо', price: 1300 },
    { duration: '10 мин.', zone: 'Лицо + шея + декольте', price: 1800 },
    { duration: '40 мин.', zone: 'Кисти рук', price: 900 },
    { duration: '20 мин.', zone: 'Руки до локтя', price: 1500 },
  ],
  pressotherapy: [
    { duration: '20 мин.', zone: 'Ноги', price: 700 },
    { duration: '20 мин.', zone: 'Живот', price: 500 },
  ],
  indiba: [
    { duration: '30 мин.', zone: 'Лицо полностью', price: 1500 },
    { duration: '30 мин.', zone: 'Декольте + шея', price: 1500 },
    { duration: '50 мин.', zone: 'Лицо+декольте + шея', price: 2500 },
    { duration: '30 мин.', zone: 'Живот', price: 1500 },
    { duration: '40 мин.', zone: 'Плечи', price: 2000 },
    { duration: '50 мин.', zone: 'Руки', price: 2500 },
    { duration: '30 мин.', zone: 'Ягодицы', price: 2500 },
    { duration: '40 мин.', zone: 'Бедра', price: 2500 },
    { duration: '40 мин.', zone: 'Голени', price: 2500 },
    { duration: '50 мин.', zone: 'Ноги полностью', price: 3500 },
    { duration: '20 мин.', zone: 'Колени', price: 1000 },
    { duration: '30 мин.', zone: 'Спина', price: 2500 },
    { duration: '0 мин.', zone: 'Бока', price: 2000 },
  ],
  indibaComplexes: [
    { duration: '50 мин.', zone: 'Ягодицы + бедра', price: 4000 },
    { duration: '40 мин.', zone: 'Живот + Бедра', price: 3200 },
    { duration: '50 мин.', zone: 'Ноги + ягодицы', price: 4000 },
    { duration: '60 мин.', zone: 'Бедра + живот + ягодицы', price: 6000 },
  ],
};

export const cosmetologyServices: PriceListCategory[] = [
  {
    title: 'Консультация',
    items: [
      { name: 'Консультация косметолога', price: 700 },
    ],
  },
  {
    title: 'Чистка',
    items: [
      {
        name: 'Ультразвуковая + механическая + уход до и после',
        price: 3700,
        from: true,
      },
      {
        name: 'Вакуумная HydraFacial + сыворотка + уход до и после + аппаратная диагностика кожи',
        price: 4700,
        from: true,
      },
      {
        name: 'Альгинатная маска по типу кожи',
        price: 1000,
        from: true,
      },
    ],
  },
  {
    title: 'Ферментотерапия DMK',
    items: [
      { name: 'Лицо', price: 7000 },
      { name: 'Лицо + шея + декольте', price: 10000 },
    ],
  },
  {
    title: 'Пилинг лица',
    items: [
      { name: 'Джесснера 3 слоя', price: 3900, from: true },
      { name: 'Джесснера 2 слоя', price: 3700, from: true },
      { name: 'BIO REPEEL CL 3', price: 3900, from: true },
      { name: 'PRX - T33', price: 3900, from: true },
      { name: 'Всесезонный', price: 2500, from: true },
      { name: 'Арморик (Италия)', price: 3900, from: true },
      { name: 'Ретиноловый (жёлтый)', price: 4400, from: true },
      { name: 'Ретиноловый (оранжевый)', price: 4400, from: true },
      { name: 'Восстанавливающий', price: 3900, from: true },
    ],
  },
  {
    title: 'Пилинг тела',
    items: [
      { name: 'Отбеливание подмышек', price: 3500, from: true },
      { name: 'Отбеливание интимных зон', price: 3500, from: true },
      { name: 'Пилинг спины', price: 4500, from: true },
    ],
  },
  {
    title: 'Липолитик',
    items: [
      { name: 'Триада', price: 6200, from: true },
      { name: 'Стройность BioGEL', price: 11500, from: true },
      { name: 'СЛИМ', price: 8000, from: true },
    ],
  },
  {
    title: 'Пирсинг',
    items: [
      { name: 'Прокол ухо 1 шт.', price: 700 },
      { name: 'Прокол ухо 2 шт.', price: 1200 },
      { name: 'Прокол нос', price: 1000 },
    ],
  },
];

export const injectionServices: PriceListCategory[] = [
  {
    title: 'Биоревитализация',
    items: [
      { name: 'Лицо', price: 8200, from: true },
      { name: 'Область вокруг глаз', price: 4200, from: true },
      { name: 'Лицо + шея', price: 10200, from: true },
      { name: 'Коктейль Монако', price: 10500, from: true },
      { name: 'Кольца Венеры', price: 15500, from: true },
      { name: 'Коллагенотерапия', price: 18000, from: true },
      { name: 'Векторный лифтинг', price: 23900, from: true },
      { name: 'Полимолочная кислота', price: 30000, from: true },
    ],
  },
  {
    title: 'Филлер',
    items: [
      { name: 'Корея', price: 10000, from: true },
      { name: 'Европа', price: 14000, from: true },
    ],
  },
  {
    title: 'Плазмолифтинг',
    items: [
      { name: '1 пробирка', price: 3800, from: true },
    ],
  },
  {
    title: 'Мезотерапия',
    items: [
      { name: 'Голова', price: 3500, from: true },
      { name: 'Руки (кисти)', price: 3500, from: true },
    ],
  },
  {
    title: 'Ботокс',
    items: [
      { name: 'Межбровье', price: 4000, from: true },
      { name: 'Гусиные лапки', price: 4900, from: true },
      { name: 'DAO', price: 2000, from: true },
      { name: 'Платизма', price: 5000, from: true },
      { name: 'Лоб + межбровье', price: 7000, from: true },
      { name: 'Лоб + межбровье + глаза', price: 9000, from: true },
      { name: 'Full Face', price: 14500, from: true },
    ],
  },
  {
    title: 'Гипергидроз',
    items: [
      { name: 'Подмышки', price: 18000, from: true },
      { name: 'Ладони (2 шт.)', price: 18000, from: true },
      { name: 'Стопы (2 шт.)', price: 18000, from: true },
      { name: 'Область под грудью', price: 12000, from: true },
      { name: 'Лоб', price: 12000, from: true },
    ],
  },
];

export const hardwareCosmetologyServices = {
  rfMicroneedling: [
    { duration: '30 мин.', zone: 'Глаза', price: 7000 },
    { duration: '45 мин.', zone: 'Лицо + подбородок', price: 15000 },
    { duration: '30 мин.', zone: 'Шея', price: 8000 },
    { duration: '30 мин.', zone: 'Декольте', price: 9000 },
    { duration: '45 мин.', zone: 'Шея + декольте', price: 12000 },
    { duration: '1 час', zone: 'Лицо + шея + декольте', price: 23000 },
    { duration: '30 мин.', zone: 'Внутренняя поверхность рук', price: 10000 },
    { duration: '45 мин.', zone: 'Внутренняя поверхность бедер', price: 12000 },
    { duration: '45 мин.', zone: 'Живот', price: 14000 },
    { duration: '30 мин.', zone: 'Колени', price: 9000 },
    { duration: '30 мин.', zone: 'Кисти', price: 6000 },
    { duration: '30 мин.', zone: 'Тело (10х10 см)', price: 6000 },
    { duration: '30 мин.', zone: 'Рубец (1 см.2)', price: 3500 },
  ] as ServiceItem[],

  smasLifting: [
    { duration: '60 мин.', zone: '1/3 лица (средняя или нижняя)', price: 17000 },
    { duration: '90 мин.', zone: 'Лицо полностью', price: 30000 },
    { duration: '30 мин.', zone: 'Шея', price: 17000 },
    { duration: '60 мин.', zone: 'Шея + декольте', price: 30000 },
    { duration: '30 мин.', zone: 'Декольте', price: 17000 },
    { duration: '60 мин.', zone: 'Живот', price: 20000 },
    { duration: '60 мин.', zone: 'Внутренняя поверхность рук', price: 17000 },
  ] as ServiceItem[],

  ledTherapy: [
    { duration: '30 мин.', zone: 'Лицо', price: 1700 },
  ] as ServiceItem[],

  vascularFace: [
    { duration: '30 мин.', zone: 'Лицо', price: 3000 },
    { duration: '30 мин.', zone: 'Нос', price: 1500 },
    { duration: '30 мин.', zone: 'Подбородок', price: 1000 },
    { duration: '30 мин.', zone: 'Скулы', price: 2000 },
    { duration: '30 мин.', zone: '1 сосуд.звезд.', price: 500 },
    { duration: '30 мин.', zone: 'Щеки', price: 2500 },
    { duration: '30 мин.', zone: 'Гемангиома более 0,2 см', price: 250 },
    { duration: '30 мин.', zone: 'Гемангиома до 0,2 см', price: 150 },
  ] as ServiceItem[],

  vascularBody: [
    { duration: '60 мин.', zone: 'Зона с ладонь', price: 2200 },
    { duration: '60 мин.', zone: 'Удаление от 100 до 500 имп.', price: 3500 },
    { duration: '60 мин.', zone: 'Удаление от 500 до 1500 имп.', price: 7000 },
    { duration: '60 мин.', zone: 'Удаление от 1500 до 3000 имп.', price: 10000 },
  ] as ServiceItem[],

  pigmentation: [
    { duration: '15 мин.', zone: 'Пятно', price: 600 },
    { duration: '30 мин.', zone: 'Щеки', price: 3000 },
    { duration: '15 мин.', zone: 'Скулы', price: 2500 },
    { duration: '20 мин.', zone: 'Лоб', price: 2000 },
    { duration: '15 мин.', zone: 'Верхняя губа', price: 700 },
    { duration: '30 мин.', zone: 'Декольте', price: 2500 },
    { duration: '30 мин.', zone: 'Кисти рук', price: 1500 },
    { duration: '30 мин.', zone: 'Лицо', price: 3000 },
    { duration: '30 мин.', zone: 'Подбородок', price: 1000 },
  ] as ServiceItem[],

  permanentRemoval: [
    { duration: '30 мин.', zone: 'Губы', price: 3000, from: true },
    { duration: '30 мин.', zone: 'Брови', price: 3000, from: true },
  ] as ServiceItem[],

  tattooRemoval: [
    { duration: '20 мин.', zone: '2х2 см', price: 2000, from: true },
    { duration: '20 мин.', zone: '2х5 см', price: 3500, from: true },
    { duration: '20 мин.', zone: '5х5 см', price: 4500, from: true },
    { duration: '20 мин.', zone: '5х10 см', price: 5500, from: true },
    { duration: '20 мин.', zone: '10х15 см', price: 5800, from: true },
    { duration: '20 мин.', zone: '20х10 см', price: 6500, from: true },
    { duration: '20 мин.', zone: '20х15 см', price: 6800, from: true },
    { duration: '20 мин.', zone: '20х20 см', price: 7500, from: true },
    { duration: '20 мин.', zone: '20х25 см', price: 8000, from: true },
    { duration: '30 мин.', zone: '20х30 см', price: 8500, from: true },
    { duration: '30 мин.', zone: '20х35 см', price: 8800, from: true },
    { duration: '30 мин.', zone: '20х40 см', price: 9500, from: true },
    { duration: '30 мин.', zone: '30х30 см', price: 9800, from: true },
    { duration: '30 мин.', zone: '30х35 см', price: 10300, from: true },
    { duration: '30 мин.', zone: '30х40 см', price: 11000, from: true },
  ] as ServiceItem[],
};

export const threadLiftingServices = {
  items: [
    { duration: '30 мин.', zone: 'Мезонити MONO (1 нить)', price: 550 },
    { duration: '30 мин.', zone: 'Мезонити SCREW (1 нить)', price: 650 },
    { duration: '30 мин.', zone: 'Мезонити MULTIFILL (4 нити)', price: 9000 },
    { duration: '60 мин.', zone: 'Нити COG (1 нить)', price: 7500 },
  ] as ServiceItem[],
};

export const contactInfo = {
  phones: ['+7(949)856-17-77', '+7(949)876-17-77'],
  email: 'aura-beauty@example.com',
  workingHours: 'пн-вс 08:00-20:00, работаем без выходных',
  addresses: [
    '283001, ДНР, г. Донецк, ул. Фёдора Зайцева, 154',
    '283001, ДНР, г. Донецк, ул. Челюскинцев, 140',
  ],
  socialMedia: {
    whatsapp: 'https://api.whatsapp.com/send?phone=79498561777',
    vk: 'https://aura-dn.ru/about/',
    instagram: 'https://www.instagram.com/aura_salon_dnr/',
    telegram: 'https://t.me',
  },
};

