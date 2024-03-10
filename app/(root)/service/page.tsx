import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServicePage from '@/components/section/ServicePage/ServicePage'



const Service = () => {

  return (
    <>
      <div className='flex flex-col w-full items-center mt-4'>


        <div className=''>

          <div className='inline-block mx-1 xs:mx-5'>
            <Input type="text" placeholder="Keywords" />
            {/* <Button type="submit">Search</Button> */}
          </div>

          <div className='inline-block'>
            <Input type="text" placeholder="Location" />
            {/* <Button type="submit">Search</Button> */}
          </div>


          <ServicePage />
        </div>




      </div>
    </>
  )
}

export default Service