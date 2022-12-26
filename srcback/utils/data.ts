import {formations} from "./data/formations";

// Header
export const header = {
  menu: [
    {
      label: "Formations",
      link: "/formations",
      submenu: [
        // {
        //   label: "Training at ESIC",
        //   link: "/votre-formation-chez-esic",
        //   submenu: [],
        // },
        formations.map((item) => ({
          label: item.name,
          link: item.link,
          subtitle: item.subtitle,
          image: item.image,
          submenu: item.courses.map((course) => ({
            label: course.name,
            link: course.link,
            subtitle: "",
          })),
        })),
      ],
    },
    {
      label: "Certifications",
      link: "/certifications",
      submenu: [],
    },
    {
      label: "Competence assessment",
      link: "/bilan-competences",
      submenu: [],
    },
    {
      label: "POE",
      link: "/poe",
      submenu: [],
    },
    {
      label: "VAE",
      link: "/vae",
      submenu: [
        {
          link: "/comprendre-la-vae",
          label: "Understand VAE",
          submenu: [],
          subtitle: "",
          image: "",
        },
        {
          link: "/portal-vae-esic",
          label: "VAE portal of ESIC",
          submenu: [],
          subtitle: "",
          image: "",
        },
      ],
    },
    {
      label: "ESIC",
      link: "/nous-connaitre",
      submenu: [
        {
          link: "/mediateur",
          label: "Mediator",
          submenu: [],
          subtitle: "",
          image: "",
        },
        {
          link: "/qualite",
          label: "Quality",
          submenu: [],
          subtitle: "",
          image: "",
        },
        {
          link: "/compte-personnel-formation",
          label: "CPF",
          submenu: [],
          subtitle: "",
          image: "",
        },
        {
          link: "/plan-developpement-competences",
          label: "Competences development plan",
          submenu: [],
          subtitle: "",
          image: "",
        },
        {
          link: "/reserver-formation",
          label: "Book a course",
          submenu: [],
          subtitle: "",
          image: "",
        },
      ],
    },
  ],
  contact: {
    label: "Contact",
    link: "/contactez-nous",
    submenu: [],
  },
};

// Hero
export const hero = {
  title: ["ESIC", "Votre centre de formation"],
  subtitle:
    "Ensemble vers l'excellence dans vos compétences en informatique, gestion, design, langues et bureautique. Plus de 400 formations certifiées en formation professionnelle, en alternance et en apprentissage.",
  small: "Start new carreer right by following of our path",
  form: {
    input: {
      label: "",
      placeholder: "Rechercher une formation, e.g: Introduction à python",
    },
    submit: {
      label: "Rechercher",
    },
    result: {
      cta: {
        label: "Discover",
      },
    },
  },
};

// Stats
export const stats = {
  title: "Trusted by professionals over years",
  subtitle:
    "Great expertise and a reliable training package developed over several years.",
  items: [
    {
      label: "Années d'experiences",
      value: "25",
    },
    {
      label: "Satisfaction",
      value: "98%",
    },
    {
      label: "Formations",
      value: "+400",
    },
    {
      label: "Certifications",
      value: "75",
    },
  ],
};

//
export const formations_overview = {
  title: "Discover all our trainings",
  subtitle:
    " All ours training are created by professionals, the best in their domains in order to empower skills that are in demand in the job market and with a look in the future. Following a training is good but getting a certification in recognition of your abilities is better",
  cta: {
    label: "Decouvrir",
  },
};

// Certifications Overview
export const certifications_overview = {
  title: "Professional Certifications",
  subtitle:
    "Find all our certifications registered with the RNCP and RS. Obtain a diploma or professional recognition.",
  image: "/images/certification-security.jpg",
  items: [
    { label: "Secure infrastructure administrator (Bac +2)", link: "/contact" },
    { label: "Application designer and developer (Bac+3)", link: "/contact" },
    { label: "Expert in information systems (Bac+5)", link: "/contact" },
    { label: "Sales and marketing manager (Bac+3)", link: "/contact" },
    { label: "Business engineer (Bac+5)", link: "/contact" },
    {
      label: "Develop and implement a cybersecurity approach",
      link: "/contact",
    },
    { label: "Big data and connected objects", link: "/contact" },
  ],
  button: {
    label: "Read more",
    link: "/contact",
  },
};

export const testimonials = {
  title: "More than 150 participants testify",
  subtitle:
    "We pay particular attention to listening to our trainees in order to improve the content, means and delivery of our courses.",
};

// partners
export const partners = {
  title: "Ils nous font confiance",
  subtitle: "Clients avec lesquels nous avons réalisé des projets importants",
  items: [
    {
      name: "Solutec",
      image: "/images/solutec.png",
    },
    {
      name: "General de bureautique",
      image: "/images/gdb.jpeg",
    },
    {
      name: "Dexton",
      image: "/images/DEXTON.jpg",
    },
  ],
  button: {
    label: "Contactez-nous",
    link: "/contact",
  },
};

// Location
export const location = {
  title: "Notre localisation",
  subtitle:
    "Vous pouvez vous inscrire dans notre centre en personne ou en ligne. Vous pouvez suivre notre formation où que vous soyez. Nos enseignants vous guideront dans la bonne direction.",
};

// Newsletter
export const newsletter = {
  button: "Register",
  title: "Inscrivez-vous à notre newsletter",
  subtitle:
    "Recevez notre newsletter hebdomadaire pour connaître les dernières nouvelles sur nos formations, certifications, offres exclusives, promotions et bien plus encore.",
  form: {
    email: {
      label: "Adresse email",
      placeholder: "Entrer votre adresse email",
    },
  },
};

