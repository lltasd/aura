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
  { name: 'Александра Вячеславовна', role: 'специалист лазерной эпиляции и удаления тату', image: '/special5.webp' },
  { name: 'Светлана Игоревна', role: 'Специалист лазерной эпиляции первой категории', image: '/special6.webp' },
  { name: 'Анна Александровна', role: 'Специалист массажист по коррекции фигуры', image: '/special7.webp' },
  { name: 'Валерия Александровна', role: 'Специалист по коррекции фигуры и лазерной эпиляции', image: '/special8.webp' },
  { name: 'Анастасия Игоревна', role: 'Cтарший администратор', image: '/special9.webp' },
  { name: 'Мария Валерьевна', role: 'Администратор', image: '/special10.webp' },
]
