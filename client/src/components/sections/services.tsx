import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Palette, Video, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    gradient: "from-secondary/10 to-accent/10 dark:from-secondary/20 dark:to-accent/20",
    buttonColor: "bg-secondary hover:bg-blue-600",
    features: [
      "Brand Identity & Logo Design",
      "Print Materials & Brochures",
      "Digital Graphics & Web Design",
      "Social Media Graphics"
    ]
  },
  {
    icon: Video,
    title: "Video Editing",
    gradient: "from-accent/10 to-success/10 dark:from-accent/20 dark:to-success/20",
    buttonColor: "bg-accent hover:bg-orange-600",
    features: [
      "Promotional Videos",
      "Social Media Content",
      "Corporate Videos",
      "Motion Graphics & Animation"
    ]
  }
];

export default function Services() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="services" ref={elementRef} className="py-20 bg-white dark:bg-gray-900 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive creative solutions to elevate your brand and engage your audience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`service-card bg-gradient-to-br ${service.gradient} rounded-2xl p-8 transition-all duration-700 delay-${index * 200} ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="mb-6">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full ${service.buttonColor} text-white py-3 font-semibold`}>
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
