import React from 'react'
import AccountProfile from '@/components/profile/AccountProfile'
import { fetchUser } from '@/components/actions/user.actions' 
import { currentUser } from '@clerk/nextjs'



async function onboarding(){
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  console.log(userInfo)

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    creater: userInfo ? userInfo?.creater : false,
    onboarded: true,
  };
  return (
    <div>
      onboarding
      <AccountProfile user={userData} btnTitle='Continue'/>
    </div>
  )
}

export default onboarding