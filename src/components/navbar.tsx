
import { Button } from "@nextui-org/react";
import Link from "next/link"
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="w-full h-[80px] sticky top-0 z-10 bg-[#ebede8]  flex justify-between items-center px-[80px]">
            <div className="flex justify-between items-center h-full "> 
                
                <Link href="/" className="text-3xl font-semibold mr-20 gap-3 flex items-center">
                    <Image src="/logo.png" width={40} height={40} alt="logo"/>
                    Clause
                </Link>
                <div className="flex items-center justify-center gap-10 pt-1">
                    <Link
                        href="/users"
                        className="relative text-2xl font-semibold text-[#333f3c] py-2 hover:underline decoration-yellow decoration-20 underline-offset-[5px] ease-in-out transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Dashboard
                    </Link>
                </div>

            </div>
            <div className="flex justify-between items-center h-full gap-5">
                <Button size="lg" className="font-semibold text-lg text-[#004838] bg-white shadow-lg">Log In</Button>
                <Button size="lg" className="font-semibold text-lg bg-[#004838] text-[#e2fb6c] shadow-lg">Sign Up</Button>
            </div>
        </div>
    )
}