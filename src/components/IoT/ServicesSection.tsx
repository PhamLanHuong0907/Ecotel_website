import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";
import image_iot from "@/assets/iot_tong_the.jpg"
import image_ecome from "@/assets/Ecomes.png";
import image_ecovision from "@/assets/ecovision.png"
import ScrollToTop from "../Scrolltotop";
const services = [
  {
    id: 1,
    title: "Thiết kế mạch in PCB",
    description: `ECOTEL cung cấp giải pháp IoT toàn diện, từ thiết kế mạch in PCB, phát triển phần cứng, phần mềm nhúng, đến xây dựng hệ thống kết nối IoT giúp các doanh nghiệp và nhà máy tự động hóa, giám sát và quản lý thiết bị từ xa.`,
    image: "https://ecotel.com.vn/api.php/api.php/images/800/14590293/dien-cong-nghiep-6.jpg1729586543582",
    icon: Factory,
    path: '/iot/pcb'
  },
  {
    id: 2,
    title: "Giải pháp IoT tổng thể",
    description: `ECOTEL cung cấp giải pháp IoT toàn diện, từ tư vấn, thiết kế, triển khai hệ thống IoT đến tích hợp với hệ thống hiện có, giúp doanh nghiệp tối ưu vận hành, giám sát thông minh và nâng cao năng suất.`,
    image: image_iot,
    icon: Factory,
    path: '/iot/iot_solutions'
  },
  {
    id: 3,
    title: "Giải pháp kết nối máy móc thiết bị IoT - ECOMES",
    description: `Trong kỷ nguyên số, việc áp dụng hệ thống ERP (Enterprise Resource Planning) và BI (Business Intelligence) trở thành yếu tố quyết định giúp doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường khả năng quản lý dữ liệu và ra quyết định chính xác dựa trên thông tin thời gian thực.\n\nECOTEL mang đến giải pháp ERP & BI toàn diện, giúp doanh nghiệp chuẩn hóa quy trình, đồng bộ dữ liệu và nâng cao hiệu suất hoạt động.`,
    image: image_ecome,
    icon: BarChart3,
    path: '/iot/ecomes'
  },
   {
    id: 4,
    title: "Ứng dụng AI vào hệ thống IoT - ECOVISION",
    description: `ECOTEL cung cấp giải pháp IoT toàn diện, từ tư vấn, thiết kế, triển khai hệ thống IoT đến tích hợp với hệ thống hiện có, giúp doanh nghiệp tối ưu vận hành, giám sát thông minh và nâng cao năng suất.`,
    image: image_ecovision,
    icon: Factory,
    path: '/iot/ecovision'
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
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-purple-600">
                  {service.title}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <Link to={service.path}>
                    <Button className="group bg-gradient-to-br  from-violet-500 via-fuchsia-500 to-purple-500 mt-3">
                      <ScrollToTop/>
                      Xem chi tiết
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};