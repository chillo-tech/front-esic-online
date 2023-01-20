import OpenedLayout from "containers/opened";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { GiPositionMarker,GiCancel } from "react-icons/gi";
import { useMutation, useQuery } from "react-query";
import { add, getDetail } from "services/index";
import Image from "next/image";
import { cn, loaderProp } from "utils/image-loader";
import { getDisplayedDate } from "utils/DateFormat";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { EMAIL_ERROR_MESSAGE, EMAIL_PATTERN, EMPTY_SESSION, slugify, TRAINING_KEYS } from "utils/index";
import { useRouter } from "next/router";
import formStyles from 'styles/Form.module.css';
import ContactUsText from "components/shared/ContactUsText";
import Message from "components/shared/Message";
import { ApplicationContext } from "context/ApplicationContext";
import Header from "components/detail-formation/Header";
import RenderHtmlContent from "components/shared/RenderHtmlContent";
var classNames = require('classnames');

export type Message = {
  email: string, 
  formation?: string,
  libelle_formation?:string
  fichier?: string
}
const schema = yup.object({
    email: yup.string()
              .email(EMAIL_ERROR_MESSAGE)
              .required(EMAIL_ERROR_MESSAGE)
              .matches(EMAIL_PATTERN, {message: EMAIL_ERROR_MESSAGE}),
}).required();

