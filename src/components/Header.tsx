import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "TRANG CHỦ", href: "#home" },
  {
    label: "GIỚI THIỆU",
    href: "#about",
    dropdown: [
      { label: "Giới thiệu chung", href: "#about-general" },
      { label: "Đội ngũ lãnh đạo", href: "#leadership" },
      { label: "Tầm nhìn - Sứ mệnh", href: "#vision" },
      { label: "Giá trị cốt lõi", href: "#values" },
      { label: "Khách hàng", href: "#customers" },
      { label: "Đối tác", href: "#partners" },
    ],
  },
  {
    label: "DỊCH VỤ",
    href: "#services",
    dropdown: [
      { label: "Công nghiệp", href: "#industrial" },
      { label: "Dân sinh", href: "#residential" },
      { label: "Giải pháp IoT tổng thể", href: "#iot-solutions" },
    ],
  },
  {
    label: "NỔI BẬT",
    href: "#highlights",
    dropdown: [
      { label: "Dự án", href: "#projects" },
      { label: "Giải thưởng", href: "#awards" },
      { label: "Triển lãm", href: "#exhibitions" },
    ],
  },
  { label: "LIÊN HỆ", href: "#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">ECOTEL</span>
              <span className="text-[10px] text-muted-foreground tracking-wider">Connected Ecosystem</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary/50",
                    activeDropdown === item.label && "text-primary bg-secondary/50"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-up">
                    <div className="glass-card rounded-xl p-2 min-w-[220px] border border-border/50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover-lift"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            Liên hệ ngay
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/30 animate-fade-up">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
