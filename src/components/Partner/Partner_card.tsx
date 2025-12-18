import { useSectionInView } from "@/hooks/useSectionInView";
import image_WordPress from "@/assets/WordPress.png";
import image_WooComerce from "@/assets/WooCommerce.png";
import image_Cloudera from "@/assets/Cloudera.png";
import image_Superset from "@/assets/Superset.png";
import image_Odoo from "@/assets/Odoo.png";
import image_Tableau from "@/assets/Tableau.png";
import { HumansGridSection, Data } from "../Card";
const partnersData = [
  { name: "WordPress", logo: image_WordPress, industry: "" },
  { name: "WooComerce", logo: image_WooComerce, industry: "" },
  { name: "Odoo", logo: image_Odoo, industry: "" },
  { name: "Cloudera", logo: image_Cloudera, industry: "" },
  { name: "Tableau", logo: image_Tableau, industry: "" },
  { name: "Superset", logo: image_Superset, industry: "" },
];

export default function Partner_Card(){
  return(
    <HumansGridSection
      Humans={partnersData}
    />
  );
}