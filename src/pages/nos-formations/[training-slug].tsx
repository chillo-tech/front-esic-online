import OpenedLayout from 'containers/opened';
import React, { useContext, useEffect, useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { useMutation, useQuery } from 'react-query';
import { add, getDetail, getSubCategories } from 'services/index';
import { getDisplayedDate } from 'utils/DateFormat';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_PATTERN,
  EMPTY_SESSION,
  slugify,
  TRAINING_KEYS,
} from 'utils/index';
import { useRouter } from 'next/router';
import formStyles from 'styles/Form.module.css';
import ContactUsText from 'components/shared/ContactUsText';
import Message from 'components/shared/Message';
import { ApplicationContext } from 'context/ApplicationContext';
import Header from 'components/detail-formation/Header';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Metadata from 'components/metadata';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
import AllTrainings from 'components/shared/AllTrainings';
import Trainings from 'components/trainings';
import { Spinner } from 'flowbite-react';
import Debug from 'components/Debug';
var classNames = require('classnames');

export type Message = {
  email: string;
  formation?: string;
  libelle_formation?: string;
  fichier?: string;
};
const schema = yup
  .object({
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required(EMAIL_ERROR_MESSAGE)
      .matches(EMAIL_PATTERN, { message: EMAIL_ERROR_MESSAGE }),
  })
  .required();

