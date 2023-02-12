import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useQuery} from 'react-query';
import OpenedLayout from 'containers/opened/index.back';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Articles from 'components/shared/Articles';
import { fetchData } from 'services/index';
import Pages from 'components/shared/Pages';

function MenuIndex() {
	 const [menu, setMenu] = useState<any>()
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait';
  const categories = 'categories.categories_id.id,categories.categories_id.libelle';
  const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
  const fields=`${base},${categories},${pages}`;
  const router = useRouter();
  useQuery<any>({
    queryKey: ["menus", router.pathname],
    queryFn: () =>
      fetchData({
        path: `menus`,
        fields,
        filter: { "libelle": { "_icontains": router.pathname.split('/')[1] }},
      }),
      onSuccess: (data: any) => {
        setMenu(data?.data?.data[0]);
      },
      onError: () => {
        router.push('/page-inconnue')
      }
  });
  return (
    <OpenedLayout>
      {
        (menu) ? (
          <>
            <PageHeader data={menu}/>
            <section className=''>
              <div className='container py-10'>
                <RenderHtmlContent classes='text-xl mb-4 py-4' content={menu?.description}/>
                <Pages data={menu.pages} baseUrl={router.pathname}/>
              </div>
            </section>
            <section className='grid bg-slate-100 '>
              <div className='container'>
                <Articles data={menu.articles}/>
              </div>
            </section>
          </>
        ) : null
      }
    </OpenedLayout>
  )
}

export default MenuIndex;
