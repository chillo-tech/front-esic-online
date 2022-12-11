
import { Params } from 'types';
import {axiosInstance} from '../axios-instance'
const getItems = ({itemsPath, fields}: Params) => {
  return axiosInstance.get(
      itemsPath,
      {
         params: { 
          ...(fields? { fields } : {})
        } 
      }
    );
}

export {getItems}