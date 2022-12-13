import CategoriesMenu from "./categories-menu";
import CertificationsMenu from "./certifications-menu";
import SimpleMenu from "./simple-menu";

export default function DisplayMenu({
  items,
  display,
  className,
}: {
  items: any[];
  display: string;
  className: string;
}) {
  switch (display) {
    case "certifications_menu":
      return <CertificationsMenu items={items} className={className} />;
    case "categories_menu":
      return <CategoriesMenu items={items} className={className} />;
    default:
      return <SimpleMenu items={items} className={className} />;
  }
}
