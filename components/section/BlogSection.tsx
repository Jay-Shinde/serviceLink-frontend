import React from 'react'
import BlogCard from './BlogCard';
import ServiceCard from './serviceCard';

const BlogSection = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='flex flex-nowrap xl:max-w-[1450px]'>


                    <div className="px-5 mt-10 sm:mt-12 md:mt-14 flex justify-center flex-wrap gap-y-3 gap-x-5 md:gap-x-8 lg:gap-x-12 xl:gap-x-14 2xl:gap-x-16 sm:gap-y-6 md:gap-y-10 xs:px-10 lg:px-20  xl:pr-5">

                        <div className="justify-self-start w-full text-left text-black text-[22px] font-bold tracking-tighter max-md:max-w-full  lg:text-[28px]">
                            Comunity Posts...
                        </div>



                        {Array.from({ length: 8 }).map(() => <BlogCard />)}


                    </div>




                    <div className='hidden xl:flex xl:w-[25%] mt-10'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection;