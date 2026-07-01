import { cn } from '@/libs/cn'

type ColorsType = "black" | "black60" | "white" | "white70"

const colorsMap: Record<ColorsType, string> = {
  black: 'text-foreground',
  black60: 'text-foreground/60',
  white: 'text-white',
  white70: 'text-white/70'
}

export default function Paragraph({
  children,
  color = 'black60',
  className,
}: {
  children?: React.ReactNode
  color?: ColorsType
  className?: string
}) {
  return (
    <p className={cn('leading-[150%]', colorsMap[color], className,)}>{children}</p>
  )
}
