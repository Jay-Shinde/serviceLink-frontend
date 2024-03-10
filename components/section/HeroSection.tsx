import React from 'react'
//tsrafce
type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className='xl:w-full xl:flex xl:justify-center'>
            <div className="relative h-[90vh] lg:h-[88vh] lg:w-full lg:flex lg:flex-row min-h-[537.15px] xl:max-w-[1500px]">
                <div className='ml-[2px] xs:ml-0 relative z-20 w-[100%] lg:w-[40%]  h-full flex flex-col justify-center  items-center'>
                    <div className="w-[260px] xs:w-[300px] flex items-start flex-col">
                        <p className="mb-10 mt-0 text-black  font-poppins xs:w-[340px] sm:w-[380px] text-left font-[700] text-[30px] xs:text-[40px] sm:text-[3rem] tracking-[1px] md:tracking-[2px]">
                            Find  The<br /> Right  Service, <br /> Right  Away
                        </p>



                        <form className=" justify-center border bg-gray-100 flex w-full flex-col pl-2 pr-8 xs:pl-4 xs:pr-16 py-1 rounded-xl border-solid border-stone-300 items-start">
                            <header className="items-stretch flex gap-4">
                                <img

                                    src="/search.svg"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full h-full"
                                    alt="Image"
                                    width={6}
                                    height={6}
                                />
                                <div className="text-neutral-500 text-base leading-6 grow whitespace-nowrap self-start">
                                    <input className="outline-none bg-transparent border-none font-poppins h-10" type="text" name="" id="" placeholder='Search for Service Here...' />
                                </div>
                            </header>
                        </form>
                    </div>
                </div>



                <div className='absolute top-0 z-0 lg:relative w-full lg:w-[58%] h-full flex flex-col items-center lg:items-start justify-center gap-4 py-4'>
                    <div className="flex h-1/2 gap-4 w-[90%] items-end justify-center">
                        <div className="overflow-hidden hidden xs:inline-block max-h-[250px] flex-shrink w-full h-full bg-red-50 rounded-2xl min-w-[100px] md:min-w-[230px] md:max-w-[330px]">
                            <img src="./writer.jpg" alt="writer" />
                        </div>
                        <div className="overflow-hidden max-h-[250px]  w-full h-full bg-blue-50 rounded-2xl min-w-[180px] md:min-w-[350px] md:max-w-[490px]  ">
                            <img src="./painter.jpg" alt="painter" />
                        </div>
                    </div>
                    <div className="flex h-1/2 gap-4 w-[90%] items-start justify-center">
                        <div className="overflow-hidden hidden xs:inline-block w-full h-full bg-blue-50 rounded-2xl min-w-[100px] md:min-w-[350px] md:max-w-[490px]
                     max-h-[250px]">
                            <img src="./plumber.jpg" alt="plumber" />
                        </div>
                        <div className="overflow-hidden max-h-[250px] w-full min-w-[180px] md:min-w-[230px] md:max-w-[330px] h-full bg-red-50 rounded-2xl">
                            <img src="./cleaner.jpg" alt="cleaner" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeroSection;