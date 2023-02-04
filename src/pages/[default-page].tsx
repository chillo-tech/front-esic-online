import Page from 'components/pages';
import React, {useState} from 'react'
import {useQuery} from 'react-query';
import {fetchData} from 'services/index';
import {PAGE_PARAMS} from 'utils';

function DefaultPage({id, libelle}: {id: string, libelle:string}) {
    const [sessions, setSessions] = useState([]);
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
    const { query } = context;
    let params: any = {};
    if (!query) {
        return {
            notFound: true,
        }
    }

    if (query['default-page']) {
        const id = query['default-page'].substring(query['default-page'].lastIndexOf('-') + 1);
        if (isNaN(id)) {
            return {
                notFound: true,
            }
        }
        params = {
            id,
            slug: query['default-page'],
            type: 'default-page',
        };
    }

    return { props: { ...params }}
};
