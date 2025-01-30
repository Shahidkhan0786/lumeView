import About from "@/components/web/About";
import Cases from "@/components/web/Cases";
import ClientReview from "@/components/web/ClientReview";
import HeroSlider from "@/components/web/Hero";
import OurProducts from "@/components/web/OurProduct";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <OurProducts />
      <About />
      <Cases />
      <ClientReview />
    </>
  );
}
