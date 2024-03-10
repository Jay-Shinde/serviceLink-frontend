import React from 'react'
import { Input } from "@/components/ui/input"

import CommunityCode from '@/components/section/community/Community'
const Community = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex w-full max-w-[1500px]'>
        <div className='flex flex-col w-full md:w-2/3 items-center mt-10'>
          <div className='flex flex-col items-start'>
            <div className='w-full flex gap-1 flex-wrap'>
              <div className='inline-block'>
                <Input type="text" placeholder="Keywords" />
                {/* <Button type="submit">Search</Button> */}
              </div>

              <div className='inline-block'>
                <Input type="text" placeholder="Location" />
                {/* <Button type="submit">Search</Button> */}

              </div>
            </div>
            <CommunityCode />
          </div>
        </div>

        <div className='hidden md:w-1/3 md:flex flex-col items-end mt-10'>
          <div className='flex flex-col items-start'>
            <div className="md:flex flex-col items-stretch w-[99%] max-w-[358px]">
              <span className="border-l-[color:var(--Light-Border-Color,rgba(200,203,217,0.33))] shadow-lg  flex w-full flex-col pr-2  pl-3.5 py-12 border-l border-solid max-md:mt-7">


                <div className="text-neutral-900 text-[16px] font-bold leading-7 whitespace-nowrap ml-3.5 mt-5 self-start max-md:ml-2.5">
                  Popular Posts
                </div>



                <span className="flex items-stretch self-stretch  justify-between gap-2.5 mt-7 ml-3.5">
                  <div className="text-gray-700 text-[13px] text-left font-medium leading-5 grow shrink basis-auto">
                    The importance of biomechanics in understanding human movement{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50da34e8715675a4ca72bd61671cb6638d7dc5ab459b43580753a0d324a45ce?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>
                <span className="flex items-stretch self-stretch  justify-between gap-2.5 mt-7 ml-3.5">
                  <div className="text-gray-700 text-[13px] text-left font-medium leading-5 grow shrink basis-auto">
                    The importance of biomechanics in understanding human movement{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50da34e8715675a4ca72bd61671cb6638d7dc5ab459b43580753a0d324a45ce?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>
                <span className="flex items-stretch self-stretch  justify-between gap-2.5 mt-7 ml-3.5">
                  <div className="text-gray-700 text-[13px] text-left font-medium leading-5 grow shrink basis-auto">
                    The importance of biomechanics in understanding human movement{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50da34e8715675a4ca72bd61671cb6638d7dc5ab459b43580753a0d324a45ce?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>
                <span className="flex items-stretch self-stretch  justify-between gap-2.5 mt-7 ml-3.5">
                  <div className="text-gray-700 text-[13px] text-left font-medium leading-5 grow shrink basis-auto">
                    The importance of biomechanics in understanding human movement{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50da34e8715675a4ca72bd61671cb6638d7dc5ab459b43580753a0d324a45ce?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>
                <span className="flex items-stretch self-stretch  justify-between gap-2.5 mt-7 ml-3.5">
                  <div className="text-gray-700 text-[13px] text-left font-medium leading-5 grow shrink basis-auto">
                    The importance of biomechanics in understanding human movement{" "}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50da34e8715675a4ca72bd61671cb6638d7dc5ab459b43580753a0d324a45ce?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>


                <div className="text-neutral-900 text-[16px] font-bold leading-7 whitespace-nowrap ml-3.5 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
                  Popular Tags
                </div>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-7">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    Yoga Trainer
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    20152+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    grovery
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    18493+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    coreography
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    16269+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    trainer
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    15121+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    photoshoot
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    14431+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    prewedding
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    9429+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 aspect-[2.5517241379310347] px-4 py-2 rounded-md">
                    saloon
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    9429+
                  </div>
                </span>
                <span className="justify-between items-stretch self-stretch flex gap-5 mt-4 mb-9">
                  <span className="text-[#7B8EC8] text-[13px] font-medium leading-3 uppercase whitespace-nowrap justify-center items-stretch bg-gray-100 px-4 py-2 rounded-md">
                    homemade
                  </span>
                  <div className="text-gray-700 text-[13px] font-medium leading-4 self-center my-auto">
                    9429+
                  </div>
                </span>
              </span>
            </div>

            <p>this is ad area</p>
            <div className='h-96 w-[99%] max-w-[358px] bg-gray-500'>
              hello customers !
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Community