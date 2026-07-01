import { cn } from '@/libs/cn'
import React from 'react'

export type GridBreakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ResponsiveValue = number | Partial<Record<GridBreakpoint, number>>

const COLS_CLASSES: Record<GridBreakpoint, Record<number, string>> = {
  base: {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12'
  },
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    5: 'sm:grid-cols-5',
    6: 'sm:grid-cols-6'
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6'
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6'
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6'
  },
  '2xl': {
    1: '2xl:grid-cols-1',
    2: '2xl:grid-cols-2',
    3: '2xl:grid-cols-3',
    4: '2xl:grid-cols-4',
    5: '2xl:grid-cols-5',
    6: '2xl:grid-cols-6'
  }
}

const GAP_CLASSES: Record<GridBreakpoint, Record<number, string>> = {
  base: {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
    12: 'gap-12',
    13: 'gap-13',
    16: 'gap-16'
  },
  sm: {
    0: 'sm:gap-0',
    1: 'sm:gap-1',
    2: 'sm:gap-2',
    3: 'sm:gap-3',
    4: 'sm:gap-4',
    5: 'sm:gap-5',
    6: 'sm:gap-6',
    7: 'sm:gap-7',
    8: 'sm:gap-8',
    9: 'sm:gap-9',
    10: 'sm:gap-10',
    12: 'sm:gap-12',
    13: 'sm:gap-13',
    16: 'sm:gap-16'
  },
  md: {
    0: 'md:gap-0',
    1: 'md:gap-1',
    2: 'md:gap-2',
    3: 'md:gap-3',
    4: 'md:gap-4',
    5: 'md:gap-5',
    6: 'md:gap-6',
    7: 'md:gap-7',
    8: 'md:gap-8',
    9: 'md:gap-9',
    10: 'md:gap-10',
    12: 'md:gap-12',
    13: 'md:gap-13',
    16: 'md:gap-16'
  },
  lg: {
    0: 'lg:gap-0',
    1: 'lg:gap-1',
    2: 'lg:gap-2',
    3: 'lg:gap-3',
    4: 'lg:gap-4',
    5: 'lg:gap-5',
    6: 'lg:gap-6',
    7: 'lg:gap-7',
    8: 'lg:gap-8',
    9: 'lg:gap-9',
    10: 'lg:gap-10',
    12: 'lg:gap-12',
    13: 'lg:gap-13',
    16: 'lg:gap-16'
  },
  xl: {
    0: 'xl:gap-0',
    1: 'xl:gap-1',
    2: 'xl:gap-2',
    3: 'xl:gap-3',
    4: 'xl:gap-4',
    5: 'xl:gap-5',
    6: 'xl:gap-6',
    7: 'xl:gap-7',
    8: 'xl:gap-8',
    9: 'xl:gap-9',
    10: 'xl:gap-10',
    12: 'xl:gap-12',
    13: 'xl:gap-13',
    16: 'xl:gap-16'
  },
  '2xl': {
    0: '2xl:gap-0',
    1: '2xl:gap-1',
    2: '2xl:gap-2',
    3: '2xl:gap-3',
    4: '2xl:gap-4',
    5: '2xl:gap-5',
    6: '2xl:gap-6',
    7: '2xl:gap-7',
    8: '2xl:gap-8',
    9: '2xl:gap-9',
    10: '2xl:gap-10',
    12: '2xl:gap-12',
    13: '2xl:gap-13',
    16: '2xl:gap-16'
  }
}

function resolveResponsiveClasses(
  value: ResponsiveValue,
  classes: Record<GridBreakpoint, Record<number, string>>
) {
  if (typeof value === 'number') {
    return classes.base[value]
  }

  return (Object.entries(value) as [GridBreakpoint, number][]).map(
    ([breakpoint, amount]) => classes[breakpoint]?.[amount]
  )
}

export default function Grid({
  cols = 3,
  gap = 5,
  colWidth,
  className,
  style,
  children,
  ...props
}: {
  cols?: ResponsiveValue,
  gap?: ResponsiveValue,
  colWidth?: number | string,
  className?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const fixedColStyle: React.CSSProperties | undefined = colWidth
    ? {
      gridTemplateColumns: `repeat(${typeof cols === 'number' ? cols : cols.base}, ${typeof colWidth === 'number' ? `${colWidth}px` : colWidth})`
    }
    : undefined

  return (
    <div
      className={cn(
        'grid',
        !colWidth && resolveResponsiveClasses(cols, COLS_CLASSES),
        resolveResponsiveClasses(gap, GAP_CLASSES),
        className
      )}
      style={{ ...fixedColStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
