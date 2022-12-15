import { axiosInstance } from "../axios-instance";
// const getMenus = () => {
//   return axiosInstance.get(
//     "menus?fields=id,libelle,menu_category.categories_id.id,menu_category.categories_id.libelle,menu_category.categories_id.souslibelle"
//   );
// };

const getMenus = () => {
  return axiosInstance.get(
    "menus?fields=id,libelle,display,sous_menus,sous_menus.id,sous_menus.libelle"
  );
};

const getSubMenus = () => {
  return axiosInstance.get("menus?fields=id,label");
};

export { getMenus, getSubMenus };
