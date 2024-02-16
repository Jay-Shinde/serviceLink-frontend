import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServicePage from '@/components/section/ServicePage/ServicePage'

const Service = () => {

  return (
    <div className='text-center'>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Keywords" />
        <Button type="submit">Search</Button>
      </div>
      <br />
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Location" />
        <Button type="submit">Search</Button>
      </div>
      Service Page
      <ServicePage />
    </div>
  )
}

export default Service