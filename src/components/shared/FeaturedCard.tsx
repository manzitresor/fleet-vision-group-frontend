import { IoPersonOutline } from "react-icons/io5";
import imageOne from "../../assets/3 1.svg";
import  { Button } from "@/components/ui/button";
import { MdLocalGasStation } from "react-icons/md";
import { FaCar } from "react-icons/fa";

export default function FeaturedCard() {
  return (
    <>
    <img src={imageOne} alt="carOne"/>
    <div className="my-4">
        <h6 className="font-medium">Jeep XD</h6>
            <ul className="flex gap-5 mt-2">
                <li className="flex items-center gap-1">
                    <IoPersonOutline />
                    5
                </li>
                <li className="flex items-center gap-1">
                    <MdLocalGasStation />
                    Gasoline
                </li>
                <li className="flex items-center gap-1">
                    <FaCar />
                    SUV
                </li>
            </ul>
    </div>
    <div className="flex justify-between">
        <p className="font-semibold text-base">Daily rate</p>
        <p className="font-bold text-main-orange">$25 - $35</p>
    </div>
    <div className="pt-9 flex justify-center gap-4">
        <Button className="bg-main-orange text-white px-8 cursor-pointer">Book now</Button>
        <Button className="px-8 cursor-pointer hover:bg-main-orange hover:text-white">Details</Button>
    </div>
    </>
  )
}
