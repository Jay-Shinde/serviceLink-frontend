"use client"
import { useState } from "react";
import CommentModal from "./CommentModal";
interface eachComment {
  accountName: string; commentContent: string;
}
type Props = { likes: number, comments: number, views: number, imageSource: string, commentsArray: Array<eachComment>, captionString: string }




const PostItem = (props: Props) => {

  const { likes, comments, views, imageSource, commentsArray, captionString } = props;
  const [showFullCaption, setShowFullCaption] = useState(false);


  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  const handleShowCaption = () => {
    setShowFullCaption(!showFullCaption);
  }


  return (
    <>

      <div className="w-full sm:w-96 md:w-[400px] xl:w-[450px] mb-3 border-y border-solid rounded-[10px] flex flex-col overflow-hidden bg-gray-50">

        <div className="full flex justify-start items-center p-1">

          <img
            src="profile-image.png"
            alt="profile-image"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col ml-4 justify-center">
            <div className="w-fit [font-family:'Inter-medium',Helvetica] font-semibold text-dark-400 text-[14px] tracking-[0] leading-[23.1px] whitespace-nowrap">
              Phoenix Baker
            </div>
            <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f4354] text-[12px] tracking-[0] leading-[21.8px] whitespace-nowrap">
              19 Jan 2022
            </div>
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-[400px] xl:w-[450px] h-[100vw] sm:h-80 md:h-96 xl:h-[450px] border-solid border-x-gray-500 border-y-[1px] bg-white"
        >
          <img
            src={imageSource}
            alt="bw-log-image"
            className="object-scale-down  w-full h-full "
          />
        </div>


        <p className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f4354] text-[15px] tracking-[0] text-left my-0 mt-3 p-1 hover:cursor-pointer" onClick={handleShowCaption}>

          {!showFullCaption ? `${captionString.slice(0, 50)}...` : captionString}
        </p>

        <div className="my-4 flex justify-between items-center px-1">
          <div className="flex gap-2 text-[16px] items-center space-x-1">
            <div className="flex gap-[2px]  items-center">
              <img className="h-5" src="./like.svg" alt="" />
              <p className="text-[12px] ">{likes}</p>
            </div>
            <div className="flex gap-[2px] items-center">
              <img className="h-4 hover:cursor-pointer " src="./comment.svg" alt="commentIcon" onClick={openModal} />
              <p className="text-[12px]" >{comments}</p>
            </div>
            <div className="flex gap-[2px] items-center">
              <img className="h-4 " src="views.svg" alt="" />
              <p className="text-[12px] ">{views}</p>
            </div>
          </div>
        </div>

      </div>
      <CommentModal isOpen={isModalOpen} onClose={closeModal} commentesArray={commentsArray} /></>
  );
};

export default PostItem;
