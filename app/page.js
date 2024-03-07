import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Numbers />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
