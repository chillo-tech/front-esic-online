import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => { 
  return {
      ...config,
      baseURL: `${process.env.API_URL}/items`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ACCES_TOKEN}`
      }
    };
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
}

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}