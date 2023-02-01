import AllTrainings from 'components/shared/AllTrainings';
import Articles from 'components/shared/Articles';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Trainings from 'components/trainings';
import OpenedLayout from 'containers/opened/index.back';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { getDisplayedDate } from 'utils/DateFormat';
import * as yup from 'yup';
import {
  CONTACT_CHANNEL,
  EMAIL_PATTERN,
  REQUIRED_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
  USER_PROFILE,
  DEMANDE_CANDIDAT,
  votreDemandeConcerne,
  regionsEntreprise,
  LIEN_POLITIQUE_SECURITE,
  PREFERED_LOCATION,
} from 'utils/index';
import formStyles from 'styles/Form.module.css';
import Message from 'components/shared/Message';
import { useMutation } from 'react-query';
import { add } from 'services/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { ApplicationContext } from 'context/ApplicationContext';
import Link from 'next/link';

export type Message = {
  name: string;
  enterpriseName: string;
  message: string;
  cv: any;
  email: string;
  phone: string;
  profile: string;
  enterpriseRegion: string;
  candidatureStarted: string;
  demandeSubject: string;
  subject: string;
  contactChannel: string[];
  sessions: string[];
  job: string;
  preferedLocation: string;
  acceptForm: boolean;
};

const schema = yup
  .object({
    name: yup.string().trim().required('Ce champ est requis'),
    enterpriseName: yup.string().trim(),
    phone: yup
      .string()
      .required(PHONE_ERROR_MESSAGE)
      .min(10, PHONE_ERROR_MESSAGE),
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required(EMAIL_ERROR_MESSAGE)
      .matches(EMAIL_PATTERN, { message: EMAIL_ERROR_MESSAGE }),
    enterpriseRegion: yup.string().trim(),
    job: yup.string().trim(),
    preferedLocation: yup.string().trim().required(),
    acceptForm: yup.bool().required(),
    candidatureStarted: yup.string().trim(),
    demandeSubject: yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
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

function Page({ data, sessions, displayTrainings = false }: any) {
  const [displayEnterpriseFields, setDisplayEnterpriseFields] = useState(false);
  const [displayCandidatFields, setDisplayCandidatFields] = useState(false);

  const router = useRouter();

  const onSubmit = (data: Message) => {
    mutation.mutate({
      ...data,
      contactChannel: contactChannel.join(', ').toLowerCase(),
    });
  };

  const onError = (errors: any, e: any) => console.log({ errors });

  const handleError = (error: any) => {
    error.preventDefault();
    router.push('/');
  };

  const mutation = useMutation({
    mutationFn: (message: any) => add('/contacts', message),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Message>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const contactChannel = watch('contactChannel');
  const preferedLocation = watch('preferedLocation');

  useEffect(() => {
    if (data?.formulaire === 'candidat') {
      setDisplayCandidatFields(true);
      setDisplayEnterpriseFields(false);
    } else if (data?.formulaire === 'entreprise') {
      setDisplayEnterpriseFields(true);
      setDisplayCandidatFields(false);
    }
  }, []);

  return (
    <OpenedLayout>
      <section className="bg-white">
        <PageHeader data={data} />
        {data.description ? (
          <div className="container py-10">
            <RenderHtmlContent
              classes="text-lg mb-6"
              content={data.description}
            />
            <AllTrainings
              text={'Contactez nous'}
              link="/contactez-nous"
              classes="md:w-1/5 border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue"
            />
          </div>
        ) : null}
        {data.articles && data.articles.length ? (
          <section className="grid bg-slate-100 ">
            <div className="container">
              <Articles data={data.articles} />
            </div>
          </section>
        ) : null}
        {displayTrainings ? (
          <section className="bg-white">
            <Trainings title="Formations éligibles au CPF" />
            <div className="container pb-5">
              <AllTrainings classes="border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue" />
            </div>
          </section>
        ) : null}
        {sessions && sessions.length ? (
          <>
            <section className="px-2 mx-auto py-10 bg-app-blue">
              <div className="container">
                <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
                  <span className="px-10 py-3 text-white">
                    Toutes nos sessions
                  </span>
                  <span className="border-b-2 border-white px-10 w-64 mt-2" />
                </h2>
                {sessions.map((session: any) => (
                  <article
                    key={session.id}
                    className=" md:py-5 py-10 text-lg grid items-center mb-3 bg-white px-6 md:grid-cols-7 rounded-lg text-gray-700">
                    <h2 className="py-2 text-green-700 md:col-span-4 font-extrabold text-center md:text-left">
                      {session.libelle}
                    </h2>
                    <div className="py-2 dates md:col-span-2 items-center md:items-start flex flex-col">
                      <p className="flex items-center">
                        <AiOutlineCalendar className="mr-1" />
                        Du {getDisplayedDate(session.debut)}
                      </p>
                      <p className="flex items-center">
                        <AiOutlineCalendar className="mr-1" />
                        Au {getDisplayedDate(session.fin)}
                      </p>
                    </div>
                    <p className="py-2 items-center justify-center flex">
                      <AllTrainings
                        text={'Je suis intéressé(e)'}
                        link={(data?.formulaire === 'candidat' || data?.formulaire === 'entreprise') ? "#section-formulaire": "/contactez-nous"}
                        icon={false}
                        classes="!text-center !text-xs border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue"
                      />
                    </p>
                  </article>
                ))}
                <AllTrainings
                  text={'Contactez nous'}
                  link={"/contactez-nous"}
                  classes="border border-white text-white hover:bg-transparent hover:bg-white hover:text-app-blue hover:border hover:border-white"
                />
              </div>
            </section>
          </>
        ) : null}
        {(data?.formulaire === 'candidat' ||
          data?.formulaire === 'entreprise') && (
          <div id="section-formulaire" className='w-full h-full py-4 pb-8 bg-gray-50 bg-no-repeat bg-left bg-contain bg-[url("/images/pages/offers-left-arc.svg")]'>
            <div className="container mt-4">
              <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
                <span className="px-10 py-3">Posez nous votre question</span>
                <span className="border-b-2 border-gray-500 px-10 w-64 mt-2"></span>
              </h2>
            </div>
            <aside className="w-full bg-white mx-auto md:w-[70%] border rounded-xl md:rounded-3xl grid grid-cols-6 gap-4 md:p-4 md:pb-16">
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
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className=" w-full mt-2 col-span-6 px-3 md:px-6 pb-6">
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className={`${formStyles.form_control} !mr-0 !mt-0`}>
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
                    <div className={`${formStyles.form_control} !mr-0 !mt-0`}>
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
                  <div className={`${formStyles.form_control} !mr-0 !mt-0`}>
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

                  {displayCandidatFields || displayEnterpriseFields ? (
                    <>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <select
                            {...register('demandeSubject')}
                            className={formStyles.form_control__input}>
                            <option disabled selected value="">
                              Votre demande concerne ?
                            </option>
                            {displayCandidatFields ? (
                              <option
                                key={`c-object-demande-0`}
                                value={DEMANDE_CANDIDAT.value}>
                                {DEMANDE_CANDIDAT.label}
                              </option>
                            ) : null}
                            {votreDemandeConcerne.map(
                              (demande: any, index: number) => (
                                <option
                                  key={`c-object-demande-${index + 1}`}
                                  value={demande.value}>
                                  {demande.label}
                                </option>
                              )
                            )}
                          </select>
                          <p className={formStyles.form_control__error}>
                            {errors.demandeSubject?.message}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className={formStyles.form_control}>
                    <textarea
                      placeholder="Votre message"
                      id="message"
                      className={formStyles.form_control__input}
                      {...register('message')}
                      rows={6}></textarea>
                    <p className={formStyles.form_control__error}>
                      {errors.message?.message}
                    </p>
                  </div>

                  {displayCandidatFields ? (
                    <>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <select
                            {...register('candidatureStarted')}
                            className={formStyles.form_control__input}>
                            <option disabled selected value="">
                              Avez vous commencé votre parcours de candidature
                              ?
                            </option>
                            <option
                              key={`c-candidature-started-yes}`}
                              value={'oui'}>
                              Oui
                            </option>
                            <option
                              key={`c-candidature-started-no}`}
                              value={'non'}>
                              Non
                            </option>
                          </select>
                          <p className={formStyles.form_control__error}>
                            {errors?.candidatureStarted?.message}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <label
                            htmlFor="cv"
                            className="form-label inline-block mb-2 font-semibold">
                            Mettre à jour votre CV (optionel)
                          </label>
                          <input
                            {...register('cv')}
                            className="form-control block w-full px-3 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="cv"
                          />
                        </div>
                      </div>
                    </>
                  ) : null}

                  {displayEnterpriseFields ? (
                    <>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <input
                            type="text"
                            id="enterpriseName"
                            placeholder="Nom de la société"
                            className={formStyles.form_control__input}
                            {...register('enterpriseName')}
                          />
                          <p className={formStyles.form_control__error}>
                            {errors.enterpriseName?.message}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <input
                            type="text"
                            id="job"
                            placeholder="Votre poste"
                            className={formStyles.form_control__input}
                            {...register('job')}
                          />
                          <p className={formStyles.form_control__error}>
                            {errors.job?.message}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                        <div className={formStyles.form_control}>
                          <select
                            {...register('enterpriseRegion')}
                            className={formStyles.form_control__input}>
                            <option disabled selected value="">
                              Dans quelle région se situe votre entreprise ?
                            </option>
                            {regionsEntreprise.map(
                              (region: any, index: number) => (
                                <option
                                  key={`c-region-${index}`}
                                  value={region.value}>
                                  {region.label}
                                </option>
                              )
                            )}
                          </select>
                          <p className={formStyles.form_control__error}>
                            {errors?.enterpriseRegion?.message}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className={`${formStyles.form_control} md:pt-4`}>
                    <div className={formStyles.form_control}>
                      <label
                        htmlFor="phone"
                        className={formStyles.form_control__label}>
                        <span className="text-black">
                          Comment souhaitez vous être contacté
                        </span>
                      </label>
                      <div className="grid md:grid-cols-2 gap-4 my-2">
                        {CONTACT_CHANNEL.map((channel: any, index: number) => (
                          <label
                            key={`channel-${index}`}
                            htmlFor={channel.value}
                            className={`border py-3 border-app-blue text-center rounded-md font-extralight cursor-pointer ${
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
                  <div
                    className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                    <div className={formStyles.form_control}>
                      <label className="w-full text-black">Préférence :</label>
                      <div
                        className={`grid md:grid-cols-2 gap-4 my-2`}>
                        <div className="flex items-center mr-5">
                          <input
                            className="hidden"
                            type="radio"
                            value={PREFERED_LOCATION.DISTANCE}
                            id={PREFERED_LOCATION.DISTANCE}
                            {...register('preferedLocation')}
                          />
                          <label
                            htmlFor={PREFERED_LOCATION.DISTANCE}
                            className={`border w-full py-3 border-app-blue text-center rounded-md font-extralight cursor-pointer ${
                              preferedLocation === PREFERED_LOCATION.DISTANCE
                                ? 'bg-app-blue text-white'
                                : ''
                            }`}>
                            Distance
                          </label>
                        </div>
                        <div className="flex items-center mr-5">
                          <input
                            type="radio"
                            className="hidden"
                            value={PREFERED_LOCATION.PRESENTIEL}
                            id={PREFERED_LOCATION.PRESENTIEL}
                            {...register('preferedLocation')}
                          />
                          <label
                            htmlFor={PREFERED_LOCATION.PRESENTIEL}
                            className={`border w-full py-3 border-app-blue text-center rounded-md font-extralight cursor-pointer ${
                              preferedLocation === PREFERED_LOCATION.PRESENTIEL
                                ? 'bg-app-blue text-white'
                                : ''
                            }`}>
                            Présentiel
                          </label>
                        </div>
                      </div>
                      <p className={formStyles.form_control__error}>
                        {errors.preferedLocation?.message}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                    <div className={formStyles.form_control}>
                      <div
                        className={`${formStyles.form_control__text} flex-row border-b-0 items-center`}>
                        <input
                          type="checkbox"
                          className="inline-block"
                          id="acceptForm"
                          {...register('acceptForm')}
                        />
                        <label
                          className="text-gray-600 w-full pl-4 pr-4"
                          htmlFor="acceptForm">
                          En transmettant ce formulaire, vous reconnaissez et
                          accepté notre {'  '}
                          <Link
                            href={LIEN_POLITIQUE_SECURITE}
                            className="text-app-blue underline">
                            politique de protection de vos données personnelles.
                          </Link>
                        </label>
                      </div>
                      <p className={formStyles.form_control__error}>
                        {errors.acceptForm?.message}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <button
                      type="submit"
                      className="rounded-md bg-app-blue text-white border-yellow-500 px-24 uppercase py-3">
                      <span>Envoyer</span>
                    </button>
                  </div>
                </form>
              ) : null}
            </aside>
          </div>
        )}
      </section>
    </OpenedLayout>
  );
}

export default Page;
