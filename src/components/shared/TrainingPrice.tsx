import React from 'react';

const TrainingPrice = ({price}: any) => {
	return (
		<>
			{
				price ? (
          <span className="flex text-xl font-bold flex-col items-end justify-center py-1 font-bold">
            <span className="text-xs">A partir de</span>
            <span>{price}</span>
          </span>
				): null
			}

		</>
	);
};

export default TrainingPrice;
