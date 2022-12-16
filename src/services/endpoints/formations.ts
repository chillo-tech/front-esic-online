import { axiosInstance } from "../axios-instance";

const getFormations = () => {
  const base = "id,libelle,titre,description";
  const categories =
    "menu_category.categories_id.id,menu_category.categories_id.libelle";
  const subcategories =
    "menu_category.categories_id.souscategories.sousCategories_id.id,menu_category.categories_id.souscategories.sousCategories_id.libelle,menu_category.categories_id.souscategories.sousCategories_id.ordre";
  const fields = `${base},${categories},${subcategories}`;
  return axiosInstance.get(
    `menus?filter[libelle][_eq]=Formations&fields=${fields}`
  );
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

const getCategories = ({ fields }: { fields: string }) => {
  return axiosInstance.get(`categories`, {
    params: { ...(fields ? { fields } : {}) },
  });
};

const getCategory = ({ id }: { id: string }) => {
  const base = "id,libelle,titre,description";
  const subcategories =
    "souscategories.sousCategories_id.id,souscategories.sousCategories_id.libelle";
  //const categories =  'menu_category.categories_id.id,menu_category.categories_id.libelle';
  //const subcategories =  'menu_category.categories_id.souscategories.sousCategories_id.id,menu_category.categories_id.souscategories.sousCategories_id.libelle,menu_category.categories_id.souscategories.sousCategories_id.ordre';
  const fields = `${base},${subcategories}`; //,${categories},${subcategories}`;
  return axiosInstance.get(`categories/${id}`, {
    params: { ...(fields ? { fields } : {}) },
  });
};

const getDetail = ({
  id
}: {
  id: string | string[];
  fields?: string;
}) => {
  const base = '*';
  const images = 'image.*';
  const sessions = 'sessions.sessions_id.fin,sessions.sessions_id.debut';
  const fields = `${base},${images},${sessions}`;
  return axiosInstance.get(`formations/${id}`, {
    params: { ...(fields ? { fields } : {}) },
  });
};

const getAllSubcategories = () => {
  return axiosInstance.get("sousCategories?fields=libelle,id");
};

const getCategoriesCertifications = () => {
  return axiosInstance.get("categories?fields");
};

export {
  getFormations,
  getCategory,
  getCategories,
  getSubCategories,
  getDetail,
  getCategoriesCertifications,
  getAllSubcategories,
};
