export interface ServiceItem {
  duration: string;
  zone: string;
  price: number;
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

export const alexandriteServices = {
  faceNeck: [
    { duration: '10 мин.', zone: 'Верхняя губа', price: 750 },
    { duration: '10 мин.', zone: 'Подбородок', price: 900 },
    { duration: '10 мин.', zone: 'Виски', price: 800 },
    { duration: '10 мин.', zone: 'Лоб', price: 600 },
    { duration: '10 мин.', zone: 'Межбровье', price: 650 },
    { duration: '20 мин.', zone: 'Щёки', price: 1000 },
    { duration: '20 мин.', zone: 'Уши', price: 600 },
    { duration: '30 мин.', zone: 'Лицо полностью', price: 2500 },
    { duration: '20 мин.', zone: 'Шея (передняя или задняя пов-ть)', price: 1400 },
    { duration: '30 мин.', zone: 'Шея полностью', price: 2500 },
  ],
  backStomach: [
    { duration: '20 мин.', zone: 'Плечи', price: 2700 },
    { duration: '40 мин.', zone: 'Спина и поясница', price: 4000 },
    { duration: '20 мин.', zone: 'Поясница', price: 2500 },
    { duration: '10 мин.', zone: 'Декольте', price: 1800 },
    { duration: '20 мин.', zone: 'Живот', price: 2800 },
    { duration: '10 мин.', zone: 'Белая линия живота', price: 1000 },
    { duration: '10 мин.', zone: 'Ореолы', price: 700 },
    { duration: '15 мин.', zone: 'Крестец', price: 1200 },
  ],
  arms: [
    { duration: '20 мин.', zone: 'Руки до локтя (верх или низ)', price: 2500 },
    { duration: '30 мин.', zone: 'Руки полностью + кисти', price: 3000 },
    { duration: '10 мин.', zone: 'Кисти рук', price: 900 },
    { duration: '10 мин.', zone: 'Подмышки', price: 1200 },
  ],
  legs: [
    { duration: '20 мин.', zone: 'Бёдра (передняя, задняя или внутрен. пов-ть)', price: 2300 },
    { duration: '30 мин.', zone: 'Бёдра полностью', price: 3200 },
    { duration: '30 мин.', zone: 'Голени', price: 2700 },
    { duration: '40 мин.', zone: 'Голени + колени', price: 3200 },
    { duration: '60 мин.', zone: 'Ноги полностью + пальцы стоп', price: 5000 },
    { duration: '10 мин.', zone: 'Пальцы стоп', price: 700 },
    { duration: '10 мин.', zone: 'Колени', price: 700 },
  ],
  intimate: [
    { duration: '10 мин.', zone: 'Лобок', price: 1700 },
    { duration: '10 мин.', zone: 'Половые губы', price: 1000 },
    { duration: '20 мин.', zone: 'Глубокое бикини', price: 3000 },
    { duration: '20 мин.', zone: 'Классическое бикини', price: 2300 },
    { duration: '10 мин.', zone: 'Межъягодичная складка', price: 1000 },
    { duration: '20 мин.', zone: 'Ягодицы', price: 3000 },
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
    originalPrice: 4000,
    discountedPrice: 3400,
  },
  {
    name: 'КЛАССИЧЕСКИЙ',
    services: ['Глубокое бикини', 'подмышки', 'голени'],
    originalPrice: 7000,
    discountedPrice: 5600,
  },
  {
    name: 'МАКСИМУМ',
    services: ['Глубокое бикини', 'подмышки', 'ноги', '(малая зона на лице)'],
    originalPrice: 8900,
    discountedPrice: 7100,
  },
  {
    name: 'ТОТАЛЬНЫЙ',
    services: ['Глубокое бикини', 'подмышки', 'ноги полностью', 'руки полностью', '(малая зона на выбор)'],
    originalPrice: 11900,
    discountedPrice: 9500,
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

