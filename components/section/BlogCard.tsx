import React from 'react'

const BlogCard = () => {
    return (
        <>
            <div className="w-64 xs:w-72 sm:w-80 md:w-96 xl:w-[450px] mb-3 border-b border-solid rounded-[22px] flex flex-col overflow-hidden">
                <img src="/blogPost.svg" alt="bw-log-image" className="w-full h-[55%] bg-fill object-cover" />
                <div className="flex items-start justify-between gap-[17.76px] mt-3">
                    <div className="w-full [font-family:'Inter-SemiBold',Helvetica] font-semibold text-dark-300 text-[24px] tracking-[0] text-left ">
                        Migrating to Linear 101
                    </div>

                    <img src='click-arrow.svg' alt='arrow' className="!relative !w-[24px] !h-[24px]" />

                </div>

                <p className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f4354] text-[16px] tracking-[0] text-left my-0 mt-3">
                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                </p>
                <div className="my-4 full flex justify-start items-center">
                    <img src="profile-image.png" alt="profile-image" className="w-[50px] h-[50px] rounded-full object-cover" />
                    <div className="flex flex-col ml-4">
                        <div className="w-fit [font-family:'Inter-medium',Helvetica] font-semibold text-dark-400 text-[16px] tracking-[0] leading-[23.1px] whitespace-nowrap">
                            Phoenix Baker
                        </div>
                        <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f4354] text-[16px] tracking-[0] leading-[21.8px] whitespace-nowrap">
                            19 Jan 2022
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogCard;