import React from 'react'
import ProfileCard from './ProfileCard';

const profileArray = [
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Oracle Fitness",
        tag1: "homefitness",
        tag2: "trainer",
        location: "Mumbai, IN",
        tagline: "Here will be the tagline or small description to grab the attention",
        priceRange: "30k to 50k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Elite Gym",
        tag1: "gym",
        tag2: "fitness",
        location: "New York, US",
        tagline: "Transforming lives through fitness.",
        priceRange: "50k to 70k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Flex Fitness",
        tag1: "personaltrainer",
        tag2: "nutritionist",
        location: "Los Angeles, US",
        tagline: "Empowering you to reach your fitness goals.",
        priceRange: "40k to 60k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Zen Yoga",
        tag1: "yoga",
        tag2: "mindfulness",
        location: "Tokyo, JP",
        tagline: "Find inner peace and strength through yoga.",
        priceRange: "35k to 55k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Power Pilates",
        tag1: "pilates",
        tag2: "corestrength",
        location: "London, UK",
        tagline: "Strengthen your core, transform your body.",
        priceRange: "45k to 65k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Fit Families",
        tag1: "familyfitness",
        tag2: "grouptrainer",
        location: "Sydney, AU",
        tagline: "Bringing families together through fitness.",
        priceRange: "60k to 80k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Cardio Craze",
        tag1: "cardio",
        tag2: "hiit",
        location: "Toronto, CA",
        tagline: "Get your heart racing with our high-intensity cardio workouts.",
        priceRange: "55k to 75k"
    },
    {
        imgUrl: "/avatarmd.svg",
        titleOfService: "Mindful Movement",
        tag1: "meditation",
        tag2: "movement",
        location: "Berlin, DE",
        tagline: "Connect your mind and body through mindful movement practices.",
        priceRange: "50k to 70k"
    }
]
const ServicePage = () => {
    return (
        <>
            {/* <div className='w-full flex justify-center'>
                <div className='px-10 flex flex-col xl:max-w-[1450px]'>


                    <div className="px-5 mt-10 sm:mt-12 md:mt-14 flex justify-center flex-wrap gap-y-5 gap-x-5 md:gap-x-8 lg:gap-x-12 xl:gap-x-14 2xl:gap-x-16 sm:gap-y-8 md:gap-y-10 xs:px-10 lg:px-20  xl:pr-5">





                        {Array.from({ length: 8 }).map(() => <ProfileCard />)}


                    </div>




                    <div className='hidden xl:flex xl:w-[25%] mt-10'>

                    </div>
                </div>
            </div> */}

            {/* {Array.from({ length: 8 }).map(() => <ProfileCard />)} */}
            <div className='flex flex-col gap-1 mt-5'>
                {profileArray.map((item) => <ProfileCard key={item.titleOfService} {...item} />)}
            </div>
        </>
    )
}

export default ServicePage;