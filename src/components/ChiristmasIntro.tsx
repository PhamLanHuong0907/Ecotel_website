import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // Đảm bảo bạn đã cài lucide-react hoặc dùng icon khác
import santa from '@/assets/santa.jpg'
const ChristmasIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra ngày 24/12
    const now = new Date();
    const isNoel = now.getDate() === 23 && now.getMonth() === 11; // Tháng 11 là tháng 12

    // Chỉ chạy nếu đúng ngày Noel và chưa xem intro lần nào trong phiên này (tùy chọn)
    if (isNoel) {
      setIsVisible(true);
      
      // 2. Hẹn giờ: Sau khi ông già noel bay được khoảng 4-5s thì hiện thiệp
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 4500); // 4.5 giây

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Lớp nền tối mờ */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* --- PHẦN 1: XE TRƯỢT TUYẾT BAY --- */}
      {/* Container bay từ trái qua phải */}
      <div className={`absolute left-0 top-1/4 w-full flex items-center animate-fly-across ${showCard ? 'opacity-0 transition-opacity duration-1000' : ''}`}>
        
        {/* Khối chứa Ông già Noel + Chữ */}
        <div className="flex items-center gap-4 min-w-max">
            
            {/* Ảnh Ông già Noel (Thay đường dẫn ảnh của bạn vào đây) */}
            <img 
              src={santa} 
              alt="Santa Claus" 
              className="h-32 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            />

            {/* Dây nối (Trang trí) */}
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-transparent opacity-60" />

            {/* Banner Merry Christmas */}
            <div className="relative bg-red-700/90 text-white px-8 py-4 rounded-r-lg border-y-2 border-r-2 border-yellow-400 shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-yellow-300 drop-shadow-md whitespace-nowrap">
                    MERRY CHRISTMAS
                </h1>
                {/* Hiệu ứng lấp lánh trên chữ */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
        </div>
      </div>

      {/* --- PHẦN 2: THIỆP CHÚC MỪNG (Hiện ra sau khi xe bay qua) --- */}
      {showCard && (
        <div className="relative w-[90%] max-w-lg aspect-[4/3] bg-[#fffbf0] rounded-lg shadow-2xl animate-zoom-in border-4 border-red-700 p-1 flex flex-col">
            
            {/* Nút đóng */}
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-10"
            >
                <X size={24} />
            </button>

            {/* Nội dung thiệp */}
            <div className="flex-1 border-2 border-dashed border-red-300 m-2 rounded bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                
                {/* Trang trí góc */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600 rounded-br-xl" />

                {/* Text */}
                <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 font-heading">
                    Giáng Sinh An Lành!
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed font-body">
                    Kính chúc Quý khách và Gia đình một mùa Giáng sinh ấm áp, hạnh phúc và một năm mới An khang - Thịnh vượng.
                    <br/><br/>
                    <span className="font-bold text-primary">From ECOTEL with Love ❤️</span>
                </p>

                {/* Nút hành động */}
                <button 
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
                >
                    Nhận lời chúc
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ChristmasIntro;