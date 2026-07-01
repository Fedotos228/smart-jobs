import { cn } from '@/libs/cn'

export default function Container({
  className,
  children
}: {
  className?: string,
  children?: React.ReactNode
}) {
  return (
    <div className={cn(
      'max-w-7xl 2xl:max-w-380 mx-auto px-4',
      className
    )}>
      {children}
    </div>
  )
} 
