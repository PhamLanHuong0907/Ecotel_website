import { useSectionInView } from "@/hooks/useSectionInView";
import image_Vinacomin from "@/assets/Vinacomin1.png";
import image_FiinGroup from "@/assets/Screenshot 2025-12-08 105936.png";
import image_Toshiba from "@/assets/Toshiba4.png";
import image_Mast from "@/assets/Mast.jpg";
import image_Ecopark from "@/assets/Ecopark1.png"
import image_Hexagon from "@/assets/Screenshot 2025-12-10 161142.png"
import { HumansGridSection, Data} from "../Card";

const customersData: Data[]=[
  { name: "VINACOMIN", logo: image_Vinacomin, industry: "Khai khoáng" },
  { name: "FiinGroup", logo: image_FiinGroup, industry: "Tài chính" },
  { name: "Ecopark", logo: image_Ecopark, industry: "Bất động sản" },
  { name: "TOSHIBA", logo: image_Toshiba, industry: "Công nghệ" },
  { name: "HEXAGON", logo: image_Hexagon, industry: "Công nghệ đo lường" },
  { name: "MAST", logo: image_Mast, industry: "Phụ tùng ô tô" },
];
export default function Customer_Card(){
  return (
      <HumansGridSection 
        Humans={customersData} 
      />
  );
}
