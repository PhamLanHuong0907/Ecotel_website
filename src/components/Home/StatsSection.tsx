import { TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";
import { StatsSection } from "../StatsSection";
const stats = [
  {
    icon: TrendingUp,
    value: 20,
  suffix: "+",
    label: "Năm kinh nghiệm",
    description: "Cung cấp giải pháp IoT và chuyển đổi số đa lĩnh vực",
  },
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Dự án triển khai",
    description: "Thành công cho TKV và nhiều doanh nghiệp lớn",
  },
  {
    icon: Users2,
    value: 50,
    suffix: "+",
    label: "Chuyên gia",
    description: "Đội ngũ kỹ sư, cử nhân chuyên môn cao",
  },
  {
    icon: Trophy,
    value: 4,
    suffix: "+",
    label: "Giải thưởng",
    description: "Được công nhận về chất lượng và đổi mới sáng tạo",
  },
];

export default function Home_StatsSection()  {
  return (
    <StatsSection
      data = {stats}
     /> 
  );
}