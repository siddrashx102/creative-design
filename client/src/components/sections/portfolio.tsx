import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import PortfolioModal from "@/components/ui/portfolio-modal";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import { portfolioItems, portfolioCategories, PortfolioItem } from "@/lib/portfolio-data";
import { Play, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "all" || item.categories.includes(activeFilter)
  );

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" ref={elementRef} className="py-20 bg-gray-50 dark:bg-gray-800 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our creative work spanning graphic design, video production, and digital marketing
          </p>

          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {portfolioCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === category.id
                    ? "bg-secondary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-secondary hover:text-white"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 delay-${index * 100} ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              onClick={() => handleItemClick(item)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                {item.isVideo && (
                  <>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    {item.duration && (
                      <span className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {item.duration}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${
                    item.categories.includes('video-production') ? 'text-accent' :
                    item.categories.includes('branding') ? 'text-secondary' :
                    item.categories.includes('motion-graphics') ? 'text-success' :
                    'text-secondary'
                  }`}>
                    {item.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Slider */}
        <div className={`transition-all duration-700 delay-300 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-2xl font-bold text-center text-primary dark:text-white mb-8">
            Before & After Transformations
          </h3>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              afterImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              beforeAlt="Website design before transformation"
              afterAlt="Website design after transformation"
            />
          </div>
        </div>
      </div>

      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
