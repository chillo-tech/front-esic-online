
import {axiosInstance} from '../axios-instance'
const getFormations = () => {
  return axiosInstance.get('menus/1/?fields=id,libelle,titre,description');
}

const getSubCategories= ({id, fields}: {id: string|string[], fields?: string}) => {
  return axiosInstance.get(
    `sousCategories/${id}`,
    {
       params: { 
        ...(fields? { fields } : {})
      } 
    }
  );
}

export {getFormations, getSubCategories}