import React from 'react'
import PostItem from './PostItem'
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



type Props = {}

const CommunityCode = (props: Props) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='md:w-[450px] flex flex-col gap-5 mt-10'>

                {
                    postData.map((postObj) => <PostItem
                        likes={postObj.likes}
                        comments={postObj.comments}
                        views={postObj.views}
                        imageSource={postObj.imageSource}
                        commentsArray={postObj.commentsArray}
                        captionString={postObj.captionString}

                    />)
                }


            </div>
        </div>
    )
}

export default CommunityCode