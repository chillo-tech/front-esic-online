import { axiosInstance } from "../axios-instance";

const getFormations = ({limit}: {limit: number}) => {
  const base = "id,libelle,titre,description";
  const categories =
    "menu_category.categories_id.id,menu_category.categories_id.libelle";
  const subcategories =
    "menu_category.categories_id.souscategories.sousCategories_id.id,menu_category.categories_id.souscategories.sousCategories_id.libelle,menu_category.categories_id.souscategories.sousCategories_id.ordre";
  const fields = `${base},${categories},${subcategories}`;
  return axiosInstance.get(
    `menus?filter[libelle][_eq]=Formations`, {
      params: { 
        ...(fields ? { fields } : {}),
        ...(limit ? { limit } : {}),
      },
    }
  );
};

const getTopTrainings = ({limit = 3}: {limit?: number}) => {
  const base = "id,libelle,souslibelle,topformation,prix,cpf,niveau,jours,image";
  const fields = `${base}`;
  return axiosInstance.get(
    `formations?sort[]=-date_updated&filter[topformation][_eq]=true`, {
      params: { 
        ...(fields ? { fields } : {}),
        ...(limit ? { limit } : {}),
      },
    }
  );
};

const getSubCategories = ({id}: {id: string | string[]; fields?: string}) => {
  const base = "id,libelle,description,image";
  const formations = `
        formations.formations_id.souslibelle,
        formations.formations_id.libelle,
        formations.formations_id.description,
        formations.formations_id.image,
        formations.formations_id.prix,
        formations.formations_id.niveau,
        formations.formations_id.presentiel,
        formations.formations_id.distanciel,
        formations.formations_id.cpf.*,
        formations.formations_id.id`;
  const fields = `${base},${formations}`;
  return axiosInstance.get(`souscategories/${id}?fields=${fields}`);
};

const getCategories = ({ fields }: { fields: string }) => {
  return axiosInstance.get(`categories`, {
    params: { ...(fields ? { fields } : {}) },
  });
};

const getCategory = ({ id }: { id: string }) => {
  const base = "id,libelle,titre,description";
  const subcategories =
    "souscategories.souscategories_id.id,souscategories.souscategories_id.libelle";
  //const categories =  'menu_category.categories_id.id,menu_category.categories_id.libelle';
  //const subcategories =  'menu_category.categories_id.souscategories.sousCategories_id.id,menu_category.categories_id.souscategories.sousCategories_id.libelle,menu_category.categories_id.souscategories.sousCategories_id.ordre';
  const fields = `${base},${subcategories}`; //,${categories},${subcategories}`;
  return axiosInstance.get(`categories/${id}`, {
    params: { 
      ...(fields ? { fields } : {}),
      limit: 10
    },
  });
};

const getDetail = ({
  id
}: {
  id: string | string[];
  fields?: string;
}) => {
  const base = '*';
  const cpf = 'cpf.*';
  const metadonnees = 'metadonnees.*';
  const programmepdf = 'programmepdf.*';
  const souscategories = 'souscategories.souscategories_id.*';
  const images = 'image.*';
  const sessions = 'sessions.sessions_id.fin,sessions.sessions_id.debut,sessions.sessions_id.id,sessions.sessions_id.libelle';
  const fields = `${base},${programmepdf},${images},${sessions},${sessions},${cpf},${metadonnees},${souscategories}`;
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


const getPage = ({
  id
}: {
  id: string | string[];
  fields?: string;
}) => {
  const base = '*';
  const metadonnees = 'metadonnees.*';
  const programmepdf = 'programmepdf.*';
  const images = 'image.*';
  const sessions = 'sessions.sessions_id.fin,sessions.sessions_id.debut,sessions.sessions_id.id,sessions.sessions_id.libelle';
  const fields = `${base},${programmepdf},${images},${metadonnees}`;
  return axiosInstance.get(`formations/${id}`, {
    params: { ...(fields ? { fields } : {}) },
  });
};

export {
  getTopTrainings,
  getFormations,
  getCategory,
  getPage,
  getCategories,
  getSubCategories,
  getDetail,
  getCategoriesCertifications,
  getAllSubcategories,
};
