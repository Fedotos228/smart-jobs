import { cn } from '@/libs/cn'

export default function Section({
  children,
  className,
  topSpace,
  id
}: {
  children?: React.ReactNode,
  className?: string
  topSpace?: boolean,
  id?: string
}) {
  return (
    <section id={id} className={cn('pb-12.5', topSpace ? 'pt-25' : 'pt-12.5', className)}>
      {children}
    </section>
  )
}