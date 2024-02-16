import React from 'react'
import ProfileCard from './ProfileCard';

const BlogSection = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='px-10 flex flex-col xl:max-w-[1450px]'>


                    <div className="px-5 mt-10 sm:mt-12 md:mt-14 flex justify-center flex-wrap gap-y-5 gap-x-5 md:gap-x-8 lg:gap-x-12 xl:gap-x-14 2xl:gap-x-16 sm:gap-y-8 md:gap-y-10 xs:px-10 lg:px-20  xl:pr-5">





                        {Array.from({ length: 8 }).map(() => <ProfileCard />)}


                    </div>




                    <div className='hidden xl:flex xl:w-[25%] mt-10'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection;