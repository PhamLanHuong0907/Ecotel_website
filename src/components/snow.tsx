import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; // <--- 1. Import thêm createPortal

const SnowEffect = () => {
  const [flakes, setFlakes] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Chỉ render khi đã chạy ở phía client
    
    const flakeCount = 50;
    const newFlakes = [];

    for (let i = 0; i < flakeCount; i++) {
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 5;
      const left = Math.random() * 100;
      const size = 10 + Math.random() * 15;
      const opacity = 0.3 + Math.random() * 0.5;

      newFlakes.push({
        id: i,
        style: {
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          fontSize: `${size}px`,
          opacity: opacity,
        },
      });
    }
    setFlakes(newFlakes);
    
    return () => setMounted(false);
  }, []);

  // Nếu chưa mount (server-side) thì không render gì cả
  if (!mounted) return null;

  // 2. Dùng createPortal để "bắn" thẻ div này thẳng vào body
  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden h-screen w-screen" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-20px] text-white animate-snow drop-shadow-md select-none"
          style={flake.style}
        >
          ❄
        </div>
      ))}
    </div>,
    document.body // <-- Đích đến là body của trang web
  );
};

export default SnowEffect;