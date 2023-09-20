import classNames from 'classnames';
import React from 'react';
import { capitalize } from 'utils/capitalize';
import { slugify } from 'utils/slugify';
const satisfactions = [
  {
    '200': '',
    '2021': '',
    '2022': '9.451388889',
    '2023': '',
    programme: 'ANGULAR',
    global: '9.451388889',
  },
  {
    '200': '',
    '2021': '10',
    '2022': '8.972222222',
    '2023': '',
    programme: 'ANIMER SA COMMUNAUTE SUR LES RESEAUX SOCIAUX',
    global: '9.486111111',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.989583333',
    '2023': '',
    programme: 'AUTOCAD',
    global: '8.989583333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.316666667',
    '2023': '',
    programme: 'AUTOCAD 3D',
    global: '9.316666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.902777778',
    '2023': '',
    programme: 'Accompagnement VAE',
    global: '8.902777778',
  },
  {
    '200': '',
    '2021': '8.902777778',
    '2022': '8.389316239',
    '2023': '',
    programme: "Accompagnement à la création d'une entreprise",
    global: '8.646047009',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.722222222',
    '2023': '',
    programme: 'Accompagner la personne dans les actes essentiels du quotidien - BC02',
    global: '8.722222222',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.305555556',
    '2023': '',
    programme: 'Accompagner la personne en situation de handicap vivant à domicile CCS - BC04',
    global: '8.305555556',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.173611111',
    '2023': '',
    programme: 'Accueil clientèle',
    global: '9.173611111',
  },
  {
    '200': '',
    '2021': '7.027777778',
    '2022': '',
    '2023': '',
    programme: 'Adobe Première Pro',
    global: '7.027777778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '',
    '2023': '9.3',
    programme: 'Allemand avec ',
    global: '9.3',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.833333333',
    '2023': '9.861111111',
    programme: "Analyste d'Exploitation",
    global: '9.347222222',
  },
  {
    '200': '',
    '2021': '9.354166667',
    '2022': '8.418865741',
    '2023': '',
    programme: 'Anglais',
    global: '8.730632716',
  },
  {
    '200': '',
    '2021': '8.972222222',
    '2022': '8.337777778',
    '2023': '7.895833333',
    programme: 'Anglais ',
    global: '8.401944444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.848148148',
    '2023': '',
    programme: 'Anglais Médical ',
    global: '8.848148148',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Anglais du tourisme ',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.013888889',
    '2023': '',
    programme: 'Anglais débutant',
    global: '8.013888889',
  },
  {
    '200': '',
    '2021': '4.416666667',
    '2022': '9.527777778',
    '2023': '',
    programme: 'Anglais intermédiaire',
    global: '6.972222222',
  },
  {
    '200': '',
    '2021': '9.666666667',
    '2022': '',
    '2023': '',
    programme: 'Anglais intermédiaire - Cours du soir',
    global: '9.666666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '',
    '2023': '10',
    programme: 'Anglais juridique ',
    global: '10',
  },
  {
    '200': '',
    '2021': '8.763888889',
    '2022': '',
    '2023': '',
    programme: 'Anglais parcours en blended learning ',
    global: '8.763888889',
  },
  {
    '200': '',
    '2021': '9.305555556',
    '2022': '2.555555556',
    '2023': '',
    programme: 'Anglais perfectionnement - Cours du soir',
    global: '5.930555556',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.462962963',
    '2023': '',
    programme: 'Anglais pour le tourisme ',
    global: '8.462962963',
  },
  {
    '200': '',
    '2021': '',
    '2022': '5.263888889',
    '2023': '',
    programme: 'Big Data et Objets Connectés',
    global: '5.263888889',
  },
  {
    '200': '',
    '2021': '9.263888889',
    '2022': '8.7575',
    '2023': '',
    programme: 'Bilan de compétences',
    global: '9.010694444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.546006944',
    '2023': '',
    programme: 'Blender',
    global: '9.546006944',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Blockchain Fondamentaux',
    global: '10',
  },
  {
    '200': '',
    '2021': '9.513888889',
    '2022': '',
    '2023': '',
    programme: 'Business English',
    global: '9.513888889',
  },
  {
    '200': '',
    '2021': '5.911706349',
    '2022': '9.319444444',
    '2023': '',
    programme: 'Chinois',
    global: '7.615575397',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.666666667',
    '2023': '',
    programme: 'Comptabilité clients',
    global: '8.666666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.743055556',
    '2023': '',
    programme: 'Comptabilité de la paie',
    global: '8.743055556',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.111111111',
    '2023': '',
    programme: 'Comptabilité fournisseurs',
    global: '9.111111111',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.013888889',
    '2023': '',
    programme: 'Comptabilité générale niveau 1',
    global: '7.013888889',
  },
  {
    '200': '',
    '2021': '10',
    '2022': '9.238425926',
    '2023': '',
    programme: 'Confiance en soi et charisme',
    global: '9.619212963',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.583333333',
    '2023': '7.131944444',
    programme: 'Contrôle de gestion',
    global: '8.357638889',
  },
  {
    '200': '',
    '2021': '8.382787698',
    '2022': '8.717956349',
    '2023': '',
    programme: 'Créer un site internet avec WordPress',
    global: '8.550372024',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: "Découverte de l'informatique",
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.458333333',
    '2023': '',
    programme: 'Développeur d’application et Maitrise d’Ouvrage',
    global: '9.458333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.253141534',
    '2023': '9.444444444',
    programme: 'Espagnol',
    global: '8.650242504',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.363425926',
    '2023': '',
    programme: 'Essentiel de la communication',
    global: '8.363425926',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.791666667',
    '2023': '',
    programme: 'Essentiel de la comptabilité Générale - Niveau 1 & 2',
    global: '9.791666667',
  },
  {
    '200': '',
    '2021': '9.157175926',
    '2022': '8.502340535',
    '2023': '',
    programme: 'Excel - Word - Powerpoint',
    global: '8.82975823',
  },
  {
    '200': '',
    '2021': '8.283333333',
    '2022': '8.978571429',
    '2023': '',
    programme: 'Excel avancé ',
    global: '8.630952381',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.990740741',
    '2023': '',
    programme: 'Excel débutant ',
    global: '8.990740741',
  },
  {
    '200': '10',
    '2021': '',
    '2022': '8.8225',
    '2023': '',
    programme: 'Excel en elearning ',
    global: '9.215',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.75',
    '2023': '',
    programme: 'Excel et Comptabilité',
    global: '8.75',
  },
  {
    '200': '',
    '2021': '',
    '2022': '6.866666667',
    '2023': '',
    programme: 'Exercer son activité en accueil collectif BC02 UP2',
    global: '6.866666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.388888889',
    '2023': '',
    programme: "Expert en Systèmes d'Informations et Sécurité",
    global: '9.388888889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.277777778',
    '2023': '',
    programme: 'FORMATION SKETCHUP',
    global: '8.277777778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.826388889',
    '2023': '',
    programme: "Faire face à l'agressivité et adapter son comportement",
    global: '9.826388889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.375',
    '2023': '',
    programme: 'Fondamentaux de la vente - BC01- Mettre en oeuvre et piloter la politique',
    global: '9.375',
  },
  {
    '200': '',
    '2021': '8.291666667',
    '2022': '',
    '2023': '',
    programme: 'Français',
    global: '8.291666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.279751462',
    '2023': '',
    programme: 'Français ()',
    global: '8.279751462',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.277777778',
    '2023': '',
    programme: 'GESTION DU STRESS',
    global: '8.277777778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'GESTION PAIE',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.208333333',
    '2023': '',
    programme:
      "Gestion de l'entreprise - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    global: '8.208333333',
  },
  {
    '200': '',
    '2021': '9.5',
    '2022': '',
    '2023': '',
    programme: 'Gestion de stress',
    global: '9.5',
  },
  {
    '200': '',
    '2021': '8.666666667',
    '2022': '',
    '2023': '',
    programme: 'Gestion des Stocks',
    global: '8.666666667',
  },
  {
    '200': '',
    '2021': '10',
    '2022': '',
    '2023': '',
    programme: 'Google Ads',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.029722222',
    '2023': '',
    programme: 'Gérer son stress',
    global: '9.029722222',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.902777778',
    '2023': '',
    programme: 'Gérer son stress -- DUMAREST YVES -- 14h',
    global: '8.902777778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.175',
    '2023': '',
    programme: 'HACCP',
    global: '9.175',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.588541667',
    '2023': '',
    programme: 'Hygiène Alimentaire',
    global: '8.588541667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'ILLUSTRATOR',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.75',
    '2023': '',
    programme: 'INDESIGN ',
    global: '8.75',
  },
  {
    '200': '',
    '2021': '5.059027778',
    '2022': '7.9375',
    '2023': '',
    programme: 'ITALIEN',
    global: '6.498263889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8',
    '2023': '',
    programme: 'Illustrator Niveau 2',
    global: '8',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Indesign',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.50625',
    '2023': '',
    programme: 'Italien',
    global: '8.50625',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'JAVA',
    global: '10',
  },
  {
    '200': '',
    '2021': '9.041666667',
    '2022': '8.037037037',
    '2023': '',
    programme: "L'ESSENTIEL DE LA COMPTABILITÉ GÉNÉRALE - NIVEAU 1",
    global: '8.539351852',
  },
  {
    '200': '',
    '2021': '9.666666667',
    '2022': '9.375',
    '2023': '',
    programme: "L'ESSENTIEL DE LA COMPTABILITÉ GÉNÉRALE - NIVEAU 2",
    global: '9.520833333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.215277778',
    '2023': '',
    programme: "L'Essentiel de la fiscalité d'entreprise : IS, TVA, CET",
    global: '8.215277778',
  },
  {
    '200': '',
    '2021': '9.652777778',
    '2022': '9.205833333',
    '2023': '',
    programme: "L'apprentissage de la langue des signes française",
    global: '9.429305556',
  },
  {
    '200': '',
    '2021': '8.638888889',
    '2022': '',
    '2023': '',
    programme: "L'essentiel de la comptabilité analytique",
    global: '8.638888889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'La négociation commerciale - BC01 - Mettre en oeuvre et piloter la politique',
    global: '10',
  },
  {
    '200': '',
    '2021': '9.458333333',
    '2022': '8.379340278',
    '2023': '',
    programme: 'Les fondamentaux du Community Management',
    global: '8.73900463',
  },
  {
    '200': '',
    '2021': '10',
    '2022': '',
    '2023': '',
    programme: 'Mac OS',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.444444444',
    '2023': '',
    programme:
      'Maintenir et exploiter une infrastructure distribuée et contribuer à sa sécurisation',
    global: '7.444444444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Management Transversal',
    global: '10',
  },
  {
    '200': '',
    '2021': '9.861111111',
    '2022': '9.289351852',
    '2023': '',
    programme: "Management d'équipe",
    global: '9.575231481',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme:
      "Management d'équipe - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    global: '10',
  },
  {
    '200': '',
    '2021': '8.138888889',
    '2022': '9.086805556',
    '2023': '',
    programme: "Management d'équipe commerciale",
    global: '8.770833333',
  },
  {
    '200': '',
    '2021': '8.909722222',
    '2022': '7.208333333',
    '2023': '',
    programme: 'Management de projet',
    global: '8.059027778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.433333333',
    '2023': '',
    programme: 'Manager une équipe',
    global: '8.433333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.666666667',
    '2023': '',
    programme: 'Mathématiques-Sciences physiques et chimiques - UG2',
    global: '7.666666667',
  },
  {
    '200': '',
    '2021': '8.683333333',
    '2022': '',
    '2023': '',
    programme: 'Maîtrise d’ouvrage',
    global: '8.683333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '4.550694444',
    '2023': '',
    programme: 'Microsoft 365 - Administration Exchange',
    global: '4.550694444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.75462963',
    '2023': '',
    programme: 'Microsoft Office Outlook - Cours du soir',
    global: '8.75462963',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.138888889',
    '2023': '',
    programme: 'My sql',
    global: '9.138888889',
  },
  {
    '200': '',
    '2021': '9.326388889',
    '2022': '',
    '2023': '',
    programme: 'Optimiser sa veille & ses recherches sur le Web',
    global: '9.326388889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.430555556',
    '2023': '',
    programme: 'Optimiser votre communication',
    global: '7.430555556',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Organiser la clôture des comptes annuels',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.333333333',
    '2023': '',
    programme: 'Outlook',
    global: '7.333333333',
  },
  {
    programme: '"PHP-MySQL, développer un',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.069444444',
    '2023': '',
    programme: 'site Web dynamique"',
    global: '8.069444444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.694444444',
    '2023': '',
    programme: 'PORTUGAIS',
    global: '8.694444444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.296527778',
    '2023': '',
    programme: 'Paie et cotisations sociales, établir ses bulletins de salaire',
    global: '7.296527778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.006944444',
    '2023': '',
    programme: 'Photoshop',
    global: '9.006944444',
  },
  {
    '200': '',
    '2021': '9.041666667',
    '2022': '10',
    '2023': '',
    programme: 'Photoshop avancé - Cours du soir',
    global: '9.520833333',
  },
  {
    '200': '',
    '2021': '9.243055556',
    '2022': '',
    '2023': '',
    programme: 'Photoshop débutant - Cours du soir',
    global: '9.243055556',
  },
  {
    '200': '',
    '2021': '',
    '2022': '',
    '2023': '10',
    programme: 'PowerPoint',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.635416667',
    '2023': '',
    programme: 'Powerpoint',
    global: '8.635416667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.422453704',
    '2023': '',
    programme: 'Prendre la parole en public',
    global: '9.422453704',
  },
  {
    '200': '',
    '2021': '9.861111111',
    '2022': '',
    '2023': '',
    programme: 'Prise en main de Digiforma',
    global: '9.861111111',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme:
      "Prospection commerciale - BC04- Détecter,développer et superviser les projets d'affaires à entreprendre",
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.263888889',
    '2023': '',
    programme: "Préparation et confection d'une production florale",
    global: '8.263888889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.25',
    '2023': '',
    programme: 'Préparation à la certification Indesign, Photoshop et/ou Illustrator',
    global: '9.25',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.444444444',
    '2023': '',
    programme: 'Python',
    global: '9.444444444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.833333333',
    '2023': '',
    programme:
      "Python-BC01 Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité",
    global: '9.833333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '5.972222222',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC01 Modéliser des marchés pour évaluer et détecter des potentiels et des opportunités d'affaires",
    global: '5.972222222',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.802469136',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC02 Elaborer des stratégies de développements d'activités commerciales à partir de modèles économiques",
    global: '8.802469136',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.5',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC04 Diriger des activités commerciales de groupes et d'entreprises nationales et internationales",
    global: '7.5',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.955357143',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC04 Diriger des activités commerciales de groupes et d'entreprises nationales et internationales - Droit des Sociétés",
    global: '7.955357143',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.5',
    '2023': '8',
    programme:
      "RNCP 23692 Ingénieur d'Affaires - BC05 Développer des réseaux commerciaux sur des marchés nationaux et internationaux",
    global: '8.25',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.833333333',
    '2023': '',
    programme:
      "RNCP 23692 Ingénieur d'affaires - BC04 - Diriger des activités commerciales de groupes et d'entreprises nationales et internationales - Management d'équipe",
    global: '8.833333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.951388889',
    '2023': '',
    programme:
      'RNCP 28048 Accompagnant éducatif petite enfance - BC01 UP1 Accompagner le développement du jeune enfant',
    global: '8.951388889',
  },
  {
    '200': '',
    '2021': '',
    '2022': '6.979166667',
    '2023': '',
    programme:
      'RNCP 31677 Gestionnaire comptable et fiscal - BC02 Etablir et contrôler les déclarations fiscales',
    global: '6.979166667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.315972222',
    '2023': '8.583333333',
    programme:
      "RNCP 31677 TP - Gestionnaire comptable et fiscal - BC01 Arrêter, contrôler et présenter les comptes annuels - L'essentiel de la comptabilité Niveau 1",
    global: '8.449652778',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.347222222',
    '2023': '8.611111111',
    programme:
      'RNCP 31677 TP - Gestionnaire comptable et fiscal - BC02 Etablir et contrôler les déclarations fiscales - Paie et cotisations sociales perfectionnement',
    global: '8.479166667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.444444444',
    '2023': '',
    programme:
      "RNCP 34237 Expert en systèmes d'information et sécurité - BC01 Pilotage du développement des plateformes logicielles",
    global: '9.444444444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.347222222',
    '2023': '',
    programme:
      "RNCP 34237 Expert en systèmes d'information et sécurité - BC02 Supervision et sécurisation des systèmes d'information",
    global: '9.347222222',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8',
    '2023': '',
    programme: "S'initier aux logiciels de bureautique dans son activité professionnelle",
    global: '8',
  },
  {
    '200': '',
    '2021': '',
    '2022': '7.708333333',
    '2023': '',
    programme: 'SKETCHUP',
    global: '7.708333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.972222222',
    '2023': '',
    programme: 'Sécurité systèmes et réseaux, niveau 1',
    global: '8.972222222',
  },
  {
    '200': '',
    '2021': '',
    '2022': '10',
    '2023': '',
    programme: 'Talend Open Studio',
    global: '10',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.111111111',
    '2023': '',
    programme: "Travailler en équipe auprès d'une personne en situation de handicap",
    global: '9.111111111',
  },
  {
    '200': '',
    '2021': '4.881944444',
    '2022': '',
    '2023': '',
    programme:
      "UX Design Web et e-commerce-BC01-Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité",
    global: '4.881944444',
  },
  {
    '200': '',
    '2021': '',
    '2022': '9.861111111',
    '2023': '8.868055556',
    programme: 'VBA',
    global: '9.364583333',
  },
  {
    '200': '',
    '2021': '7.583333333',
    '2022': '',
    '2023': '',
    programme: 'Windows et sécurité',
    global: '7.583333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.48125',
    '2023': '9.895833333',
    programme: 'Word',
    global: '9.188541667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.433333333',
    '2023': '',
    programme: 'Wordpress',
    global: '8.433333333',
  },
  {
    '200': '',
    '2021': '',
    '2022': '8.541666667',
    '2023': '',
    programme: 'Wordpress-Google ADS-Google Analytics',
    global: '8.541666667',
  },
  {
    '200': '',
    '2021': '',
    '2022': '',
    '2023': '7.666666667',
    programme: 'Élaborer et mettre en oeuvre une démarche de Cybersécurité',
    global: '7.666666667',
  },
];
function Satisfactions() {
  const formatNumber = (number: any) => {
    if (isNaN(number)) return '';
    if (Number(number) === 0) return '';
    return Number(number).toFixed(2);
  };
  return (
    <article className="container">
      <h2 className="font-bold text-2xl mb-4 flex flex-col">
        <span className="pt-10">Satisfaction</span>
        <span className="text-sm font-semi">*Les valeurs sont sur 10</span>
      </h2>
      <div
        className={classNames(
          'hidden bg-slate-200 py-2 md:py-0 md:grid md:grid-cols-5 justify-between items-center text-lg'
        )}
      >
        <span className="md:p-3 md:col-span-3">Satisfactions</span>
        <div className="md:grid md:grid-cols-5 md:col-span-2 md:gap-4">
          <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
            <span>2000</span>
          </p>
          <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
            <span>2021</span>
          </p>
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
      {satisfactions.map((participant: any, index: number) => (
        <div
          className={classNames(
            'py-2 md:py-0 md:grid md:grid-cols-5 justify-between items-center text-lg',
            { 'bg-slate-200': index % 2 === 1 }
          )}
          key={slugify(participant.programme)}
        >
          <span className="md:p-3 md:col-span-3">{capitalize(participant.programme.trim())}</span>
          <div className="md:grid md:grid-cols-5 md:col-span-2 md:gap-4">
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2000</span>
              <span>{formatNumber(participant['2020'])}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2021</span>
              <span>{formatNumber(participant['2021'])}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2022</span>
              <span>{formatNumber(participant['2022'])}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">2023</span>
              <span>{formatNumber(participant['2023'])}</span>
            </p>
            <p className="md:py-3 py-1 text-center block flex justify-between md:justify-center items-center">
              <span className="md:hidden">Global</span>
              <span>{formatNumber(participant['global'])}</span>
            </p>
          </div>
        </div>
      ))}
      <h2 className="font-bold text-2xl mb-4">
        <span className="pt-10 text-sm font-semi">*Les valeurs sont sur 10</span>
      </h2>
    </article>
  );
}

export default Satisfactions;
