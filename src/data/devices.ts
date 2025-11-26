export type Device = {
  slug: string
  title: string
  excerpt: string
  image: string
  tags?: string[]
}

export const devices: Device[] = [
  {
    slug: 'rf-lifting-volnewmer',
    title: 'RF-лифтинг на аппарате VOLNEWMER',
    excerpt:
      'Безопасная процедура для подтяжки, омоложения и уплотнения кожи. Улучшает тонус и текстуру без реабилитации.',
    image: '/public/Volnew.png',
    tags: ['Для лица', 'Для тела']
  },
  {
    slug: 'smas-ultraformer-mpt',
    title: 'SMAS-лифтинг на аппарате Ultraformer MPT',
    excerpt:
      'Альтернатива хирургии и инъекциям. Омоложение и лифтинг уже после 1-й процедуры.',
    image: '/public/Ultraformer.png',
    tags: ['Для лица', 'Для тела']
  },
  {
    slug: 'skin-tightening-ultraformer',
    title: 'Лифтинг и уплотнение кожи на аппарате Ultraformer',
    excerpt:
      'Бережный лифтинг и упругость кожи без боли и восстановления.',
    image: '/public/ph.png',
    tags: ['Для лица']
  },
  {
    slug: 'laser-rejuvenation-fotona-4d',
    title: 'Лазерное омоложение на аппарате Fotona 4D',
    excerpt:
      'Эффективная борьба с возрастными изменениями всего за 1 процедуру.',
    image: '/public/Fotona.png',
    tags: ['Для лица']
  },
  {
    slug: 'bbl-hero',
    title: 'Фотоомоложение BBL HERO',
    excerpt:
      'Инновационная омолаживающая процедура — быстро, безопасно, эффективно.',
    image: '/public/bbl.png',
    tags: ['Для лица', 'Для тела']
  },
  {
    slug: 'morpheus8',
    title: 'Микроигольчатый RF-лифтинг InMode Morpheus 8',
    excerpt:
      'Аппаратная процедура с микроиглами и RF для глубокого омоложения и уплотнения кожи.',
    image: '/public/inm.png',
    tags: ['Для лица', 'Для тела']
  },
  {
    slug: 'geneo-plus',
    title: 'Комплексный уход на аппарате GENEO+',
    excerpt:
      'Глубокое оздоровление и омоложение с эффектом лифтинга уже за одну процедуру.',
    image: '/public/gen.png',
    tags: ['Для лица']
  },
  {
    slug: 'lasemd',
    title: 'Лазерное омоложение кожи на аппарате LaseMD',
    excerpt:
      'Разглаживание морщин, восстановление роста волос, омоложение лица, шеи и зоны декольте.',
    image: '/public/LaseMD.png',
    tags: ['Для лица']
  },
  {
    slug: 'inmode-diolaze-xl',
    title: 'Лазерная эпиляция на аппарате InMode Diolaze XL',
    excerpt:
      'Эффективная эпиляция с гибридным лазером и высокой скоростью обработки.',
    image: '/public/diolaze-xl.webp',
    tags: ['Для тела']
  },
  {
    slug: 'heleo4-led-pro',
    title: 'Фотодинамическая терапия Heleo4 LED PRO (новая модификация)',
    excerpt:
      'Новые возможности LED‑терапии в лечении и омоложении кожи.',
    image: '/public/Heleo.png',
    tags: ['Для лица']
  }
]
