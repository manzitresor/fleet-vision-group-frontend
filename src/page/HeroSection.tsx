import { Button } from '@/components/ui/button'
import HeroCar from '../assets/Main Picture 1.svg'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-5 h-screen relative ">
      <div className="col-span-2 bg-black">
          <div className="absolute inset-0 bg-black opacity-20 w-1/2 h-2/3 top-8"></div>
          <div className='absolute left-14 w-1/2 p-8'>
            <h1 className="text-white font-extrabold text-5xl p-8">
                Enjoy your life with our comfortable cars.
            </h1>
            <p className="text-white text-lg p-8">
                We provide a wide range of comfortable and luxurious cars to make your journey enjoyable.
            </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105">
                  Explore Now
                </Button>
                <Button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold">
                  View Fleet
                </Button>
            </div>
          </div>
        </div>
      <div className="col-span-3 bg-white dark:bg-gray-900">
        <div>
          <img src={HeroCar} alt="Hero Car" className="h-auto" />
        </div>
      </div>
    </div>
  )
}