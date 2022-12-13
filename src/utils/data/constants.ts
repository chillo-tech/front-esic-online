const PHONE_PATTERN: any = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
//const EMAIL_PATTERN: any = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/;
const EMAIL_PATTERN: any = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const STRING_WITH_NUMBERS_REGEXP: any = /^\D*(\d\D*){10,}$/;
const PHONE_ERROR_MESSAGE: string = 'Votre numéro de téléphone est invalide';
const EMAIL_ERROR_MESSAGE: string = 'Votre mail est invalide';
const REQUIRED_ERROR_MESSAGE: string = "Ce champ est requis";
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
]
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
export {
    PHONE_PATTERN, 
    EMAIL_PATTERN, 
    STRING_WITH_NUMBERS_REGEXP, 
    PHONE_ERROR_MESSAGE,
    EMAIL_ERROR_MESSAGE,
    REQUIRED_ERROR_MESSAGE,
    USER_PROFILE_OPTIONS,
    COMPANY_PROFILE_OPTIONS,
    USER_PROFILE,
    CONTACT_CHANNEL
}