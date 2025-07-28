import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import * as LucideIcons from "lucide-react";

const processSteps = [
  {
    icon: "Lightbulb",
    title: "1. Discovery",
    description: "We explore your brand, goals, and target audience to understand your unique needs.",
    color: "bg-secondary"
  },
  {
    icon: "PenTool",
    title: "2. Strategy",
    description: "We develop a creative strategy that aligns with your business objectives.",
    color: "bg-accent"
  },
  {
    icon: "Palette",
    title: "3. Creation",
    description: "Our team brings your vision to life with stunning designs and engaging content.",
    color: "bg-success"
  },
  {
    icon: "Rocket",
    title: "4. Launch",
    description: "We deliver polished final assets and provide ongoing support for success.",
    color: "bg-primary"
  }
];

export default function Process() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="process" ref={elementRef} className="py-20 bg-white dark:bg-gray-900 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Creative Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we follow a proven methodology that ensures exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = (LucideIcons as any)[step.icon];
            return (
              <div
                key={step.title}
                className={`text-center transition-all duration-700 ${
                  index === 0 ? "" : 
                  index === 1 ? "delay-200" :
                  index === 2 ? "delay-500" : "delay-700"
                } ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
