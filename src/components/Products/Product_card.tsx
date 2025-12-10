import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Product } from "./Product_data";

interface ProductCardProps {
  product: Product;
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
  onHover: (id: number | null) => void;
  index: number; // Dùng để delay animation xuất hiện
}

export const ProductCard = ({ product, currentSlide, onSlideChange, onHover, index }: ProductCardProps) => {
  const slide = product.slides[currentSlide] || product.slides[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500"
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Left Side - Content */}
        <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center relative bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${product.id}-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-5`}>
                {product.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
              <h4 className="text-lg text-primary font-semibold mb-4">{slide.title}</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{slide.description}</p>

              <div className="space-y-2">
                {slide.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Zap className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Dots Navigation */}
              {product.slides.length > 1 && (
                <div className="flex gap-2 mt-6">
                  {product.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSlideChange(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? `w-8 bg-gradient-to-r ${product.gradient}`
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-2/3 relative bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-4 lg:p-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${product.id}-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/30 bg-background/50 backdrop-blur-sm">
                <img src={slide.image} alt={slide.title} className="w-full h-auto max-h-[350px] object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
              </div>
              {/* Decorative Blobs */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl`} />
              <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl`} />
            </motion.div>
          </AnimatePresence>

          {/* Arrows Navigation */}
          {product.slides.length > 1 && (
            <>
              <button
                onClick={() => onSlideChange((currentSlide - 1 + product.slides.length) % product.slides.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => onSlideChange((currentSlide + 1) % product.slides.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};