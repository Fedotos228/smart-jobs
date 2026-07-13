export default function Loading() {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-5 animate-pulse'>
      {/* Video skeleton */}
      <div className='w-full lg:max-w-219.5 lg:h-122.5 h-64 rounded-xl bg-stroke-white shrink-0' />

      {/* Content skeleton */}
      <div className='space-y-6 w-full'>
        <div className='space-y-3'>
          <div className='h-4 bg-stroke-white rounded-full w-full' />
          <div className='h-4 bg-stroke-white rounded-full w-11/12' />
          <div className='h-4 bg-stroke-white rounded-full w-4/5' />
          <div className='h-4 bg-stroke-white rounded-full w-full' />
          <div className='h-4 bg-stroke-white rounded-full w-3/4' />
          <div className='h-4 bg-stroke-white rounded-full w-full' />
          <div className='h-4 bg-stroke-white rounded-full w-5/6' />
        </div>

        {/* Button skeleton */}
        <div className='h-12.5 w-65.5 bg-stroke-white rounded-xl' />
      </div>
    </div>
  )
}
