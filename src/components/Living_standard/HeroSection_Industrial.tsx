import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/video_dansinh.mp4"; 

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
          className="w-full h-full object-cover"
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
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold  mb-8 drop-shadow-lg">
           <div className="h-5"/>
  
           <span className="bg-gradient-to-br from-emerald-500 via-teal-400 to-teal-600 bg-clip-text text-transparent">DÂN SINH</span>
            <div className="h-5"/>
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
           
            <p className="text-foreground/90 leading-relaxed">
             Trong lĩnh vực dân sinh, <span className="bg-gradient-to-br from-emerald-500 via-teal-400 to-teal-600 bg-clip-text text-transparent font-semibold">ECOTEL</span> cung cấp nhiều giải pháp, thiết bị công nghệ nhằm phục vụ cho đời sống xã hội, bao gồm: Hệ thống đỗ xe tự động, sạc pin xe điện, và giám sát an ninh (giải pháp Camera AI). Chúng tôi cũng không ngừng cập nhật các dòng sản phẩm phù hợp với mục tiêu giúp cuộc sống tiện ích, thông minh và xanh hơn.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};