import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "CreativeStudio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The team was professional, responsive, and delivered exceptional results.",
    author: "James Wilson",
    title: "CEO, TechInnovate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The video content they created for our marketing campaign generated a 300% increase in engagement. Their storytelling ability and technical expertise are unmatched in the industry.",
    author: "Lisa Chen",
    title: "Marketing Director, GreenEarth",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Working with CreativeStudio was a game-changer for our startup. They understood our vision and brought it to life with stunning visuals that helped us secure our Series A funding.",
    author: "David Park",
    title: "Founder, DataFlow",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

const clientLogos = ["TechInnovate", "GreenEarth", "DataFlow", "UrbanStyle", "FutureBank"];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { elementRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={elementRef} className="py-20 bg-white dark:bg-gray-900 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the brands we've helped transform
          </p>
        </div>

        <div className="testimonial-carousel relative">
          <div className="testimonial-container overflow-hidden">
            <div
              className="testimonial-track flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide flex-shrink-0 w-full px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="text-6xl text-accent mb-6">"</div>
                    <blockquote className="text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.author} headshot`}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <div className="text-lg font-semibold text-primary dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-secondary">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-secondary" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-center text-2xl font-bold text-gray-400">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
