import AllTrainings from '../shared/AllTrainings';
import React from 'react'
import { useQuery } from 'react-query';
import { getTopTrainings } from 'services/index';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
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
      <section className='py-4 md:pt-20 md:pb-20 bg-white' id='formations'>
        <SectionTitle text=" Nos meilleures formations" />
        <div className="container mx-auto px-2">
          <div className="grid gap-4 pb-10 md:grid-cols-3">
            {data?.data.data
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .slice(0,3)
            .map((training:any)=> (
              <HomeTrainingItem 
                classes="rounded-lg pb-2 shadow-md md"
                training={training}
                link={`/nos-formations/${training.slug}`}
                key={training.id}
              /> ))}
          </div>
          <AllTrainings
              text={"Contactez nous"}
              link="/contactez-nous"
              classes='outline-blue-button'
               containerClasses="md:flex md:justify-center md:items-center"
          />
        </div>
      </section>
    ): null }
    </>
  )
}

export default NosMeilleuresFormations
