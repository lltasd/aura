export type SpecialItem = {
  image: string
  title: string
  category: string
  discount: string
  description: string
  details: string[]
  validUntil: string
}

export const specials: SpecialItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    title: '08.12. День биоревитализации',
    category: 'Специальное предложение',
    discount: 'Акция',
    description: 'Специальное предложение на процедуры биоревитализации.',
    details: [
      'Выигрышная цена на день акции',
      'Подробности у администратора',
    ],
    validUntil: '31.12.2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    title: '10.12. День ботокса',
    category: 'Специальное предложение',
    discount: 'Акция',
    description: 'Специальное предложение на процедуры ботулинотерапии.',
    details: [
      'Выигрышная цена на день акции',
      'Подробности у администратора',
    ],
    validUntil: '31.12.2025'
  },
  {
    image: '/second.webp',
    title: '11.12. День филлера',
    category: 'Специальное предложение',
    discount: 'Акция',
    description: 'Специальное предложение на процедуры контурной пластики (филлеры).',
    details: [
      'Выигрышная цена на день акции',
      'Подробности у администратора',
    ],
    validUntil: '31.12.2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    title: 'Удаление тату и татуажа',
    category: 'Скидка',
    discount: '-15%',
    description: 'Скидка на процедуры удаления тату и татуажа.',
    details: [
      'Скидка действует ограниченное время',
      'Подробности у администратора',
    ],
    validUntil: '31.12.2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    title: 'Все пилинги',
    category: 'Скидка',
    discount: '-30% / -40%',
    description: 'Скидки на пилинги: -30% при оплате одной процедуры, -40% при оплате курса от 3 процедур.',
    details: [
      'Скидка -30% при оплате одной процедуры',
      'Скидка -40% при оплате курса от 3 процедур',
      'Скидки не суммируются',
    ],
    validUntil: '31.12.2025'
  },
]
