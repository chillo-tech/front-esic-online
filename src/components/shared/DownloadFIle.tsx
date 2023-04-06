import classNames from 'classnames';
import React from 'react'
import { GiCancel } from 'react-icons/gi';
import Message from './Message';
import formStyles from 'styles/Form.module.css';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { EMAIL_ERROR_MESSAGE, EMAIL_PATTERN, EMPTY_SESSION, slugify, TRAINING_KEYS } from "utils";
import { useMutation } from 'react-query';
import { add } from 'services';
import { useRouter } from 'next/router';

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

function DownloadFIle({displayDownloadForm, setDisplayDownloadForm, training}: any) {  
  const router = useRouter();
  const mutation = useMutation({mutationFn: ((message:Message) => add("/telechargements", message))});
	const {register, handleSubmit, formState: {errors}} = useForm<Message>({
		mode: "onChange",
		resolver: yupResolver(schema)
	});
  const handleError = (error:any) => {
    error.preventDefault();
    mutation.reset();
    router.push('/contactez-nous')
  }
  const onSubmit = (formData: Message) => {
    mutation.mutate({...formData, libelle_formation: training.libelle, formation: training.id, fichier: training.programmepdf  });
	};
  return (
    <section className={classNames({ 
      'fixed': displayDownloadForm, 
      'hidden': !displayDownloadForm,
      'bg-app-blue': mutation.isIdle,
      'bg-white': (mutation.isError || mutation.isSuccess),
    },`text-white h-screen overflow-hidden fixed left-0 top-0 right-0 bottom-0 z-50 font-sans flex flex-col justify-between items-center`)}>
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
  )
}

export default DownloadFIle
