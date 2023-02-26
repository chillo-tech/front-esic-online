import React from 'react';

const TrainingLevel = ({level}: any) => {
	return (
		<>
			{
				level ? (
					<span className="h-7 w-24 md:w-32 text-xs md:text-lg flex bg-app-light-green text-white items-center rounded-md">
                    	<span className="ml-3 mr-1 md:mr-3 bg-app-green w-3 h-3 rounded-full"/>
						<span className="text-app-gray text-sm">
						  {level === 'BEGINNER' ? 'Débutant' : null}
						  {level === 'INTERMEDIARY' ? 'Intermediaire' : null}
						  {level === 'ADVANCED' ? 'Avancé' : null}
						</span>
                  </span>
				): <span />
			}

		</>
	);
};

export default TrainingLevel;
