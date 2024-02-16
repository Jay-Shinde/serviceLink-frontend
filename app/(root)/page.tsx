import { UserButton } from '@clerk/nextjs'
import HeroSection from '@/components/section/HeroSection'
import BlogSection from '@/components/section/BlogSection'
import ServiceSection from '@/components/section/serviceSection'


export default function Home() {
  return (
    <div className='text-center'>

      <HeroSection />
      <ServiceSection />
      <BlogSection />

    </div>
  )
}
