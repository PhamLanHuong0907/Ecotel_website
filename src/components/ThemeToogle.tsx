import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // 1. Kiểm tra localStorage hoặc cài đặt hệ thống khi mới vào web
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Logic: Nếu đã lưu 'light' HOẶC (chưa lưu gì mà máy tính đang để light mode)
    if (storedTheme === 'light' || (!storedTheme && systemPrefersLight)) {
      setIsLight(true);
      document.documentElement.classList.add('light');
    } else {
      setIsLight(false);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      // Đang sáng -> Chuyển sang tối
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      // Đang tối -> Chuyển sang sáng
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center w-12 h-12 rounded-full 
        glass-card hover-lift transition-all duration-300
        group border border-white/10
      "
      aria-label="Toggle Theme"
    >
      {/* Hiệu ứng nền khi hover */}
      <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

      {/* Icon Mặt trời (Hiện khi đang Dark để bấm vào chuyển sang Light) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-6 h-6 text-yellow-400 transition-all duration-500 transform ${
          isLight ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Icon Mặt trăng (Hiện khi đang Light để bấm vào chuyển sang Dark) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 text-primary transition-all duration-500 transform ${
          isLight ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0 absolute'
        }`}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
};

export default ThemeToggle;