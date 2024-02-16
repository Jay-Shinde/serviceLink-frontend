import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (





    <>
      <footer className="bg-black flex flex-col items-center pt-12 pb-12 mt-20">


        <div className="flex w-[95%] xl:max-w-[1400px]  justify-between mt-2 flex-col-reverse xs:flex-row xs:flex-wrap-reverse gap-7 sm:gap-8 md:gap-10 items-center">
          <nav className=" flex xs:justify-between gap-5 items-center flex-col xs:flex-row w-full xs:w-[340px]">
            <a href="#" className="text-white text-base">About</a>
            <a href="#" className="text-white text-base">Features</a>
            <a href="#" className="text-white text-base">Pricing</a>
            <a href="#" className="text-white text-base">Gallery</a>
            <a href="#" className="text-white text-base">Team</a>
          </nav>

          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d3b535695698e836429be03266d3ef71e5160a6e944a71d50b47605a89a257?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
              className="aspect-[0.57] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
              alt="Logo"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/999ab697d64662266651c64ee927df8754f953c88cddb70d943412183cffd69f?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              alt="Icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2621da61f514958135c2c8a38ca5531f0225b88821dc07ee65bfd6e9c0e9c8?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              alt="Icon 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b65201d0dd91538b14bab5752cd53c119829b04ef257f9a324aeec5570c159c4?apiKey=baec3f9eff4049438a5b7400bcfcac00&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
              alt="Icon 3"
            />
          </div>

        </div>



        <div className="flex flex-col  mt-5 pt-2 xs:pt-4 w-[95%] xl:max-w-[1400px]">
          <div className="flex items-stretch justify-between gap-5 mb-4">

            <div className="h-9 flex flex-row items-center justify-start sm:gap-[4.76px] xs:gap-[3px]">
              <Image layout="fixed" width={200} height={200} className="sm:w-[31.32px] relative sm:h-[31.32px] h-7 w-7" alt="logo" src="/logo.svg" />
              <b className="relative">
                <span className="sm:text-[20px] xs:text-[16] text-white">Link</span>
                <span className="text-[#ff5151] sm:text-[20px] xs:text-[16]">Service</span>
              </b>
            </div>


            <div className="bg-white w-1/2  xs:w-[60%] md:w-[70%] shrink-0 max-w-full h-px my-auto" />
          </div>
          <nav className="items-stretch flex justify-around gap-6 mt-3 self-start">
            <a href="#" className="text-white text-sm grow whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="text-white text-sm">Terms of Use</a>
            {/* <a href="#" className="text-white text-sm">Sales and Refunds</a> */}
            <a href="#" className="text-white text-sm">Legal</a>
            {/* <a href="#" className="text-white text-sm whitespace-nowrap">Site Map</a> */}
          </nav>
        </div>
      </footer>











    </>
  )
}

export default Footer