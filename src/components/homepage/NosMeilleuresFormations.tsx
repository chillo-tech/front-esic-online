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
          <div className="grid gap-10 pb-10 md:grid-cols-3">
            {data?.data.data
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .slice(0,3)
            .map((training:any)=> (
              <HomeTrainingItem 
                classes="rounded-lg shadow-md pb-2" 
                training={training}
                link={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
                key={training.id}
              /> ))}
          </div>
          <AllTrainings
              text={"Contactez nous"}
              link="/contactez-nous"
              classes='outline-blue-button'
          />
        </div>
      </section>
    ): null }
    </>
  )
}

export default NosMeilleuresFormations
