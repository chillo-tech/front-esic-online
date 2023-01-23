const base = "libelle,email,telephone,souslibelle,abstrait,description";
const liens ="liens.*, liens.image.*";
const certifications ="certifications.*,certifications.directus_files_id.*";
const pages ="pages.*";
const formations ="formations.*";
const adresses ="adresses.*";
const localisations ="Localisations.*";
const couverture ="couverture.*";
const avis ="avis.*";
const apropos ="apropos.*";
const ENTREPRISE_PARAMS = `${base},${certifications},${liens},${formations},${pages},${apropos},${adresses},${localisations},${avis},${couverture}`
export {ENTREPRISE_PARAMS};