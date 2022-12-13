import { axiosInstance } from "../axios-instance";

const getCertifications = () => {
  return axiosInstance.get("certifications");
};

export { getCertifications };