function Training({ id, slug }: { id: string, slug: string }) {
  const [training, setTraining] = useState<any>({})
  const {updateLastTraining} = useContext(ApplicationContext);
  const mutation = useMutation({mutationFn: ((message:Message) => add("/telechargements", message))});
  const router = useRouter();
	const {register, handleSubmit, formState: {errors}} = useForm<Message>({
		mode: "onChange",
		resolver: yupResolver(schema)
	});
  
  const [isImageLoading, setLoading] = useState(true);
  const [displayDownloadForm, setDisplayDownloadForm] = useState(false);
  const { data } = useQuery<any>({
    queryKey: ["formations", "detail",  slug, id],
    queryFn: () =>
      getDetail({
        id,
      }),
    onSuccess: (data: any) => {
      setTraining(data.data.data);
      updateLastTraining(data.data.data);
    },
    onError: () => {
      router.push('/page-inconnue')
    }
  });

  const toogleDownloadForm =  () => setDisplayDownloadForm(!displayDownloadForm)
  const onSubmit = (formData: Message) => {
    mutation.mutate({...formData, libelle_formation: data?.data.data.libelle, formation: data?.data.data.id, fichier: data?.data.data.programmepdf  });
	};
  const handleError = (error:any) => {
    error.preventDefault();
    mutation.reset();
    router.push('/contactez-nous')
  }
  return (
    <OpenedLayout>
      <Head>
        <title>{training?.libelle}</title>
        <meta name="titre" content={`${training.metadonnees && training.metadonnees?.titre} ? ${training.metadonnees?.titre} : ${training.titre}`} />
        <meta name="description" content={`${training.metadonnees && training.metadonnees?.description} ? ${training.metadonnees?.description} : ${training.description}`} />
      </Head>
      <main className="bg-white">
        <Header training={training} toogleDownloadForm={toogleDownloadForm}/>
        <section className="bg-white py-10">
          <div className="md:px0 container">
            {TRAINING_KEYS.map(item=> (
              <>
              {
                training[item.key] ? (
                <article key={`${id}-${item.key}-${slugify(item.label)}`}
                  className="bg-white shadow-[0_5px_35px_-18px_rgba(0,0,0,0.3)] p-10 rounded-lg mb-10 w-3/5">
                  <h2 className="text-xl md:text-3xl font-bold mb-0 pb-0'">{item.label}</h2>
                  <RenderHtmlContent content={training[item.key]} classes='text-gray-600 font-light text-lg py-4'/>
                </article>
              ) : null
              }
              </>
            ))}
          </div>
        </section>
        <section className="w-full bg-cover bg-cente relative">
          <div className="bg-gradient-to-r from-sky-900 bg-black/50 h-full px-4">
          {
            data?.data.data.image ? (
              <>
                <div className="bg-slate/10 bg-gradient-to-r from-black/90 w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20" />
                <Image
                  fill={true}
                  src={`${process.env.API_URL}/assets/${training?.image.filename_disk}`}
                  alt={training?.libelle}
                  loader={loaderProp}
                  unoptimized
                  className={cn(
                    'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                    isImageLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </>
            ): 
            null 
          }
            <div className="md:px0 container flex relative z-20">
              <div className="max-w-4xl md:py-16 md:pt-24 text-white pt-10">
                <h4 className="flex">
                  {training?.souslibelle}
                </h4>
                <h2 className="text-2xl md:text-5xl font-extrabold">
                  {training?.libelle}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.short_description,
                  }}
                  className="my-10"
                ></div>
                <ul className="mt-8 items-start flex flex-col md:flex-row">
                  {
                   data?.data.data.niveau ? 
                    <li className="flex items-end py-2 mr-3">
                      <BsBarChart className="mr-2 text-green-600 text-3xl"/> 
                      <span className="text-xl">{training?.niveau === "BEGINNER" ? 'Débutant': null}</span>
                      <span className="text-xl">{training?.niveau === "INTERMEDIARY" ? 'Intermediaire': null}</span>
                      <span className="text-xl">{training?.niveau === "ADVANCED" ? 'Avancé': null}</span>
                    </li> 
                    : 
                    null
                  }
                  {
                   data?.data.data.jours || data?.data.data.heures  ? 
                    <li className="flex items-center py-2 pr-3">
                      {
                        data?.data.data.jours ? 
                        <span className="flex items-center pr-3">
                          <AiOutlineClockCircle className="mr-2 text-green-600 text-3xl" />
                          <span>{training?.jours} Jours</span>
                        </span>
                        : 
                        null
                      }{
                        data?.data.data.heures && !data?.data.data.jours ? 
                        <span className="flex items-center pr-3">
                          <AiOutlineClockCircle className="mr-2 text-green-600 text-3xl" />
                          <span>{training?.heures} Heures</span>
                        </span>
                        : 
                        null
                      }
                    </li>
                    : 
                    null
                  }
                   {
                   (data?.data.data.distanciel || data?.data.data.presentiel) ? 
                    <li className="flex items-center py-2 pr-3">
                      <GiPositionMarker className="text-red-400 text-3xl"/> 
                      {training?.distanciel ? 
                        <span className="flex items-center">
                          En ligne
                        </span>
                        :
                        null
                      }
                      {(data?.data.data.distanciel && data?.data.data.presentiel) ? (<span className="ml-1">ou</span>) : null}
                      {
                        data?.data.data.presentiel ? 
                        <span className="flex items-center ml-1">
                          Dans nos locaux
                        </span> 
                        : 
                        null
                      }
                    </li>
                    : 
                    null
                  }
                  {
                   (data?.data.data.prix && data?.data.data.cpf ) ? 
                    <li className="flex items-center py-2 pr-3">
                      <BiCoinStack className="mr-2 text-yellow-600 text-3xl"/> 
                      Eligible au CPF
                    </li> 
                    : 
                    null
                  }
                </ul>

                <div className="text-md grid gap-3 items-center py-4 md:grid-cols-3 md:gap">
                  <Link
                    href={{ pathname: '/nos-formations/votre-candidature', query: { formation: `${slugify(data?.data.data.libelle)}-${training?.id}` } }}
                    className="p-3 text-white text-center bg-secondary rounded-full"
                  >
                    Je candidate
                  </Link>
                  {
                   (data?.data.data.programmepdf ) ? 
                      <button type="button" onClick={() => setDisplayDownloadForm(!displayDownloadForm)}
                        className="p-3 text-white text-center border border-white rounded-full"
                      >
                        Je télécharge le programme
                      </button>
                    : 
                    null
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:px-0 container mx-auto py-6 px-4 grid md:py-12 md:grid-cols-10">
          <section className="md:col-span-6">
            {
              data?.data.data.contenu ? 
                (<article className="mb-7" dangerouslySetInnerHTML={{__html: data?.data.data.contenu}}/>)
              : null
            }
            {
              data?.data.data.objectifs ? 
              (
                <article className="mt-5" id="objectifs">
                  <h3 className="text-2xl font-semibold">
                    Objectifs de la formation
                    <span className="bg-secondary block h-1 w-24 my-2"></span>
                  </h3>
                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={{
                      __html: data?.data.data.objectifs,
                    }}
                  ></div>
                </article>
              )
              : null
            }
            {
              data?.data.data.programme ? 
              (
                <article className="mt-5" id="programme">
                <h3 className="text-2xl font-semibold">
                  Programme de la formation
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4 ck-content"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.programme,
                  }}
                ></div>
              </article>
              )
              : null
            }
            {
              data?.data.data.prerequis ? 
              (
                <article className="mt-5" id="pre-requis">
                <h3 className="text-2xl font-semibold">
                  Pré requis
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.prerequis,
                  }}
                ></div>
              </article>
              )
              : null
            }
            {
              data?.data.data.ressources ? 
              (
                <article className="mt-5" id="ressources">
                <h3 className="text-2xl font-semibold">
                  Ressources utilisées pour cette formation
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.ressources,
                  }}
                ></div>
              </article>
              )
              : null
            }
          </section>
          <aside className="md:col-span-4 mt-10 md:mt-0">
            {/* xs:hidden md:block w-[300px] rounded-md shadow-2xl fixed top-[200px] z-30 sm:left-[70%] 2xl:left-[65%]  */}
              <div id="formation-panel" className="font-sans bg-white md:w-2/3 mx-auto md:shadow-2xl rounded-lg" >
                <div className="py-4 space-y-3 px-4 bg-secondary text-white rounded-t-lg">
                  <div className="text-3xl font-bold mt-4">
                    {training?.prix}
                  </div>
                  {
                    (data?.data.data.sessions && data?.data.data.sessions.length) ? 
                      (
                        <div className="sessions py-2">
                          <h3 className="mt-2 font-semibold text-2xl mb-2">
                            Nos prochaines sessions
                          </h3>
                          {training?.sessions.map((item: any, index: number) => (
                            <div key={`session-${id}-${index}`} className="bg-slate-50 text-slate-600 mb-3 rounded-md p-2">
                              <p className="mb-0">Du {getDisplayedDate(item.sessions_id.debut)}</p>
                              <p className="mb-0">Au {getDisplayedDate(item.sessions_id.fin)}</p> 
                            </div>
                          ))}
                        </div>
                      )
                    : (
                      <div>
                        <p className="text-center">{EMPTY_SESSION}</p>
                        <ContactUsText classes="justify-center" />
                      </div>
                    ) 
                  }
                </div>
                <ul className="mt-4  px-8 pb-8 rounded-b-lg">
                  {[
                    { label: "Financements", target: "/financements-cpf" },
                    { label: "Pré-requis", target: "#pre-requis" },
                    { label: "Programme", target: "#programme" },
                    { label: "Notre equipe", target: "#notre-equipe" },
                  ].map((item, index) => (
                    <li
                      key={`item${index}`}
                      className="border-b py-3 font-medium"
                    >
                      <Link href={item.target}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
          </aside>
        </section>
      </main>
      <section className={classNames({ 'fixed': displayDownloadForm, 'hidden': !displayDownloadForm },`text-white h-screen overflow-hidden bg-app-blue fixed left-0 top-0 right-0 bottom-0 z-50 font-sans flex flex-col justify-between items-center`)}>
         <p className="pdf-form container mx-auto flex justify-end pt-7 px-2">
          <button type="button" onClick={() => {setDisplayDownloadForm(false); mutation.reset();}}>
            <GiCancel className="text-4xl" />
          </button>
         </p>
         <div className="pdf-form container mx-auto flex flex-col md:items-center justify-center">
           
            {mutation.isError ? (
              <Message 
                type="error" 
                firstMessage='Une erreur est survenue, nous allons la résoudre sous peu' 
                secondMessage="N'hésitez pas à nous passer un coup de fil" 
                action={handleError} 
                actionLabel="Contactez nous"
              />) 
            : null}
            {mutation.isSuccess ? (
              <Message 
                type="success" 
                firstMessage='Merci de votre intérêt pour cette formation' 
                secondMessage='Nous venons de vous transmettre un mail contenant le lien pour télécharger le programme' 
                action={() => {setDisplayDownloadForm(false); mutation.reset();}}
                actionLabel="C'est noté"
              />) 
            : null}
            {
              mutation.isIdle 
              ? (
                <>
                <h2 className="text-center text-xl md:text-4xl leading-10 font-extralight mt-4 flex flex-col items-center">
                  Téléchargez le programme de la formation 
                  <span className='text-white text-3xl py-3 font-bold mb-0 pb-0'>{training?.libelle}</span>

                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid md:px-20 px-2 !font-extralight">
                  <label htmlFor="email" className={formStyles.form_control__label}>
                    <span className='text-white text-2xl font-extralight'>Votre email</span>
                    <p className="text-slate-300 !text-sm">Promis nous n&apos;allons pas spammer </p>
                  </label>
                  <div className="flex flex-col">
                    <div className="grid md:grid-cols-8">
                      <input type="text" id="email" placeholder="Votre email"
                              className={`mb-1 md:mb-0 w-full !text-black border-gray-300 py-3 rounded-l-lg rounded-r-lg md:rounded-r-none shadow-sm focus:border-indigo-500 md:col-span-7 !md:rounded-r-none`}
                              {...register("email")}/>
                      <button type='submit' className='bg-secondary text-white border-yellow-500 px-4 py-4 rounded-md md:rounded-l-none !md:mt-1 md:block w-full'>
                        <span>Télécharger</span>
                      </button>
                    </div>
                    <p className={formStyles.form_control__error}>{errors.email?.message}</p>
                  </div>
                </form>
               </>
              )
              : null
            }
         </div>
         <p />
      </section>
    </OpenedLayout>
  );
}

export default Training;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['training-slug'].substring(params['training-slug'].lastIndexOf("-") + 1);
  return { props: { ...params, id, slug: params['training-slug'] } };
}