"use client"
import * as React from "react";
import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { FormItem } from "../ui/form";
import { FormControl } from "../ui/form";
import { FormField } from "../ui/form";
import { FormLabel } from "../ui/form";
import { FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea"
import { useUploadThing } from "../uploadthing";
import { updateUser } from "../actions/user.actions";
import { updateCreater } from "../actions/user.actions";
import { Switch } from "../ui/switch";


interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
        creater: boolean
        onboarded: boolean,
    };
    btnTitle: string;
}



const AccountProfile = ({user, btnTitle} : Props) => {
  
    const router = useRouter();
    const pathname = usePathname();
    const { startUpload } = useUploadThing("media")

    const [files, setFiles] = useState<File[]>([]);

    function isBase64Image(imageData: string) {
        const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
        return base64Regex.test(imageData);
      }


    const UserValidation = z.object({
        profile_photo: z.string().url().nonempty(),
        name: z
          .string()
          .min(3, { message: "Minimum 3 characters." })
          .max(30, { message: "Maximum 30 caracters." }),
        username: z
          .string()
          .min(3, { message: "Minimum 3 characters." })
          .max(30, { message: "Maximum 30 caracters." }),
        bio: z
          .string()
          .min(3, { message: "Minimum 3 characters." })
          .max(1000, { message: "Maximum 1000 caracters." }),
        creater: z
          .boolean(),
    });




    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
          profile_photo: user?.image ? user.image : "",
          name: user?.name ? user.name : "",
          username: user?.username ? user.username : "",
          bio: user?.bio ? user.bio : "",
          creater: user?.creater ? user.creater : false,
        },
    });

    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        const blob = values.profile_photo;
        const creater = values.creater;
        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
          const imgRes = await startUpload(files);
        if (imgRes && imgRes[0].fileUrl) {
          values.profile_photo = imgRes[0].fileUrl;
        }
      }
      

    await updateUser({
        name: values.name,
        path: pathname,
        username: values.username,
        userId: user.id,
        bio: values.bio,
        image: values.profile_photo,
      });

    await updateCreater(user.id, values.creater)
    
      if (pathname === "/profile/edit") {
        router.back();
      } else {
        router.push("/");
      }
    };

    const handleImage = (
        e: ChangeEvent<HTMLInputElement>,
        fieldChange: (value: string) => void
      ) => {
        e.preventDefault();
    
        const fileReader = new FileReader();
    
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          setFiles(Array.from(e.target.files));
    
          if (!file.type.includes("image")) return;
    
          fileReader.onload = async (event) => {
            const imageDataUrl = event.target?.result?.toString() || "";
            fieldChange(imageDataUrl);
          };
    
          fileReader.readAsDataURL(file);
        }
      };

      


  return (
  <Form {...form}>
    <form className='flex flex-col justify-start gap-10' onSubmit={form.handleSubmit(onSubmit)}>
      <FormField control={form.control} name='profile_photo' render={({ field }) => (
      <FormItem className='flex items-center gap-4'>
        <FormLabel className='account-form_image-label'>
          {field.value ? (
          <Image src={field.value} alt='profile_icon' width={96} height={96} priority className='rounded-full object-contain'/>
          ) : (
          <Image width={24} height={24} className='object-contain' src='/assets/profile.svg' alt='profile_icon'/>
          )}
          </FormLabel>
                  <FormControl className='flex-1 text-base-semibold text-gray-200'>
                    <Input
                      type='file'
                      accept='image/*'
                      placeholder='Add profile photo'
                      className='account-form_image-input'
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      className='account-form_input no-focus'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      className='account-form_input no-focus'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name='bio'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Bio
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      className='account-form_input no-focus'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {user?.onboarded ? <FormField
              control={form.control}
              name='creater'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col gap-3'>
                  <FormLabel className='text-base-semibold text-light-2'>
                    Creater
                  </FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> : null}
           
            <Button type='submit' className='bg-primary-500'>
              {btnTitle}
            </Button>
          </form>
        </Form>
      );
    };
    
    export default AccountProfile;





    