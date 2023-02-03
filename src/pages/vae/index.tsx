import Articles from 'components/shared/Articles';
import PageHeader from 'components/shared/PageHeader';
import Pages from 'components/shared/Pages';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import OpenedLayout from 'containers/opened'

import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
function Financements({id}: any) { 
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait';
  const categories = 'categories.categories_id.id,categories.categories_id.libelle';
  const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
  const fields=`${base},${categories},${pages}`

const {
  isSuccess,
  data,
} = useQuery<any>({
  queryKey: ["menus", "certifications", id],
  queryFn: () =>
    fetchData({
      path: `menus/${id}`,
      fields
    })  
  });
  return (
    <OpenedLayout>
      {
        isSuccess ? (
          <>
            <PageHeader data={data?.data.data}/>
            <section className='bg-green-800 bg-opacity-10'>
              <div className='container py-10'>
                <RenderHtmlContent classes='text-xl mb-4 py-4' content={data?.data.data.description}/>
                <Pages data={data?.data.data.pages}/>
              </div>
            </section>
            <section className='grid bg-slate-100 '>
              <div className='container'>
                <Articles data={data?.data.data.articles}/>
              </div>
            </section>
          </>
        ) : null
      }
    </OpenedLayout>
  )
}

export default Financements;
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}
