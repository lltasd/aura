export type Specialist = {
  name: string
  role: string
  image: string
  location?: 'fedora' | 'chelyuskintsev'
}

export const specialists: Specialist[] = [
  { name: 'Светлана Химина', role: 'Руководитель студии', image: '/special1.webp' },
  { name: 'Ольга Сергеевна', role: 'специалист лазерной эпиляции высшей категории', image: '/special2.webp' },
  { name: 'Елена Валерьевна', role: 'специалист лазерной эпиляции высшей категории', image: '/special3.webp' },
  { name: 'Ирина Юрьевна', role: 'врач дерматолог-косметолог первой категории', image: '/special4.webp' },
  { name: 'Светлана Игоревна', role: 'Специалист лазерной эпиляции первой категории', image: '/special6.webp' },
  { name: 'Анна Александровна', role: 'Специалист по аппаратной коррекции фигуры', image: '/special7.webp' },
  { name: 'Валерия Александровна', role: 'Специалист по коррекции фигуры первой категории', image: '/special8.webp' },
]
