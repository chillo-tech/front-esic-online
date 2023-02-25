import React from 'react';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import classNames from 'classnames';

const Card = ({label, body}: any) => {
	return (
		<article
			className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg mb-6 detail-formation">
			<h2 className="text-xl md:text-3xl font-bold mb-2 pb-0'">
				{label}
			</h2>
			<RenderHtmlContent
				content={body}
				classes={ classNames('text-gray-600 font-light description')}
			/>
		</article>
	);
};

export default Card;
