import { Database, Settings, Factory, Users, Cpu, Navigation, Gauge } from "lucide-react";
// Import images (giữ nguyên các import ảnh của bạn ở đây)
import khodulieu from "@/assets/khodulieutaptrung.png"
import khodulieu1 from "@/assets/khodulieutaptrung1.png"
import quanlytaisan from "@/assets/Quanlytaisan.png"
import quanlytaisan1 from "@/assets/Quanlytaisan1.png"
import phanmemkehoach from "@/assets/quanlydinhmuc.png"
import phanmemkehoach1 from "@/assets/quanlydinhmuc1.png"
import phanmemkehoach2 from "@/assets/quanlydinhmuc2.png"
import phanmemnhansu from "@/assets/Quanlynhansu.png"
import phanmemnhansu1 from "@/assets/Quanlynhansu1.png"
import phanmemnhansu2 from "@/assets/Quanlynhansu2.png"
import phanmemnhansu3 from "@/assets/Quanlynhansu3.png"
import phanmemnhansu4 from "@/assets/Quanlynhansu4.png"
import quanlymaymoc from "@/assets/quanlymaymoc.png"
import quanlymaymoc1 from "@/assets/quanlymaymoc1.png"
import quanlymaymoc2 from "@/assets/quanlymaymoc2.png"
import quanlymaymoc3 from "@/assets/quanlymaymoc3.png"
import hethonggiamsatdau from "@/assets/hethonggiamsatdau.png"
import hethonggiamsatdau1 from "@/assets/hethonggiamsatdau1.png"
import hethonggiamsatdau2 from "@/assets/hethonggiamsatdau2.png"
import hieusuatmay from "@/assets/hethonggiamsathieusuat.png"
import hieusuatmay1 from "@/assets/hethonggiamsathieusuat1.png"
import hieusuatmay2 from "@/assets/hethonggiamsathieusuat2.png"
export interface ProductSlide {
  image: string;
  title: string;
  description: string;
  features: string[];
}

