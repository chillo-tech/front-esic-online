import React from 'react'
import { Params } from '../../types';
import ItemDetail from './item-detail';

function Items({itemsPath, urlPath, fields, data=[]}: Params) {
  return (
    <section className='grid md:grid-cols-2 gap-6 px-2 py-10'>
    {
      data
        .sort((a:any, b: any) => a.id - b.id)
        .map((item: any)=> (
            <ItemDetail path={urlPath} data={item} key={item.id} />
          )
        )
      }
    </section>
  )
}

export default Items;