// Footer
export const usefull_links = {
  title: "More informations",
  links: [
    { target: "/#", label: "Contact the mediator" },
    { target: "/#", label: "How to start a training" },
    { target: "/#", label: "Book your training now" },
    { target: "/#", label: "How to choose your training" },
    { target: "/contact", label: "Contact us" },
  ],
};

export const formations_links = {
  title: "Nos formations",
};

export const about_us = {
  title: "Nous connaitre",
  links: [
    { target: "/#", label: "ESIC" },
    { target: "/#", label: "Formations" },
    { target: "/#", label: "Certifications" },
    { target: "/#", label: "Contactez-nos" },
    { target: "/#", label: "Termes et conditions" },
  ],
};

export const contacts = {
  title: "Contacts",
  location: "36 avenue Pierre Brosolette - 92240 MALAKOFF",
  phone: "01 53 90 15 20",
  email: "",
  siret: "Siret : 45303523000094",
};

export const formations_footer = {
  title: "All our Trainings",
  categories: Array.from(Array(10).keys()).map((i) => ({
    title: `Category ${i + 1}`,
    link: "#",
    courses: Array.from(Array(10).keys()).map((i) => ({
      title: `Course ${i + 1}`,
      link: "#",
    })),
  })),
};

export const quality_label = {
  title: "Quality Label",
  description:
    "As a result of our investments in the quality of our training processes, ESIC is Qualiopi certified. This certification guarantees that your training actions, skills assessments, VAE and your training, your skills assessment, your VAE and your apprenticeship in apprenticeships in CFAs.",
  image: "/images/qualiopi.png",
};

export const copyright: string = "ESIC. Tous droits reservés.";

// formation cta
export const formation_cta = {
  button: {
    label: "Book a training",
    link: "/reserver-formation",
  },
  title: "Start this course right now",
  subtitle:
    "Empower your tech teams to produce key business outcomes by making upskilling and reskilling as easy as powering up their laptop. Tap into the power of curated learning paths to guide teams through the exact skills they need to progress from novice to guru across avariety of tech skills.",
};

export const top_formations = {
  title: "Nos meilleures formations",
};

export const home_features = {
  items: [
    {
      title: "Quality",
      link: "",
      image: "/images/icon-quality.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione ex nobis? Fuga quasi odio, ut, reprehenderit, dicta porro necessitatibus doloribus cumque saepe consequuntur dolorem veritatis. Tenetur eum beatae doloribus.",
    },
    {
      title: "Financement",
      link: "",
      image: "/images/icon-financement.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione ex nobis? Fuga quasi odio, ut, reprehenderit, dicta porro necessitatibus doloribus cumque saepe consequuntur dolorem veritatis. Tenetur eum beatae doloribus.",
    },
    {
      title: "CPF",
      link: "",
      image: "/images/icon-cpf.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione ex nobis? Fuga quasi odio, ut, reprehenderit, dicta porro necessitatibus doloribus cumque saepe consequuntur dolorem veritatis. Tenetur eum beatae doloribus.",
    },
    {
      title: "Catalogue",
      link: "",
      image: "/images/icon-pdf.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione ex nobis? Fuga quasi odio, ut, reprehenderit, dicta porro necessitatibus doloribus cumque saepe consequuntur dolorem veritatis. Tenetur eum beatae doloribus.",
    },
  ],
};

export const about_overview = {
  title: "Nous connaitre",
  subtitle:
    "Un organisme de formation dédié aux professionnels de l'informatique",
  items: [
    {
      title: "Know more about us",
      subtitle: "A training organisation dedicated to IT professionals",
      description:
        "Depuis plus de 20 ans, nous contribuons à la transformation numérique des entreprises et des administrations en développant les compétences informatiques de leurs collaborateurs. Plus de 6 000 personnes suivent chaque année nos formations en France et à l'étranger, en présentiel ou à distance. <br/><br/> Nos formateurs sont des consultants actifs ayant en moyenne 10 ans d'expérience, qui proposent de véritables formations métiers, inspirées de leur expérience terrain.",
    },
    {
      title: "Nos forces",
      subtitle: "A permanent structure at your service",
      description:
        "En tant que centre de formation certifié Qualiopi, reconnu par les grandes entreprises et les OPCO, nous pouvons vous accompagner tout au long de votre parcours de formation. Vous bénéficiez d'interlocuteurs dédiés soucieux de vous apporter une réponse rapide et fiable. Qu'il s'agisse de trouver la meilleure formation catalogue pour vous ou de mettre en place l'ingénierie pédagogique nécessaire à un programme sur mesure, la flexibilité est de mise. <br/><br/> Pas étonnant que 94% de nos participants se disent satisfaits ou très satisfaits !",
    },
    {
      title: "Notre offre de formation",
      subtitle: "A complete offer, regularly updated and enriched",
      description:
        "Avec plus de 2 000 formations et certifications, ESIC répond à la quasi-totalité des besoins de formation informatique des entreprises : formations officielles des éditeurs et formations 100% développées par ESIC. Notre catalogue s'adresse ainsi à tous les grands domaines et métiers de l'informatique et à tous les niveaux : du débutant à l'expert. <br/><br/>Nos contenus sont le fruit de notre veille technologique et des retours de nos formateurs, pour une formation toujours basée sur la pratique.",
    },
  ],
};

export const certifications_menu = [
  "Management / Gestion de projet",
  "Informatique / Developpement",
  "Reseaux",
  "Methodes agiles / Projets agiles",
  "Cybersecurite",
  "Commerce /Compatibilite",
  "Entreprise",
];
