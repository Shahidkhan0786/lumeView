import About from "@/components/web/About";
import Cases from "@/components/web/Cases";
import ClientReview from "@/components/web/ClientReview";
import ContactForm from "@/components/web/Contact";
import HeroSlider from "@/components/web/Hero";
import OurProducts from "@/components/web/OurProduct";
// import ProjectScroll from "@/components/web/Projects";
import WhiteBoardSection from "@/components/web/WhiteBoard";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSlider />
      <OurProducts />
      <About />
      <Cases />
      <WhiteBoardSection />
      {/* <ProjectScroll /> */}
      {/* <ContactForm /> */}
      <ClientReview />
    </div>
  );
}
