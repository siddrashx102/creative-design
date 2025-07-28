import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PortfolioItem } from "@/lib/portfolio-data";
import { Play, ExternalLink } from "lucide-react";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary dark:text-white">
            {item.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-lg"
            />
            {item.isVideo && (
              <>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <Play className="h-16 w-16 text-white cursor-pointer" />
                </div>
                {item.duration && (
                  <span className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {item.duration}
                  </span>
                )}
              </>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {item.details || item.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-3">
                {item.isVideo ? "Video Specifications:" : "Services Provided:"}
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {item.services?.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-3">Project Details:</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {item.client && (
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Client: {item.client}
                  </li>
                )}
                {item.year && (
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Year: {item.year}
                  </li>
                )}
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Category: {item.category}
                </li>
                {item.isVideo && item.duration && (
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Duration: {item.duration}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
