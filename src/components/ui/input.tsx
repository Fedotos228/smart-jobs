import { cn } from '@/libs/cn'

function Input({ className, type, label, ...props }: React.ComponentProps<'input'> & { label: string }) {
  return (
    <label className='space-y-1.5'>
      <span className='block text-sm mb-1.5'>{label}</span>
      <input
        className={cn(
          'w-full min-w-0 h-12.5 bg-white px-4 py-3 border border-stroke-white rounded-xl text-foreground placeholder:text-foreground/60 transition-colors outline-none selection:text-background selection:bg-foreground',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-main',
          'aria-invalid:ring-red/20 dark:aria-invalid:ring-red/40 aria-invalid:border-red',
          className
        )}
        type={type}
        {...props}
      />
    </label>
  )
}

export { Input }
