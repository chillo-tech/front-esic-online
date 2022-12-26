import PageHeader from 'components/shared/PageHeader';
import OpenedLayout from 'containers/opened'
import Link from 'next/link';
import React from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { slugify } from 'utils/slugify';

function Formations({id}: any) {
  const base = 'id,libelle,souslibelle,ordre,image';
  const categories = 'categories.categories_id.id,categories.categories_id.libelle';
  const souscategories = 'categories.categories_id.souscategories.souscategories_id.id,categories.categories_id.souscategories.souscategories_id.libelle';
  const fields=`${base},${categories},${souscategories}`
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["menus", "formatios", id],
    queryFn: () =>
      fetchData({
        path: `menus/${id}`,
        fields
      })  
    });
  return (
    <OpenedLayout>
      {isSuccess ? (
        <>
          <PageHeader data={data?.data.data}/>
          <section className='clear-both py-8 md:py-16 bg-slate-800 bg-opacity-20'>
            <h2 className="text-blue-800 font-extrabold text-3xl px-2 md:px-10 mb-3">Toutes nos formations</h2>
            <div className="px-2 md:px-10 grid md:grid-cols-4 gap-4">
              {data?.data.data.categories.map((item: any, index: number) => (
                <article className="p-6 md:p-10 rounded-sm shadow-lg  bg-white items-center relative" key={`categories-${index}-${slugify(item.categories_id.libelle)}`}>
                    <h3 className="text-green-700 font-extrabold text-2xl">{item.categories_id.libelle}</h3>
                    <ul className='py-3'>
                      {item.categories_id.souscategories.map((sitem: any, index: number) => (
                        <li key={`categories-${index}-${slugify(sitem.souscategories_id.libelle)}`}>
                          <Link href={`formations/${slugify(item.categories_id.libelle)}-${item.categories_id.id}/${slugify(sitem.souscategories_id.libelle)}-${sitem.souscategories_id.id}`} 
                            className="items-center relative py-1 hover:bg-green-200 flex px-4">
                             - {sitem.souscategories_id.libelle}
                          </Link> 
                        </li>
                      ))}
                    </ul>
                </article> 
              ))}
            </div>
          </section>
        </>
      ) :null
    }
    </OpenedLayout>
  )
}

export default Formations;
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}
