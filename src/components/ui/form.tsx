import { Icon } from '../utils/icons'
import Button from './button'
import { Input } from './input'
import { Textarea } from './textarea'

export default function Form() {
  return (
    <form action="" className='grid md:grid-cols-2 gap-x-3 gap-y-5 lg:gap-y-9'>
      <Input
        name='name'
        label="Full Name"
        type='text'
        placeholder='Your Name'
      />
      <Input
        name='organization'
        label="Organization"
        type='text'
        placeholder='Organization name'
      />
      <Input
        name='phone'
        label="Phone"
        type='text'
        placeholder='+373 69 00 00 00'
      />
      <Input
        name='email'
        label="Email"
        type='email'
        placeholder='Email'
      />
      <Textarea
        name='message'
        label='Message (optional)'
        placeholder='Tell us about your needs'
      />
      <Button variant={'black'} size={'full'} className='col-span-1 lg:col-span-2'>
        Send Message <Icon name={'arrow-right'} size={16}></Icon>
      </Button>
    </form>
  )
}