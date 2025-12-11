import { Database, Settings, Factory, Users, Cpu, Navigation, Gauge } from "lucide-react";
// Import images (giữ nguyên các import ảnh của bạn ở đây)
import khodulieu from "@/assets/khodulieutaptrung.png"
import khodulieu1 from "@/assets/khodulieutaptrung1.png"
import quanlytaisan from "@/assets/Quanlytaisan.png"
import quanlytaisan1 from "@/assets/Screenshot 2025-12-10 154157.png"
import phanmemkehoach from "@/assets/quanlydinhmuc.png"
import phanmemkehoach1 from "@/assets/quanlydinhmuc1.png"
import phanmemkehoach2 from "@/assets/quanlydinhmuc2.png"
import phanmemnhansu from "@/assets/Quanlynhansu.png"
import phanmemnhansu1 from "@/assets/Quanlynhansu1.png"
import phanmemnhansu2 from "@/assets/Quanlynhansu2.png"
import phanmemnhansu3 from "@/assets/Quanlynhansu3.png"
import phanmemnhansu4 from "@/assets/Quanlynhansu4.png"
import quanlymaymoc from "@/assets/quanly.png"
import quanlymaymoc1 from "@/assets/Screenshot 2025-12-10 151315.png"
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
      },
      {
        image: khodulieu1,
        title: "Sơ đồ hoạt động của kho dữ liệu tập trung",
        description: "Mô hình hệ thống kết nối ứng dụng Flutter với luồng xử lý dữ liệu tập trung 3 lớp (Data Lakehouse) và cơ sở dữ liệu vector (ChromaDB), nhằm phục vụ quản lý tài liệu thông minh và tính năng Chat AI (RAG).",
        features: [
          "Flutter App: Giao diện người dùng đa nền tảng, tích hợp quản lý trạng thái (Provider/Bloc/Riverpod).",

"Hệ thống API: Cung cấp các dịch vụ Dashboard, Tìm kiếm, Chat, và Phân tích dữ liệu.",

"Data Lakehouse (3 lớp)",
"RAG Store (ChromaDB): Hỗ trợ tìm kiếm vector, so khớp độ tương đồng và lưu trữ ngữ cảnh cho tính năng Chat thông minh."
        ]
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
          "Số hóa quản lý nghiệp vụ tài sản",
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
        description: "Giải pháp toàn diện quản lý vật tư, tài sản trong khoán ",
        features: [
          "Quản lý vật tư, tài sản trong khoán",
          "Tính toán đơn giá và định mức",
        ]
      },
      {
        image: phanmemkehoach1,
        title: "Quyết toán giao khoán",
        description: "Tự động hóa quy trình quyết toán giao khoán theo Tháng/Quý, giảm thiểu sai sót và tiết kiệm thời gian.",
        features: [
          "Lập kế hoạch giao khoán",
          "Tự động tính toán đơn giá",
          "Quyết toán giao khoán theo Tháng/Quý",
          "Thống kê vận hành chi tiết"
        ]
      },
      {
        image: phanmemkehoach2,
        title: "Sơ đồ công nghệ giá thành khai thác than",
        description: "Phân tích quy trình tính toán giá thành",
        features: [
        "Tính toán chi phí sản xuất",
        "Tính toán chi phí tiêu thụ",
        "Lập công thức tính toán giá thành"
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
        title: "Quản lý chấm công",
        description: "Tổng quan hệ thống quản lý chấm công",
        features: [
          "Quản lý tình hình nghỉ phép",
          "Theo dõi lịch làm việc",
          "Quản lý kế hoạch nghỉ",
          "Báo cáo chấm công chi tiết"
        ]
      },
      {
        image: phanmemnhansu1,
        title: "Quản lý tiền lương",
        description: "Tổng quan hệ thống quản lý tiền lương",
        features: [
          "Quản lý quy trình tính lương",
          "Tính lương theo KPI, doanh số",
          "Quản lý phụ cấp, thưởng",
          "Xuất bảng lương tự động"
        ]
      },
      
      {
        image: phanmemnhansu2,
        title: "Voice Bot AI hỗ trợ",
        description: "Voice Bot AI hỗ trợ nhân viên tra cứu thông tin, quy trình nghiệp vụ tự động hóa.",
        features: [
          "Voice Bot 24/7",
          "Tra cứu thông tin nhanh",
          "Quy trình tự động hóa",
          "Hỗ trợ đa ngôn ngữ"
        ]
      },
      {
        image: phanmemnhansu3,
        title:"Tính năng bổ sung",
        description:"Theo dõi thời tiết",
        features: [
          "Cập nhật thời tiết hàng ngày",
          "Lên kế hoạch dựa trên điều kiện thời tiết",
          "Cảnh báo thời tiết xấu",
          "Tích hợp với lịch làm việc"
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
          "Tự động tổng hợp sản lượng, nhiên liệu, dầu máy",
          "Giám sát trạng thái máy thời gian thực",
          "Cảnh báo sự cố tự động",
          "Tích hợp GPS định vị máy"
        ]
      },
      {
        image: quanlymaymoc1,
        title: "Nhận lệnh sản xuất trực tuyến",
        description: "Giao diện nhận lệnh sản xuất trực tuyến, cho phép người vận hành gửi lệnh và theo dõi tiến trình sản xuất một cách dễ dàng và hiệu quả.",
        features: [
          "Hiện đại hóa quy trình điều hành sản xuất",
          "Kết nối xuyên suốt giữa quản lý - nhân viên - máy móc - hệ thống",
          "Hỗ trợ xây dựng cơ sở tính lương minh bạch và hợp lý"
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
      },
      {
        image: hethonggiamsatdau1,
        title: "Giao diện hành trình và mức dầu tiêu thụ",
        description: "Giao diện trực quan hiển thị hành trình xe và mức dầu tiêu thụ, giúp người quản lý dễ dàng theo dõi và phân tích hiệu suất vận hành.",
        features: [
          "Bản đồ hành trình chi tiết",
          "Biểu đồ mức dầu tiêu thụ",
        ]
      },
      {
        image: hethonggiamsatdau2,
        title: "Báo cáo phân tích nhiên liệu dầu trên hành trình",
        description: "Báo cáo chi tiết phân tích mức tiêu thụ nhiên liệu dầu trên từng hành trình, giúp tối ưu hóa lộ trình và giảm chi phí vận hành.",
        features: [
          "Báo cáo chi tiết theo hành trình",
          "Phân tích xu hướng tiêu thụ nhiên liệu",
          "Đề xuất tối ưu lộ trình"
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
        title: "Sơ đồ nguyên lý kết nối hệ thống giám sát hiệu suất máy",
        description: "Mô hình kiến trúc tổng thể của hệ thống, minh họa luồng dữ liệu từ cảm biến tại máy móc, truyền qua cổng kết nối không dây lên Cloud và hiển thị tới người dùng cuối.",
        features: [
          "Thu thập dữ liệu đa tầng",
          "Truyền thông không dây LoRaWAN",
          "Lưu trữ và xử lý trên Cloud",
          "Đa nền tảng giám sát hiệu suất, năng lượng, lỗi máy"
        ]
      },
      {
        image: hieusuatmay1,
        title: "Giao diện giám sát tiêu thụ điện năng",
        description: "Giao diện quản trị hiển thị các chỉ số tiêu thụ điện chi tiết theo thời gian thực của máy móc, giúp người quản lý theo dõi chi phí và phát hiện bất thường về nguồn điện",
        features:[
          "Đồng hồ đo điện năng thời gian thực",
          "Thống kê điện năng tiêu thụ và các thiết bị gây tốn điện",
          "Biểu đồ phân tích xu hướng tiêu thụ điện",
          "Bộ lọc chi tiết theo sản phẩm, lệnh sản xuất, ca làm, nhân viên"
        ]
      },
      {
        image: hieusuatmay2,
        title: "Giao diện giám sát vị trí và lộ trình",
        description: "Bản đồ số hóa mặt bằng nhà máy, mô phỏng lại quá trình di chuyển và vị trí hiện tại của nhân viên, tài sản",
        features:[
          "Hiển thị cấu trúc nhà máy với các khu làm việc và lối đi cụ thể",
          "Vẽ lộ trình",
          "Lọc đối tượng muốn theo dõi",
          "Phân vùng mật độ hoặc khu vực tập trung thiết bị"
        ]
      }
    ]
  }
];