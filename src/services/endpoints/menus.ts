import { axiosInstance } from "../axios-instance";
const getMenus = () => {
  return axiosInstance.get(
    "menus?fields=id,libelle,display,ordre,sous_menus.label,sous_menus.label,sous_menus.link"
  );
};

const getSubMenus = () => {
  return axiosInstance.get("menus?fields=id,label");
};

export { getMenus, getSubMenus };
