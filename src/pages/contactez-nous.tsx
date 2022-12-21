import Head from "next/head";
import ContactInfos from "../components/contact-infos";
import OpenedLayout from 'containers/opened';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CONTACT_CHANNEL, COMPANY_PROFILE_OPTIONS, EMAIL_PATTERN, REQUIRED_ERROR_MESSAGE, EMAIL_ERROR_MESSAGE, PHONE_ERROR_MESSAGE, contact, USER_PROFILE, USER_PROFILE_OPTIONS } from "utils/index";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { add } from "services/index";
import formStyles from 'styles/Form.module.css';
import Message from "components/Message";

export type Message = {
  name: string, 
  message: string, 
  email: string, 
  phone: string,
  profile: string,
  subject: string,
  contactChannel: string[],
}
const schema = yup.object({
    name: yup.string().trim()
          .required("Ce champ est requis"),
    phone: yup.string()
                .required(PHONE_ERROR_MESSAGE)
                .min(10, PHONE_ERROR_MESSAGE),
    email: yup.string()
              .email(EMAIL_ERROR_MESSAGE)
              .required(EMAIL_ERROR_MESSAGE)
              .matches(EMAIL_PATTERN, {message: EMAIL_ERROR_MESSAGE}),
    profile: yup.string()
          .trim()
          .required(REQUIRED_ERROR_MESSAGE),
    subject: yup.string()
          .trim()
          .required(REQUIRED_ERROR_MESSAGE),
    contactChannel: yup
                    .array()
                    .of(yup.string())
                    .min(1)
                    .required(REQUIRED_ERROR_MESSAGE)
                   .nullable(),
    message: yup.string()
          .trim()
          .required(REQUIRED_ERROR_MESSAGE)
          .min(30, "Dites nous en un peu plus s'il vous plait(min. 30)")
}).required();

