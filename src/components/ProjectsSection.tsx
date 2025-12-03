import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hệ thống giám sát dầu và hành trình xe",
    client: "Tập đoàn TKV",
    description: "Triển khai hệ thống IoT giám sát an toàn và vận hành cho các mỏ than lớn",
    category: "Công nghiệp",
  },
  {
    title: "Phần mềm quản lý máy móc thiết bị, nhận lệnh trực tuyến",
    client: "Công ty ABC",
    description: "Tự động hóa quy trình sản xuất và quản lý kho vận thông minh",
    category: "Công nghiệp",
  },
  {
    title: "Phần mềm nhân sự, tiền lương tích hợp AI",
    client: "UBND Thành phố XYZ",
    description: "Hệ thống giám sát giao thông, chiếu sáng và môi trường thông minh",
    category: "Dân sinh",
  },
  {
    title: "Phần mềm kế hoạch và định mức sản xuất",
    client: "Tập đoàn Điện lực",
    description: "Giám sát và tối ưu hóa lưới điện với công nghệ IoT tiên tiến",
    category: "IoT",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  {project.category}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary/80 mb-3">{project.client}</p>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
