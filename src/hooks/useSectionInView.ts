import { useState, useEffect, useRef } from "react";

export const useSectionInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Nếu muốn animation chạy lại mỗi khi cuộn, bỏ dòng dưới
            if (ref.current) observer.unobserve(ref.current); 
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};