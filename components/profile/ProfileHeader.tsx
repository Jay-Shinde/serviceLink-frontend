"use client"
import Link from "next/link";
import Image from "next/image";
import CallLogo from "../../public/call.svg"
import LinkLogo from "../../public/link.svg"
import { useState } from "react";
import MailLogo from "../../public/mail.svg"

import Cleaner from "../../public/cleaner.jpg"
import BlogCard from "../section/BlogCard";
import PostItem from "../section/community/PostItem";
interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
  creater?: boolean;
}
const postData = [
  {
    likes: 100,
    comments: 100,
    views: 322,
    imageSource: "https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01_square.jpg",
    commentsArray: [
      { accountName: "Allen Hell", commentContent: "this is comment 2" }
    ],
    captionString:
      "this is caption string for the post which explains or grab the attention of post viewers "
  },
  {
    likes: 100,
    comments: 100,
    views: 322,
    imageSource: "https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0=",
    commentsArray: [
      { accountName: "Allen Hell", commentContent: "this is comment 2" }
    ],
    captionString:
      "this is caption string for the post which explains or grab the attention of post viewers Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo deleniti architecto nobis cum? Minima repudiandae iusto ipsam repellendus dignissimos assumenda facere? Necessitatibus labore nulla maiores iure, laudantium error id iste aspernatur, voluptatem, accusamus impedit unde similique fuga maxime amet harum. Alias quia vitae voluptates reiciendis animi distinctio accusamus similique?"
  },
  {
    likes: 100,
    comments: 100,
    views: 322,
    imageSource: "https://images.unsplash.com/photo-1685689238460-fdd76e602962?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    commentsArray: [
      { accountName: "Allen Hell", commentContent: "this is comment 2" }
    ],
    captionString:
      "this is caption string for the post which explains or grab the attention of post viewers"
  },
  {
    likes: 100,
    comments: 100,
    views: 322,
    imageSource: "https://images.unsplash.com/photo-1685689238460-fdd76e602962?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    commentsArray: [
      { accountName: "Allen Hell", commentContent: "this is comment 2" }
    ],
    captionString:
      "this is caption string for the post which explains or grab the attention of post Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo deleniti architecto nobis cum? Minima repudiandae iusto ipsam repellendus dignissimos assumenda facere? Necessitatibus labore nulla maiores iure, laudantium error id iste aspernatur, voluptatem, accusamus impedit unde similique fuga maxime amet harum. Alias quia vitae voluptates reiciendis animi distinctio accusamus similique? viewers"
  },
  {
    likes: 100,
    comments: 100,
    views: 322,
    imageSource: "https://images.unsplash.com/photo-1685689238460-fdd76e602962?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    commentsArray: [
      { accountName: "Allen Hell", commentContent: "this is comment 2" }
    ],
    captionString:
      "this is caption string for the post which explains or grab the attention of post viewers"
  }
];


