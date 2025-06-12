import { FaCar } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="grid grid-cols-5">
        <div className="col-span-2 bg-black px-3 py-3">
          <h1 className="text-main-orange font-bold text-xl flex items-center gap-x-1">
            <FaCar className="text-white text-3xl"/>
            Fleet vision  Group
          </h1>
        </div>
        <div className="col-span-3 bg-white flex justify-between px-5 py-3">
          <ul className="flex gap-4 text-lg text-black">
            <li>Home</li>
            <li>About</li>
            <li>Booking</li>
            <li>Cars</li>
            <li>Contacts</li>
          </ul>
          <button className="bg-main-orange py-2 px-4 rounded-md text-white">Login</button>
        </div>  
    </div>
  )
}
