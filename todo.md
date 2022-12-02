{
name: "Nom de la formation", => string
slug: "Slug cree appartir du nom de la formation", => string
description: "Description de la formation", => text
file: "Lien vers le fichier pdf de la formation", => string
short_description: "Courte de description de la formation", => string
hours: "Nombre d'heures de la formation" => number,
objectifs: "Objectif de la formation", => string[] (json)
cpf_eligible: "Eligibilite CPF" => Boolean,
certification: "Nom de la certification" => string,
certification_modalities: "Modalite de certification" => {title: string, items:string[] }[] (json)
created_at: "Date de creation" => date,
updated_at: "Date de modification" => date,
content: "Contenu de la formation" => {title: string, items:string[] }[] (json)
teachers_description: "Equipe pedogogique" => string
evaluation: "Suivi de l'execution et evaluation des resultats" => string[] (json)
resources: "Resources techniques et pedagogiques" => string[] (json)
quality: "Qualite et satisfaction" => string
accessibility: "Accessibilite" => string
location: "Lieu de la formation" => string
student_profil: "Profil du beneficiaire" => string[]
requirements: "Pre-requis pour la formation" => string[]
location_type: "Type de formation" => string (ENUM[mixte, presentielle, enligne])
}
