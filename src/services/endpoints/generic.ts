import { axiosInstance } from "..";
interface Params  {
  path: string;
  fields?: string
}
const read = (params: Params)=> {
  return axiosInstance.get(params.path, {
    params: { ...(params.fields ? { fields: params.fields } : {}) },
  });

}

export {read};