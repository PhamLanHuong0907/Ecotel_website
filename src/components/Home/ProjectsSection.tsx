import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  // --- Trang 1 ---
  {
    title: "Dự án kiểm soát ra vào",
    client: "Công ty Than Thống nhất",
    description: "Giới thiệu giải pháp và bộ chuyển đổi số ứng dụng trong ngành than lò hầm",
    category: "Công nghiệp",
    path: '/'
  },
  {
    title: "Phần mềm quản lý máy móc thiết bị",
    client: "Công ty CP Than Cao Sơn",
    description: "Tự động hóa quy trình sản xuất và quản lý kho vận thông minh",
    category: "Công nghiệp",
    path: '/'
  },
  {
    title: "Phần mềm khoán chi phí",
    client: "Công ty CP Than Hà Lầm",
    description: "Giải pháp toàn diện quản lý vật tư, tài sản trong khoán; Tự động hóa quy trình quyết toán giao khoán theo Tháng/Quý, giảm thiểu sai sót và tiết kiệm thời gian.",
    category: "Công nghiệp",
    path: '/'
  },
  {
    title: "Phần mềm quản lý tài sản",
    client: "Công ty CP Than Uông Bí",
    description: "",
    category: "Công nghiệp",
    path: '/'
  },
  // --- Trang 2 ---
  {
    title: "Phần mềm quản lý nhân sự",
    client: "Công ty CP Than Uông Bí ",
    description: "",
    category: "Dân sinh",
    path: '/'
  },
  {
    title: "Phần mềm quản lý lệnh sản xuất",
    client: "Công ty TNHH 1TV than Dương Huy",
    description: "",
    category: "Công nghiệp",
    path: '/'
  },
];

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const ITEMS_PER_PAGE = 4;
  const AUTO_PLAY_DELAY = 5000;
  
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Dự án tiêu biểu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Các </span>
            <span className="gradient-text">dự án</span>
            <span className="text-foreground"> đã triển khai</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi tự hào với hơn 150 dự án thành công cho các doanh nghiệp lớn trong và ngoài nước
          </p>
        </div>

        <div 
          className="w-full"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 min-h-[400px]">
              {currentProjects.map((project, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      {project.category}
                    </span>
                    <a href={project.path}>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/80 mb-3">{project.client}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    // THAY ĐỔI Ở ĐÂY: Thêm sự kiện onMouseEnter để lướt chuột qua là chuyển trang
                    onMouseEnter={() => handlePageChange(index)} 
                    className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                      currentPage === index
                        ? "w-12 bg-orange-500"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Chuyển đến trang ${index + 1}`}
                  />
                ))}
              </div>
            )}
        </div>
      </div>
    </section>
  );
};