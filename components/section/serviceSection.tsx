import React from 'react'
import ServiceCard from './serviceCard';

const ServiceSection = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-nowrap xl:max-w-[1450px]'>


                    <div className="px-5 mt-10 flex justify-center flex-wrap gap-y-3 gap-x-5  xs:px-10 lg:px-20 xl:w-[75%] xl:pr-5">

                        <div className="justify-self-start w-full text-left text-black text-[22px] font-bold tracking-tighter max-md:max-w-full  lg:text-[28px]">
                            All Services...
                        </div>


                        <div className="h-80 w-64 rounded-xl flex flex-col overflow-hidden
                                                border border-[color:var(--Light-Border-Color,rgba(200,203,217,0.33))] shadow-lg bg-white border-solid
                                                hover:shadow-xl hover: cursor-pointer hover:translate-y-[-5px] transition-all 
                                                my-4
                                                ">
                            <div className="h-[240px] w-full overflow-hidden">
                                <img className="w-full h-full mt-8" src="/sports.svg" alt="" />
                            </div>
                            <div className="bg-orangered h-1 w-full"></div>
                            <div className="h-[116px] w-full">
                                <div className="fonts-poppins text-neutral-900 text-[16px] font-bold mt-5 mb-3">Sports</div>
                                <div className="flex flex-row justify-around">
                                    <span className=" bg-[#F4F6F8] py-2 px-3 rounded-md text-[10px] uppercase text-[#7B8EC8] ">tsdf1</span>
                                    <span className=" bg-[#F4F6F8] py-2 px-3 rounded-md text-[10px] uppercase text-[#7B8EC8] ">tagsss2</span>
                                    <span className=" bg-[#F4F6F8] py-2 px-3 rounded-md text-[10px] uppercase text-[#7B8EC8] ">tag3</span>
                                </div>
                            </div>
                        </div>
                        {Array.from({ length: 8 }).map(() => <ServiceCard />)}


                    </div>




                    <div className='hidden xl:flex xl:w-[25%] mt-10'>
                        <div className="hidden md:flex flex-col items-stretch w-[99%] max-md:w-full max-md:ml-0">
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceSection;