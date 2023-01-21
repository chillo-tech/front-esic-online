import classNames from 'classnames';
import Debug from 'components/Debug';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { GoSearch } from 'react-icons/go';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { slugify } from 'utils/slugify';
type FormData = {
  text: string;
};
interface Params {
  text?: string;
  classes?:string
}
function Search({classes}: Params) {
  const [value, setValue] = useState('');
  const { data, isSuccess } = useQuery<any>({
    queryKey: ["Trainings", (Object.values(value) as string[]).map((param: string) => slugify(String(param))).join('-')],
    queryFn: () =>
      fetchData({
        fields: 'id,libelle',
        path: 'formations',
        search: value,
        limit: 5
      }),
      enabled: value.length > 2
   });
  const { register} = useForm<FormData>();
  const handleInputChange = (event: any) => {
    event.preventDefault();
    const {target: {value}} = event;
    setValue(value);
  }
  return (
    <div className={classNames('search w-full', {
      'search-empty': !isSuccess || (isSuccess && !data?.data.data.length),
      'search-list': (isSuccess && data?.data.data.length)
    })}>
      <form action="" className='flex relative'>
        <input 
          placeholder="Rechercher une formation, e.g: Introduction à python"
          className={classNames("placeholder:text-white !bg-transparent text-xl w-full rounded-t-2xl py-6 border-t-4 border-l-4 border-r-4 text-white border-gray-300 !focus:!border-gray-300 px-5", {[`${classes}`]:true})}
          {...register("text", { onChange: handleInputChange})} 
        />
        <GoSearch className='md:absolute right-5 top-6 text-4xl hidden' />
      </form>
      <div className="results relative" style={{height: '1px'}}>
        {(isSuccess && data?.data.data.length) ? (
          <ul className='absolute left-0 top-0 right-0 z-50'>
             {data?.data.data.map((item: any, index: any) => (
                <li key={`search-${index}-${item.id}`}>
                  <Link href={`/nos-formations/${slugify(item.libelle)}-${item.id}`}
                        title={item.libelle}
                        className="block bg-white py-4 px-4 border-b border-gray-400 text-gray-700 text-xl">
                      {item.libelle}
                  </Link> 
                </li>
              ))}
          </ul>
        ): null}
      </div>
    </div>
  )
}

export default Search
