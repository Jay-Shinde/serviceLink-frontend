import React from 'react'
import TagCompo from '../Tag';
import Image from 'next/image';
import { title } from 'process';

type propstype = { imgUrl: any; titleOfService: any; tag1: any; tag2: any; location: any; tagline: any; priceRange: any; };

const ProfileCard = (props: propstype) => {
    const { imgUrl, titleOfService, tag1, tag2, location, tagline, priceRange } = props;
    return (
        <>

            <div className='flex flex-wrap xs:flex-nowrap justify-center  lg:w-[900px] xl:w-[1000px] gap-5 m-1 xs:m-5 p-2 bg-[#ffffff] border-2 border-solid border-[#efefef] rounded-lg  shadow-lg hover:shadow-xl '>

                <img src={imgUrl} alt="profileImage" className='h-20 sm:h-24' />


                <div className='flex flex-col gap-3 sm:gap-5 w-full'>


                    <div className='flex  flex-row  w-[100%] items-center justify-between'>
                        <div className='flex gap-2 sm:gap-4 items-center'>
                            <p className='text-black font-semibold text-[15px] xs:text-[16px] sm:text-[18px] text-nowrap'>{titleOfService}</p>

                            <div className='sm:flex gap-2 sm:gap-3 items-center hidden'>
                                <TagCompo tag={tag1} />
                                <TagCompo tag={tag2} />

                            </div>

                        </div>
                        <div className='flex gap-2 sm:gap-4 justify-end items-center'>
                            <div className='w-[110px] flex gap-2 items-center justify-center rounded-lg bg-[#F4F6F8]'>
                                <span className='h-3 w-3 rounded-ful overflow-hidden'>
                                    <img className="w-3 h-3 rounded-full" src="/in.svg" alt="flag" />
                                </span>
                                <span className='text-[11px] xs:text-[12px] sm:text-[14px] text-nowrap font-medium'>
                                    {
                                        location}
                                </span>
                            </div>

                        </div>
                    </div>



                    <p className='w- text-left text-wrap text-[11px] xs:text-[12px] sm:text-[14px]'>
                        {tagline}
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='text-[11px] xs:text-[12px] sm:text-[14px] text-[#7B8EC8] flex items-center gap-2'>
                            <img src="./dollarIcon.svg" alt="dollar" className='inline-block' />
                            {
                                priceRange}
                        </div>
                        <div className='px-2 text-[#ff5151] font-semibold text-[14px]  sm:text-[16px] hover:cursor-pointer hover:translate-y-[-1px]'>
                            connect
                            <img className='inline-block' src="/gotoIcon.svg" alt="icongoto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;