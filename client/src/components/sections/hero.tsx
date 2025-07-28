import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration = 2000) => {
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            animateCounter(250, "projects");
            animateCounter(95, "clients");
            animateCounter(5, "years");
          }, 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasAnimated]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="video-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Creative <span className="text-accent">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up [animation-delay:0.2s]">
          Transforming brands through stunning graphic design and compelling video content
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Free Quote
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Our Work
          </Button>
        </div>

        {/* Animated Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up [animation-delay:0.6s]">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent animate-counter">
              {counters.projects}
            </div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent animate-counter">
              {counters.clients}
            </div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent animate-counter">
              {counters.years}
            </div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-accent transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
