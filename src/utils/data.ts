import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { domainToASCII } from "url";
import formations_list from "./data/formations-list.json";

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
        ...formations_list.map((item) => ({
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
    link: "/contact",
    submenu: [],
  },
};

// Hero
export const hero = {
  title: ["ESIC", "Your training center"],
  subtitle:
    "Together towards excellence in your IT, management, design, language and office skills. More than 400 certified training courses in vocational training, sandwich courses and apprenticeships.",
  small: "Start new carreer right by following of our path",
  form: {
    input: {
      label: "",
      placeholder: "Find your formation, e.g: Introduction du python",
    },
    submit: {
      label: "Get start",
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
      label: "Year of Experience",
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
  title: "Our clients and partners",
  subtitle: "Clients with whom we have carried out major projects",
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
    label: "Start working with us ",
    link: "/contact",
  },
};

// Location
export const location = {
  title: "Our locations",
  subtitle:
    "You can register in our center in person or online. You can follow ours training wherever you are. Our teachers will lead the right way.",
};

// Newsletter
export const newsletter = {
  button: "Register",
  title: "Received all the news and informations",
  subtitle:
    "Receive our weekly newsletter for the latest news on our formations, certifications, exclusive offers, promotions and much more.",
  form: {
    email: {
      label: "Adresse email",
      placeholder: "Enter your email",
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
    { target: "/#", label: "Training" },
    { target: "/#", label: "Certifications" },
    { target: "/#", label: "Contact us" },
    { target: "/#", label: "Terms and conditions" }
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
  title: "Top formations",
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
  title: "About us",
  subtitle: "A training organisation dedicated to IT professionals",
  items: [
    {
      title: "Know more about us",
      subtitle: "A training organisation dedicated to IT professionals",
      description:
        "For more than 20 years, we have been contributing to the digital transformation of companies and administrations by developing the IT skills of their employees. More than 6,000 people take our training courses each year in France and abroad, either face-to-face or remotely. <br/><br/> Our trainers are active consultants with an average of 10 years experience, who offer real business training courses, inspired by their experience in the field.",
    },
    {
      title: "Our strengths",
      subtitle: "A permanent structure at your service",
      description:
        "As a Qualiopi-certified training centre, recognised by large companies and OPCOs, we can support you throughout your training programme. You benefit from dedicated contacts who are keen to provide you with a rapid and reliable response. Whether it's a question of finding the best catalogue training course for you or implementing the pedagogical engineering required for a customised programme, flexibility is the order of the day. <br/><br/> It is not surprising that 94% of our participants say they are satisfied or very satisfied!",
    },
    {
      title: "Our training offer",
      subtitle: "A complete offer, regularly updated and enriched",
      description:
        "With more than 2,000 training courses and certifications, PLB meets almost all the IT training needs of companies: official training courses from publishers and training courses 100% developed by PLB. Our catalogue thus addresses all the major IT fields and professions and all levels: from beginners to experts. <br/><br/>Our content is the result of our technological watch and feedback from our trainers, for training that is always based on practice.",
    },
  ],
};
