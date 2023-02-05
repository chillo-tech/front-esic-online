import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "services";
import OpenedLayout from 'containers/opened';
import Metadata from 'components/metadata';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import DisplayImage from 'components/shared/DisplayImage';
import {
	CERTICATION_KEYS,
	slugify,
} from 'utils';
import AllTrainings from 'components/shared/AllTrainings';

function CertificationCategory({
								   id, libelle}: {
	id: string;
	libelle: string;
	link: string;
}) {
	const { isSuccess, data } = useQuery<any>({
		queryKey: ['certifications', libelle, id],
		queryFn: () =>
			fetchData({
				path: `certifications/${id}`,
				fields: `
					*,
					*.*
      `
			})
	});

	return (
		<>
			{
				isSuccess ? (
					<OpenedLayout>
						<Metadata entry={data?.data?.data} />
						<header className="grid bg-app-blue items-center text-white">
							<div className={`container md:px-0 py-10 ${data?.data?.data?.image ? 'md:py-14': ''} relative`}>
								<div className="grid md:grid-cols-2">
									<div>

										<h1 className="text-3xl md:text-4xl font-extrabold text-white">
											{data?.data?.data?.nom}
										</h1>
										<p className="text-md font-extralight flex flex-col md:flex-row">
											<span className={`mr-1`}>{data?.data?.data?.alias}</span>
											{
												data?.data?.data?.CODE_RS ? (
													<span>
                            CODE RS
                            <b className="ml-1">{data?.data?.data?.CODE_RS}</b>
                          </span>
												) : null
											}
											{
												data?.data?.data?.CODE_RNCP ? (
													<span>
                            CODE RNCP
                            <b className="ml-1">{ data?.data?.data?.CODE_RNCP}</b>
                          </span>
												) : null
											}
										</p>

									</div>
									<span />
								</div>
								{
									data?.data?.data?.image ? (
										<div className="hidden md:block absolute right-0 bottom-0 image-wrapper rounded-lg w-[300px] h-[300px]">
											<DisplayImage
												image={data?.data?.data?.image}
												imageClasses="object-cover"
												libelle={`${data?.data?.data?.nom}`}
												classes="rounded-2xl !overflow-hidden"
											/>
										</div>
									): null }
							</div>
						</header>

						<section className="bg-white py-10">
							<div className="md:px-0 container">
								<div>
									{CERTICATION_KEYS.filter((item: any) => data?.data?.data[item.key]).map(
										(item) => (
											<article
												key={`${id}-${item.key}-${slugify(item.label)}`}
												className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg mb-10 detail-formation">
												<h2 className="text-xl md:text-3xl font-bold mb-0 pb-0'">
													{item.label}
												</h2>
												<RenderHtmlContent
													content={data?.data?.data[item.key]}
													classes={`text-gray-600 font-light text-lg py-4 description`}
												/>
											</article>
										)
									)}
									<article
										className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg mb-10 flex items-center justify-center">
										{
											(data?.data?.data.Statut === "VALIDEE" && data?.data?.data.reference)
												? (
													<AllTrainings
														link={data?.data?.data.reference}
														blank={true}
														text={"Plus d'informations sur cette certification"}
														classes={`blue-button mr-5`}
													/>
												): null
										}
										<AllTrainings
											link={'/contactez-nous'}
											text={'Contactez nous'}
											classes={`outline-blue-button`}
										/>
									</article>
								</div>
							</div>
						</section>
					</OpenedLayout>
				) : null
			}
		</>
	)
}

export default CertificationCategory;


export async function getServerSideProps(context: any) {
	const { query, params:pr } = context;
	let params: any = {};
	if (!query) {
		return {
			notFound: true,
		}
	}

	if (query['certification']) {
		const id = query['certification'].substring(query['certification'].lastIndexOf('-') + 1);
		if (isNaN(id)) {
			return {
				notFound: true,
			}
		}
		params = {
			id,
			slug: query['certification'],
			type: 'certification',
		};
	}
	return { props: { ...params }}
};
