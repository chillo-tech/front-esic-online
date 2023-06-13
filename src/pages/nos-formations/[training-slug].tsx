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
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
import TrainingLocalisation from 'components/shared/TrainingLocalisation';
import DownloadFIle from 'components/shared/DownloadFIle';

function Training({ id, slug }: { id: string; slug: string }) {
  const [relatedTraining, setRelatedTraining] = useState<any>([]);
	const [training, setTraining] = useState<any>(null);
	const { updateLastTraining, displayInscriptionButton } = useContext(ApplicationContext);
	const router = useRouter();
  const { ref, inView } = useInView({threshold: 0});

	const [displayDownloadForm, setDisplayDownloadForm] = useState(false);
	const toogleDownloadForm = () => setDisplayDownloadForm(!displayDownloadForm);
	  useQuery<any>({
		  queryKey: ['formationsss', 'detail', slug, id],
      queryFn: () => getDetail({id}),
      onSuccess: (data: any) => {
        setTraining(data.data.data);
        updateLastTraining(data.data.data);
      },
      onError: () => {
        router.push('/page-inconnue');
      }
	  });

    const trainingId = training?.id;
    useQuery<any>({
      enabled: !!(trainingId && training?.souscategories.filter((souscategory: any) => souscategory != null && souscategory.souscategories_id != null)[0]?.souscategories_id?.id),
      queryKey: ["SousCategories", training?.souscategories[0]?.souscategories_id?.id],
      queryFn: () => getSubCategories({id: training?.souscategories.filter((souscategory: any) => souscategory != null && souscategory.souscategories_id != null)[0]?.souscategories_id?.id as string, trainingsLimit: 3}),
      onSuccess: ({data}: any) => {
        setRelatedTraining(data?.data?.formations);
      },
    });

	return (
		<OpenedLayout>
			<Metadata entry={training} />
			{
				training ? (
					<div className='md:relative'>
						<div className="column-wrapper h-1 container">
							<div className={classNames(
                "column container hidden md:grid md:grid-cols-7 md:gap-24",
                {'md:fixed md:mt-10': !inView},
                {'md:absolute bottom-10': inView}
              )}>
								<div className="col-start-5 col-span-3">
									<div className="col-content-wrapper">
										<div className="bg-gray-white rounded-t-lg rounded-b-lg">
											<DisplayImage
												image={training.image}
												libelle={training.libelle}
												wrapperClasses='h-60 rounded-lg'
												imageClasses = 'object-cover'
											/>
											<div className="px-4">
												<div className="flex items-center justify-between mt-4">
													<TrainingLevel level={training.niveau}/>
													<TrainingPrice price={training.prix}/>
												</div>
											</div>
											{training.sessions && training.sessions.length ? (
												<div className="hidden md:block px-5 ">

                          <TrainingLocalisation localisations={training.localisation} classes="text-center md:text-center py-2" />
													<div className="sessions">
														<h3 className="font-semibold text-2xl mb-2">
															Nos prochaines sessions
														</h3>
														{training?.sessions
                            .filter((session: any) => session.sessions_id !=null)
                            .filter((session: any) => new Date(session.sessions_id.debut).getTime()  >= new Date().getTime())
                            .slice(0,4)
                            .sort((a: any, b: any) => new Date(a.sessions_id.debut).getTime() - new Date(b.sessions_id.debut).getTime())
                            .map((item: any, index: number) =>
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
											classes="white-button !px-0 text-center h-9 md:py-4 md:h-auto font-bold"
											icon={false}
											link={`/financements`}
											containerClasses="!px-0 block shadow-md mt-3 rounded-b-lg"
										/>
                    <Link
                      href={`/nos-formations/votre-candidature?formation=${slugify(training.libelle)}-${training.id}`}
                      className={classNames(
                        'flex bg-app-blue w-full uppercase px-4 py-4 relative'
                      )}>
                      <span
                        className={classNames(
                          'text-app-blue bg-white block w-full text-center rounded-lg px-20 py-3 text-lg font-semibold'
                        )}>
                        S&apos;inscrire
                      </span>
                    </Link>
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
									(item: any, index: number) => (
                    <React.Fragment key={`${id}-${item.key}-${slugify(item.label)}`}>
                      {index === 0 ?  (
                        <Link
                        href={`/nos-formations/votre-candidature?formation=${slugify(training.libelle)}-${training.id}`}
                        className={classNames(
                          'bg-app-blue w-full uppercase px-4 py-4 md:hidden',
                          'fixed bottom-0 left-0 z-50'
                        )}>
                        <span
                          className={classNames(
                            'text-app-blue bg-white block w-full text-center rounded-lg px-20 py-3 text-lg font-semibold'
                          )}>
                          S&apos;inscrire
                        </span>
                      </Link>
                      ): null}
                      <Card
                          label={item.label}
                          body={training[item.key]}
                          classes={item['classes'] ? item['classes'] : 'programme'}
                      />

                    </React.Fragment>
									  
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
           
					</div>
				) :  (
				<div className="h-screen text-center flex justify-center items-center">
					<div>
						<Spinner color="info" aria-label="Loading..." size="xl" />
					</div>
				</div>
				)
			}
      <p ref={ref}/>
      <div className="grid gap-4 md:py-8 md:grid-cols-3 md:px-0 container relative bg-white">
        {
          relatedTraining.slice(0, 3)
          .filter(({formations_id}: {formations_id: string}) => formations_id != null)
          .map((training: any, index: number) =>(
            <HomeTrainingItem 
              classes="rounded-lg shadow-md !pb-4" 
              training={training.formations_id} 
              displayInfos={false}
              link={`/nos-formations/${slugify(training.formations_id.libelle)}-${training.formations_id.id}`}
              key={`${training.formations_id.id}-${index}`} 
            />
          ))
        }
      </div>
        <p className='relative z-50 flex justify-center items-center pb-4 bg-white'>
          <AllTrainings classes='outline-blue-button' containerClasses="md:flex md:justify-center md:items-center"/>
        </p>
      <DownloadFIle 
        displayDownloadForm={displayDownloadForm} 
        setDisplayDownloadForm={setDisplayDownloadForm} 
        training={training} 
      />
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
