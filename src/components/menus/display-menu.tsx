import { slugify } from "utils/helpers";
import CategoriesMenu from "./categories-menu";
import CertificationsMenu from "./certifications-menu";
import SimpleMenu from "./simple-menu";

export default function DisplayMenu({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  switch (slugify(item.libelle)) {
    case "certifications":
      return <CertificationsMenu item={item} className={className} />;
    case "formations":
      return <CategoriesMenu item={item} className={className} />;
    default:
      return <SimpleMenu items={item.sous_menus} className={className} />;
  }
}
