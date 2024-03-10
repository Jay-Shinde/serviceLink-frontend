import React from 'react'
import BlogCard from '../BlogCard'

type Props = {}

const Blog = (props: Props) => {
    return (
        <><div className='w-full flex justify-center'>
            <div className='md:w-[450px] flex flex-col gap-5 mt-10'>

                {
                    [<BlogCard />,
                    <BlogCard />]
                }


            </div>
        </div>
        </>
    )
}

export default Blog