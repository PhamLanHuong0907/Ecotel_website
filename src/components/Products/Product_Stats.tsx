import { motion } from "framer-motion";
import { Layers, Bot, BarChart3, Zap } from "lucide-react";

export const ProductStats = () => (
  <section className="pt-[180px]">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-8 md:p-12 border border-border/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Layers className="w-8 h-8" />, value: "7+", label: "Sản phẩm" },
            { icon: <Bot className="w-8 h-8" />, value: "AI", label: "Tích hợp" },
            { icon: <BarChart3 className="w-8 h-8" />, value: "100+", label: "Doanh nghiệp" },
            { icon: <Zap className="w-8 h-8" />, value: "24/7", label: "Hỗ trợ" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);