import Areas from '@/components/sections/areas'
import Countries from '@/components/sections/countries'
import Employers from '@/components/sections/employers'
import Hero from '@/components/sections/hero'
import HowWorks from '@/components/sections/how-works'
import Provide from '@/components/sections/provide'

export default function Home() {
  return (
    <main>
      <Hero />
      <HowWorks />
      <Provide />
      <Countries />
      <Areas />
      <Employers />
    </main>
  );
}
