import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import watsonImage from "../assets/watson.svg"
import foxImage from '../assets/Ellipse 62.svg'

export default function TestimonialSection() {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold mb-1">What our client says</h3>
        <hr className="w-56 h-px my-3 bg-main-orange border-0"></hr>
      </div>
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-3xl">
          <CarouselPrevious className="border-main-orange text-main-orange"  />
          <CarouselContent className="flex gap-4 justify-center">
            {[
              {
                name: "Kristin Watson",
                image: watsonImage,
                text: "I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them."
              },
              {
                name: "Robert Fox",
                image: foxImage,
                text: "Great service and very friendly staff. The car was clean and in perfect condition. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/2 flex justify-center">
                <Card className="w-full border-none">
                  <CardContent className="flex flex-col items-center p-4">
                    <img src={testimonial.image} alt={`${testimonial.name}-image`} className="mb-2" />
                    <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                    <p className="text-base font-normal text-gray-600 py-3 text-center">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="border-main-orange text-main-orange" />
        </Carousel>
      </div>
    </div>
  )
}