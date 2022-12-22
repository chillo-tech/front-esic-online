import { axiosInstance } from "..";
interface Params  {
  path: string;
  fields?: string;
  limit?: number;
  filter?: any
}
const read = (params: Params)=> {
  return axiosInstance.get(params.path, {
    params: {
       ...(params.fields ? { fields: params.fields } : {}),
       ...(params.limit ? { limit : params.limit} : {}),
       ...(params.filter ? { filter : params.filter} : {}),
    },
  });

}

export {read};