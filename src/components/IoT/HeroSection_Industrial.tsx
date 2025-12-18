import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/vid_iot.mp4"; 

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden h-[630px]">
      
      {/* --- PHẦN BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video tag */}
        <video
          src={industrialVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-125"
        />
        {/* Lớp phủ tối màu để làm nổi bật text (Overlay) */}
        <div className="absolute inset-0 bg-background/80 md:bg-black/60" />
      </div>

      {/* Giữ lại gradient cũ nhưng để z-index thấp để hòa trộn với video */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-0 pointer-events-none" />
      
      {/* Nội dung chính (z-10 để nổi lên trên video) */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-8 mb-8 drop-shadow-lg">
           <div className="h-5"/>
  
           <span className="bg-gradient-to-br pt-3 from-violet-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">GIẢI PHÁP IOT TỔNG THỂ</span>
            <div className="h-5"/>
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
            
            <p className="text-foreground/90 leading-relaxed">
               <span className="bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-semibold">ECOTEL</span>  không ngừng phát triển và triển khai các ứng dụng IoT tiên tiến ngay tại công ty, xem đây là nền tảng quan trọng để tối ưu hóa giải pháp cho ngành sản xuất, nâng cao hiệu suất và tính linh hoạt trong vận hành.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};