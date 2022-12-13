import React from 'react'
import { useQuery } from 'react-query';
import { getItems } from 'services';
import { Params } from 'types';
import ItemDetail from './item-detail';

function Items({itemsPath, urlPath, fields}: Params) {
  const  { isSuccess, isLoading, data} = useQuery<any>({
    queryKey:  ["items", itemsPath],
    queryFn: () => getItems({itemsPath, fields}),
    refetchOnWindowFocus: false,
    staleTime: 3600000,
    cacheTime: 3600000
  });
  return (
    <section className='grid md:grid-cols-2 md:gap-4'>
      { isSuccess 
        ? (
          <>
          {
            data.data.data
              .sort((a:any, b: any) => a.id - b.id)
              .map((item: any)=> (
                  <ItemDetail path={urlPath} data={item} key={item.id} />
                )
              )
            }
          </>
        ): null}
    </section>
  )
}

export default Items;