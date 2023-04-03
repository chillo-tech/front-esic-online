import React, { useContext } from 'react'
import { ApplicationContext } from '../../context/ApplicationContext';
import { useQuery } from 'react-query';
import { fetchData } from 'services';
import { slugify } from 'utils';
import TrainingTable from './TrainingTable';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';

interface Params {
  title: string,
  limit?: number
}
function Trainings({title, limit = 10}: Params) {

  const base = 'status,id,libelle,souslibelle,prix,localisation,niveau,cpf,heures,jours,image';
  const images = 'image.*';
  const sessions = 'sessions.sessions_id.fin,sessions.sessions_id.debut';
  const fields = `${base},${images},${sessions}`;
  const {state: {trainingsParams}} = useContext(ApplicationContext);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["Trainings", (Object.values(trainingsParams) as string[]).map((param: string) => slugify(String(param))).join('-')],
    queryFn: () =>
    fetchData({
        fields: base,
        path: trainingsParams.path,
        limit
      })  
   });
  
  return (
    <>
    {
      isSuccess ? (
        <section className=''>
          <div className="container pt-10 mx-auto md:px-0">
            <h2 className="text-2xl md:text-4xl font-extrabold">
                {title}
            </h2>
            <div className="grid gap-4 md:py-6 md:grid-cols-3">
              {
                data.data.data.slice(0, 3).map((training: any) =>(
                  <HomeTrainingItem 
                    classes="rounded-lg pb-2"
                    training={training} 
                    link={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
                    key={training.id} 
                  />
                ))
              }
            </div>
            {
              data.data.data.slice(3, 10).map((training: any) =>(
                  <TrainingTable 
                    key={`${training.id}`}
                    id={training.id}
                    data={training}
                    link={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
                  />
                ))
              }
          </div>
        </section>
      ) : null
    }
    </>
  )
}

export default Trainings;
