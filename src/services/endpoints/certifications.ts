import { axiosInstance } from "../axios-instance";

const getCertifications = () => {
  return axiosInstance.get("certifications");
};

const getCertificationCategory = (id: number) => {
  return null;
};

export { getCertifications, getCertificationCategory };
