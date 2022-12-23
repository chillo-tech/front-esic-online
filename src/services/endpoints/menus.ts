import { axiosInstance } from "../axios-instance";
import { queryFields } from "utils/helpers";

const getMenus = () => {
  const query = {
    menu: {
      id: "",
      libelle: "",
      display: "",
      pages: {
        id: "",
        libelle: "",
        souslibelle: "",
        souscategories: {
          sousCategories_id: {
            id: "",
            libelle: "",
          },
        }
      },
      menu_category: {
        categories_id: {
          id: "",
          libelle: "",
          souslibelle: "",
          souscategories: {
            sousCategories_id: {
              id: "",
              libelle: "",
            },
          },
        },
      },
      certifications: {
        certificationCategories_id: {
          id: "",
          libelle: "",
          sous_categories: {
            certificationSousCategories_id: {
              id: "",
              libelle: "",
            },
          },
        },
      },
      sous_menus: {
        id: "",
        libelle: "",
      },
    },
  };
  return axiosInstance.get(`menus?fields=${queryFields(query)}`);
};

const getSubMenus = () => {
  return axiosInstance.get("menus?fields=id,label");
};

export { getMenus, getSubMenus };