function Training({ id, slug }: { id: string; slug: string }) {
  const [relatedTraining, setRelatedTraining] = useState<any>([]);
  const [training, setTraining] = useState<any>(null);
  const { updateLastTraining, displayInscriptionButton } =
    useContext(ApplicationContext);
  const mutation = useMutation({
    mutationFn: (message: Message) => add('/telechargements', message),
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Message>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [displayDownloadForm, setDisplayDownloadForm] = useState(false);
  const { data } = useQuery<any>({
    queryKey: ['formations', 'detail', slug, id],
    queryFn: () =>
      getDetail({
        id,
      }),
    onSuccess: (data: any) => {
      setTraining(data.data.data);
      updateLastTraining(data.data.data);
      updateCategoryTraining(data.data.data);
    },
    onError: () => {
      router.push('/page-inconnue');
    },
  });

  const trainingId = training?.id;
  useQuery<any>({
    enabled: !!trainingId,
    queryKey: ["SousCategories", training?.souscategories[0]?.souscategories_id?.id],
    queryFn: () => getSubCategories({id: training?.souscategories[0]?.souscategories_id?.id as string, trainingsLimit: 3}),
    onSuccess: ({data}: any) => {
      setRelatedTraining(data?.data?.formations);
    },
  });

  useEffect(() => {
    displayInscriptionButton(training);
  }, [training, displayInscriptionButton]);

  const toogleDownloadForm = () => setDisplayDownloadForm(!displayDownloadForm);

  const onSubmit = (formData: Message) => {
    mutation.mutate({
      ...formData,
      libelle_formation: data?.data.data.libelle,
      formation: data?.data.data.id,
      fichier: data?.data.data.programmepdf,
    });
  };
  const handleError = (error: any) => {
    error.preventDefault();
    mutation.reset();
    router.push('/contactez-nous');
  };
  const updateCategoryTraining = (trainingInfos: any) => {

    
  }
  return (
    <OpenedLayout>
      <Metadata entry={training} />
      <main className="bg-white detail-formation">
        {training ? (
          <>
            <Header
              training={training}
              toogleDownloadForm={toogleDownloadForm}
            />
            <section className="bg-white py-10">
              <div className="md:px-0 container grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 col-span-5">
                  {TRAINING_KEYS.filter((item) => training[item.key]).map(
                    (item) => (
                      <article
                        key={`${id}-${item.key}-${slugify(item.label)}`}
                        className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg mb-10 detail-formation">
                        <h2 className="text-xl md:text-3xl font-bold mb-0 pb-0'">
                          {item.label}
                        </h2>
                        <RenderHtmlContent
                          content={training[item.key]}
                          classes={`text-gray-600 font-light text-lg py-4 description ${
                            item['classes'] ? item['classes'] : 'programme'
                          }`}
                        />
                      </article>
                    )
                  )}
                </div>
                <div className="w-full col-span-5 mx-auto md:fixed scrollbar-hide md:w-96 md:z-30 md:h-screen md:pb-40 md:top-28 md:right-24 md:overflow-y-scroll md:overflow-scroll scroll-smooth">
                  <div className=" w-full mx-auto bg-white rounded-lg shadow-md">
                    <HomeTrainingItem
                      training={training}
                      displayTitle={false}
                      classes="bg-app-light-green rounded-t-lg"
                    />
                    {training.sessions && training.sessions.length ? (
                      <div className="hidden md:block bg-app-light-green px-5 ">
                        <div className="sessions py-2">
                          <h3 className="mt-2 font-semibold text-2xl mb-2">
                            Nos prochaines sessions
                          </h3>
                          {training?.sessions.map((item: any, index: number) =>
                            Date.parse(item?.sessions_id.debut) >=
                            Date.now() ? (
                              <div
                                className="bg-white py-2 shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-[rgba(1,129,0)]"
                                key={`session-${id}-${index}`}>
                                <p className="mb-0">
                                  Du {getDisplayedDate(item.sessions_id.debut)}
                                </p>
                                <p className="mb-0">
                                  Au {getDisplayedDate(item.sessions_id.fin)}
                                </p>
                              </div>
                            ) : null
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-app-light-green px-5">
                        <p className="text-center">{EMPTY_SESSION}</p>
                        <ContactUsText classes="justify-center" />
                      </div>
                    )}
                    <AllTrainings
                      uppercase={false}
                      icon={false}
                      link="/contactez-nous"
                      text="Comment financer la formation ?"
                      classes="bg-none text-app-blue font-bold md:text-xl py-4"
                    />
                  </div>
                </div>
              </div>
            </section>
            {
              (relatedTraining && relatedTraining.length)
              ? (
                <>
                <h2 className="container md:px-0 text-2xl md:text-4xl font-extrabold">
                    Autres formations
                </h2>
                <div className="grid gap-4 md:py-6 md:grid-cols-3 md:px-0 container">
                {
                  relatedTraining.slice(0, 3).map((training: any, index: number) =>(
                    <HomeTrainingItem 
                      classes="bg-slate-50 rounded-lg shadow-md pb-4" 
                      training={training.formations_id} 
                      link={`/nos-formations/${slugify(training.formations_id.libelle)}-${training.formations_id.id}`}
                      key={`${training.formations_id.id}-${index}`} 
                    /> 
                  ))
                }
                </div>
                <p className="pb-8">
                  <AllTrainings
                      classes={`
                        border border-app-blue text-app-blue 
                        hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue
                      `}
                  />
                </p>
                </>
              ) 
              : null 
            }
            
          </>
        ) : (
          <div className="h-screen text-center flex justify-center items-center">
            <div>
              <Spinner color="info" aria-label="Loading..." size="xl" />
            </div>
          </div>
        )}
      </main>
      <section
        className={classNames(
          { fixed: displayDownloadForm, hidden: !displayDownloadForm },
          `text-white h-screen overflow-hidden bg-app-blue fixed left-0 top-0 right-0 bottom-0 z-50 font-sans flex flex-col justify-between items-center`
        )}>
        <p className="pdf-form container mx-auto flex justify-end pt-7 px-2">
          <button
            type="button"
            onClick={() => {
              setDisplayDownloadForm(false);
              mutation.reset();
            }}>
            <GiCancel className="text-4xl" />
          </button>
        </p>
        <div className="pdf-form container mx-auto flex flex-col md:items-center justify-center">
          {mutation.isError ? (
            <Message
              type="error"
              firstMessage="Une erreur est survenue, nous allons la résoudre sous peu"
              secondMessage="N'hésitez pas à nous passer un coup de fil"
              action={handleError}
              actionLabel="Contactez nous"
            />
          ) : null}
          {mutation.isSuccess ? (
            <Message
              type="success"
              firstMessage="Merci de votre intérêt pour cette formation"
              secondMessage="Nous venons de vous transmettre un mail contenant le lien pour télécharger le programme"
              action={() => {
                setDisplayDownloadForm(false);
                mutation.reset();
              }}
              actionLabel="C'est noté"
            />
          ) : null}
          {mutation.isIdle ? (
            <>
              <h2 className="text-center text-xl md:text-4xl leading-10 font-extralight mt-4 flex flex-col items-center">
                Téléchargez le programme de la formation
                <span className="text-white text-3xl py-3 font-bold mb-0 pb-0">
                  {training?.libelle}
                </span>
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 grid md:px-20 px-2 !font-extralight">
                <label
                  htmlFor="email"
                  className={formStyles.form_control__label}>
                  <span className="text-white text-2xl font-extralight">
                    Votre email
                  </span>
                  <p className="text-slate-300 !text-sm">
                    Promis nous n&apos;allons pas spammer{' '}
                  </p>
                </label>
                <div className="flex flex-col">
                  <div className="grid md:grid-cols-8">
                    <input
                      type="text"
                      id="email"
                      placeholder="Votre email"
                      className={`mb-1 md:mb-0 w-full !text-black border-gray-300 py-3 rounded-l-lg rounded-r-lg md:rounded-r-none shadow-sm focus:border-indigo-500 md:col-span-7 !md:rounded-r-none`}
                      {...register('email')}
                    />
                    <button
                      type="submit"
                      className="bg-secondary text-white border-yellow-500 px-4 py-4 rounded-md md:rounded-l-none !md:mt-1 md:block w-full">
                      <span>Télécharger</span>
                    </button>
                  </div>
                  <p className={formStyles.form_control__error}>
                    {errors.email?.message}
                  </p>
                </div>
              </form>
            </>
          ) : null}
        </div>
        <p />
      </section>
    </OpenedLayout>
  );
}

export default Training;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['training-slug'].substring(
    params['training-slug'].lastIndexOf('-') + 1
  );
  return { props: { ...params, id, slug: params['training-slug'] } };
}