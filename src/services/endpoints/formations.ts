import { axiosInstance } from "../axios-instance";

const getFormations = () => {
  return axiosInstance.get("menus/1/?fields=id,libelle,titre,description");
};

const getSubCategories = ({
  id,
  fields,
}: {
  id: string | string[];
  fields?: string;
}) => {
  return axiosInstance.get(`sousCategories/${id}`, {
    params: {
      ...(fields ? { fields } : {}),
    },
  });
};

const getDetail = ({
  id,
  fields,
}: {
  id: string | string[];
  fields?: string;
}) => {
  console.log({ id });

  return axiosInstance.get(`formations/${id}`, {
    params: {
      ...(fields ? { fields } : {}),
    },
  });
};

const getAllSubcategories = () => {
  return axiosInstance.get("sousCategories?fields=libelle");
};

const getCategoriesCertifications = () => {
  return axiosInstance.get("categories?fields");
};

const getCategories = () => {
  return axiosInstance.get(
    "categories?fields=libelle,souscategories,souscategories.sousCategories_id.libelle"
  );
};

export {
  getFormations,
  getSubCategories,
  getDetail,
  getCategoriesCertifications,
  getAllSubcategories,
  getCategories,
};
