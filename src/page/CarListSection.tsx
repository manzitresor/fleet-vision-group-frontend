import FeaturedCard from "@/components/shared/FeaturedCard"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


export default function CarListSection() {
    return (
      <div className="mx-20">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-1">Our Featured Cars</h3>
          <hr className="w-48 h-px my-3 bg-main-orange border-0"></hr>
        </div>
        <Carousel opts={{ align: "start"}} className="">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-main-orange">
                    <CardContent className="aspect-square p-3">
                      <FeaturedCard/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-main-orange border-main-orange" />
          <CarouselNext className="text-main-orange border-main-orange" />
        </Carousel>
      </div>
      )
}
