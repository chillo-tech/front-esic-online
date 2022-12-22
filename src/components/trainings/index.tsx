import React, { useContext } from 'react'
import { ApplicationContext } from 'context/ApplicationContext';
import { useQuery } from 'react-query';
import { read } from 'services/index';
import { slugify } from 'utils/slugify';
import Debug from 'components/Debug';
import HoverCard from 'components/pages/HoverCard';
import TrainingTable from 'components/items/TrainingTable';

interface Params {
  title: string
}
function Trainings(params: Params) {

  const base = 'status,id,libelle,souslibelle,prix,presentiel,distanciel,niveau,cpf,duree_en_heures,duree_en_jours,image';
  const images = 'image.*';
  const sessions = 'sessions.sessions_id.fin,sessions.sessions_id.debut';
  const fields = `${base},${images},${sessions}`;
  const {state: {trainingsParams}} = useContext(ApplicationContext);
  console.log(trainingsParams);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["Trainings", (Object.values(trainingsParams) as string[]).map((param: string) => slugify(String(param))).join('-')],
    queryFn: () =>
      read({
        fields: base,
        path: trainingsParams.path,
        limit: 10,
        filter: {
           "cpf": { "_eq": true },
           "status": { "_eq": "published" },
        }
      })  
   });
  
  return (
    <>
    {
      isSuccess ? (
        <section>
        <div className="container px-2 py-10 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
              {params.title}
          </h2>
          <div className="grid gap-4 md:py-6 md:grid-cols-3">
            {
              data.data.data.slice(0, 3).map((training: any) =>(
                <HoverCard
                    id={training.id}
                    title={training.libelle}
                    subtitle={training.subtitle}
                    image={training.image ? `${process.env.API_URL}/assets/${training.image}?w=300&h=200fill=true` : "/images/esic-image-5.jpg"}
                    key={`${training.id}`}
                    others={training}
                    link={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
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
