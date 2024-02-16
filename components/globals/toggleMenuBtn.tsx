import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export function SheetDemo(props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="w-[30px] h-[30px] flex flex-row items-center justify-center hover:cursor-pointer mr-1">
                    <Image width={200} height={200} className="w-6 relative h-6" alt="theme-toggle" src="/menuSandwich.svg" />
                </div>

            </SheetTrigger>
            <SheetContent>
                <div className="content flex flex-col justify-start gap-11 items-center h-full md:mt-6 pt-5">
                    <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href="/">Home</Link></div>

                    <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href="/service">Service</Link></div>

                    <div className="   hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href="/community">Community</Link></div>

                    {/* <div className=" pr-[3px]  hover:cursor-pointer hover:pr-[2px] hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href="/blog">Blog</Link></div> */}
                    <div className=" hover:cursor-pointer  hover:border-b-2 hover:border-solid hover:border-[#ff5151] hover:scale-110"><Link className="no-underline font-medium text-black " href="/blog">Blog</Link></div>
                    {!props.isAuth ? (<></>) : (<div className=" hover:cursor-pointer hover:scale-110 hover:border-b-2 hover:border-solid hover:border-[#ff5151]"><Link className="no-underline font-medium text-black " href={`/profile/${props.userId}`}>Profile</Link></div>)}
                </div>

            </SheetContent>
        </Sheet>
    )
}