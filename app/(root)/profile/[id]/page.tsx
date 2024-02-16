import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { fetchUser } from "@/components/actions/user.actions";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);

  return (
    <section> 
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />
      {userInfo.creater ? 
      <>
      <div>Creater Page</div>
      </> : null  
      }

    </section>
  );
}
export default Page;