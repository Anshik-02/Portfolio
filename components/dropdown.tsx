import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Menu, User } from "lucide-react"
import Link from "next/link"


export default function DropDown() {
  return (
    <div className=" cursor-pointer absolute right-0 m-5 ">
        <DropdownMenu>
  <DropdownMenuTrigger><Menu className='border-2 w-8 h-8 text-black border-black bg-white'/></DropdownMenuTrigger>
  <DropdownMenuContent>
  <Link href={"/minimal"}>  <DropdownMenuLabel className="flex items-center hover:brightness-95  cursor-pointer  bg-gray-100 rounded"><User/> Minimal Porfolio</DropdownMenuLabel></Link>
    <DropdownMenuSeparator />
   <Link href={"/"}><DropdownMenuItem className="group bg-rose-400 cursor-pointer hover:!bg-rose-300 transition-all text-white flex items-center">
  <LogOut className=" hover:!text-black" /> Exit
</DropdownMenuItem></Link> 
</DropdownMenuContent>
</DropdownMenu>
        
    </div>
  )
}
