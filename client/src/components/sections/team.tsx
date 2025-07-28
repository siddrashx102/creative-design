import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Linkedin, Globe, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    bio: "10+ years of experience in brand strategy and visual identity design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-secondary",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Globe, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    name: "Sarah Johnson",
    role: "Senior Designer",
    bio: "Specializes in digital design and user experience with award-winning projects",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-accent",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Globe, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    name: "Mike Rodriguez",
    role: "Video Editor",
    bio: "Expert in motion graphics and storytelling through compelling video content",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-success",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Globe, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    name: "Emma Davis",
    role: "Project Manager",
    bio: "Ensures seamless project delivery and exceptional client communication",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-secondary",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Globe, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  }
];

export default function Team() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="team" ref={elementRef} className="py-20 bg-gray-50 dark:bg-gray-800 dark-mode-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Talented professionals dedicated to bringing your creative vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`team-card bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg transition-all duration-700 delay-${index * 100} ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="team-image w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                <img
                  src={member.image}
                  alt={`${member.name} headshot`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                {member.name}
              </h3>
              <p className={`${member.color} font-medium mb-4`}>
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-4">
                {member.socials.map((social, socialIndex) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
