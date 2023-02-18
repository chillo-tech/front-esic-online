import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useQuery} from 'react-query';
import OpenedLayout from 'containers/opened/index.back';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Articles from 'components/shared/Articles';
import { fetchData } from 'services/index';
import Pages from 'components/shared/Pages';
import Link from 'next/link';
import {capitalize, MENU, slugify} from 'utils/index';
import Debug from 'components/Debug';

function MenuIndex() {
  const [menu, setMenu] = useState<any>();
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
        fields: `${base},${MENU}`,
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
            <section>
              <div className='container'>
                <RenderHtmlContent classes='text-xl mb-4 py-4' content={menu?.description}/>
                <Pages data={menu.pages} baseUrl={router.pathname}/>
              </div>
            </section>
            <section className='grid bg-slate-100 '>
              <div className='container'>
                <Articles data={menu.articles}/>
              </div>
            </section>
            <section className='grid'>
              <div className='container pb-10'>
                  {
                      (menu.categories.length) ? (
                          <>
                            <ul className="dropdown grid gap-4 md:grid-cols-4">
                                {menu.categories
                                .filter((a: any) => { return (a !== null && a.categories_id !== null) } )
                                .map((categorie: any, index: number) => (
                                    <li key={`menu-page-${index}`} className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 rounded-lg">
                                      <Link
                                          href={`/${slugify(router.asPath.split("?")[0])}/${slugify(
                                              categorie.categories_id.libelle
                                          )}-${categorie.categories_id.id}`}
                                          className="block text-xl font-normal uppercase text-app-blue"
                                          title={categorie.categories_id.libelle}>
                                        {categorie.categories_id.libelle}
                                      </Link>
                                      {
                                        categorie.categories_id?.souscategories?.length ? (

                                            <ul className="dropdown flex flex-col">
                                              {categorie.categories_id?.souscategories
                                                  .filter((a: any) => { return (a !== null && a.souscategories_id !== null) } )
                                                  .map((souscategorie: any, index: number) => (
                                                      <li key={`menu-souscategories-page-${index}`}>
                                                        <Link
                                                            href={`/${slugify(router.asPath.split("?")[0])}/${slugify(
                                                                categorie.categories_id.libelle
                                                            )}-${categorie.categories_id.id}/${slugify(
                                                                souscategorie.souscategories_id.libelle
                                                            )}-${souscategorie.souscategories_id.id}`}
                                                            className="block py-1 font-normal hover:underline ml-2"
                                                            title={souscategorie.souscategories_id.libelle}>
                                                          - {capitalize(souscategorie.souscategories_id.libelle)}
                                                        </Link>
                                                      </li>
                                                  ))}
                                            </ul>

                                        ):  null
                                      }
                                    </li>
                                ))}
                            </ul>
                          </>
                      ) : null
                  }

              </div>
            </section>
          </>
        ) : null
      }
    </OpenedLayout>
  )
}

export default MenuIndex;
