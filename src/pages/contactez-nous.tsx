import Head from 'next/head';
import OpenedLayout from '../containers/opened';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  contact,
  CONTACT_CHANNEL,
  COMPANY_PROFILE_OPTIONS,
  EMAIL_PATTERN,
  REQUIRED_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
  USER_PROFILE,
  USER_PROFILE_OPTIONS,
  cn,
  loaderProp,
} from '../utils/index';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { add } from '../services/index';
import formStyles from 'styles/Form.module.css';
import Message from 'components/shared/Message';
import { useState, useContext } from 'react';
import { ApplicationContext } from 'context/ApplicationContext';
import { BsPhone } from 'react-icons/bs';
import Image from 'next/image';
import classNames from 'classnames';
import DisplayImage from 'components/shared/DisplayImage';

export type Message = {
  name: string;
  message: string;
  email: string;
  phone: string;
  profile: string;
  subject: string;
  contactChannel: string[];
};

const schema = yup
  .object({
    name: yup.string().trim().required('Ce champ est requis'),
    phone: yup
      .string()
      .required(PHONE_ERROR_MESSAGE)
      .min(10, PHONE_ERROR_MESSAGE),
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required(EMAIL_ERROR_MESSAGE)
      .matches(EMAIL_PATTERN, { message: EMAIL_ERROR_MESSAGE }),
    profile: yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
    subject: yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
    contactChannel: yup
      .array()
      .of(yup.string())
      .min(1)
      .required(REQUIRED_ERROR_MESSAGE)
      .nullable(),
    message: yup
      .string()
      .trim()
      .required(REQUIRED_ERROR_MESSAGE)
      .min(30, "Dites nous en un peu plus s'il vous plait(min. 30)"),
  })
  .required();

