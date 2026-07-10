import { cn } from '@/libs/cn'
import React from 'react'

const alignClass: Record<string, string> = {
  'left': 'text-left',
  'center': 'text-center',
  'right': 'text-right'
}

const spanColors: Record<string, string> = {
  orange: '[&>span]:text-main',
  black: '[&>span]:text-foreground/70'
}

export default function SectionHeading({
  className,
  align = 'left',
  subtitle,
  spanColor = 'orange',
  children,
}: {
  className?: string,
  align?: string,
  subtitle?: string
  children: React.ReactNode,
  spanColor?: string
}) {
  return (
    <div>
      <p className={cn('text-main text-sm font-medium uppercase tracking-wide mb-3', alignClass[align])}>{subtitle}</p>
      <h2 className={cn(spanColors[spanColor], alignClass[align], className)}>{children}</h2>
    </div>
  )
}
