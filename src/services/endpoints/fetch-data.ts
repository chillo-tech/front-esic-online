import { axiosInstance } from "..";
interface Params  {
  path: string;
  fields?: string;
  search?: string;
  limit?: number;
  filter?: any
}
const fetchData = (params: Params)=> {
  
  return axiosInstance.get(params.path, {
    params: {
       ...(params.fields ? { fields: params.fields } : {}),
       ...(params.limit ? { limit : params.limit} : {}),
       ...(params.filter ? { filter : params.filter} : {}),
       ...(params.search ? { search : params.search} : {}),
    },
  });

}

export {fetchData};