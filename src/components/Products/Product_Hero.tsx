import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Video from "@/assets/Tạo_Ảnh_Trái_Đất_Quay_Thành_GIF.mp4"
import { ProductStats } from "./Product_Stats";
export const ProductsHero = () => (
  <section className="pt-32 pb-16 relative overflow-hidden h-full">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    <div className="absolute inset-0 w-full h-[500px] z-0">
        {/* Video tag */}
        <video
          src={Video}
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
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Danh mục sản phẩm</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Sản phẩm của chúng tôi</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto [.light_&]:text-white">
          Các sản phẩm phần mềm tiên tiến được phát triển bởi ECOTEL, đáp ứng nhu cầu số hóa và tự động hóa doanh nghiệp.
        </p>
      </motion.div>
    </div>
    <div style={{ height: '400px' }}><ProductStats/></div>
  </section>
);