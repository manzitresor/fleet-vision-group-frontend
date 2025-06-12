import { FaCar } from "react-icons/fa";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <div className="grid grid-cols-5">
        <div className="col-span-2 bg-black px-3 py-3">
          <h1 className="text-main-orange font-bold text-xl flex items-center gap-x-1">
            <FaCar className="text-white text-3xl"/>
            Fleet vision  Group
          </h1>
        </div>
        <div className="col-span-3 bg-white dark:bg-gray-900 flex justify-between px-5 py-3">
          <ul className="flex gap-4 text-base text-black dark:text-white">
            <li className="hover:text-main-orange cursor-pointer">Home</li>
            <li className="hover:text-main-orange cursor-pointer">About</li>
            <li className="hover:text-main-orange cursor-pointer">Booking</li>
            <li className="hover:text-main-orange cursor-pointer">Cars</li>
            <li className="hover:text-main-orange cursor-pointer">Contacts</li>
            <li className="">Contacts</li>
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button className="bg-main-orange py-2 px-4 rounded-md text-white text-base hover:bg-main-orange/90">
              Login
            </Button>
          </div>
        </div>  
    </div>
  )
}