export default interface Formation {
  id: number;
  name: string; // Nom de la formation
  slug: string; // nom-de-la-formation
  description: string; // Description de la formation
  formation_file: string; // Fichier pdf presentant la formation
  short_description: string; // Courte description de la formation
  image: string; // Lien vers l'image representant la formation
  hours: number; // Nombres d'heure
  level: string; // Niveau : Beginner Intermediary Advanced Expert.
  price_ht: number; // Price Hors Taxe
  cpf_eligible: boolean; // Eligibilite CPF
  certification: string; // Titre de la formations
  certification_modalities: { title: string; items: string[] }[]; // Modalite pour obtenir la formation
  location_type: string; // Online, Your Office, Our office
  location: string; // Lieu de la formation en presentiel
  student_profil: string[]; // Profil des etudiants pour la formation
  requirements: string[]; // Les pre-requis
  teachers_description: string; // Description des enseignants.
  evaluation: string[]; // Les evaluation et suivi lors de la formation
  resources: string[]; // liste des resources
  quality: string; // qualites de la formation et la satisfaction
  accessibility: string; // Accessibilite
  objectifs: string[]; // List des objectifs de la formation
  content: { title: string; items: string[] }[]; // (json) Contenu
}
