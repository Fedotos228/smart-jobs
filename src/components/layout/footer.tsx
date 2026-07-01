import Link from 'next/link'
import Logo from '../ui/logo'
import Paragraph from '../ui/paragraph'
import Container from '../utils/container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-animate='fade-up' className='border-t border-t-stroke-white pt-25 pb-12.5'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-b-stroke-white pb-15.75'>
          <div className='max-w-91.25'>
            <Logo variant='color' />
            <Paragraph className='mt-3'>
              Premium international recruitment and HR consulting services. Connecting global talent with Moldova industry since 2015
            </Paragraph>
          </div>

          {/* CONTACTS */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>Contacts</p>
            <ul className='flex flex-col gap-4'>
              <li><Paragraph color='black'>+373 61 09 00 81</Paragraph></li>
              <li><Paragraph color='black'>contact@smartjobs.md</Paragraph></li>
              <li><Paragraph color='black'>Str.Alessandro Bernardazzi 27</Paragraph></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>Quick Links</p>
            <ul className='flex flex-col gap-4'>
              <li><Link href='#' className='text-foreground hover:text-main transition-colors duration-200'>Home</Link></li>
              <li><Link href='#' className='text-foreground hover:text-main transition-colors duration-200'>How it works</Link></li>
              <li><Link href='#' className='text-foreground hover:text-main transition-colors duration-200'>Contact</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>Legal</p>
            <ul className='flex flex-col gap-4'>
              <li><Link href='#' className='text-foreground hover:text-main transition-colors duration-200'>Privacy Policy</Link></li>
              <li><Link href='#' className='text-foreground hover:text-main transition-colors duration-200'>Terms of Service</Link></li>
              <li><Paragraph color='black'>License #HR-2024-0892</Paragraph></li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 pt-6'>
          <Paragraph>© {currentYear} SmartJobs SRL. All rights reserved.</Paragraph>

          <Paragraph>Chișinău, Moldova</Paragraph>
        </div>
      </Container>
    </footer>
  )
}
