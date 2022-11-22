const formations_list = [
  {
    link: "/contact",
    name: "Cybersécurité",
    subtitle: "short description here",
    image: "/images/cyber-security.svg",
    description:
      "To ensure the cybersecurity of your sites, all the players are mobilised, from the user to the IT specialist. Several professions contribute to the protection of data and processing systems: DPO, business continuity manager, CISO, auditor and pentester. To help them, ESIC offers a complete range of training courses based on the best practices recommended in the reference systems.",
    courses: [
      {
        link: "/elaborer-et-mettre-en-oeuvre-une-demarche-de-cybersecurite-cisa",
        name: "Élaborer et mettre en œuvre une démarche de cybersécurité (CISA)",
        hours: "300",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/45303523000094_CS-AR/45303523000094_CS-AR-40",
        domain: "",
      },
      {
        link: "/analyse-de-risque-iso-cei-27005-et-ebios-rm",
        name: "ANALYSE DE RISQUE : ISO/CEI 27005 ET EBIOS RM",
        hours: "35",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/45303523000094_CS-AR/45303523000094_CS-AR-40",
        domain: "",
      },
      {
        link: "/formation-iso-cei-27001-lead-auditor",
        name: "ISO/CEI 27001 LEAD AUDITOR",
        hours: "35",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://esic.catalogueformpro.com/3/informatique/963161/isocei-27001-lead-auditor",
        domain: "",
      },
      {
        link: "/formation-iso-cei-27001-lead-implementer",
        name: "ISO/CEI 27001 LEAD IMPLEMENTER",
        hours: "35",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://esic.catalogueformpro.com/3/informatique/963145/isocei-27001-lead-implementer",
        domain: "",
      },
      {
        link: "/windows-securite",
        name: "Windows et sécurité",
        hours: "21",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/securite-systemes-et-reseaux-niveau-1",
        name: "Sécurité systèmes et réseaux Niveau 1",
        hours: "28",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/45303523000094_CS-AR/45303523000094_CS-AR-40",
        domain: "",
      },
      {
        link: "/securite-systemes-et-reseaux-niveau-2",
        name: "Sécurité systèmes et réseaux Niveau 2",
        hours: "28",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/45303523000094_CS-AR/45303523000094_CS-AR-40",
        domain: "",
      },
      {
        link: "/sensibilisation-des-utilisateurs-a-la-cybersecurite",
        name: "Sensibilisation des tuilisateurs à la cybersécurité",
        hours: "7",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/forensic-et-analyse-des-systemes-informatiques",
        name: "Forensic et analyse des systèmes informatiques",
        hours: "28",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/fortinet-securite-reseaux",
        name: "Fortinet - Sécurité réseaux",
        hours: "14",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/tls-ssl-installation-configuration-et-mise-en-oeuvre",
        name: "TLS/SSL installation, configuration et mise en oeuvre",
        hours: "14",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/hacking-et-securite-niveau-1",
        name: "Hacking et sécurité, niveau 1",
        hours: "35",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/hacking-et-securite-niveau-2",
        name: "Hacking et sécurité, niveau 2",
        hours: "28",
        certification:
          "Élaborer et mettre en œuvre une démarche de cybersécurité (RS5332)",
        cpf: "",
        domain: "",
      },
      {
        link: "/protection-des-donnees-personnelles-rgpd",
        name: "Protection des données personnelles - RGPD",
        hours: "7",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/la-cryptographie-et-son-application-concrete",
        name: "La cryptographie et son application concrète",
        hours: "14",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/pki-mise-en-oeuvre",
        name: "PKI : Mise en œuvre",
        hours: "21",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/pki-mise-en-oeuvre",
        name: "Python pour tests d'intrusion",
        hours: "21",
        certification: "",
        cpf: "",
        domain: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Développement logiciel et tests",
    image: "/images/developpement-logiciel.svg",
    subtitle: "short description here",
    description:
      "Engage in the development of your computer programming skills through recognised development languages, methods and testing.",
    courses: [
      {
        link: "/design-patterns-mise-en-oeuvre",
        name: "Design Patterns, mise en œuvre",
        hours: "35",
        certification: "",
        cpf: "",
        domain: "Conception Objet, UML, Design Patterns",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "UML 2, analyse et conception",
        hours: "28",
        certification: "",
        cpf: "",
        domain: "Conception Objet, UML, Design Patterns",
      },
      {
        link: "/python-initiation",
        name: "Python initiation",
        hours: "28",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/python-perfectionnement",
        name: "Python perfectionnement",
        hours: "21",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Python Programmation Objet",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Big Data Analytics avec Python",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/python-pour-tests-dintrusion",
        name: "Python pour tests d'intrusion",
        hours: "21",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/esic-online.com",
        name: "Django - Développements Web en Python",
        hours: "28",
        certification: "",
        cpf: "",
        domain: "Python",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Développement en C",
        hours: "",
        certification: "",
        cpf: "",
        domain: "C",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Développement en C++",
        hours: "",
        certification: "",
        cpf: "",
        domain: "C++",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Développement objet en C++",
        hours: "",
        certification: "",
        cpf: "",
        domain: "C++",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA initiation,",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Programmation Objet en JAVA initiation,",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA Expert,",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA Optimisation,",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA Tests et Qualité,",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java, Tests, Qualité",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "Test Driven Developpement JAVA",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java, Tests, Qualité",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA EE",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java, JEE, Web",
      },
      {
        link: "/uml-2-analyse-et-conception",
        name: "JAVA Servlets et JSP",
        hours: "",
        certification: "",
        cpf: "",
        domain: "Java, JEE, Web",
      },
    ],
  },
  {
    link: "/contact",
    name: "Langues",
    subtitle: "short description here",
    image: "/images/developpement-logiciel.svg",
    description:
      "Follow a programme of 5 to 40 hours of language training to gain mastery and ease in all situations of your personal and professional life. Your personal language trainer, who is the real guarantor of your progress, will give you activities to carry out each week to overcome, one by one, your blocks, whether they are psychological (self-confidence, letting go, etc.) or linguistic (grammar, pronunciation, etc.). Your trainer is a native speaker with whom you can practice the language without limits, both in writing and speaking!",
    courses: [
      {
        link: "/formation-anglais-cpf",
        name: " Anglais",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/formation-hebreu-cpf",
        name: " Hébreu",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/formation-espagnol-cpf",
        name: " Espagnol",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/formation-allemand-cpf",
        name: " Allemand",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/formation-arabe-cpf",
        name: " Arabe",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
      {
        link: "/formation-francais-cpf",
        name: " Français",
        hours: "",
        certification: "",
        cpf: "",
        domain: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Bureautique",
    subtitle: "short description here",
    image: "/images/developpement-logiciel.svg",
    description: "Devenez performant sur les outils bureautique",
    courses: [
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "decouverte de l'informatique",
        hours: "14",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Word",
        hours: "35",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Execel Initiation",
        hours: "21",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Execel Avance",
        hours: "14",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Powerpoint",
        hours: "14",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Outlook",
        hours: "7",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Access",
        hours: "21",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Windows et securite",
        hours: "7",
        certification: "",
      },
      {
        link: "#/",
        domain: "",
        cpf: "",
        name: "Mac OS",
        hours: "21",
        certification: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Photoshop, InDesign et Illustrator",
    subtitle: "short description here",
    image: "/images/developpement-logiciel.svg",
    description:
      "Follow a programme of 5 to 40 hours of training to gain mastery and ease in the use of Photoshop, InDesign and Illustrator in your personal and professional life. Your personal trainer, who is the real guarantor of your progress, will give you activities to carry out each week to overcome your blockages one by one.",
    courses: [
      {
        name: "Photoshop debutant",
        hours: "21",
        domain: "",
        cpf: "",
        link: "#",
        certification: "",
      },
      {
        name: "Photoshop perfectionnement",
        hours: "14",
        domain: "",
        cpf: "",
        link: "#",
        certification: "",
      },
      {
        name: "InDesign",
        hours: "35",
        domain: "",
        cpf: "",
        link: "#",
        certification: "",
      },
      {
        name: "Illustrator Debutant",
        hours: "14",
        domain: "",
        cpf: "",
        link: "#",
        certification: "",
      },
      {
        name: "Illustrator perfectionnement",
        hours: "21",
        domain: "",
        cpf: "",
        link: "#",
        certification: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "CAO, Architecture, BIM",
    subtitle: "short description here",
    image: "/images/developpement-logiciel.svg",
    description:
      "Suivez un programme de 5 à 40h de formation pour gagner en maîtrise et en aisance dans l’utilisation de Autocad, SketchUp, AllPlan dans les situations de votre vie personnelle et professionnelle. Votre formateur personnel, véritable garant de votre progression, vous donnera des activités à réaliser chaque semaine pour dépasser uns à uns vos blocages.",
    courses: [
      {
        name: "Autocad",
        hours: "35",
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Autocad 3D",
        hours: "35",
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "SketchUp",
        hours: "21",
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "AllPlan",
        hours: "21",
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Archicad",
        hours: 21,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Vidéo et animation 3D",
    subtitle: "short description here",
    image: "/images/video-edition.svg",
    description:
      "Suivez un programme de 5 à 40h de formation pour gagner en maîtrise et en aisance dans l’utilisation Adode Première Pro, Unreal, After Effects ou 3ds Max dans les situations de votre vie personnelle et professionnelle. Votre formateur personnel, véritable garant de votre progression, vous donnera des activités à réaliser chaque semaine pour dépasser uns à uns vos blocages.",
    courses: [
      {
        name: "Adobe Premiere Pro",
        hours: 21,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "After Effects",
        hours: 35,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "3 DS MAX",
        hours: 35,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Unreal",
        hours: 28,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Webmarketing",
    subtitle: "short description here",
    image: "/images/webmarketing.svg",
    description:
      "Nous proposons des cours de web-marketing pour vous aider à développer votre E-commerce et votre E-réputation. Nos formations Web-marketing couvrent la création de sites vitrines avec WordPress, le référencement naturel, les campagnes Ads, l’e-mailing ainsi qu’une série d’outils Google comme Google Analytics ou la Google Search Console. Nos formations en web-marketing ont pour but de vous aider à acquérir de nouveaux clients via un site internet, à les fidéliser ainsi qu’a augmenter votre ROI (Return On Investment).",
    courses: [
      {
        name: "Referencement SEO",
        hours: 28,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Google Ads",
        hours: 14,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "MailChimp",
        hours: 7,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Fondamentaux Reseaux Sociaux ",
        hours: 14,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Anumer Reseaux Sociaux",
        hours: 14,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
      {
        name: "Visibilite et e-reputation",
        hours: 14,
        link: "#",
        domain: "",
        certication: "",
        cpf: "",
      },
    ],
  },
  {
    link: "/contact",
    name: "Méthodes Agiles",
    subtitle: "short description here",
    image: "/images/developpement-logiciel.svg",
    description:
      "Les méthodes Agiles permettent de mieux maîtriser les projets informatiques sous les angles délais, coûts et résultats. Elles préconisent le travail itératif, une bonne communication entre les acteurs. Cela permet d’augmenter la crédibilité de la conduite de projet par une plus grande prévisibilité et une plus grande satisfaction des utilisateurs. Le but est d’apporter le plus de valeur possible aux projets.",
    courses: [],
  },
];

export default formations_list;
