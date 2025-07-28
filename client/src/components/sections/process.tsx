import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Simple SVG icons as components
const LightbulbIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const PenToolIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const PaletteIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10a4 4 0 014 4v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1a4 4 0 014-4z" />
  </svg>
);

const RocketIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const processSteps = [
  {
    icon: LightbulbIcon,
    title: "1. Discovery",
    description: "We explore your brand, goals, and target audience to understand your unique needs.",
    color: "bg-secondary"
  },
  {
    icon: PenToolIcon,
    title: "2. Strategy",
    description: "We develop a creative strategy that aligns with your business objectives.",
    color: "bg-accent"
  },
  {
    icon: PaletteIcon,
    title: "3. Creation",
    description: "Our team brings your vision to life with stunning designs and engaging content.",
    color: "bg-success"
  },
  {
    icon: RocketIcon,
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
            const Icon = step.icon;
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
                  <Icon className="h-8 w-8 text-white" />
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