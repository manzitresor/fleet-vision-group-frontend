import { FaCar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white">
       <div className="col-span-2 bg-black px-3 py-3">
            <h1 className="text-main-orange font-bold text-xl flex items-center gap-x-1">
              <FaCar className="text-white text-3xl"/>
              Fleet vision  Group
            </h1>
        </div>
        <ul>
          <li className="bg-main-orange text-white text-center ">
            <FaFacebook/>
          </li> 
          <li>
            <FaInstagram/>
          </li> 
        </ul>
    </div>
  )
}
