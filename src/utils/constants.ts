const PHONE_PATTERN: any = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
//const EMAIL_PATTERN: any = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/;
const EMAIL_PATTERN: any = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const STRING_WITH_NUMBERS_REGEXP: any = /^\D*(\d\D*){10,}$/;
const PHONE_ERROR_MESSAGE: string = 'Votre numéro de téléphone est invalide';
const EMAIL_ERROR_MESSAGE: string = 'Votre mail est invalide';
const REQUIRED_ERROR_MESSAGE: string = "Ce champ est requis";
const EMPTY_SESSION: string = "Aucune session n'est programée à ce jour";
const INITIAL_STATE = {trainingsParams: {path: 'formations'}}
const UPDATE_SEARCH_TRAINING_PARAMS = "UPDATE_SEARCH_TRAINING_PARAMS";
const COMPANY_PROFILE_OPTIONS: any = [
  {
    value: 'formation de salariés',
    label: 'La formation de vos salariés'
  },
  {
    value: 'financement des formations de salariés',
    label: "Le Financement d'une Formation pour vos salariés"
  },
  {
    value: 'un partenariat',
    label: 'Une partenariat'
  },
  {
    value: 'autre',
    label: 'Autre'
  }
]
const USER_PROFILE: any = [
  {
    value: 'particulier',
    label: 'Particulier'
  },
  {
    value: 'entreprise',
    label: 'Entreprise'
  }
]
const CONTACT_CHANNEL: any = [
  {
    value: 'EMAIL',
    label: 'Par mail'
  },
  {
    value: 'PHONE',
    label: 'Par téléphone'
  }
];

const contacts = {
  title: "Contacts",
  location: "36 avenue Pierre Brosolette - 92240 MALAKOFF",
  phone: "01 53 90 15 20",
  email: "",
  siret: "Siret : 45303523000094",
};
const USER_PROFILE_OPTIONS: any = [
  {
    value: 'formations',
    label: 'Nos formations'
  },
  {
    value: 'financement des formations',
    label: "Le financement d'une Formation"
  },
  {
    value: 'une candidature',
    label: 'Une candidature'
  },
  {
    value: 'autre',
    label: 'Autre'
  }
]
const contact = {
  link: "/contact",
  title: "Esic - Contact",
  subtitle: "",
  header: {
    title: "Envoyez nous un message",
    subtitle:
      "Nous reviendrons vers vous assez vite",
  },
  infos: {
    title: "Nos coordonnées",
    description:
      "Toutes nos formations sont créées par des professionnels, les meilleurs dans leurs domaines afin de renforcer les compétences recherchées sur le marché du travail et tournées vers l'avenir. Suivre une formation c'est bien mais obtenir une certification en reconnaissance de ses capacités c'est mieux.",
  },
  form: {
    title: "Envoyez nous votre message",
    first_name: {
      label: "Prénom",
    },
    last_name: {
      label: "Nom",
    },
    email: {
      label: "Email",
    },
    phone: {
      label: "Téléphone",
    },
    subject: {
      label: "Subject",
    },
    message: {
      label: "Message",
    },
    submit: {
      label: "Envoyer",
    },
  },
};
const hero = {
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

export {
  hero,
  contact,
  contacts,
  USER_PROFILE_OPTIONS,
  COMPANY_PROFILE_OPTIONS,
  CONTACT_CHANNEL,
  INITIAL_STATE, 
  UPDATE_SEARCH_TRAINING_PARAMS,
  EMPTY_SESSION,
  PHONE_PATTERN, 
  EMAIL_PATTERN, 
  STRING_WITH_NUMBERS_REGEXP, 
  PHONE_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  USER_PROFILE
}