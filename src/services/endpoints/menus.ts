
import {axiosInstance} from '../axios-instance'
const getMenus = () => {
  return axiosInstance.get('menus?fields=id,libelle,ordre');
}

export {getMenus}