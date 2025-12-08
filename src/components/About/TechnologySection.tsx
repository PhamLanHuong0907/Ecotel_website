import { Wifi, Settings, Cloud, Code } from "lucide-react";

const technologies = [
  { icon: Wifi, title: "TECHNOLOGY", color: "bg-blue-500", items: ["RFID, Zigbee, WiFi", "TCP/IP, MQTT, OPC", "Cloud Computing", "Data Analytics"] },
  { icon: Settings, title: "OS/FRAMEWORK", color: "bg-cyan-500", items: ["Spring, Laravel, Django", "Cent OS, Ubuntu", "Android, iOS", "Linux Embedded"] },
  { icon: Cloud, title: "CLOUD SERVICES", color: "bg-teal-500", items: ["Google Cloud", "Amazon Web Service", "Microsoft Azure", "Machine learning"] },
  { icon: Code, title: "PROGRAMMING", color: "bg-emerald-500", items: ["JavaScript, Angular", "C/C++, C#, Python", "PHP, NodeJS, Java", "Flutter, Swift"] },
];

export const TechnologiesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Năng lực công nghệ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Công nghệ <span className="gradient-text">của chúng tôi</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={tech.title} className="relative group animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              {index < technologies.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-8 w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="glass-card rounded-2xl overflow-hidden hover-lift h-full">
                <div className="flex justify-center py-6">
                  <div className={`w-16 h-16 rounded-2xl ${tech.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`${tech.color} py-3 px-4`}>
                  <h3 className="text-white font-bold text-center text-sm">{tech.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};