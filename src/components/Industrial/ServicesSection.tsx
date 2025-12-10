import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Giải pháp gia công chế tạo máy & dây chuyền sản xuất",
    description: `ECOTEL là đơn vị tiên phong cung cấp các giải pháp về gia công máy và dây chuyền sản xuất.\n\nTrong bối cảnh công nghiệp hiện đại, việc tối ưu hóa dây chuyền sản xuất và gia công chế tạo máy đóng vai trò then chốt trong việc nâng cao năng suất, giảm chi phí và cải thiện chất lượng sản phẩm. ECOTEL mang đến giải pháp thiết kế, chế tạo máy và dây chuyền sản xuất theo nhu cầu đặc thù của từng doanh nghiệp, giúp tối ưu hiệu quả vận hành và đẩy mạnh tự động hóa trong sản xuất.`,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=60",
    icon: Factory,
  },
  {
    id: 2,
    title: "Giải pháp ERP & BI - Tối ưu hóa vận hành doanh nghiệp",
    description: `Trong kỷ nguyên số, việc áp dụng hệ thống ERP (Enterprise Resource Planning) và BI (Business Intelligence) trở thành yếu tố quyết định giúp doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường khả năng quản lý dữ liệu và ra quyết định chính xác dựa trên thông tin thời gian thực.\n\nECOTEL mang đến giải pháp ERP & BI toàn diện, giúp doanh nghiệp chuẩn hóa quy trình, đồng bộ dữ liệu và nâng cao hiệu suất hoạt động.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Nhà máy thông minh",
    description: `Trong bối cảnh Công nghiệp 4.0, việc xây dựng Nhà máy thông minh (Smart Factory) không chỉ là xu hướng mà còn là yếu tố cốt lõi giúp doanh nghiệp sản xuất nâng cao năng suất, tối ưu chi phí và duy trì lợi thế cạnh tranh.\n\nECOTEL tự hào đồng hành cùng các nhà máy trong việc xây dựng tầm nhìn và lộ trình chuyển đổi số, từ việc triển khai các hệ thống IoT, tự động hóa đến phân tích dữ liệu và trí tuệ nhân tạo.`,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    icon: Cpu,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  {service.title}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                {service.id === 1 ? (
                  <Link to="/industrial/manufacturing">
                    <Button className="group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">
                      Xem chi tiết
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button className="group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">
                    Xem chi tiết
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};