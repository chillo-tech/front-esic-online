import Head from 'next/head';
import OpenedLayout from 'containers/opened';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CONTACT_CHANNEL,
  EMAIL_PATTERN,
  REQUIRED_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
  USER_PROFILE,
  getDisplayedDate,
  LIEN_POLITIQUE_SECURITE,
  PREFERED_LOCATION,
  ACCEPT_FORM_ERROR_MESSAGE,
} from 'utils';
import { useMutation, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { add, getDetail, fetchData } from 'services/index';
import formStyles from 'styles/Form.module.css';
import Message from 'components/shared/Message';
import { BsPhone } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { useContext, useRef, useState } from 'react';
import { ApplicationContext } from 'context/ApplicationContext';
import HighlightedText from 'components/shared/HighlightedText';
import Link from 'next/link';

export type Message = {
  name: string;
  formation: string;
  message: string;
  email: string;
  phone: string;
  profile: string;
  subject: string;
  contactChannel: string[];
  sessions: string[];
  preferedLocation: string[];
  acceptForm: boolean;
};

const schema = yup
  .object({
    name: yup.string().trim().required('name Ce champ est requis'),
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
    formation: yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
    contactChannel: yup
      .array()
      .of(yup.string())
      .min(1)
      .required(REQUIRED_ERROR_MESSAGE)
      .nullable(),
    preferedLocation: yup
      .array()
      .of(yup.string())
      .min(1)
      .required(REQUIRED_ERROR_MESSAGE)
      .nullable(),
    sessions: yup
      .array()
      .of(yup.string())
      .min(1)
      .required(REQUIRED_ERROR_MESSAGE)
      .nullable(),
    acceptForm: yup.bool().oneOf([true], ACCEPT_FORM_ERROR_MESSAGE).required(),
    message: yup
      .string()
      .trim()
      .required(REQUIRED_ERROR_MESSAGE)
      .min(30, "Dites nous en un peu plus s'il vous plait(min. 30)"),
  })
  .required();

function Candidature({ params }: any) {
  const { updateLastTraining } = useContext(ApplicationContext);
  const router = useRouter();

  const onSubmit = (message: Message) => {
    const mappedSessions = message.sessions.map((sessionId: String) => {
      if (data && data?.data.data.sessions) {
        const session = data?.data.data.sessions.find(
          (item: any) => item.sessions_id.id == sessionId
        );
        return session
          ? `Du ${getDisplayedDate(
              session.sessions_id.debut
            )} Au ${getDisplayedDate(session.sessions_id.fin)}`.replaceAll(
              ',',
              ''
            )
          : sessionId;
      }
      return sessionId;
    });
    const sessions = mappedSessions.join(', ');
    mutation.mutate({
      ...message,
      formation: selectedTraining.libelle,
      subject: `${message.subject} - Sessions ${sessions}`,
      contactChannel: `${contactChannel.join(', ').toLowerCase()}`,
      preferedLocation: `${preferedLocation.join(', ').toLowerCase()}`,
    });
  };
  const onError = (errors: any, e: any) => null;

  const handleError = (error: any) => {
    error.preventDefault();
    router.push('/');
  };

  const mutation = useMutation({
    mutationFn: (message: any) => add('/contacts', message),
  });

  const [query, setQuery] = useState<string>('');
  const [selectedTraining, setSelectedTraining] = useState<any>({});
  const [filteredTraining, setFilteredTraining] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Message>({
    mode: 'onChange',
    defaultValues: { profile: 'particulier' },
    resolver: yupResolver(schema),
  });
  const { data } = useQuery<any>({
    queryKey: ['formations', 'detail', params.slug, params.id],
    queryFn: () =>
      fetchData({
        fields: 'id,libelle,sessions.id,sessions.sessions_id.*',
        path: `formations/${params.id}`,
      }),
    onSuccess: (data: any) => {
      setSelectedTraining(data.data.data);
      updateLastTraining(data.data.data);
      setQuery(data?.data.data.libelle);
      setValue(
        'subject',
        `Candidature pour la formation ${data?.data.data.libelle}`,
        { shouldValidate: true, shouldDirty: true, shouldTouch: true }
      );
      setValue('formation', `${data?.data.data.libelle}`, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      if (data?.data.data.sessions && data?.data.data.sessions.length === 0) {
        setValue('sessions', ["Aucune n'est programmée"], {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }
    },
    onError: () => {
      router.push('/page-inconnue');
    },
  });

  const contactChannel = watch('contactChannel');
  const preferedLocation = watch('preferedLocation');

  const sessions = watch('sessions');

  const handleTrainingQueryBlur = (event: any) => {
    setFilteredTraining([]);
    setSelectedTraining({});
  };

  const handleSelectedTraining = (item: any) => {
    setSelectedTraining(item);
    setQuery(item.libelle);
    setFilteredTraining([]);
  };

  const handleTrainingSearch = async (event: any) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
    if (value && value.trim().length > 2) {
      try {
        const data = await fetchData({
          fields: 'id,libelle,sessions.id,sessions.sessions_id.*',
          path: 'formations',
          search: value,
          limit: 5,
        });
        setFilteredTraining(data?.data.data);
      } catch (e) {
        setFilteredTraining([]);
      }
    }
  };

  return (
    <OpenedLayout>
      <Head>
        <title> ESIC|inscrivez vous à une formation</title>
      </Head>
      <section className="bg-app-blue p-4 pt-24 pb-20 mx-auto flex flex-wrap font-sans">
        <div className="w-full text-white text-center mb-5">
          <div className="md:px-20">
            <BsPhone color="white" className=" w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-3xl sm:text-4xl font-bold">
              Inscrivez vous à un cours
            </h3>
          </div>
          <div className="w-full row relative hidden md:block">
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
                Vous pouvez vous désabonner de ces communications à tout moment.{' '}
              </p>
              <p className="mb-1">
                Consultez notre Politique de confidentialité pour en savoir plus
                sur nos modalités de désabonnement, ainsi
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
              onSubmit={handleSubmit(onSubmit, onError)}
              className=" w-full mt-2 col-span-6 px-3 md:px-6 pb-6">
              <div className="grid">
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
              <div className="grid">
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
                <div className={`${formStyles.form_control} !mr-0 !mt-0`}>
                  <div className={formStyles.form_control}>
                    <select
                      {...register('profile')}
                      className={formStyles.form_control__input}>
                      <option disabled selected value="">
                        Vous êtes
                      </option>
                      {USER_PROFILE.map((profile: any, index: number) => (
                        <option
                          key={`c-profile-${index}`}
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

              <div className="grid md:gap-6 py-4">
                <div className={`${formStyles.form_control} !mr-0 !mt-0`}>
                  <div
                    className={`${formStyles.form_control} !mr-0 !mt-0 relative`}>
                    <GoSearch className="absolute right-[5px] inset-y-2 text-xl text-app-white" />
                    <input
                      type="text"
                      id="formation"
                      placeholder="Recherchez une formation"
                      className={formStyles.form_control__input}
                      value={query}
                      onChange={handleTrainingSearch}
                    />
                    <div className="results relative" style={{ height: '1px' }}>
                      {filteredTraining && filteredTraining.length ? (
                        <ul className="absolute left-0 top-0 right-0 z-50 bg-white">
                          {filteredTraining.map((item: any, index: any) => (
                            <li key={`search-${index}-${item.id}`}>
                              <button
                                type="button"
                                onClick={() => handleSelectedTraining(item)}
                                title={item.libelle}
                                className="block bg-white py-2 px-2 text-gray-700 text-md text-left">
                                <HighlightedText
                                  text={item.libelle}
                                  pattern={query}
                                />
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <p className={formStyles.form_control__error}>
                      {errors.formation?.message}
                    </p>
                  </div>
                </div>
              </div>
              {selectedTraining &&
              selectedTraining.sessions &&
              selectedTraining.sessions.length ? (
                <div className="sessions py-2">
                  <label
                    htmlFor="sessions"
                    className={formStyles.form_control__label}>
                    <span className="text-black font-semibold">
                      Quelle session pourrait vous convenir
                    </span>
                  </label>
                  <div
                    aria-describedby="sessions"
                    className="grid gap-4 md:grid-cols-2">
                    {selectedTraining.sessions.map(
                      (session: any, index: number) => (
                        <label
                          key={`session-${session.sessions_id.id}-${index}`}
                          htmlFor={`session-${session.sessions_id.id}-${index}`}
                          className={`
                            border flex flex-col py-2 
                            border-app-blue text-center 
                            rounded-md font-extralight cursor-pointer 
                            hover:!bg-app-blue hover:!text-white
                            ${
                              sessions &&
                              sessions.indexOf(session.sessions_id.id) > -1
                                ? 'bg-app-blue text-white'
                                : 'text-app-blue'
                            }`}>
                          <input
                            type="checkbox"
                            id={`session-${session.sessions_id.id}-${index}`}
                            value={session.sessions_id.id}
                            className="hidden"
                            {...register('sessions')}
                          />
                          <span className="mb-0">
                            Du {getDisplayedDate(session.sessions_id.debut)}
                          </span>
                          <span className="mb-0">
                            Au {getDisplayedDate(session.sessions_id.fin)}
                          </span>
                        </label>
                      )
                    )}
                    <label
                      key={`any`}
                      htmlFor="any"
                      className={`
                            border flex flex-col py-2 
                            items-center justify-center
                            border-app-blue text-center 
                            rounded-md font-extralight cursor-pointer 
                            hover:!bg-app-blue hover:!text-white
                            ${
                              sessions && sessions.indexOf('Aucune') > -1
                                ? 'bg-app-blue text-white'
                                : 'text-app-blue'
                            }`}>
                      <input
                        type="checkbox"
                        id="any"
                        value="Aucune"
                        className="hidden"
                        {...register('sessions')}
                      />
                      <span className="mb-0">Peu importe</span>
                    </label>
                  </div>
                </div>
              ) : null}
              <div className={formStyles.form_control}>
                <textarea
                  placeholder="Dites nous en plus sur vos attentes"
                  id="message"
                  className={formStyles.form_control__input}
                  {...register('message')}
                  rows={6}></textarea>
                <p className={formStyles.form_control__error}>
                  {errors.message?.message}
                </p>
              </div>

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
              <div className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
                <div className={formStyles.form_control}>
                  <label className="w-full text-black">
                    Que préférez vous pour votre formation ?
                  </label>
                  <div className={`grid md:grid-cols-2 gap-4 my-2`}>
                    <div className="flex items-center">
                      <input
                        className="hidden"
                        type="checkbox"
                        value={PREFERED_LOCATION.DISTANCE}
                        id={PREFERED_LOCATION.DISTANCE}
                        {...register('preferedLocation')}
                      />
                      <label
                        htmlFor={PREFERED_LOCATION.DISTANCE}
                        className={`border w-full py-3 border-app-blue text-center rounded-md font-extralight cursor-pointer ${
                          preferedLocation &&
                          preferedLocation.indexOf(PREFERED_LOCATION.DISTANCE) >
                            -1
                            ? 'bg-app-blue text-white'
                            : ''
                        }`}>
                        En ligne
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        value={PREFERED_LOCATION.PRESENTIEL}
                        id={PREFERED_LOCATION.PRESENTIEL}
                        {...register('preferedLocation')}
                      />
                      <label
                        htmlFor={PREFERED_LOCATION.PRESENTIEL}
                        className={`border w-full py-3 border-app-blue text-center rounded-md font-extralight cursor-pointer ${
                          preferedLocation &&
                          preferedLocation.indexOf(
                            PREFERED_LOCATION.PRESENTIEL
                          ) > -1
                            ? 'bg-app-blue text-white'
                            : ''
                        }`}>
                        En présentiel
                      </label>
                    </div>
                  </div>
                  <p className={formStyles.form_control__error}>
                    {errors.preferedLocation?.message}
                  </p>
                </div>
              </div>
              <div className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
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
      </section>
    </OpenedLayout>
  );
}
export default Candidature;

export async function getServerSideProps(context: any) {
  const { query } = context;
  let params: any = {};

  if (!query) {
    return {
      notFound: true,
    };
  }
  if (!query.formation) {
    return {
      notFound: true,
    };
  }

  if (query.formation) {
    const id = query.formation.substring(query.formation.lastIndexOf('-') + 1);

    params = {
      id,
      slug: query.formation,
      type: 'formation',
    };
  }

  return { props: { params } };
}
