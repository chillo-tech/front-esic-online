import {useRouter} from 'next/router';
import {useQuery} from 'react-query';
import React, {useContext, useState} from 'react';
import { add, getDetail, getSubCategories } from 'services';
import {EMPTY_SESSION, getDisplayedDate, slugify, TRAINING_KEYS} from 'utils';
import {ApplicationContext} from 'context/ApplicationContext';
import Metadata from 'components/metadata';
import OpenedLayout from 'containers/opened';
import Header from 'components/detail-formation/Header';
import Card from 'components/shared/Card';
import {Spinner} from 'flowbite-react';
import DisplayImage from 'components/shared/DisplayImage';
import TrainingLevel from 'components/shared/TrainingLevel';
import TrainingPrice from 'components/shared/TrainingPrice';
import AllTrainings from 'components/shared/AllTrainings';
import classNames from 'classnames';
import ContactUsText from 'components/shared/ContactUsText';

function Training({ id, slug }: { id: string; slug: string }) {
	const [training, setTraining] = useState<any>(null);
	const { updateLastTraining, displayInscriptionButton } = useContext(ApplicationContext);
	const router = useRouter();

	const [displayDownloadForm, setDisplayDownloadForm] = useState(false);
	const toogleDownloadForm = () => setDisplayDownloadForm(!displayDownloadForm);
	  const { data } = useQuery<any>({
		queryKey: ['formations', 'detail', slug, id],
		queryFn: () =>
		  getDetail({
			id,
		  }),
		onSuccess: (data: any) => {
		  setTraining(data.data.data);
		  updateLastTraining(data.data.data);
		},
		onError: () => {
		  router.push('/page-inconnue');
		},
	  });


	return (
		<OpenedLayout>
			<Metadata entry={training} />
			{
				training ? (
					<>
						<div className="column-wrapper relative h-1 border border-red-300 container bg-green-900 relative">
							<div className="column absolute container top-10 grid grid-cols-7 gap-24">
								<div className="col-start-5 col-span-3">
									<div className="col-content-wrapper">
										<div className="bg-gray-white rounded-t-lg rounded-b-lg">
											<DisplayImage
												image={training.image}
												libelle={training.libelle}
												wrapperClasses='h-80 rounded-lg'
												imageClasses = 'object-cover'
											/>
											<div className="px-4">
												<div className="flex justify-between my-4">
													<TrainingLevel level={training.niveau}/>
													<TrainingPrice price={training.prix}/>
												</div>
											</div>
											{training.sessions && training.sessions.length ? (
												<div className="hidden md:block px-5 ">
													<div className="sessions">
														<h3 className="font-semibold text-2xl mb-2">
															Nos prochaines sessions
														</h3>
														{training?.sessions.filter((session: any) => session.sessions_id !=null).map((item: any, index: number) =>
															Date.parse(item?.sessions_id.debut) >=
															Date.now() ? (
																<div
																	className="bg-white py-2 shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-app-green"
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
										</div>
										<AllTrainings
											text="Comment financer cette formation ?"
											classes="white-button !px-0 text-center h-9 md:py-2 md:h-auto font-bold"
											icon={false}
											link={`/financements`}
											containerClasses="!px-0 block shadow-md mt-3"
										/>
									</div>
								</div>
							</div>
						</div>
						<Header
							training={training}
							toogleDownloadForm={toogleDownloadForm}
						/>
						<div className="container py-4 grid md:grid-cols-7">
							<div className="md:col-span-4">
								{TRAINING_KEYS.filter((item: any) => training[item.key]).map(
									(item) => (
									  <Card
										key={`${id}-${item.key}-${slugify(item.label)}`}
										label={item.label}
										body={training[item.key]}
										classes={item['classes'] ? item['classes'] : 'programme'}
										/>
									)
								)}
								{training.articles.filter((article: any) => article.articles_id !=null).map(
									(article: any) => (
										<Card
											key={`${id}-${article.articles_id.id}`}
											label={article?.articles_id?.libelle}
											body={article?.articles_id?.description}
										/>
									)
								)}
							</div>
						</div>
					</>
				) :  (
				<div className="h-screen text-center flex justify-center items-center">
					<div>
						<Spinner color="info" aria-label="Loading..." size="xl" />
					</div>
				</div>
				)
			}

	 	</OpenedLayout>
 	)
}

export default Training;

export async function getServerSideProps(context: any) {
	const { params } = context;
	const id = params['training-slug'].substring(
		params['training-slug'].lastIndexOf('-') + 1
	);
	return { props: { ...params, id, slug: params['training-slug'] } };
}
