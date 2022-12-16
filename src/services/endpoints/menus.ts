import { axiosInstance } from "../axios-instance";

const getMenus = () => {
  const menus = "id,libelle,display";
  const categories =
    "menu_category.categories_id.id,menu_category.categories_id.libelle,menu_category.categories_id.id,menu_category.categories_id.souslibelle";
  const souscategories =
    "menu_category.categories_id.souscategories,menu_category.categories_id.souscategories.sousCategories_id.id,menu_category.categories_id.souscategories.sousCategories_id.libelle";
  const certifications =
    "menu_certificationCategory.certificationCategories_id.id,menu_certificationCategory.certificationCategories_id.libelle";

  const sousmenus = "sous_menus,sous_menus.id,sous_menus.libelle";
  return axiosInstance.get(
    `menus?fields=${menus},${categories},${certifications},${souscategories},${sousmenus}`
  );
};

const getSubMenus = () => {
  return axiosInstance.get("menus?fields=id,label");
};

export { getMenus, getSubMenus };
