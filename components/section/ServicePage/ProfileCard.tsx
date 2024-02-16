import React from 'react'
import TagCompo from '../Tag';
import Image from 'next/image';

const ProfileCard = () => {
    return (
        <>
            {/* <div className="w-64 xs:w-72 sm:w-80 md:w-96 xl:w-[450px] mb-3 border-b border-solid rounded-[22px] flex flex-col overflow-hidden">
                <img src="/blogPost.svg" alt="bw-log-image" className="w-full h-[55%] bg-fill object-cover" />
                <div className="flex items-start justify-between gap-[17.76px] mt-3">
                    <div className="w-full [font-family:'Inter-SemiBold',Helvetica] font-semibold text-dark-300 text-[24px] tracking-[0] text-left ">
                        Migrating to Linear 101
                    </div>

                    <img src='click-arrow.svg' alt='arrow' className="!relative !w-[26.65px] !h-[26.65px]" />

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
 
            </div> */}
            <div className='flex flex-nowrap items-start gap-5  border-black border-solid'>
                <img src="/avatarmd.svg" alt="profileImage" className='h-24' />
                <div className='flex flex-col gap-3 sm:gap-5'>

                    <div className='flex  flex-row xs:w-[300px] sm:w-[600px] items-start sm:items-center xs:justify-between'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center'>
                            <p className='text-black font-semibold text-[15px] xs:text-[16px] sm:text-[18px] text-nowrap'>Oracle Fitness</p>

                            <div className='flex gap-2 sm:gap-3  items-start sm:items-center'>
                                <TagCompo tag="tagname" />
                                <TagCompo tag="tagname" />

                            </div>

                        </div>
                        <div className='flex gap-2 sm:gap-4 justify-end sm:items-center'>
                            <div className='w-[110px] flex gap-2 items-center justify-center rounded-lg bg-[#F4F6F8]'>
                                <span className='h-3 w-3 rounded-ful overflow-hidden'>
                                    <img className="w-3 h-3 rounded-full" src="/in.svg" alt="flag" />
                                </span>
                                <span className='text-[11px] xs:text-[12px] sm:text-[14px] text-nowrap font-medium'>
                                    Mumbai, IN
                                </span>
                            </div>
                            <img className="w-5 h-5 rounded-full" src="/bookmark.svg" alt="flag" />
                        </div>
                    </div>
                    <p className='xs:w-[250px] sm:w-[600px] text-left text-wrap text-[11px] xs:text-[12px] sm:text-[14px]'>
                        Here will be the tagline or description of service provider to grab the attention of customers so will be important !
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='text-[11px] xs:text-[12px] sm:text-[14px] text-[#7B8EC8]'>Likes Comments Share</div>
                        <div className='text-[#ff5151] font-semibold'>connect</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;