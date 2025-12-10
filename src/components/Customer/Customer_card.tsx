import { useSectionInView } from "@/hooks/useSectionInView";
import image_Vinacomin from "@/assets/Vinacomin.png";
import image_FiinGroup from "@/assets/FiinGroup.png";
import image_Toshiba from "@/assets/Toshiba.png";
import image_Mast from "@/assets/Mast.jpg";

const customersData = [
  { name: "VINACOMIN", logo: image_Vinacomin, industry: "Khai khoáng" },
  { name: "FiinGroup", logo: image_FiinGroup, industry: "Tài chính" },
  { name: "Ecopark", logo: "/placeholder.svg", industry: "Bất động sản" },
  { name: "TOSHIBA", logo: image_Toshiba, industry: "Công nghệ" },
  { name: "HEXAGON", logo: "/placeholder.svg", industry: "Công nghệ đo lường" },
  { name: "MAST", logo: image_Mast, industry: "Phụ tùng ô tô" },
  { name: "EVN", logo: "/placeholder.svg", industry: "Điện lực" },
  { name: "Viettel", logo: "/placeholder.svg", industry: "Viễn thông" },
  { name: "FPT", logo: "/placeholder.svg", industry: "Công nghệ" },
];

const CustomerCard = ({ customer, index, isVisible }: { customer: typeof customersData[0]; index: number; isVisible: boolean }) => (
  <div
    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Đã thêm class 'shadow-lg' vào đây để card luôn có bóng */}
    <div className="glass-card rounded-2xl p-8 hover-lift group relative overflow-hidden h-48 flex flex-col items-center justify-center shadow-lg shadow-gray-500/30">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
      
      {/* Logo */}
      <div className="relative z-10 w-full h-24 flex items-center justify-center mb-4">
        <img 
          src={customer.logo} 
          alt={customer.name}
          className="max-w-full max-h-full object-contain filter  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Name & Industry - shown on hover */}
      <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="font-bold text-foreground text-sm">{customer.name}</h3>
        <span className="text-xs text-muted-foreground">{customer.industry}</span>
      </div>
    </div>
  </div>
);

export const CustomersGridSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Khách hàng tiêu biểu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Những doanh nghiệp hàng đầu đã tin tưởng và lựa chọn giải pháp của ECOTEL
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {customersData.map((customer, index) => (
            <CustomerCard key={customer.name} customer={customer} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};