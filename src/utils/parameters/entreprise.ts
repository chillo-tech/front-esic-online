const base = "libelle,email,telephone,souslibelle,abstrait,description";
const liens ="liens.*, liens.image.*";
const certifications =`
  certifications.certifications_id.reference,
  certifications.certifications_id.nom,
  certifications.certifications_id.image.id,
  certifications.certifications_id.image.nom,
  certifications.certifications_id.image.filename_disk,
  certifications.certifications_id.image.title
  `;
const pages ="pages.*";
const formations ="formations.*";
const adresses ="adresses.*";
const localisations ="Localisations.*";
const couverture ="couverture.*";
const offres ="offres.*";
const avis ="avis.*,avis.formation.libelle";
const apropos ="apropos.*";
const fichiers =`
  fichiers.directus_files_id.filename_disk,
  fichiers.directus_files_id.id,
  fichiers.directus_files_id.title
`;
const ENTREPRISE_PARAMS = `${base},${offres},${certifications},${liens},${formations},${pages},${apropos},${adresses},${localisations},${avis},${couverture},${fichiers}`
export {ENTREPRISE_PARAMS};