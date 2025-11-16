
interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  // Используем файл логотипа из public
  return (
    <img 
      src="/Logo.png" 
      alt="Аура Студия Красоты" 
      width={size} 
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
