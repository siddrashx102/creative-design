export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  categories: string[];
  image: string;
  isVideo: boolean;
  duration?: string;
  client?: string;
  year?: string;
  services?: string[];
  details?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "TechStart Brand Identity",
    description: "Complete brand identity design for a technology startup",
    category: "Branding",
    categories: ["graphic-design", "branding"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: false,
    client: "TechStart Inc.",
    year: "2024",
    services: ["Logo Design & Brand Mark", "Color Palette Development", "Typography Selection", "Brand Guidelines Document", "Business Card Design"],
    details: "Complete brand identity design for a technology startup, including logo design, color palette, typography, and brand guidelines."
  },
  {
    id: "portfolio-2",
    title: "Corporate Showcase Video",
    description: "Professional corporate video for Fortune 500 company",
    category: "Video Production",
    categories: ["video-production"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: true,
    duration: "2:30",
    client: "Fortune Corp",
    year: "2024",
    services: ["Pre-production Planning", "Professional Filming", "Post-production Editing", "Color Grading", "Audio Enhancement"],
    details: "Professional corporate video showcasing company culture, values, and team for a Fortune 500 company's recruitment campaign."
  },
  {
    id: "portfolio-3",
    title: "Restaurant Menu Design",
    description: "Modern menu design for upscale dining establishment",
    category: "Print Design",
    categories: ["graphic-design"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: false,
    client: "Bella Vista Restaurant",
    year: "2024",
    services: ["Menu Layout Design", "Typography Selection", "Food Photography Direction", "Print Production", "Brand Integration"],
    details: "Modern menu design for upscale dining establishment focusing on elegant typography and visual hierarchy."
  },
  {
    id: "portfolio-4",
    title: "Animated Explainer Video",
    description: "Motion graphics explainer for SaaS platform",
    category: "Motion Graphics",
    categories: ["motion-graphics", "video-production"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: true,
    duration: "1:45",
    client: "CloudTech Solutions",
    year: "2024",
    services: ["Storyboard Creation", "Character Design", "Animation Production", "Voiceover Integration", "Sound Design"],
    details: "Motion graphics explainer video for SaaS platform featuring custom animations and professional voiceover."
  },
  {
    id: "portfolio-5",
    title: "Product Packaging Design",
    description: "Premium packaging design for organic food brand",
    category: "Packaging",
    categories: ["branding", "graphic-design"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: false,
    client: "Pure Organic Foods",
    year: "2024",
    services: ["Package Structure Design", "Label Design", "Product Photography", "Brand Integration", "Print Production"],
    details: "Premium packaging design for organic food brand emphasizing sustainability and natural ingredients."
  },
  {
    id: "portfolio-6",
    title: "Social Media Campaign",
    description: "Instagram and TikTok video content series",
    category: "Social Media",
    categories: ["video-production"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    isVideo: true,
    duration: "0:30",
    client: "Fashion Forward Brand",
    year: "2024",
    services: ["Content Strategy", "Video Production", "Social Media Optimization", "Hashtag Research", "Performance Analytics"],
    details: "Social media video campaign featuring short-form content optimized for Instagram and TikTok engagement."
  }
];

export const portfolioCategories = [
  { id: "all", label: "All Work" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "video-production", label: "Video Production" },
  { id: "branding", label: "Branding" },
  { id: "motion-graphics", label: "Motion Graphics" }
];