export default function Contact() {
  const { state } = useContext(ApplicationContext);
  console.log('Contact', state);
  const [isImageLoading, setLoading] = useState(true);
  const mutation = useMutation({
    mutationFn: (message: any) => add('/contacts', message),
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Message>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const profile = watch('profile');
  const contactChannel = watch('contactChannel');
  const onSubmit = (data: Message) => {
    mutation.mutate({
      ...data,
      contactChannel: contactChannel.join(', ').toLowerCase(),
    });
  };

  const handleError = (error: any) => {
    error.preventDefault();
    router.push('/');
  };

  return (
    <OpenedLayout>
      <Head>
        <title> ESIC| Contactez nous </title>
      </Head>
      <div
        className={classNames(
          `${formStyles.bg_slices_container} relative w-full !px-0`
        )}>
        <DisplayImage
          positionRelative={false}
          image={state?.company?.couverture}
          libelle={state?.company?.couverture?.libelle}
        />
        <div
          style={{ backgroundColor: 'rgba(30, 58, 138, 0.8)' }}
          className={classNames(
            `${formStyles.bg_slices} relative flex flex-col justify-center items-center w-full text-gray-500`
          )}>
          <section className="z-30 bg-left-top bg-origin-padding bg-no-repeat bg-[length:100%_55%] border-gray-400 p-4 pt-24 pb-20 mx-auto flex flex-wrap font-sans">
            <div className="w-full text-white text-center mb-5">
              <div className="md:px-20">
                <BsPhone color="white" className=" w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-3xl sm:text-4xl font-bold">
                  {contact.form.title}
                </h3>
              </div>
              <div className="w-full row relative">
                <BsPhone
                  color="white"
                  className="w-12 h-12 mb-4 mx-auto absolute bottom-[-15%] left-[16%]"
                />
                <div className=" mb-2 w-[80%] my-12 mx-auto md:px-20 text-center text-md">
                  <p className="mb-1">
                    Esic a besoin de vos informations personnelles pour vous
                    contacter au sujet de ses produits et services.
                  </p>
                  <p className="mb-1">
                    Vous pouvez vous désabonner de ces communications à tout
                    moment.{' '}
                  </p>
                  <p className="mb-1">
                    Consultez notre Politique de confidentialité pour en savoir
                    plus sur nos modalités de désabonnement, ainsi
                  </p>
                  <p>
                    que sur nos politiques de confidentialité et sur notre
                    engagement vis-à-vis de la protection et de la vie privée.
                  </p>
                </div>
                <BsPhone
                  color="white"
                  className="w-12 h-12 mb-4 mx-auto absolute bottom-[-15%] right-[16%]"
                />
              </div>
            </div>
            <aside className="w-full bg-white sm:p-6 mx-auto md:w-[85%] border border-gray-200 shadow-lg rounded-3xl grid grid-cols-6 gap-4 md:p-4 md:pb-16">
              {mutation.isError ? (
                <Message
                  type="error"
                  firstMessage="Une erreur est survenue, nous allons la résoudre sous peu"
                  secondMessage="N'hésitez pas à nous passer un coup de fil"
                  action={handleError}
                  actionLabel="Retourner à l'accueil"
                />
              ) : null}
              {mutation.isSuccess ? (
                <Message
                  type="success"
                  firstMessage="Nous avons reçu votre message."
                  secondMessage="Une réponse personnalisée vous sera apportée dans les meilleurs délais."
                  action={handleError}
                  actionLabel="Retourner à l'accueil"
                />
              ) : null}
              {mutation.isIdle ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full mt-2 col-span-6 px-6 pb-6">
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <input
                          type="text"
                          id="name"
                          placeholder="Votre nom"
                          className={formStyles.form_control__input}
                          {...register('name')}
                        />
                        <p className={formStyles.form_control__error}>
                          {errors.name?.message}
                        </p>
                      </div>
                    </div>
                    <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <input
                          type="text"
                          id="email"
                          placeholder="Votre email"
                          className={formStyles.form_control__input}
                          {...register('email')}
                        />
                        <p className={formStyles.form_control__error}>
                          {errors.email?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Votre téléphone"
                          className={formStyles.form_control__input}
                          {...register('phone')}
                        />
                        <p className={formStyles.form_control__error}>
                          {errors.phone?.message}
                        </p>
                      </div>
                    </div>
                    <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <select
                          {...register('profile')}
                          className={formStyles.form_control__input}>
                          <option value="">Vous êtes ?</option>
                          {USER_PROFILE.map((profile: any, index: number) => (
                            <option
                              key={`profile-${index}`}
                              value={profile.value}>
                              {profile.label}
                            </option>
                          ))}
                        </select>
                        <p className={formStyles.form_control__error}>
                          {errors.profile?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  {profile ? (
                    <div className={formStyles.form_control}>
                      <div className={formStyles.form_control}>
                        <select
                          {...register('subject')}
                          className={formStyles.form_control__input}>
                          <option value="">Votre demande concerne</option>
                          {profile === 'particulier'
                            ? USER_PROFILE_OPTIONS.map(
                                (profile: any, index: number) => (
                                  <option
                                    key={`profile-options-${index}`}
                                    value={profile.value}>
                                    {profile.label}
                                  </option>
                                )
                              )
                            : null}
                          {profile === 'entreprise'
                            ? COMPANY_PROFILE_OPTIONS.map(
                                (company: any, index: number) => (
                                  <option
                                    key={`company-options-${index}`}
                                    value={company.value}>
                                    {company.label}
                                  </option>
                                )
                              )
                            : null}
                        </select>
                        <p className={formStyles.form_control__error}>
                          {errors.subject?.message}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  <div className={formStyles.form_control}>
                    <textarea
                      placeholder="Nous sommes à votre écoute, dites nous tout."
                      id="message"
                      className={formStyles.form_control__input}
                      {...register('message')}
                      rows={6}></textarea>
                    <p className={formStyles.form_control__error}>
                      {errors.message?.message}
                    </p>
                  </div>

                  <div className={formStyles.form_control}>
                    <div className={formStyles.form_control}>
                      <label
                        htmlFor="phone"
                        className={formStyles.form_control__label}>
                        <span className="text-left text-black font-semibold">
                          Comment souhaitez vous être contacté
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {CONTACT_CHANNEL.map((channel: any, index: number) => (
                          <label
                            key={`channel-${index}`}
                            htmlFor={channel.value}
                            className={`border py-3 border-app-blue text-center text-gray-500 rounded-md font-extralight cursor-pointer ${
                              contactChannel &&
                              contactChannel.indexOf(channel.value) > -1
                                ? 'bg-app-blue text-white'
                                : ''
                            }`}>
                            <input
                              type="checkbox"
                              id={channel.value}
                              value={channel.value}
                              className="hidden"
                              {...register('contactChannel')}
                            />{' '}
                            {channel.label}
                          </label>
                        ))}
                      </div>
                      <p className={formStyles.form_control__error}>
                        {errors.contactChannel?.message}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-12">
                    <button
                      type="submit"
                      className="rounded-md bg-app-blue text-white border-yellow-500 px-24 uppercase py-3">
                      <span>Envoyer</span>
                    </button>
                  </div>
                </form>
              ) : null}
            </aside>
          </section>
        </div>
      </div>
    </OpenedLayout>
  );
}
