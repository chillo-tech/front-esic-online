import React from 'react';

const TrainingPrice = ({price}: any) => {
	return (
		<>
			{
				price ? (
					<span className="h-7 flex items-center text-xl font-bold">
                    	{price}
                    </span>
				): null
			}

		</>
	);
};

export default TrainingPrice;
