import Page from 'components/pages';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';

function POE({id, link}: {link: string, id: string}) {
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait,*';
  const categories = 'categories.*';
  const pages = 'pages.*';
  const articles = 'articles.*';
  const pagesSessions = 'sessions.*';
  const fields=`${base},${categories},${pages},${pagesSessions},${articles}`
  const [sessions, setSessions] = useState([]);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["poe", link, id],
    queryFn: () => fetchData({path: `pages/${id}`, fields}), 
    onSuccess: ({data}: any) => {
      const pages = data?.data;
      if(pages) {
        if(pages.sessions && pages.sessions.length){
          setSessions(pages.sessions);
        }
      }
    }
  });
  return (
    <>
      {
        isSuccess ? (
         <Page data={data?.data.data} sessions={sessions}/>
        ) : null
      }
    </>
  )
}

export default POE

export async function getServerSideProps(context: any) {
  const { params } = context;
  
  const id = params['page-poe'].substring(params['page-poe'].lastIndexOf("-") + 1);
  const libelle = params['page-poe'].substring(
    0,
    params['page-poe'].lastIndexOf("-")
  );
  return { props: { ...params, id, libelle, link: params['page-poe'] } };
}
