import { MapPin } from "lucide-react";

const branches = [
  { name: "Thái Lan", address: "Bangkok, Thailand", lat: 13.7563, lng: 100.5018 },
  { name: "Hà Nội", address: "Hà Nội, Việt Nam", lat: 21.0285, lng: 105.8542 },
  { name: "TP. Hồ Chí Minh", address: "TP. Hồ Chí Minh, Việt Nam", lat: 10.8231, lng: 106.6297 },
];

export const BranchesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Mạng lưới</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Chi nhánh <span className="gradient-text">của chúng tôi</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden h-[400px] relative group">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678167.954761!2d100.5018!3d15.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="space-y-4">
            {branches.map((branch, index) => (
              <a key={branch.name} href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`} target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-6 flex items-center gap-4 hover-lift group block animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{branch.name}</h3>
                  <p className="text-muted-foreground">{branch.address}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};