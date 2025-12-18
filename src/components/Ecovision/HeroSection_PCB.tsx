import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image_ecovision from "@/assets/ecovision.png"
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
            <span className="gradient-text">Ứng dụng AI trong hệ thống IoT - ECOVISION </span>
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
            <span className="text-foreground font-medium">EcoVMS </span> là nền tảng ửng dụng trí tuệ nhân tạo (AI) vào giám sát Camera an ninh, ứng dụng công nghệ phân tích, xử lý video thông minh (Intelligent Video Analytics) hỗ trợ người dùng giám sát camera trực tiếp, lưu trữ video, xem lại và phân tích dữ liệu video để đưa ra các cảnh báo, báo cáo và thống kê.

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
          src= {image_ecovision}
          alt="Dây chuyền sản xuất công nghiệp"
          // THAY ĐỔI: w-full h-full để ảnh hiển thị full kích thước, object-cover để lấp đầy
          className="w-[70%] h-full object-cover mt-[17px]"
        />
      </motion.div>
    </section>
  );
};