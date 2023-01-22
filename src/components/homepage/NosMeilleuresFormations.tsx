import AllTrainings from '../shared/AllTrainings';
import React from 'react'
import { useQuery } from 'react-query';
import { getTopTrainings } from 'services/index';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
import { slugify } from 'utils/slugify';

function NosMeilleuresFormations() {
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["top-trainings"],
    queryFn: () => getTopTrainings({limit: 4})
  });
  return (
    <>
    {isSuccess ? (
      <section className='pt-20 pb-20 bg-white' id='formations'>
        <div className="container mx-auto px-2">
          <div
              className="mx-auto py-12 bg-no-repeat bg-[right_center] bg-[url('/images/pages/trainings-light.svg')]"
          >
            <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
              <span className='px-10 py-3'>
                Nos meilleures formations
              </span>
              <span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>
            </h2>
          </div>
          <div className="grid gap-8 pb-10 md:grid-cols-3">
            {data?.data.data
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .slice(0,3)
            .map((training:any)=> (
              <HomeTrainingItem 
                classes="bg-slate-50 rounded-lg shadow-md" 
                training={training}
                link={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
                key={training.id}
              /> ))}
          </div>
          <AllTrainings
              text={"Contactez nous"}
              link="/contactez-nous"
              classes='border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue'
          />
        </div>
      </section>
    ): null }
    </>
  )
}

export default NosMeilleuresFormations
