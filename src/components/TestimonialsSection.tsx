import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "ECOTEL đã giúp chúng tôi chuyển đổi số toàn diện hệ thống sản xuất, giảm 30% chi phí vận hành và tăng hiệu suất đáng kể.",
    author: "Nguyễn Văn A",
    position: "Giám đốc Sản xuất",
    company: "Tập đoàn TKV",
  },
  {
    content: "Đội ngũ kỹ sư của ECOTEL rất chuyên nghiệp, luôn đảm bảo tiến độ và chất lượng dự án. Chúng tôi rất hài lòng với kết quả.",
    author: "Trần Thị B",
    position: "Phó Tổng Giám đốc",
    company: "Công ty ABC",
  },
  {
    content: "Giải pháp IoT của ECOTEL đã thay đổi hoàn toàn cách chúng tôi quản lý và vận hành. Rất đáng tin cậy và hiệu quả.",
    author: "Lê Văn C",
    position: "Trưởng phòng IT",
    company: "Tập đoàn XYZ",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Khách hàng nói gì
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Đánh giá từ </span>
            <span className="gradient-text">khách hàng</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-8 hover-lift relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <p className="text-muted-foreground mt-4 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.position}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