function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  creater,
}: Props) {
  const [btnActive, setbtnActive] = useState("topBlogs")
  return (
    <>

      <div className='flex w-full flex-col justify-start'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='relative h-20 w-20 object-cover'>
              <Image
                src={imgUrl}
                alt='logo'
                fill
                className='rounded-full object-cover shadow-2xl'
              />
            </div>

            <div className='flex-1'>
              <h2 className='text-left text-heading3-bold text-light-1'>
                {name}
              </h2>
              <p className='text-base-medium text-gray-1'>@{username}</p>
            </div>
          </div>

          <Link href='/profile/edit'>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
              <p className='text-light-2 max-sm:hidden'>Edit</p>
            </div>
          </Link>

        </div>

        <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>

        {{ creater } ? (
          <>
            <div> This Guy is a Creater </div>
          </>
        ) : null}

        <div className='mt-12 h-0.5 w-full bg-dark-3' />


      </div>
      Here I will design profile Page


      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1500px] flex flex-col items-center">
          <div className="w-full xs:w-[98%] sm:w-[95%] md:w-[92%] max-w-[1200px] flex flex-col gap-1 md:gap-3 xl:gap-4">
            <Image src={Cleaner} alt="cleaner" className="w-full aspect-[4/1] object-cover rounded-t-xl" />


            <div className="flex items-center gap-2 md:gap-4 md:flex-nowrap flex-wrap ">


              <Image src={Cleaner} alt="cleaner" className=" rounded-full object-cover border-solid border-orange-500  w-16 h-16 border-2 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:h-28 md:w-28 md:border-[3px] lg:w-32 lg:h-32 lg:border-4 order-1" />

              <div className="flex flex-col gap-1 md:gap-2 order-5 md:order-2 w-full md:w-fit">
                <p className="font-bold text-2xl xl:text-3xl">Oracle Cleaners</p>
                <p className="text-[14px] md:text-[16px]">500+ followers</p>
                <div className="flex gap-2 md:gap-3 md:flex-nowrap flex-wrap items-center">
                  <div className="flex gap-1">
                    <Image src={CallLogo} alt="call" /><Link className="text-nowrap text-[14px] md:text-[16px] font-medium" href="tel:2323334453"
                    >91-2323334453</Link>
                  </div>
                  <div className="flex gap-1">
                    <Image src={MailLogo} alt="mail" /><Link className="text-[15px] text-nowrap md:text-[17px]  font-medium" href="mailto:service@gmail.com">service@gmail.com</Link>
                  </div>
                  <div className="flex gap-1">
                    <Image src={LinkLogo} alt="mail" /><Link href="https://krityam.co.in" className="text-nowrap text-[15px] md:text-[17px] font-medium text-blue-600">krityam.co.in</Link>
                  </div>
                </div>

              </div>

              <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded-lg ml-auto self-start order-3">
                Message
              </button>


            </div>

            <div className="w-full px-2 mt-2">
              <p className="text-[14px] md:text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est cum doloremque provident debitis reiciendis amet modi totam rerum eveniet repellendus, dignissimos id labore quibusdam officia saepe? Delectus dignissimos, perferendis impedit veniam, sit quidem ipsam vitae assumenda quam obcaecati pariatur. Odit at, illo necessitatibus nostrum aperiam odio tempora quae, sed itaque dolore, est magnam cupiditate veniam reprehenderit illum </p>
            </div>


            <div className='w-full flex justify-center'>
              <div className='flex w-full max-w-[1200px]'>

                <div className='flex flex-col w-full md:w-2/3 items-center mt-10'>
                  <div className='w-full flex gap-1 flex-wrap'>
                    <div className='inline-block'>

                      <button className={`${btnActive == "topBlogs" ? "bg-[#F4F6F8] text-[#7B8EC8]" : "bg-[#FFF1E6]   border border-[#EF8736] text-[#EF8736]"} hover:bg-[#FFF1E6]   hover:border hover:border-[#EF8736]   hover:text-[#EF8736] font-semibold py-1 px-2 md:py-2 md:px-4 rounded-lg ml-auto`}>
                        Top Blogs
                      </button>
                    </div>

                    <div className='inline-block'>

                      <button className="bg-[#F4F6F8] hover:bg-[#FFF1E6] text-[#7B8EC8]  hover:border hover:border-[#EF8736]   hover:text-[#EF8736] font-semibold py-1 px-2 md:py-2 md:px-4 rounded-lg ml-auto">
                        Top Posts
                      </button>

                    </div>
                  </div>
                  <div className='flex justify-center w-full flex-wrap gap-2 mt-2'>

                    {/* {[<BlogCard />,
                    <BlogCard />, <BlogCard />, <BlogCard />]} */}
                    {

                      postData.map((postObj) => <><PostItem
                        likes={postObj.likes}
                        comments={postObj.comments}
                        views={postObj.views}
                        imageSource={postObj.imageSource}
                        commentsArray={postObj.commentsArray}
                        captionString={postObj.captionString}

                      /></>)

                    }
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded-lg self-center mt-5  ">
                    Load More
                  </button>
                </div>

                <div className='hidden md:w-1/3 md:flex flex-col items-end mt-10'>
                  <div className='flex flex-col items-end w-full'>
                    <div className="md:flex flex-col items-stretch w-[99%] max-w-[358px]">
                      <span className="border-l-[color:var(--Light-Border-Color,rgba(200,203,217,0.33))] shadow-lg  flex w-full flex-col pr-2  pl-3.5 pb-12 border-l border-solid max-md:mt-7">

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

                    {/* <p>this is ad area</p>
                    <div className='h-96 w-[99%] max-w-[358px] bg-gray-500'>
                      hello customers !
                    </div> */}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
