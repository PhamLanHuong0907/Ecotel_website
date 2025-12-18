import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import factoryHero from "@/assets/qlsx1.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-0 overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="w-full mx-auto px-4 relative z-10 mt-16">
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
        >
          {/* Nội dung breadcrumb nếu cần */}
        </motion.div>

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-[60px]">
            <span className="gradient-text">Giải pháp Eco-MES</span>
            <br />
            <span className="text-white text-4xl [.light_&]:text-gray-500">Mảnh ghép kết nối ERP và Tầng sản xuất</span>
          </h1>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-8 text-center"
        >
          <div className="glass-card p-8 rounded-2xl space-y-4 ">
            <p className="text-muted-foreground leading-relaxed text-[19px]">
              Trong bối cảnh Công nghiệp 4.0, việc xây dựng <span className="text-foreground font-medium"> Nhà máy thông minh (Smart Factory) </span> không chỉ là xu hướng mà còn là yếu tố cốt lõi giúp doanh nghiệp sản xuất nâng cao năng suất, tối ưu chi phí và duy trì lợi thế cạnh tranh. <span className="text-foreground font-medium">ECOTEL</span>  tự hào đồng hành cùng các nhà máy trong việc <span className="text-foreground font-medium">xây dựng tầm nhìn và lộ trình chuyển đổi số,</span> cung cấp những giải pháp công nghệ tiên tiến giúp doanh nghiệp đạt được <br/> <span className="text-foreground font-medium">hiệu suất vận hành tối đa.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-[100px] md:mt-[250px] flex justify-center items-center w-full"
      >
        {/* Đã xóa hoàn toàn lớp phủ gradient (đen) tại đây */}
        
        <img
          src={factoryHero}
          alt="Dây chuyền sản xuất công nghiệp"
          // THAY ĐỔI: w-full h-full để ảnh hiển thị full kích thước, object-cover để lấp đầy
          className="w-[70%] h-full object-cover mt-[17px]"
        />
      </motion.div>
    </section>
  );
};