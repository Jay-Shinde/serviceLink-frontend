import React from 'react'
import TagCompo from './Tag';

const ServiceCard = () => {
    return (
        <>
            <div className="h-80 w-64 rounded-xl flex flex-col overflow-hidden
                                                border border-[color:var(--Light-Border-Color,rgba(200,203,217,0.33))] shadow-lg bg-white border-solid
                                                hover:shadow-xl hover: cursor-pointer hover:translate-y-[-5px] transition-all 
                                                my-4
                                                ">
                <div className="h-[240px] w-full overflow-hidden">
                    <img className="w-full h-full mt-8" src="/sports.svg" alt="" />
                </div>
                <div className="bg-[#ff5151] h-1 w-full"></div>
                <div className="h-[116px] w-full">
                    <div className="fonts-poppins text-neutral-900 text-[16px] font-bold mt-5 mb-3">Sports</div>
                    <div className="flex flex-row justify-around">
                        <TagCompo tag="tagname" />
                        <TagCompo tag="tagname" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;