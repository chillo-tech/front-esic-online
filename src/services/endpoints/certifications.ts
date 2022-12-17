import { queryFields } from "utils/helpers";
import { axiosInstance } from "../axios-instance";

const getCertifications = () => {
  return axiosInstance.get("certifications");
};

const getCertificationCategory = ({ id }: { id: string }) => {
  const query = {
    id: "",
    libelle: "",
    description: "",
  };
  return axiosInstance.get(
    `certificationCategories/${id}?fields=${queryFields(query)}`
  );
};

const getCertificationSubCategory = ({ id }: { id: string }) => {
  const query = {
    id: "",
    libelle: "",
    description: "",
  };
  return axiosInstance.get(
    `certificationSousCategories/${id}?fields=${queryFields(query)}`
  );
};

const getCertificationCategories = (id: number) => {
  return axiosInstance.get("certificationCategories");
};

export {
  getCertificationCategory,
  getCertificationSubCategory,
  getCertifications,
  getCertificationCategories,
};