export default function Contact() {
  const mutation = useMutation({mutationFn: ((message:any) => add("/contacts", message))});
  const router = useRouter();
	const {register, handleSubmit, watch, formState: {errors}} = useForm<Message>({
		mode: "onChange",
		resolver: yupResolver(schema)
	});

  const profile = watch("profile");
  const contactChannel = watch("contactChannel");
	const onSubmit = (data: Message) => {
    mutation.mutate({...data, contactChannel: contactChannel.join(", ").toLowerCase()});
	};

  const handleError = (error:any) => {
    error.preventDefault()
    router.push('/')
  }
  return (
    <OpenedLayout>
      <Head>
        <title> {contact.title} </title>
      </Head>
      <section className="pt-12 pb-16 container mx-auto flex flex-wrap font-sans">
        <aside className="w-full md:w-[35%] bg-secondary text-white p-3 py-8 md:p-8 hidden md:block">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {contact.infos.title}
          </h2>
          <p className="text-gray-100 font-extralight mt-6">
            {contact.infos.description}
          </p>
          <div className="mt-8">
            <ContactInfos />
          </div>
        </aside>
        <aside className="w-full md:w-[65%] border p-4 md:p-8 bg-secondary/5">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {contact.form.title}
          </h3>
          {mutation.isError ? (
            <Message 
              type="error" 
              firstMessage='Une erreur est survenue, nous allons la résoudre sous peu' 
              secondMessage="N'hésitez pas à nous passer un coup de fil" 
              action={handleError} 
              actionLabel="Retourner à l'accueil"
            />) : null}
          {mutation.isSuccess ? (
            <Message 
              type="success" 
              firstMessage='Nous avons reçu votre message.' 
              secondMessage='Une réponse personnalisée vous sera apportée dans les meilleurs délais.' 
              action={handleError} 
              actionLabel="Retourner à l'accueil"
            />) : null}
          {
            mutation.isIdle 
            ? (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid md:px-20">
              <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    <label htmlFor="name" className={formStyles.form_control__label}>
                      <span className='text-black'>Votre nom</span>
                    </label>
                    <input type="text" id="name" placeholder="Votre nom"
                        className={formStyles.form_control__input}
                        {...register("name")}/>
                    <p className={formStyles.form_control__error}>{errors.name?.message}</p>
                  </div>
              </div>
              <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    <label htmlFor="email" className={formStyles.form_control__label}>
                      <span className='text-black'>Votre email</span>
                    </label>
                    <input type="text" id="email" placeholder="Votre email"
                        className={formStyles.form_control__input}
                        {...register("email")}/>
                    <p className={formStyles.form_control__error}>{errors.email?.message}</p>
                  </div>
              </div>
              <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    <label htmlFor="phone" className={formStyles.form_control__label}>
                      <span className='text-black'>Votre téléphone</span>
                    </label>
                    <input type="text" id="phone" placeholder="Votre téléphone"
                        className={formStyles.form_control__input}
                        {...register("phone")}/>
                    <p className={formStyles.form_control__error}>{errors.phone?.message}</p>
                  </div>
              </div>
              <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    <label htmlFor="phone" className={formStyles.form_control__label}>
                      <span className='text-black'>Vous êtes</span>
                    </label>
                    <select {...register("profile")} className={formStyles.form_control__input}>
                      <option value="">Veuillez sélectionner</option>
                      {
                        USER_PROFILE.map((profile: any, index: number) => (<option key={`profile-${index}`} value={profile.value}>{profile.label}</option>))
                      }
                    </select>
                    <p className={formStyles.form_control__error}>{errors.profile?.message}</p>
                  </div>
              </div>
              { profile ?
                (
                  <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <label htmlFor="phone" className={formStyles.form_control__label}>
                          <span className='text-black'>Votre demande concerne</span>
                        </label>
                        <select {...register("subject")} className={formStyles.form_control__input}>
                          <option value="">Veuillez sélectionner</option>
                          {
                            profile === 'particulier'  ? 
                            (
                              USER_PROFILE_OPTIONS.map((profile: any, index: number) => (<option key={`profile-options-${index}`} value={profile.value}>{profile.label}</option>))
                            )
                            : null
                          }
                          {
                            profile === 'entreprise'  ? 
                            (
                              COMPANY_PROFILE_OPTIONS.map((company: any, index: number) => (<option key={`company-options-${index}`} value={company.value}>{company.label}</option>))
                            )
                            : null
                          }
                        </select>
                        <p className={formStyles.form_control__error}>{errors.subject?.message}</p>
                      </div>
                  </div>
                )
                : null 
              }
              <div className={formStyles.form_control}>
                <label htmlFor="message" className={formStyles.form_control__label}>
                  <span className='text-black'>
                    Votre message
                  </span>
                </label>
                <textarea placeholder="Nous sommes à votre écoute, dites nous tout." id="message"
                    className={formStyles.form_control__input}
                    {...register("message")} rows={4}></textarea>
                <p className={formStyles.form_control__error}>{errors.message?.message}</p>
              </div>

              <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    <label htmlFor="phone" className={formStyles.form_control__label}>
                      <span className='text-black'>Comment souhaitez vous être contacté</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {
                        CONTACT_CHANNEL.map((channel: any, index: number) => (
                        <label key={`channel-${index}`} htmlFor={channel.value} 
                          className={`border py-3 border-green-500 text-center rounded-md font-extralight cursor-pointer ${contactChannel && contactChannel.indexOf(channel.value) > -1 ? 'bg-green-500 text-white' : ''}`}
                        >
                          <input type="checkbox" id={channel.value}
                            value={channel.value} className='hidden'
                            {...register("contactChannel")}
                          /> {channel.label} 
                        </label>
                        ))
                      }
                    </div>
                    <p className={formStyles.form_control__error}>{errors.contactChannel?.message}</p>
                  </div>
              </div>
              <div className="font-extralight mb-2 text-center text-sm">
                <p className="mb-1">Esic a besoin de vos informations personnelles pour vous contacter au sujet de ses produits et services.</p>
                <p className="mb-1">Vous pouvez vous désabonner de ces communications à tout moment. </p> 
                <p className="mb-1">Consultez notre Politique de confidentialité pour en savoir plus sur nos modalités de désabonnement, ainsi que sur nos politiques de confidentialité et sur notre engagement vis-à-vis de la protection et de la vie privée.</p>
              </div>
              <button type='submit' className='rounded-md bg-secondary text-white border-yellow-500 px-4 py-3'>
                <span>Envoyer</span>
              </button>
            </form>
            )
            : null
          }
        </aside>
      </section>
    </OpenedLayout>
  );
}
