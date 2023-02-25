import {useRouter} from 'next/router';
import {useQuery} from 'react-query';
import React, {useContext, useState} from 'react';
import { add, getDetail, getSubCategories } from 'services';
import {  slugify, TRAINING_KEYS } from 'utils';
import {ApplicationContext} from 'context/ApplicationContext';
import Metadata from 'components/metadata';
import OpenedLayout from 'containers/opened';
import Header from 'components/detail-formation/Header';
import Card from 'components/shared/Card';
import {Spinner} from 'flowbite-react';

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
						<Header
							training={training}
							toogleDownloadForm={toogleDownloadForm}
						/>
						<div className="container py-4">
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
