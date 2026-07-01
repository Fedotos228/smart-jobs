import { cn } from '@/libs/cn'

function Textarea({ className, label, ...props }: React.ComponentProps<'textarea'> & { label: string }) {
  return (
    <label className='col-span-1 lg:col-span-2'>
      <span className='block text-sm mb-1.5'>{label}</span>
      <textarea
        className={cn(
          'w-full min-h-26.5 max-h-50 min-w-0 bg-white px-4 py-3 border border-stroke-white rounded-xl text-foreground placeholder:text-foreground/60 transition-colors outline-none selection:text-background selection:bg-foreground resize-y',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-main',
          'aria-invalid:ring-red/20 dark:aria-invalid:ring-red/40 aria-invalid:border-red',
          className
        )}
        {...props}
      />
    </label>
  )
}

export { Textarea }
