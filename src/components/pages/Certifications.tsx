import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import Link from 'next/link';

function Certifications({data, chunkSize = 6}: any) {
	const [state, setState] = useState(chunkSize);
	const [chunks, setChunks] = useState([[]]);
	useEffect(() => {
		setChunks([[]]);
		for (let i = 0; i < data.length; i += chunkSize) {
			const chunk = data.slice(i, i + chunkSize);
			setChunks((current: any[]) => [...current, chunk])
		}
	}, [data]);
	return (
		<section className={`certifications bg-[#F8F8F8] py-16`}>
			<h2 className="mb-10 font-bold text-3xl md:text-5xl text-center flex flex-col justify-center items-center">
			  <span>
				Nos autres certificationss
			  </span>
			   <span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>
			</h2>
			<div className={`container mx-auto grid md:grid-cols-4 gap-8`}>

				{chunks
					.filter((entry: any)=> entry !=null && entry.length> 0)
					.map((entry: any[], index: number) => (
					<ul key={`chunk--${index}`}>
						<>
						{entry.map((item: any, sindex: number) => (
							<li key={`item-${sindex}-${item?.nom}`} className={``}>
								<Link
									  title={`${item?.certifications_id?.nom}`}
									  href={`${item?.certifications_id?.reference}`}
									  target="_blank"
									  className={classNames(
										  `block py-2`
									  )}>
									<span className={` border-b border-gray-300`}>
										{item?.certifications_id?.nom}
									</span>
								  </Link>
							</li>
							))
						}
						</>
					</ul>
				))}
			</div>
		</section>
	);
}

export default Certifications;
