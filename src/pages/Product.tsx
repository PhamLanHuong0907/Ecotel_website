import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { allProducts } from "@/components/Products/Product_data"; // Import dữ liệu
import { ProductCard } from "@/components/Products/Product_card";
import { ProductsHero } from "@/components/Products/Product_Hero";

import { CTASection } from "@/components/CTASection"; // Giả sử bạn đã tách CTA tương tự Stats

const ITEMS_PER_PAGE = 4;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlides, setCurrentSlides] = useState<Record<number, number>>({});
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Logic Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        allProducts.forEach(product => {
          if (product.slides.length > 1 && hoveredProduct !== product.id) {
            const currentSlide = prev[product.id] || 0;
            newSlides[product.id] = (currentSlide + 1) % product.slides.length;
          }
        });
        return newSlides;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [hoveredProduct]);

  const goToSlide = (productId: number, slideIndex: number) => {
    setCurrentSlides(prev => ({ ...prev, [productId]: slideIndex }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ProductsHero />
  
      {/* Main Product List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {currentProducts.map((product, index) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  index={index}
                  currentSlide={currentSlides[product.id] || 0}
                  onSlideChange={(idx) => goToSlide(product.id, idx)}
                  onHover={setHoveredProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="gap-2 border-border/50 hover:border-primary/50"
            >
              <ChevronLeft className="w-5 h-5" /> Trang trước
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="gap-2 border-border/50 hover:border-primary/50"
            >
              Trang sau <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          <p className="text-center text-muted-foreground mt-4">
             Trang {currentPage} / {totalPages} • Hiển thị {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, allProducts.length)} trong tổng số {allProducts.length} sản phẩm
          </p>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}