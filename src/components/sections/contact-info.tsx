import ContactCard from '../ui/contact-card'
import { IconName } from '../utils/icons'

export interface IContactCard {
  title: string,
  items: {
    name: string,
    href: string
  }[],
  icon: IconName
}

const contactInfoMap: IContactCard[] = [
  {
    title: 'Call Us',
    items: [
      {
        name: '+373 69 79 59 08',
        href: 'tel:+37369795908'
      },
      {
        name: '+373 61 09 00 81',
        href: 'tel:+37369795908'
      }
    ],
    icon: 'phone'
  },
  {
    title: 'Email Adress',
    items: [{
      name: 'contact@smartjobs.md',
      href: 'mailto:contact@smartjobs.md'
    }],
    icon: 'outlook'
  },
  {
    title: 'Our Office',
    items: [{
      name: 'Str.Alessandro Bernardazzi 27',
      href: 'https://share.google/1y4tcOdX1XgIVtzC5'
    }],
    icon: 'map-pit'
  },
]

export default function ContactInfo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {contactInfoMap.map((item, i) => (
        <ContactCard key={i} card={item} firstItem={i === 0} />
      ))}

      <div className='border border-stroke-white rounded-xl col-span-1 lg:col-span-2 overflow-hidden'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.376668696016!2d28.83027337697771!3d47.013210971141554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c26059a65d1%3A0x2a2f165d8ab21b69!2sStrada%20Alexandru%20Bernardazzi%2027%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1782811511758!5m2!1sen!2s" width="100%" height="387" style={{ border: "0" }} allowFullScreen={false} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
  )
}