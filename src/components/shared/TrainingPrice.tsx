import React from 'react';

const TrainingPrice = ({price}: any) => {
	return (
		<>
			{
				price ? (
          <span className="flex text-xl font-bold flex-col items-end justify-center py-1 font-bold text-app-blue">
            <span className="text-xs">A partir de</span>
            <span className='text-3xl'>{price}</span>
          </span>
				): null
			}

		</>
	);
};

export default TrainingPrice;
