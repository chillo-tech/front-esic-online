import AllTrainings from '../shared/AllTrainings';
import React from 'react'
import { useQuery } from 'react-query';
import { getTopTrainings } from 'services/index';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
import { slugify } from 'utils/slugify';
import SectionTitle from 'components/shared/SectionTitle';

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
        <SectionTitle text=" Nos meilleures formations" />
        <div className="container mx-auto px-2">
          <div className="grid gap-8 pb-10 md:grid-cols-3">
            {data?.data.data
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .slice(0,3)
            .map((training:any)=> (
              <HomeTrainingItem 
                classes="bg-slate-50 rounded-lg shadow-md pb-5" 
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
