import Page from 'components/pages';
import React, {useState} from 'react'
import {useQuery} from 'react-query';
import {fetchData} from 'services/index';
import {PAGE_PARAMS} from 'utils';
import { useRouter } from 'next/router';
import { Spinner } from 'flowbite-react';

function DefaultPage({id, libelle}: {id: string, libelle:string}) {
    const [sessions, setSessions] = useState([]);
    const router = useRouter();
    const {
        isSuccess,
        data,
    } = useQuery<any>({
        queryKey: ["DefaultPage",libelle, id],
        queryFn: () => fetchData({path: `pages/${id}`, fields: PAGE_PARAMS}),
        onSuccess: ({data}: any) => {
            const pages = data?.data;
            if(pages) {
                if(pages.sessions && pages.sessions.length){
                    setSessions(pages.sessions);
                }
            }
        },
        onError: () => {
          router.push('/nos-formations')
        }
    });
    return (
        <>
            {
                isSuccess ? (
                    <Page data={data?.data.data} sessions={sessions}/>
                ) : (
                  <div className="h-screen text-center flex justify-center items-center">
                    <div>
                      <Spinner color="info" aria-label="Loading..." size="xl" />
                    </div>
                  </div>
                )
            }
        </>
    )
}

export default DefaultPage

export async function getServerSideProps(context: any) {
    const { query } = context;
    let params: any = {};
    if (!query) {
      return {
        redirect: {
          permanent: false,
          destination: '/nos-formations',
        },
      };
    }

    if (query['default-page']) {
        const id = query['default-page'].substring(query['default-page'].lastIndexOf('-') + 1);
        if (isNaN(id)) {
          return {
            redirect: {
              permanent: false,
              destination: '/nos-formations',
            },
          };
        }
        params = {
            id,
            slug: query['default-page'],
            type: 'default-page',
        };
    }

    return { props: { ...params }}
};
