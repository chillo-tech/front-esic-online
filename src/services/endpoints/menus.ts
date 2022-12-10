
import {axiosInstance} from '../axios-instance'
const getMenus = () => {
  return axiosInstance.get('menus');
}

export {getMenus}