import Aboutsection from "./Aboutsection";
import CarListSection from "./CarListSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
     <HeroSection />
     <Aboutsection/>
     <CarListSection/>
     <TestimonialSection/>
     <ContactSection/>
     <Footer />
    </>
  )
}
