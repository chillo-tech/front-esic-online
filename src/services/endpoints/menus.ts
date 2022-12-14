import { axiosInstance } from "../axios-instance";
const getMenus = () => {
  return axiosInstance.get(
    "menus?fields=fields=id,libelle,menu_category.categories_id.id,menu_category.categories_id.libelle,menu_category.categories_id.souslibelle"
  );
};

const getSubMenus = () => {
  return axiosInstance.get("menus?fields=id,label");
};

export { getMenus, getSubMenus };
