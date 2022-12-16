import { axiosInstance } from "../axios-instance";

const getCertifications = () => {
  return axiosInstance.get("certifications");
};

const getCertificationCategories = (id: number) => {
  return axiosInstance.get("certificationCategories");
};

export { getCertifications, getCertificationCategories };
