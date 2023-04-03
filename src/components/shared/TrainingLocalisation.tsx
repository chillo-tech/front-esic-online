import classNames from 'classnames';
import React from 'react';

const TrainingLocalisation = ({localisations, classes= 'text-sm'}: any) => {
	const mapping: any = {
		ONLINE: 'En ligne',
		ONSITE: 'Dans nos locaux',
		INTRA: 'Dans vos locaux'
	}
	return (
		<>
			{
				localisations && localisations.length ? (
					<p className={classNames("text-center md:text-left font-semibold py-2", classes)}>
						{localisations.map((localisation: string) => mapping[localisation]).join(' ou ')}
                   </p>
				): null
			}

		</>
	);
};

export default TrainingLocalisation;
