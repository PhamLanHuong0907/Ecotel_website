import { motion } from "framer-motion";
import { Cog, BarChart3, Building2, Factory } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Tự động hóa toàn diện",
    description: "Tích hợp hệ thống điều khiển tự động PLC, SCADA giúp giám sát và vận hành nhà máy hiệu quả",
  },
  {
    icon: BarChart3,
    title: "Phân tích dữ liệu thông minh",
    description: "Thu thập và phân tích dữ liệu sản xuất theo thời gian thực để đưa ra quyết định chính xác",
  },
  {
    icon: Building2,
    title: "Tối ưu quy trình",
    description: "Chuẩn hóa và tối ưu hóa quy trình sản xuất, giảm thiểu lãng phí và nâng cao chất lượng",
  },
  {
    icon: Factory,
    title: "Kết nối IoT",
    description: "Kết nối thiết bị và máy móc thông qua nền tảng IoT để giám sát từ xa mọi lúc mọi nơi",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Lợi ích giải pháp công nghiệp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ECOTEL mang đến những giá trị thiết thực cho doanh nghiệp sản xuất
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};