import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Award, Users } from "lucide-react";

export default function About() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={elementRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 dark-mode-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
              Crafting Digital Experiences That <span className="text-accent">Inspire</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              For over 5 years, CreativeStudio has been at the forefront of digital creativity, 
              helping brands tell their stories through compelling visual content. Our team of 
              passionate designers and video editors transforms ideas into stunning realities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We believe in the power of creativity to drive business success. Every project we 
              undertake is a collaboration that brings together strategic thinking, artistic vision, 
              and technical expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-primary dark:text-white">Award Winning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Industry Recognition</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-primary dark:text-white">Expert Team</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Creative Professionals</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Creative team collaborating"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
