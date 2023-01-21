import Page from 'components/pages';
import React, {useState} from 'react'
import {useQuery} from 'react-query';
import {fetchData} from 'services/index';

function DefaultPage({id, libelle}: {id: string, libelle:string}) {
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
        queryKey: ["DefaultPage",libelle, id],
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

export default DefaultPage

export async function getServerSideProps(context: any) {
    const { params } = context;
    if (!params['default-page']) {
        return {
            notFound: true,
        }
    }

    const id = params['default-page'].substring(params['default-page'].lastIndexOf("-") + 1);
    const libelle = params['default-page'].substring(
        0,
        params['default-page'].lastIndexOf("-")
    );
    if (!id) {
        return {
            notFound: true,
        }
    }
    if (!libelle) {
        return {
            notFound: true,
        }
    }
    return { props: { ...params, id, libelle, link: params['default-page'] } };
}