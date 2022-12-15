import CategoriesMenu from "./categories-menu";
import CertificationsMenu from "./certifications-menu";
import SimpleMenu from "./simple-menu";

export default function DisplayMenu({
  parent,
  items,
  display,
  className,
}: {
  parent?: any;
  items: any[];
  display: string;
  className: string;
}) {
  switch (display) {
    case "certifications_menu":
      return (
        <CertificationsMenu
          parent={parent}
          items={items}
          className={className}
        />
      );
    case "categories_menu":
      return (
        <CategoriesMenu parent={parent} items={items} className={className} />
      );
    default:
      return <SimpleMenu parent={parent} items={items} className={className} />;
  }
}
