import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Packages from "@/components/sections/packages";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Team />
        <Testimonials />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
