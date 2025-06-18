import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import imageOne from "../assets/2 1.svg"
import  { Button } from "@/components/ui/button"

export default function CarListSection() {
    return (
      <div className="mx-20">
                <Carousel opts={{ align: "start"}} className="">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="aspect-square p-3">
                      <img src={imageOne} alt="carOne"/>
                      <div className="my-4">
                        <h6 className="font-medium">Jeep XD</h6>
                        <ul className="flex gap-5">
                          <li> 5</li>
                          <li> Gasoline</li>
                          <li> SUV</li>
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
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      )
}
