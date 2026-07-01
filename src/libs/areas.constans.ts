export interface IArea {
  name: string,
  slug: string,
  iconSrc: string,
  imageSrc: string,
  description?: string[]
}

export const areas: IArea[] = [
  {
    name: 'Construction',
    slug: 'construction',
    iconSrc: '/areas/Construction.svg',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/constructions.gif',
    description: ["The construction industry is experiencing continuous growth, developing rapidly and undoubtedly being one of the most demanding fields. The experience and resilience of employees successfully complete any project, regardless of its complexity.", 'We invite you to contact us for detailed information about recruiting skilled personnel: engineers, ironworkers, painters, welders, foremen, and more.', 'Workers come from distant corners of the world, eager to work and earn a salary that supports their families.']
  },
  {
    name: 'Horeca',
    slug: 'horeca',
    iconSrc: '/areas/Horeca.svg',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/horeca.gif',
    description: ['The hospitality industry is experiencing continuous growth, being one of the most demanding fields. The experience and resilience of employees successfully complete any project, regardless of its complexity.', 'We invite you to contact us for detailed information about recruiting skilled personnel: Asian chefs, professional waiters, kitchen assistants, and hotel staff.']
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    iconSrc: '/areas/Hospitality.svg',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/horeca.gif',
    description: ['The hospitality industry thrives on human connection — every guest interaction is an opportunity to create a lasting impression. From boutique hotels to international resort chains, the demand for attentive, skilled, and culturally aware staff has never been higher.', 'We help businesses find the right people for roles that go far beyond a job description: receptionists who make guests feel at home from the first hello, housekeeping teams who maintain impeccable standards behind the scenes, and F&B staff who turn a meal into an experience.', 'Because in hospitality, people are the product.']
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Manufacturing.svg'
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Logistics.svg'
  },
  {
    name: 'Agriculture',
    slug: 'agriculture',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Agriculture.svg'
  },
  {
    name: 'Nannies',
    slug: 'nannies',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Nanny.svg'
  },
  {
    name: 'Elderly care',
    slug: 'elderly-care',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Elderly care.svg'
  },
  {
    name: 'Spa & wellness',
    slug: 'Spa-wellness',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Spa.svg'
  },
  {
    name: 'Housekeeping',
    slug: 'housekeeping',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Cleaning.svg'
  },
  {
    name: 'Food industry',
    slug: 'food-industry',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Food.svg'
  },
  {
    name: 'Heavy industry',
    slug: 'heavy-industry',
    imageSrc: 'https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/',
    iconSrc: '/areas/Heavy.svg'
  },
]