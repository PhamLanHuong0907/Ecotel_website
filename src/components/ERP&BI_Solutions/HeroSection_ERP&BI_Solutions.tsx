import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import erp_bi from "@/assets/erp&bi2.jpg";

const benefits = [
  { title: "Tăng năng suất", value: "40%", desc: "Cải thiện hiệu suất sản xuất" },
  { title: "Giảm chi phí", value: "30%", desc: "Tiết kiệm chi phí vận hành" },
  { title: "Giảm lỗi", value: "95%", desc: "Độ chính xác cao" },
  { title: "ROI nhanh", value: "18", desc: "Tháng hoàn vốn" },
];

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-0 overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* THAY ĐỔI 1: Thay 'container' bằng 'w-full max-w-[1480px]' 
        (Mặc định container khoảng 1280px, tăng thêm 200px là 1480px)
      */}
      <div className="w-full  mx-auto px-4 relative z-10 mt-16">
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
        >
         
        </motion.div>

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Tag */}
          

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-[60px]">
            <span className="gradient-text">Giải pháp ERP & BI <br/> Tối ưu hóa vận hành doanh nghiệp</span>
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
              Trong kỷ nguyên số, việc áp dụng hệ thống ERP (Enterprise Resource Planning) và BI (Business Intelligence) trở thành yếu tố quyết định giúp doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường khả năng quản lý dữ liệu và ra quyết định chính xác dựa trên thông tin thời gian thực. <span className="text-foreground font-medium">ECOTEL</span> mang đến giải pháp <span className="text-foreground font-medium">ERP & BI</span> toàn diện, giúp doanh nghiệp chuẩn hóa quy trình, đồng bộ dữ liệu và nâng cao hiệu suất hoạt động.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-[235px] flex justify-center items-center"
      >
        <img
          src={erp_bi}
          alt="Dây chuyền sản xuất công nghiệp"
          className="w-[95%] h-full md:h-[500px] object-fit justify-center"
        />
        
        {/* Floating Stats */}
       
      </motion.div>
    </section>
  );
};