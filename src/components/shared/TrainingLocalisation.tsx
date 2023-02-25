import React from 'react';

const TrainingLocalisation = ({localisations}: any) => {
	const mapping: any = {
		ONLINE: 'En ligne',
		ONSITE: 'Dans nos locaux',
		INTRA: 'Dans vos locaux'
	}
	return (
		<>
			{
				localisations && localisations.length ? (
					<p className="text-center md:text-left text-sm font-semibold py-2">
						{localisations.map((localisation: string) => mapping[localisation]).join(' ou ')}
                   </p>
				): null
			}

		</>
	);
};

export default TrainingLocalisation;
