"use server";
import User from "../data/user.model";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../data/mongoose";

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  };
};

export async function updateCreater(userId: string, isCreater: boolean): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        creater: isCreater,
      },
      { upsert: true }
    );
  } catch (error: any) {
    throw new Error(`Failed to update creater field: ${error.message}`);
  }
}

export async function deleteUser(userId: string): Promise<void> {
  try {
    connectToDB();

    await User.deleteOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
}








