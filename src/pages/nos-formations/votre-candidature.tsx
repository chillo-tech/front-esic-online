import Head from "next/head";
import OpenedLayout from "containers/opened";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  contact,
  CONTACT_CHANNEL,
  EMAIL_PATTERN,
  REQUIRED_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  PHONE_ERROR_MESSAGE,
  USER_PROFILE,
  USER_PROFILE_OPTIONS,
  ENTREPRISE_PARAMS,
  cn,
  loaderProp,
  EMPTY_SESSION,
  getDisplayedDate,
} from "utils/index";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { add, getDetail } from "services/index";
import formStyles from "styles/Form.module.css";
import Message from "components/shared/Message";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import Image from "next/image";
import { useState, useContext } from "react";
import { ApplicationContext } from "context/ApplicationContext";

export type Message = {
  name: string;
  message: string;
  email: string;
  phone: string;
  profile: string;
  subject: string;
  contactChannel: string[];
  sessions: string[];
};
const schema = yup
  .object({
    name: yup.string().trim().required("name Ce champ est requis"),
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
    sessions: yup
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

function Candidature({ params }: any) {
  const { state, updateLastTraining } = useContext(ApplicationContext);
  const [isImageLoading, setLoading] = useState(true);
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
              ",",
              ""
            )
          : sessionId;
      }
      return sessionId;
    });
    const sessions = mappedSessions.join(", ");
    mutation.mutate({
      ...message,
      subject: `${message.subject} - Sessions ${sessions}`,
      contactChannel: `${contactChannel.join(", ").toLowerCase()}`,
    });
  };
  const onError = (errors: any, e: any) => console.log({ errors });

  const handleError = (error: any) => {
    error.preventDefault();
    router.push("/");
  };

  const mutation = useMutation({
    mutationFn: (message: any) => add("/contacts", message),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Message>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { data } = useQuery<any>({
    queryKey: ["formations", "detail", params.slug, params.id],
    queryFn: () =>
      getDetail({
        id: params.id,
      }),
    onSuccess: (data: any) => {
      updateLastTraining(data.data.data);
      setValue(
        "subject",
        `Candidature pour la formation ${data?.data.data.libelle}`,
        { shouldValidate: true, shouldDirty: true, shouldTouch: true }
      );
      if (data?.data.data.sessions && data?.data.data.sessions.length === 0) {
        setValue("sessions", ["Aucune n'est programmée"], {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }
    },
    onError: () => {
      router.push("/page-inconnue");
    },
  });
  const contactChannel = watch("contactChannel");
  const sessions = watch("sessions");
  return (
    <OpenedLayout>
      <Head>
        <title> ESIC| {data?.data.data.libelle} </title>
      </Head>
      <section className="bg-app-blue p-4 pt-24 pb-20 mx-auto flex flex-wrap font-sans">
        {/* <aside className="w-full md:w-[35%] bg-secondary text-white p-3 py-8 md:p-8 hidden md:block">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {contact.infos.title}
          </h2>
          <>
          {
            state && state.company ? (
              <article className="py-5 md:col-span-2">
              <Link href={'/'} className="font-extrabold text-4xl">{state.company.libelle}</Link>
              {
                 (state.company.description) ? 
                    <div className="py-3" dangerouslySetInnerHTML={{__html: state.company.description}}/>
                  : 
                  null
                }
                {
                 (state.company.telephone) ? 
                  <li className="flex items-center py-2 pr-3">
                    <BsPhone className="mr-2 text-white text-3xl"/> 
                    {state.company.telephone}
                  </li> 
                  : 
                  null
                }
                {
                 (state.company.email) ? 
                  <li className="flex items-center py-2 pr-3">
                    <HiOutlineMail className="mr-2 text-white text-3xl"/> 
                    {state.company.email}
                  </li> 
                  : 
                  null
                }
                {
                  (state.company.adresses) ? 
                  (
                    <p>
                      {state.company.adresses[0].rue}, {state.company.adresses[0].codepostal}
                      <span className="uppercase ml-1">{state.company.adresses[0].ville}</span>
                    </p>
                  )
                  :null
                }
                {
                 (state.company.liens) ? 
                  <p className="flex py-4">
                    {state.company.liens.map((item: any, index: number) => (
                      <Link href={item.lien} className="inline-block mr-5 items-center py-2 px-3 w-12 h-12 relative" key={`candidature-${index}-${item.id}`}>
                         <Image
                            fill={true}
                            src={`${process.env.API_URL}/assets/${item.image.filename_disk}`}
                            alt={state.company.libelle}
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
                      </Link> 
                    ))}
                  </p>
                  : 
                  null
                }
              </article>
            ): null
          }
         </>
        </aside> */}
        <div className="w-full text-white text-center mb-5">
          <div className="md:px-20">
            {/* Icone de test */}
            <BsPhone color="white" className=" w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-3xl sm:text-4xl font-bold">
              Rejoignez un cours
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
                Vous pouvez vous désabonner de ces communications à tout moment.{" "}
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
        <aside className="w-full bg-white sm:p-6 mx-auto md:w-[85%] border rounded-3xl grid grid-cols-6 gap-4 md:p-4 md:pb-16">
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
              className=" w-full mt-2 col-span-6 px-6 pb-6"
            >
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    {/* <label
                      htmlFor="name"
                      className={formStyles.form_control__label}
                    >
                      <span className="text-black">Votre nom</span>
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      placeholder="Votre nom"
                      className={formStyles.form_control__input}
                      {...register("name")}
                    />
                    <p className={formStyles.form_control__error}>
                      {errors.name?.message}
                    </p>
                  </div>
                </div>
                <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    {/* <label
                      htmlFor="email"
                      className={formStyles.form_control__label}
                    >
                      <span className="text-black">Votre email</span>
                    </label> */}
                    <input
                      type="text"
                      id="email"
                      placeholder="Votre email"
                      className={formStyles.form_control__input}
                      {...register("email")}
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
                    {/* <label
                      htmlFor="phone"
                      className={formStyles.form_control__label}
                    >
                      <span className="text-black">Votre téléphone</span>
                    </label> */}
                    <input
                      type="text"
                      id="phone"
                      placeholder="Votre téléphone"
                      className={formStyles.form_control__input}
                      {...register("phone")}
                    />
                    <p className={formStyles.form_control__error}>
                      {errors.phone?.message}
                    </p>
                  </div>
                </div>
                <div className={formStyles.form_control}>
                  <div className={formStyles.form_control}>
                    {/* <label
                      htmlFor="phone"
                      className={formStyles.form_control__label}
                    >
                      <span className="text-black">Vous êtes</span>
                    </label> */}
                    <select
                      {...register("profile")}
                      className={formStyles.form_control__input}
                    >
                      <option value="">Vous êtes</option>
                      {USER_PROFILE.map((profile: any, index: number) => (
                        <option
                          key={`c-profile-${index}`}
                          value={profile.value}
                        >
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

              {data?.data.data.sessions && data?.data.data.sessions.length ? (
                <div className="sessions py-2">
                  <label
                    htmlFor="sessions"
                    className={formStyles.form_control__label}
                  >
                    <span className="text-black font-semibold">
                      Quelle session pourrait vous convenir
                    </span>
                  </label>
                  <div
                    aria-describedby="sessions"
                    className="grid gap-4 md:grid-cols-3"
                  >
                    {data.data.data.sessions.map(
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
                                ? "bg-app-blue text-white"
                                : "text-app-blue"
                            }`}
                        >
                          <input
                            type="checkbox"
                            id={`session-${session.sessions_id.id}-${index}`}
                            value={session.sessions_id.id}
                            className="hidden"
                            {...register("sessions")}
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
                              sessions && sessions.indexOf("Aucune") > -1
                              ? "bg-app-blue text-white"
                              : "text-app-blue"
                            }`}
                    >
                      <input
                        type="checkbox"
                        id="any"
                        value="Aucune"
                        className="hidden"
                        {...register("sessions")}
                      />
                      <span className="mb-0">Peu importe</span>
                    </label>
                  </div>
                </div>
              ) : null}
              <div className={formStyles.form_control}>
                {/* <label
                  htmlFor="message"
                  className={formStyles.form_control__label}
                >
                  <span className="text-black">Votre message</span>
                </label> */}
                <textarea
                  placeholder="Votre message"
                  id="message"
                  className={formStyles.form_control__input}
                  {...register("message")}
                  rows={6}
                ></textarea>
                <p className={formStyles.form_control__error}>
                  {errors.message?.message}
                </p>
              </div>

              <div className={`${formStyles.form_control} md:pt-4`}>
                <div className={formStyles.form_control}>
                  <label
                    htmlFor="phone"
                    className={formStyles.form_control__label}
                  >
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
                            ? "bg-app-blue text-white"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          id={channel.value}
                          value={channel.value}
                          className="hidden"
                          {...register("contactChannel")}
                        />{" "}
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
                  className="rounded-md bg-app-blue text-white border-yellow-500 px-24 uppercase py-3"
                >
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
    const id = query.formation.substring(query.formation.lastIndexOf("-") + 1);

    params = {
      id,
      slug: query.formation,
      type: "formation",
    };
  }

  return { props: { params } };
}
