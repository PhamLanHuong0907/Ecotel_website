import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Tầm nhìn - Sứ mệnh", href: "#vision" },
    { label: "Đội ngũ lãnh đạo", href: "#leadership" },
    { label: "Tuyển dụng", href: "#careers" },
  ],
  services: [
    { label: "Công nghiệp", href: "#industrial" },
    { label: "Dân sinh", href: "#residential" },
    { label: "Giải pháp IoT", href: "#iot-solutions" },
    { label: "Tư vấn", href: "#consulting" },
  ],
  resources: [
    { label: "Dự án", href: "#projects" },
    { label: "Giải thưởng", href: "#awards" },
    { label: "Tin tức", href: "#news" },
    { label: "Triển lãm", href: "#exhibitions" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">ECOTEL</span>
                <span className="text-[10px] text-muted-foreground tracking-wider">Connected Ecosystem</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Đơn vị hàng đầu tại Việt Nam trong lĩnh vực cung cấp giải pháp chuyển đổi số và IoT tổng thể.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3">
              <a href="tel:02412345678" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(024) 1234 5678</span>
              </a>
              <a href="mailto:contact@ecotel.vn" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@ecotel.vn</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tầng 5, Tòa nhà ABC, Số 123 Đường XYZ, Quận Cầu Giấy, Hà Nội</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Công ty</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Nổi bật</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ECOTEL. Bảo lưu mọi quyền.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
