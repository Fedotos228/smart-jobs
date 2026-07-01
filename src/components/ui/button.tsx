import { cn } from '@/libs/cn'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm py-4 cursor-pointer transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "bg-main text-white text-center",
        outline: "bg-white/10 backdrop-blur-md text-white border border-stroke-dark",
        black: 'bg-foreground text-white'
      },
      size: {
        default: "w-[180px] h-[50px]",
        large: "w-[262px] h-[50px]",
        full: 'w-full'
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

type ButtonComponentProps = React.ComponentProps<'button'> & React.ComponentProps<'a'>

export default function Button({
  className,
  variant = "default",
  size = 'default',
  children,
  asLink,
  ...props
}: ButtonComponentProps &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode,
    asLink?: boolean
  }) {
  const Component = asLink ? "a" : "button"

  return (
    <Component
      data-slot={asLink ? "a" : "button"}
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}
