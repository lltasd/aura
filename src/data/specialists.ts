export type Specialist = {
  name: string
  role: string
  image: string
  location?: 'fedora' | 'chelyuskintsev'
}

export const specialists: Specialist[] = [
  { name: 'Светлана Химина', role: 'Руководитель студии', image: '/svet.webp' },
  { name: 'Наталья Андрианова', role: 'Косметолог-эстетист', image: '/first.webp' },
  { name: 'Георгий Кабулов', role: 'Врач-косметолог', image: '/slider4.webp' },
  { name: 'Светлана Родкина', role: 'Специалист аппаратной косметологии', image: '/seven.webp' },
  { name: 'Ирина Распоркина', role: 'Стилист по волосам', image: '/kab3.webp' },
  { name: 'Луиза', role: 'Специалист по уходу за кожей', image: '/chet.webp' },
]
