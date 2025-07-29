import { Instagram, Globe, Linkedin } from "lucide-react";
import { Link } from "wouter";

const footerSections = [
  {
    title: "Services",
    links: [
      "Graphic Design",
      "Video Editing",
      "Brand Identity",
      "Motion Graphics",
      "Web Design"
    ]
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Team",
      "Portfolio",
      "Documentation",
      "Careers",
      "Blog"
    ]
  },
  {
    title: "Contact",
    links: [
      "123 Creative Street",
      "Design District, NY 10001",
      "+1 (555) 123-4567",
      "hello@creativestudio.com"
    ]
  }
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Globe, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">CreativeStudio</h3>
            <p className="text-gray-300 mb-6">
              Transforming brands through exceptional design and compelling video content. 
              Your creative partner for success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3 text-gray-300">
                {section.links.map((link) => (
                  <li key={link}>
                    {link === "Documentation" ? (
                      <Link href="/documentation">
                        <span className="hover:text-white transition-colors cursor-pointer">
                          {link}
                        </span>
                      </Link>
                    ) : (
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CreativeStudio. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
