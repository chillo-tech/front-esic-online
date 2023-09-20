import classNames from 'classnames';
import React from 'react';
import { capitalize } from 'utils/capitalize';
import { slugify } from 'utils/slugify';
const participants = [
  {
    '2022': '75',
    '2023': '2',
    programme: 'Créer un site internet avec WordPress',
    total: '77',
  },
  {
    '2022': '63',
    '2023': '12',
    programme: 'Anglais Certification CLOE',
    total: '75',
  },
  {
    '2022': '53',
    '2023': '20',
    programme: 'Développeur d’application et Maitrise d’Ouvrage ',
    total: '73',
  },
  {
    '2022': '58',
    '2023': '',
    programme: 'Excel - Word - Powerpoint',
    total: '58',
  },
  {
    '2022': '41',
    '2023': '3',
    programme: 'Espagnol (Certification CLOE)',
    total: '44',
  },
  {
    '2022': '27',
    '2023': '13',
    programme: "Analyste d'Exploitation",
    total: '40',
  },
  {
    '2022': '31',
    '2023': '4',
    programme: 'Word',
    total: '35',
  },
  {
    '2022': '35',
    '2023': '',
    programme: 'Anglais TOEIC',
    total: '35',
  },
  {
    '2022': '27',
    '2023': '3',
    programme: 'AMOA / Test',
    total: '30',
  },
  {
    '2022': '26',
    '2023': '2',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC02 Elaborer des stratégies de développements d'activités commerciales à partir de modèles économiques",
    total: '28',
  },
  {
    '2022': '27',
    '2023': '',
    programme: "Management d'équipe ",
    total: '27',
  },
  {
    '2022': '27',
    '2023': '',
    programme: 'Français (Certification CLOE)',
    total: '27',
  },
  {
    '2022': '21',
    '2023': '',
    programme: "Accompagnement à la création d'une entreprise",
    total: '21',
  },
  {
    '2022': '4',
    '2023': '15',
    programme: 'HACCP',
    total: '19',
  },
  {
    '2022': '19',
    '2023': '',
    programme: "L'apprentissage de la langue des signes française",
    total: '19',
  },
  {
    '2022': '16',
    '2023': '',
    programme: 'LILATE - Live Language Test Anglais ',
    total: '16',
  },
  {
    '2022': '14',
    '2023': '1',
    programme: 'Bilan de compétences',
    total: '15',
  },
  {
    '2022': '7',
    '2023': '6',
    programme: 'Hygiène Alimentaire',
    total: '13',
  },
  {
    '2022': '13',
    '2023': '',
    programme: 'Excel avancé (certification TOSA en option)',
    total: '13',
  },
  {
    '2022': '11',
    '2023': '2',
    programme: 'Italien (Certification CLOE)',
    total: '13',
  },
  {
    '2022': '8',
    '2023': '4',
    programme: 'Anglais  ',
    total: '12',
  },
  {
    '2022': '12',
    '2023': '',
    programme: 'Blender ',
    total: '12',
  },
  {
    '2022': '9',
    '2023': '2',
    programme: 'Excel en elearning (certification TOSA en option)',
    total: '11',
  },
  {
    '2022': '11',
    '2023': '',
    programme: 'LILATE - Live Language Test - Espagnol',
    total: '11',
  },
  {
    '2022': '5',
    '2023': '6',
    programme: 'ANIMER SA COMMUNAUTE SUR LES RESEAUX SOCIAUX',
    total: '11',
  },
  {
    '2022': '11',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC04 Diriger des activités commerciales de groupes et d'entreprises nationales et internationales - Droit des Sociétés",
    total: '11',
  },
  {
    '2022': '4',
    '2023': '7',
    programme: 'Français ',
    total: '11',
  },
  {
    '2022': '10',
    '2023': '',
    programme: 'Excel - Word & Powerpoint',
    total: '10',
  },
  {
    '2022': '10',
    '2023': '',
    programme: "L'ESSENTIEL DE LA COMPTABILITÉ GÉNÉRALE - NIVEAU 1",
    total: '10',
  },
  {
    '2022': '10',
    '2023': '',
    programme: "Gestion d'analyste d'exploitation",
    total: '10',
  },
  {
    '2022': '9',
    '2023': '1',
    programme:
      'RNCP 28048 Accompagnant éducatif petite enfance - BC01 UP1 Accompagner le développement du jeune enfant',
    total: '10',
  },
  {
    '2022': '10',
    '2023': '',
    programme:
      "Gestion de l'entreprise - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    total: '10',
  },
  {
    '2022': '10',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'affaires - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales - Management d'équipe",
    total: '10',
  },
  {
    '2022': '8',
    '2023': '1',
    programme: 'Photoshop TOSA ',
    total: '9',
  },
  {
    '2022': '9',
    '2023': '',
    programme: 'Fondamentaux de la vente - BC01- Mettre en oeuvre et piloter la politique',
    total: '9',
  },
  {
    '2022': '2',
    '2023': '7',
    programme: 'Management',
    total: '9',
  },
  {
    '2022': '4',
    '2023': '5',
    programme: 'Accueil téléphonique',
    total: '9',
  },
  {
    '2022': '7',
    '2023': '2',
    programme:
      "RNCP 31677 TP - Gestionnaire comptable et fiscal - BC01 Arrêter, contrôler et présenter les comptes annuels - L'essentiel de la comptabilité Niveau 1",
    total: '9',
  },
  {
    '2022': '4',
    '2023': '5',
    programme: 'Anglais intermédiaire',
    total: '9',
  },
  {
    '2022': '9',
    '2023': '',
    programme: 'SKETCHUP ( Certification ICDL-PCIE)',
    total: '9',
  },
  {
    '2022': '8',
    '2023': '',
    programme: 'Prendre la parole en public - Distanciel-14heures',
    total: '8',
  },
  {
    '2022': '8',
    '2023': '',
    programme: 'Confiance en soi et charisme',
    total: '8',
  },
  {
    '2022': '',
    '2023': '8',
    programme: 'AMOA / Test (Programme spécifique) v2',
    total: '8',
  },
  {
    '2022': '2',
    '2023': '6',
    programme: 'Digitaliser son entreprise',
    total: '8',
  },
  {
    '2022': '8',
    '2023': '',
    programme: 'Excel débutant (certification ICDL - PCIE en option)',
    total: '8',
  },
  {
    '2022': '5',
    '2023': '2',
    programme: 'Powerpoint',
    total: '7',
  },
  {
    '2022': '3',
    '2023': '4',
    programme: 'Accueil clientèle ',
    total: '7',
  },
  {
    '2022': '7',
    '2023': '',
    programme: 'Excel débutant (certification TOSA en option)',
    total: '7',
  },
  {
    '2022': '6',
    '2023': '1',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC05 Développer des réseaux commerciaux sur des marchés nationaux et internationaux",
    total: '7',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Comptabilité de la paie',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Comptabilité générale Niveau 1',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Gérer son stress',
    total: '6',
  },
  {
    '2022': '5',
    '2023': '1',
    programme: 'Comptabilité clients ',
    total: '6',
  },
  {
    '2022': '1',
    '2023': '5',
    programme: 'Anglais débutant ',
    total: '6',
  },
  {
    '2022': '5',
    '2023': '1',
    programme:
      'RNCP 31677 Gestionnaire comptable et fiscal - BC02 Etablir et contrôler les déclarations fiscales',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Photoshop débutant - Cours du soir  - 21 heures distanciel',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Dollar Universe',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Excel en elearning (certification ICDL - PCIE en option)',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'Microsoft Office Outlook - Cours du soir',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'AUTOCAD 3D ',
    total: '6',
  },
  {
    '2022': '6',
    '2023': '',
    programme: 'FORMATION SKETCHUP',
    total: '6',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'Microsoft 365 - Administration Exchange',
    total: '5',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'Accompagner la personne dans les actes essentiels du quotidien - BC02',
    total: '5',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'Excel - Word',
    total: '5',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'ITIL',
    total: '5',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'Anglais Pour le tourisme CertIfication CLOE ',
    total: '5',
  },
  {
    '2022': '4',
    '2023': '1',
    programme: 'Fondamentaux technique de vente ',
    total: '5',
  },
  {
    '2022': '5',
    '2023': '',
    programme: 'Mainframe',
    total: '5',
  },
  {
    '2022': '4',
    '2023': '',
    programme:
      "RNCP 34237 Expert en systèmes d'information et sécurité - BC02 Supervision et sécurisation des systèmes d'information",
    total: '4',
  },
  {
    '2022': '',
    '2023': '4',
    programme: 'Document Unique d’Evaluation des Risques Professionnels (DUERP) ',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'Essentiel de la communication - ok',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'DesignCad',
    total: '4',
  },
  {
    '2022': '',
    '2023': '4',
    programme: 'Formation coloriste expert ',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'Élaborer et mettre en oeuvre une démarche de Cybersécurité - ok',
    total: '4',
  },
  {
    '2022': '',
    '2023': '4',
    programme: 'Protection des données personnelles - RGPD',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'Anglais Médical certification CLOE',
    total: '4',
  },
  {
    '2022': '',
    '2023': '4',
    programme: 'Création de site - Référencement de site - Réseaux sociaux',
    total: '4',
  },
  {
    '2022': '1',
    '2023': '3',
    programme: 'Allemand avec Certification CLOE',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'Le Web et le E-Commerce, les outils pour améliorer son chiffre d’affaires',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'LILATE ITALIEN',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'LILATE - Live Language Test Anglais - 19 heures',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'LILATE - Live Language Test Anglais',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'Accompagner la personne en situation de handicap vivant à domicile CCS - BC04',
    total: '4',
  },
  {
    '2022': '',
    '2023': '4',
    programme: 'Mieux Communiquer avec Process Communication ',
    total: '4',
  },
  {
    '2022': '4',
    '2023': '',
    programme: 'My sql',
    total: '4',
  },
  {
    '2022': '2',
    '2023': '2',
    programme: 'Comptabilité fournisseurs',
    total: '4',
  },
  {
    '2022': '3',
    '2023': '1',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC04 Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    total: '4',
  },
  {
    '2022': '',
    '2023': '3',
    programme: "Management d'équipes ",
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Microsoft Excel/Word / Niveau 2 ',
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'PowerPoint TOSA',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Pratique du WebMarketing BtoB',
    total: '3',
  },
  {
    '2022': '',
    '2023': '3',
    programme: "Gestion de l'entreprise ",
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Lilate Français',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme:
      "RNCP 34237 Expert en systèmes d'information et sécurité - BC01 Pilotage du développement des plateformes logicielles",
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: "Faire face à l'agressivité et adapter son comportement",
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Les fondamentaux du Community Management à distance-14h',
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme:
      'RNCP 31677 TP - Gestionnaire comptable et fiscal - BC02 Etablir et contrôler les déclarations fiscales - Paie et cotisations sociales perfectionnement',
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'Formation RH ',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: "L'Essentiel de la communication",
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Prospection et vente à distance ',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Protection des données personnelles ',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: "Fleuriste - BC01 Préparation et confection d'une production florale",
    total: '3',
  },
  {
    '2022': '1',
    '2023': '2',
    programme: "Expert en Systèmes d'Informations et Sécurité",
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'VBA TOSA',
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'Accompagnement VAE',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'Wordpress (Certification ICDL-PCIE) ',
    total: '3',
  },
  {
    '2022': '1',
    '2023': '2',
    programme: 'Création de site - Référencement de site - Réseaux sociaux ',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: "Découverte de l'informatique - 10h Distance",
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'Contrôle de gestion',
    total: '3',
  },
  {
    '2022': '2',
    '2023': '1',
    programme: 'Essentiel de la communication ',
    total: '3',
  },
  {
    '2022': '',
    '2023': '3',
    programme: 'SECURITE ALIMENTAIRE HACCP ',
    total: '3',
  },
  {
    '2022': '',
    '2023': '3',
    programme: 'VENTE ACCUEIL ',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'AUTOCAD',
    total: '3',
  },
  {
    '2022': '',
    '2023': '3',
    programme: 'SECURITE ALIMENTAIRE -HACCP',
    total: '3',
  },
  {
    '2022': '3',
    '2023': '',
    programme: 'ANGULAR ',
    total: '3',
  },
  {
    '2022': '1',
    '2023': '2',
    programme: 'Élaborer et mettre en oeuvre une démarche de Cybersécurité',
    total: '3',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: 'LILATE PORTUGAIS',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Vente ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Python',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Anglais perfectionnement ',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: 'Anglais perfectionnement - ',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: 'Archicad',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'LILATE - Live Language Test - Allemand',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Italien (Certification CLOE) ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'LILATE - Chinois  - Rosettastone',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: "L'apprentissage de la langue des signes française/",
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Anglais du tourisme ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: "L'Essentiel de la fiscalité d'entreprise : IS, TVA, CET",
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Technique de vente',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: "L'ESSENTIEL DE LA COMPTABILITÉ GÉNÉRALE - NIVEAU 2",
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'La négociation commerciale - BC01 - Mettre en oeuvre et piloter la politique',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: 'Anglais - Formation Longue ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Les fondamentaux du Community Management-14h',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Anglais des Affaires certification CLOE',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Optimiser votre communication',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'PROGRAMME SPÉCIFIQUE (Java POO et base Spring Boot)',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Paie et cotisations sociales, établir ses bulletins de salaire',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Manager une équipe',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Management de projet - BC02 ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Management de projet - 8h',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Management de projet - 14h',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Management de projet ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Wordpress-Google ADS-Google Analytics',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Administrer et superviser vos systèmes et réseaux',
    total: '2',
  },
  {
    programme: '"Management d\'équipe commerciale  ',
  },
  {
    '2022': '2',
    '2023': '',
    programme: '- 14 heures à distance "',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme:
      "Management d'équipe - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Anglais ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Talend Open Studio',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Vente Management - Salon Khezzani - 42h',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Python TOSA',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'PHOTOSHOP (Certification ICDL-PCIE)',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme:
      "Python-BC01 Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité ",
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Fondamentaux techniques de vente ',
    total: '2',
  },
  {
    programme: '"Stratégie  de communication et déclinaison sur le web ',
  },
  {
    '2022': '2',
    '2023': '',
    programme: '"',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'GESTION DU STRESS',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: "GESTION D'ENTREPRISE ",
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Créer un site internet ',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Français  ',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: "Découverte de l'informatique",
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Fondamentaux du marketing, exploiter une base de données clients',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Google Analytics, analyser les statistiques de vos sites',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '1',
    programme: 'Essentiel de la communication',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Facebook ADS-Google ADS -Performance Publicitaire',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Excel ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Excel et Comptabilité ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'SCRUM PRODUCT OWNER PSPO AVEC PASSAGE DE LA CERTIFICATION ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Recrutement à distance ',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Création de site - Référencement de site - Réseaux sociaux (test)',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Français Perfectionnement ',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Comptabilité générale ',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Hygiène et bonnes pratiques professionnelles',
    total: '2',
  },
  {
    '2022': '',
    '2023': '2',
    programme: 'Comptabilité Niveau 2',
    total: '2',
  },
  {
    '2022': '2',
    '2023': '',
    programme: 'Hacking et securite niveau 2 - ancien',
    total: '2',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Transformation digitale ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Wordpress TOSA',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Photoshop avancé - Cours du soir',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Scrum Master - Gérer des projets avec la méthode Agile',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Utilisation d'un logiciel de CAO 3D ((Certification ICDL-PCIE)",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Photoshop TOSA',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Paie et cotisations sociales,perfectionnement.',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Savoir répondre à un appel d'offres",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Travailler en équipe auprès d'une personne en situation de handicap",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'SPLUNK',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Titre RNCP INGENIEUR D 'AFFAIRES",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Paie et cotisations sociales, établir ses bulletins de salaire - ok',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Photoshop initiation',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'SKETCHUP (Certification ICDL-PCIE)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Outlook TOSA',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'RNCP 35340 BTS - Services informatiques aux organisations SLAM - BC01 Support et mise à disposition de services informatiques - Gérer le patrimoine informatique - ANNETTE Ludovic',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'PLSQL',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Yield Management - 14 heures - Distance',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'PKI : mise en œuvre',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'TP - Technicien supérieur systèmes et réseaux',
    total: '1',
  },
  {
    programme: '"PHP-MySQL, développer un',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'site Web dynamique"',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Préparation et confection d'une production florale",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Photoshop débutant - Cours du soir-15 heures presentiel',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Prise de parole public ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'TOSA - Illustrator',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'TOSA - Préparation à la certification Indesign, Photoshop et/ou Illustrator',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'TLS/SSL installation, configuration et mise en oeuvre',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'VMWARE Cloud Avancée',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Valoriser l'image de la personne en situation de handicap ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Private Cloud Big data',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Prendre la parole en public-Distanciel - 21heures',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Sécurité systèmes et réseaux, niveau 1',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      "Prospection commerciale - BC04- Détecter,développer et superviser les projets d'affaires à entreprendre",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      "RNCP 31113 Administrateur d'infrastructures sécurisées - BC02 Intégrer, administrer et sécuriser une infrastructure distribuée",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Pratiquer l'écoute active ",
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Pratique du WebMarketing BtoB - 21 heures - à distance',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Vente -commercial ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Secrétaire assistant médico-social',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Pratique du WebMarketing BtoB - 10 heures a distance',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "TP - Administrateur d'infrastructures sécurisées",
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme:
      'RNCP 31677 Gestionnaire comptable et fiscal - BC01 Arrêter, contrôler et présenter les comptes annuels - Comptabilité Clients',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC01 Modéliser des marchés pour évaluer et détecter des potentiels et des opportunités d'affaires",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Word ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Word E-Learning',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Sensibilisation à la Cybersécurité',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      "S'initier aux logiciels de bureautique dans son activité professionnelle //VALLY JASMINE",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Pilotage du développement des plateformes logicielle : Langage C++ perfectionnement',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Securité Du Cloud',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "S'initier aux logiciels de bureautique dans son activité professionnelle ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: '5G ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Organiser son temps // VERROT Joanna',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Dépannage réseaux ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Confiance en soi - BC04 - Diriger des activités commerciales de groupes et d¿entreprises nationales et internationales',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Confiance en soi - BC04 - Diriger des activités commerciales de groupes et d¿entreprises nationales et internationales -- DELOCHE GILBERT -- 16h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Création d'entreprise ou reprise d'entreprise",
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Création de site - Réseaux sociaux ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Création site et référencement ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Créer un site internet avec WordPress *',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Créer un site internet avec WordPress - ok',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'DevOps Foundation',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Découverte de l'informatique - 8h Distance",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Développer des applications avec Sprint Boot / Sprint Cloud',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Organiser la clôture des comptes annuels',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Essentiel de la communication - BC02 - Déployer une stratégie de gestion et de fidélisation de la relation client',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Essentiel de la comptabilité Générale - Niveau 1 & 2',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel (certification ICDL - PCIE )',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel VBA (certification TOSA)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel avancé (certification ICDL - PCIE en option)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel débutant',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Excel débutant -intermédiaire -perfectionnement ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Excel tableau croisé dynamique',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Concepteur Développeur d'applications​",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Community Management ',
    total: '1',
  },
  {
    '2022': 'FREDERIQUE"',
    '2023': '1',
    programme: '"CPF-BTS diététique-de HARGUES',
    total: '',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'COACH PROFESSIONNEL ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'ANGULAR-BC03',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'ARCHICAD BIM ARCHITECTURE ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Accueil  vente ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Allemand Certification CLOE (a modifier)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais 20h E-learning ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Anglais Certification CLOE 20h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Anglais Certification en anglais LanguageCert Test of English LTE (écouter, lire) - niveaux A1-C2',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais Juridique Certification CLOE',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais Médical (Certification CLOE)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais du tourisme certification CLOE ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Anglais juridique Certification CLOE ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais perfectionnement - Cours du soir - à distance-10h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Anglais pour le tourisme Certification CLOE ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Archicad BIM Architecture ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Autocad Perfectionnement ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Autocad TOSA',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Big Data et Objets Connectés',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Blockchain Fondamentaux',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Bonnes pratiques en programmation Java',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Exercer son activité en accueil collectif BC02 UP2',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'FORMATION SKETCHUP -BIM',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Formation  Azure',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'LILATE Japonais ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'La négociation commerciale',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Les fondamentaux du Community Management à distance',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'MAITRISE RELATION INTERPERSONNELLE',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'MERCHANDISING+ ETALAGISTE ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme:
      'Maintenir et exploiter une infrastructure distribuée et contribuer à sa sécurisation',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Management Transversal',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Management d'équipe commerciale - 21 heures / Mixtes  ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Management d'équipe commerciale - 22 heures / Mixtes  ",
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: "Management d'équipe commerciale - 56 heures / Distanciels ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Management d'équipe commerciale - 7 heures - Distanciel ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "Management d'équipes - 20h - Distance",
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: "Management d'équipes - 35h ",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Management de projet',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Management opérationnel commerce',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Mathématiques-Sciences physiques et chimiques - UG2 ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Microsoft Office Access',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Microsoft Office Access//DAOUGHI Fadia',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Microstrategy -  - 21h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'My Sql Niveau niveau intermédiaire',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'LILATE Russe',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'LILATE Arabe',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Formation 5G ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'LILATE - Live Language ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Français (Certification CLOE) ',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'Français intermédiaire et perfectionnement ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'GESTION PAIE',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Gestion de stress',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Google Ads',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Gérer son stress -- CAMKERTEN MUZEYYEN -- 14h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Gérer son stress -- DUMAREST YVES -- 14h',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Hacking et sécurité, niveau 2',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Hadoop - Développement -RS5248- BIG DATA - WENGER',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'ILLUSTRATOR (Certification ICDL-PCIE)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'INDESIGN (Certification ICDL-PCIE)',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Illustrator Niveau 2 ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Illustrator niveau 2 -  A distance',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'Indesign TOSA',
    total: '1',
  },
  {
    '2022': '',
    '2023': '1',
    programme: 'ADMINISTRATION SERVEUR WINDOWS  ',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'JAVA EE – Construire une application complète',
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "L'ESSENTIEL DE LA COMPTABILITÉ GÉNÉRALE - NIVEAU 1 & 2",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: "L'essentiel de la comptabilité analytique",
    total: '1',
  },
  {
    '2022': '1',
    '2023': '',
    programme: 'LILATE  Arabe',
    total: '1',
  },
  {
    C: '1',
    '2023': '',
    programme: 'JAVA - 3 jours - Solutec',
    total: '1',
  },
];
function Participants() {
  return (
    <article className="container">
      <h2 className="font-bold text-2xl mb-4">
        <span className="pt-10">Participants</span>
      </h2>
      
      <div
        className={classNames(
          'hidden bg-slate-200 py-2 md:py-0 md:grid md:grid-cols-5 justify-between items-center text-lg'
        )}
      >
        <span className="md:p-3 md:col-span-3">Programme</span>
        <div className="md:grid md:grid-cols-3 md:col-span-2 md:gap-4">
          <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
            <span>2022</span>
          </p>
          <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
            <span>2023</span>
          </p>
          <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
            <span>Global</span>
          </p>
        </div>
      </div>
      {participants.map((participant: any, index: number) => (
        <div
          className={classNames(
            'py-2 md:py-0 md:grid md:grid-cols-5 justify-between items-center text-lg',
            { 'bg-slate-200': index % 2 === 1 }
          )}
          key={slugify(participant.programme)}
        >
          <span className="md:p-3 md:col-span-3">{capitalize(participant.programme.trim())}</span>
          <div className="md:grid md:grid-cols-3 md:col-span-2 md:gap-4">
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2022</span>
              <span>{participant['2022']}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2023</span>
              <span>{participant['2023']}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">Total</span>
              <span>{participant['total']}</span>
            </p>
          </div>
        </div>
      ))}












      <div className="grid grid-cols-5 justify-between items-center text-md bg-slate-200">
        <span className="px-4 py-4 col-span-4">Programme</span>
        <span className="grid grid-cols-3 gap-4">
          <span className="p-3 text-center">2022</span>
          <span className="p-3 text-center">2023</span>
          <span className="p-3 text-center">Total</span>
        </span>
      </div>
      {participants.map((participant: any, index: number) => (
        <div
          className={classNames('grid grid-cols-5 justify-between items-center text-md', {
            'bg-slate-200': index % 2 === 1,
          })}
          key={slugify(participant.programme)}
        >
          <span className="p-3 col-span-4">{capitalize(participant.programme)}</span>
          <span className="grid grid-cols-3 gap-4">
            <span className="p-3 text-center">{participant['2022']}</span>
            <span className="p-3 text-center">{participant['2023']}</span>
            <span className="p-3 text-center">{participant['total']}</span>
          </span>
        </div>
      ))}
    </article>
  );
}

export default Participants;
