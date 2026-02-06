
interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  return (
    <img
      src="/лого 120х120 (2).png"
      srcSet="/лого 120х120 (2).png 1x, /лого 240х240 (2).png 2x, /лого 360х360 (2).png 3x"
      alt="Аура Студия Красоты"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
