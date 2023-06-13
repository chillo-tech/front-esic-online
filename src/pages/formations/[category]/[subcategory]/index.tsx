import OpenedLayout from 'containers/opened';
import { useQuery } from 'react-query';
import { getSubCategories } from 'services/index';
import { slugify } from 'utils/slugify';
import PageHeader from 'components/shared/PageHeader';
import classNames from 'classnames';
import HomeTrainingItem from 'components/shared/HomeTrainingItem';
import React, { useState } from 'react';
function SousCategories({ id: subcategoryid, link }: { id: string; link: string }) {
  const [isSuccess, setSuccess] = useState(false);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState({ formations: [] });
  const [formations, setFormations] = useState<any[]>([]);
  useQuery<any>({
    keepPreviousData: true,
    queryKey: ['SousCategories', subcategoryid, offset],
    queryFn: () =>
      getSubCategories({
        id: subcategoryid as string,
        trainingsLimit: 10,
        offset,
      }),
    onSuccess: (data: any) => {
      setSuccess(true);
      const formations: any[] = data.data.data.formations;
      setData(data.data.data);
      if (offset === 0) {
        setFormations(formations);
      } else {
        setFormations((current) => [...current, ...formations]);
      }
    },
  });

  const loadMore = () => {
    setOffset((current) => current + 10);
  };
  return (
    <OpenedLayout>
      {isSuccess ? <PageHeader data={data} /> : null}
      {isSuccess && data ? (
        <section
          className={classNames('bg-app-white', {
            'pt-10 pb-10': formations && formations.length,
          })}
        >
          {formations && formations.length ? (
            <main className="container mx-auto ">
              <section className="grid md:grid-cols-3 gap-6">
                {formations
                  .filter((formation: any) => formation != null && formation.formations_id != null)
                  .map((formation: any, index: number) => (
                    <HomeTrainingItem
                      classes="rounded-lg shadow-md pb-2"
                      training={formation.formations_id}
                      link={`/nos-formations/${slugify(formation.formations_id.libelle)}-${
                        formation.formations_id.id
                      }`}
                      key={`${formation.formations_id.id}-${index}`}
                    />
                  ))}
              </section>
              {
                (formations && formations.length > 9 ) ? (
                  <p className="pt-10 flex items-center justify-center relative">
                    <button type="button" className="outline-blue-button" onClick={loadMore}>
                      Afficher plus de formations
                    </button>
                  </p>
                ): null
              }
            
            </main>
          ) : null}
        </section>
      ) : null}
    </OpenedLayout>
  );
}

export default SousCategories;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.subcategory.substring(params.subcategory.lastIndexOf('-') + 1);
  return { props: { ...params, id, link: `${params.category}/${params.subcategory}` } };
}
