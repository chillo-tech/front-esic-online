const base = "libelle,email,telephone,libelle,description";
const liens ="liens.*, liens.image.*";
const certifications ="certifications.*,certifications.directus_files_id.*";
const pages ="pages.*";
const formations ="formations.*";
const adresses ="adresses.*";
const apropos ="apropos.*";
const ENTREPRISE_PARAMS = `${base},${certifications},${liens},${formations},${pages},${apropos},${adresses}`
export {ENTREPRISE_PARAMS};