export interface Product {
  id: number;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  slides: ProductSlide[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Kho dữ liệu tập trung",
    icon: <Database className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    slides: [
      {
        image: khodulieu,
        title: "Kho dữ liệu tập trung",
        description: "Hệ thống Data Lakehouse hiện đại với kiến trúc 3 lớp...",
        features: ["Kiến trúc Data Lakehouse 3 lớp", "Hỗ trợ Data Science...", "Truy vấn hiệu quả...", "Tích hợp RAG Store..."]
      }
    ]
  },
  {
    id: 2,
    name: "Quản lý tài sản, thiết bị cơ điện",
    icon: <Settings className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
    slides: [
      {
        image: quanlytaisan,
        title: "Quản lý nghiệp vụ tài sản",
        description: "Số hóa thông tin tài sản và nghiệp vụ quản lý tài sản bao gồm cấp mới, điều chuyển, thu hồi và thanh lý.",
        features: [
          "Số hóa thông tin tài sản",
          "Cấp mới, điều chuyển tài sản",
          "Thu hồi và thanh lý",
          "Giao diện thân thiện, linh hoạt"
        ]
      },
      {
        image: quanlytaisan1,
        title: "Giám sát tài sản IoT",
        description: "Giám sát trạng thái tài sản với thời gian thực thông qua công nghệ IoT, hỗ trợ trên mọi nền tảng và thiết bị.",
        features: [
          "Giám sát thời gian thực",
          "Tích hợp IoT sensors",
          "Cảnh báo tự động",
          "Dashboard trực quan"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Phần mềm kế hoạch và định mức sản xuất",
    icon: <Factory className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
    slides: [
      {
        image: phanmemkehoach,
        title: "Kế hoạch & Định mức sản xuất",
        description: "Giải pháp toàn diện quản lý vật tư, tài sản trong khoán với khả năng tính toán giá thành sản xuất và quyết toán giao khoán tự động.",
        features: [
          "Quản lý vật tư, tài sản trong khoán",
          "Tính toán đơn giá và định mức",
          "Quyết toán giao khoán theo Tháng/Quý",
          "Thống kê vận hành chi tiết"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Phần mềm quản lý nhân sự, tiền lương tích hợp AI",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    slides: [
      {
        image: phanmemnhansu,
        title: "Quản lý hồ sơ nhân sự",
        description: "Hệ thống HRM hiện đại tích hợp trí tuệ nhân tạo với Voice Bot, hỗ trợ quản lý toàn diện thông tin nhân viên.",
        features: [
          "Quản lý hồ sơ nhân viên",
          "Theo dõi lịch sử công tác",
          "Quản lý hợp đồng lao động",
          "AI phân tích nhân sự"
        ]
      },
      {
        image: phanmemnhansu1,
        title: "Chấm công & Lương thưởng",
        description: "Tự động hóa quy trình chấm công và tính lương với độ chính xác cao, tiết kiệm thời gian và chi phí.",
        features: [
          "Chấm công tự động",
          "Tính lương theo KPI, doanh số",
          "Quản lý phụ cấp, thưởng",
          "Xuất bảng lương tự động"
        ]
      },
      {
        image: phanmemnhansu2,
        title: "Đào tạo & Phát triển",
        description: "Quản lý chương trình đào tạo, đánh giá năng lực và lộ trình phát triển nhân viên.",
        features: [
          "Lập kế hoạch đào tạo",
          "Đánh giá năng lực",
          "Theo dõi tiến độ học tập",
          "Chứng chỉ và bằng cấp"
        ]
      },
      {
        image: phanmemnhansu3,
        title: "Voice Bot AI hỗ trợ",
        description: "Voice Bot AI hỗ trợ nhân viên tra cứu thông tin, quy trình nghiệp vụ tự động hóa.",
        features: [
          "Voice Bot 24/7",
          "Tra cứu thông tin nhanh",
          "Quy trình tự động hóa",
          "Hỗ trợ đa ngôn ngữ"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Phần mềm quản lý máy móc, nhận lệnh trực tuyến",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-500",
    slides: [
      {
        image: quanlymaymoc,
        title: "Quản lý máy móc thông minh",
        description: "Hệ thống giám sát và điều khiển máy móc từ xa, cho phép nhận lệnh sản xuất trực tuyến và theo dõi trạng thái hoạt động theo thời gian thực.",
        features: [
          "Nhận lệnh sản xuất trực tuyến",
          "Giám sát trạng thái máy thời gian thực",
          "Cảnh báo sự cố tự động",
          "Tích hợp IoT sensors"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Hệ thống giám sát dầu và hành trình xe",
    icon: <Navigation className="w-8 h-8" />,
    gradient: "from-red-500 to-orange-500",
    slides: [
      {
        image: hethonggiamsatdau,
        title: "Giám sát dầu & Hành trình",
        description: "Giải pháp giám sát nhiên liệu và theo dõi hành trình xe tải, xe vận chuyển với độ chính xác cao, giúp tối ưu chi phí vận hành.",
        features: [
          "Giám sát mức dầu thời gian thực",
          "Theo dõi GPS hành trình",
          "Cảnh báo tiêu hao bất thường",
          "Phân tích chi phí nhiên liệu"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Hệ thống giám sát hiệu suất máy",
    icon: <Gauge className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-500",
    slides: [
      {
        image: hieusuatmay,
        title: "Giám sát hiệu suất máy",
        description: "Nền tảng giám sát OEE (Overall Equipment Effectiveness) với khả năng đo lường hiệu điện thế, cường độ dòng điện và lượng điện tiêu thụ.",
        features: [
          "Đo lường hiệu điện thế & cường độ dòng điện",
          "Theo dõi lượng điện tiêu thụ (KWH)",
          "Biểu đồ phân tích theo thời gian",
          "Cảnh báo tiêu thụ điện bất thường"
        ]
      }
    ]
  }
];