import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import { add } from 'services/index';
import {
	CONTACT_CHANNEL,
	EMAIL_PATTERN,
	REQUIRED_ERROR_MESSAGE,
	EMAIL_ERROR_MESSAGE,
	PHONE_ERROR_MESSAGE,
	DEMANDE_CANDIDAT,
	votreDemandeConcerne,
	regionsEntreprise,
	LIEN_POLITIQUE_SECURITE,
	PREFERED_LOCATION,
} from 'utils/index';
import {useRouter} from 'next/router';
import {useMutation} from 'react-query';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Message from 'components/shared/Message';
import formStyles from 'styles/Form.module.css';
import Link from 'next/link';
export type Params = {
	name: string;
	cv: any;
	email: string;
	phone: string;
	profile: string;
	subject: string;
	message: string;
	company: string;
	job: string;
	contactChannel: string[];
	sessions: string[];
	condition: boolean;
};


const schema = yup
  .object({
    name: yup.string().trim().required('Ce champ est requis'),
    company: yup.string().trim(),
    phone: yup
      .string()
      .required(PHONE_ERROR_MESSAGE)
      .min(10, PHONE_ERROR_MESSAGE),
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required(EMAIL_ERROR_MESSAGE)
      .matches(EMAIL_PATTERN, { message: EMAIL_ERROR_MESSAGE }),
    job: yup.string().trim(),
    subject: yup.string().trim().required(REQUIRED_ERROR_MESSAGE),
    contactChannel: yup
      .array()
      .of(yup.string())
      .min(1)
      .required(REQUIRED_ERROR_MESSAGE)
      .nullable(),
    message: yup
      .string()
      .trim(),
	  condition:  yup.boolean().oneOf([true],REQUIRED_ERROR_MESSAGE)

  })
  .required();

function FormulaireEntreprise({formulaire}: any) {
	  const [displayEnterpriseFields, setDisplayEnterpriseFields] = useState(false);
	  const [displayCandidatFields, setDisplayCandidatFields] = useState(false);

	  const router = useRouter();

	  const onSubmit = (data: Params) => {
		mutation.mutate({
		  ...data,
      profile: formulaire,
		  contactChannel: contactChannel.join(', ').toLowerCase(),
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

	  const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm<Params>({
		mode: 'onChange',
		resolver: yupResolver(schema),
	  });

	  const contactChannel = watch('contactChannel');

	  useEffect(() => {
		if (formulaire === 'candidat') {
		  setDisplayCandidatFields(true);
		  setDisplayEnterpriseFields(false);
		} else if (formulaire === 'entreprise') {
		  setDisplayEnterpriseFields(true);
		  setDisplayCandidatFields(false);
		}
	  }, []);

	return (
		<section className={`py-16 bg-app-light-blue bg-no-repeat bg-left bg-contain bg-[url("/images/pages/offers-left-arc.svg")]`}>
			<div className="container">
				<div id="section-formulaire" className='w-full h-full pb-8'>
					<div className="container">
						<h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
							<span className="px-10 py-3">Vous avez une question ? Posez la nous</span>
							<span className="border-b-2 border-app-blue px-10 w-64 mt-2"></span>
						</h2>
					</div>
					<aside className="w-full bg-white mx-auto md:w-[70%] border rounded-xl md:rounded-3xl grid grid-cols-6 gap-4 md:p-4 md:pb-4">
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

								{displayEnterpriseFields ? (
									<div className="grid md:grid-cols-2 md:gap-6">
										<div
											className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
											<div className={formStyles.form_control}>
												<input
													type="text"
													id="enterpriseName"
													placeholder="Votre société"
													className={formStyles.form_control__input}
													{...register('company')}
												/>
												<p className={formStyles.form_control__error}>
													{errors.company?.message}
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
									</div>
								) : null}

								{displayCandidatFields || displayEnterpriseFields ? (
									<>
										<div
											className={`${formStyles.form_control} !mr-0 !mt-0 pt-4`}>
											<div className={formStyles.form_control}>
												<select
													{...register('subject')}
													className={formStyles.form_control__input}>
													<option disabled defaultValue="">
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
													{errors.subject?.message}
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
										<div
											className={`${formStyles.form_control__text} flex-row border-b-0 items-center`}>
											<input
												type="checkbox"
												className="inline-block"
												id="acceptForm"
												{...register('condition')}
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
											{errors.condition?.message}
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
			</div>
		</section>
	);
}

export default FormulaireEntreprise;
