
import Link from "next/link"
import { auth } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import type { NextPage } from 'next';
import { useState } from "react";
import { SheetDemo } from "./toggleMenuBtn";



const Navbar = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <>

      <div className="w-full flex  items-center justify-center bg-light-900 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.19)] box-border h-[10vh] lg:h-[12vh] overflow-hidden text-left text-[20px] lg:text-[25px] text-black font-space-grotesk border-b-[1px] border-solid border-light-border-color sm:px-4
      px-1 min-h-[73.24px] 
      ">

        <div className=" w-full 2xl:max-w-[1500px] flex justify-between">
          <div className="h-9 flex flex-row items-center justify-start sm:gap-[4.76px] xs:gap-[3px]">
            <Image layout="fixed" width={200} height={200} className="sm:w-[31.32px] relative sm:h-[31.32px] h-7 w-7" alt="logo" src="/logo.svg" />
            <b className="relative">
              <span className="sm:text-[20px] xs:text-[16]">Link</span>
              <span className="text-[#ff5151] sm:text-[20px] xs:text-[16]">Service</span>
            </b>
          </div>



          <div className="flex flex-row items-center lg:gap-[50px] gap-[16px]  text-[16px] lg:text-[18px]">




            <div className="sm:flex flex-row items-center justify-start lg:gap-[50px] gap-[16px]  text-gray font-poppins hidden">
              <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151] "><Link className="no-underline font-medium text-black " href="/">Home</Link></div>

              <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151] "><Link className="no-underline font-medium text-black " href="/service">Service</Link></div>

              <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151] "><Link className="no-underline font-medium text-black " href="/community">Community</Link></div>

              <div className=" hover:cursor-pointer  hover:border-b-2 hover:border-solid hover:border-[#ff5151] hover:scale-110 "><Link className="no-underline font-medium text-black " href="/blog">Blog</Link></div>
              {!isAuth ? (<></>) : (<div className=" hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href={`/profile/${userId}`}>Profile</Link></div>)}



            </div>



            <div className="flex flex-row items-center justify-start lg:gap-[40px] sm:gap-[20px] md:gap-[20px] text-[16px] lg:text-[18px] text-gray font-poppins gap-15px">



              {!isAuth ? (
                <>
                  <div className="w-[30px] h-[30px] flex flex-row items-center justify-center hover:cursor-pointer">
                    <Image width={200} height={200} className="sm:w-5 relative sm:h-5 h-4 w-4" alt="theme-toggle" src="/dark-theme-toggle.svg" />
                  </div>

                  <div className="hover:cursor-pointer">
                    <Link
                      className="no-underline border-solid font-medium text-[#ff5151]  border border-[#ff5151] hover:text-white hover:bg-[#ff5151] rounded-lg text-[12px] md:text-[16px] lg:text-[18px] px-2 py-1 mx-1 sm:mx-0 text-center "
                      href="/sign-in"
                    >
                      Login
                    </Link>
                  </div>
                  {/* <toggleMenuBtn /> */}

                  {/* {<button type="button" className="text-black  hover:bg-orangered bg-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>} */}
                  <div className="sm:hidden">
                    <SheetDemo isAuth={isAuth} userId={userId} />
                  </div>

                </>

              ) : (
                <>

                  <div className="w-[30px] h-[30px] flex flex-row items-center justify-center hover:cursor-pointer">
                    <Image width={200} height={200} className="w-5 relative h-5" alt="theme-toggle" src="/dark-theme-toggle.svg" />
                  </div>
                  <div className="sm:hidden">
                    <SheetDemo isAuth={isAuth} userId={userId} />
                  </div>
                  <div>
                    <UserButton afterSignOutUrl="/" />
                  </div>



                </>


              )}



            </div>


          </div>
        </div>

      </div>















    </>
  )
}

export default Navbar





