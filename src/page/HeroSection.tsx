import { Button } from '@/components/ui/button'
import HeroCar from '../assets/Main Picture 1.svg'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-2 bg-black">
        <h1 className="text-white font-extrabold text-5xl p-8">
            Enjoy your life with our comfortable cars.
        </h1>
        <p className="text-white text-lg p-8">
            We provide a wide range of comfortable and luxurious cars to make your journey enjoyable.
        </p>
        <Button className="bg-main-orange text-black text-2xl px-4 rounded m-8 cursor-pointer hover:bg-white hover:text-main-orange">
            Explore Now
        </Button>
      </div>
      <div className="col-span-3 bg-white dark:bg-gray-900">
          <img src={HeroCar} alt="Hero Car" className="h-auto" />
      </div>
    </div>
  )
}
