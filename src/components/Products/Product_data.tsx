import { Database, Settings, Factory, Users, Cpu, Navigation, Gauge } from "lucide-react";
// Import images (giữ nguyên các import ảnh của bạn ở đây)
import khodulieu from "@/assets/khodulieu.png"
import drone from "@/assets/drone.png"
import hethongthamdo from "@/assets/hethongthamdo.png"
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
  features: React.ReactNode[];
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
        title: "Giải pháp kho dữ liệu",
        description: "Giải pháp Data Lakehouse được thiết kế mục đích đồng bộ dữ liệu tại một nơi giúp khai thác tối đa giá trị dữ liệu trong quá trình chuyển đổi số",
        features: [
          // Phần tử 1: Dùng thẻ div bọc ngoài (hoặc Fragment <></>)
          <div key="feature-1">
            <strong>Đối với chuyên gia dữ liệu:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Cung cấp một hệ thống lưu trữ linh hoạt.</li>
              <li>Hỗ trợ AI/ML, phân tích dữ liệu lớn.</li>
              <li>Đảm bảo dữ liệu sạch, có cấu trúc và dễ truy xuất.</li>
            </ul>
          </div>,

          // Phần tử 2
          <div key="feature-2">
            <strong>Đối với chuyên gia kinh doanh:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Tích hợp công cụ BI, phân tích dữ liệu thời gian thực.</li>
              <li>Giúp đưa ra quyết định nhanh chóng, chính xác.</li>
            </ul>
          </div>
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Hệ thống thăm dò",
    icon: <Settings className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
    slides: [
      {
        image: drone,
        title: "Drone khảo sát",
        description: "ECOTEL ứng dụng thiết bị bay không người lái kết nối 5G để thực hiện:",
        features: [
          "Khảo sát địa hình",
          "Giám sát hoạt động khai thác, khoan phá mìn và khảo sát mỏ",
          "Lập bản đồ 3D địa chất",
        ]
      },
      {
        image: hethongthamdo,
        title: "Phân tích thông mình",
        description: "ECOTEL xây dựng nền tảng đám mây tích hợp dữ liệu từ khoan, địa chấn, drone, cảm biến thành một cơ sở dữ liệu tập trung",
        features: [
          "Truy cập từ xa",
          "Phân tích chuyên sâu, cộng tác trực tuyến",
          "Dữ liệu minh bạch, bảo mật, toàn vẹn",
          "Đề xuất các điểm khoan thăm dò tối ưu",
          "Tối ưu hóa quy trình khai thác và nâng cao hiệu suất vận hành",
        ]
      },
    ]
  },
  {
    id: 3,
    name: "Lập bản đồ",
    icon: <Factory className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
    slides: [
      {
        image: phanmemkehoach1,
        title: "Tiềm năng khoáng sản",
        description: "ECOTEL cung cấp hệ thống lập bản đồ tiềm năng khoáng sản, giúp doanh nghiệp khai thác tối ưu tài nguyên bằng cách phân tích địa vật lý và địa chất ",
        features: [
          <div key="feature-1">
            <strong>Địa vật lý:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Đánh giá từ tính, trọng lực, tính dẫn điện để xác định tầng chứa khoáng sản</li>
            </ul>
          </div>,

          // Phần tử 2
          <div key="feature-2">
            <strong>Địa chất:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Phân tích khoảng cách đến các đứt gãy</li>
              <li>Dự báo khu vực có trữ lượng cao và giảm rủi ro thăm dò</li>
            </ul>
          </div>
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