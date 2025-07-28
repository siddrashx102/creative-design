import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses",
    features: [
      "Logo Design + Brand Guidelines",
      "Business Card & Letterhead",
      "Social Media Graphics (5)",
      "1 Revision Round",
      "14-day Delivery"
    ],
    buttonText: "Get Started",
    buttonClass: "bg-secondary hover:bg-blue-600",
    isPopular: false
  },
  {
    name: "Professional",
    price: "$5,999",
    description: "Most popular choice",
    features: [
      "Complete Brand Identity Package",
      "Marketing Materials Suite",
      "Social Media Graphics (15)",
      "1 Promotional Video (60s)",
      "3 Revision Rounds",
      "21-day Delivery"
    ],
    buttonText: "Choose Professional",
    buttonClass: "bg-primary text-white hover:bg-gray-800 border-2 border-white",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "$12,999",
    description: "For large organizations",
    features: [
      "Full Brand System + Guidelines",
      "Complete Marketing Collaterals",
      "Social Media Graphics (30)",
      "3 Video Productions",
      "Unlimited Revisions",
      "30-day Delivery + Support"
    ],
    buttonText: "Contact Sales",
    buttonClass: "bg-accent hover:bg-orange-600",
    isPopular: false
  }
];

export default function Packages() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="packages" ref={elementRef} className="py-20 bg-gray-50 dark:bg-gray-800 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Service Packages</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your creative needs - from startups to enterprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`${
                pkg.isPopular
                  ? "bg-gradient-to-br from-secondary to-accent text-white rounded-2xl p-8 shadow-2xl transform scale-105"
                  : "bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
              } transition-all duration-700 delay-${index * 100} ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  pkg.isPopular ? "text-white" : "text-primary dark:text-white"
                }`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${
                  pkg.isPopular ? "text-white" : "text-secondary"
                }`}>
                  {pkg.price}
                </div>
                <p className={pkg.isPopular ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${
                      pkg.isPopular ? "text-green-300" : "text-success"
                    }`} />
                    <span className={
                      pkg.isPopular ? "text-white" : "text-gray-700 dark:text-gray-300"
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${pkg.buttonClass} text-white py-3 font-semibold`}>
                {pkg.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
