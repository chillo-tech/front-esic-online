import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { BsArrowRightCircle, BsBarChart } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { cn, loaderProp } from 'utils/image-loader'
import { slugify } from 'utils/slugify';
interface Params {
  title: string,
  subtitle?: string,
  id?: string,
  description?: string,
  price?: string,
  duration?: string,
  image: string,
  link: string,
  others?: any
}
function HoverCard({id, title, subtitle, image, link, others}: Params) {
  const [isLoading, setLoading] = useState(true);
  const {query} = useRouter();
  return (
    <article className='relative h-96 font-sans font-otherslight mb-3'>
       <Image 
          fill={true}
          src={image}
          alt={`${title}`}
          loader={loaderProp}
          unoptimized
          className={cn(
            'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      <div className="[&>.link]:hover:flex flex flex-col justify-between items-start description absolute hover:duration-700 hover:top-0 bottom-0 right-0 left-0 bg-black bg-opacity-75 p-6 text-white">
        <div>
          <h3 className='text-xl'>{title}</h3>
          <p className='text-xl flex pt-3'>
            <span>{subtitle}</span> 
          </p>

          <ul className="flex flex-row text-lg items-center">
                  {
                   others.niveau ? 
                    <li className="flex items-center mr-3">
                      <BsBarChart className="mr-2 text-green-600 text-xl"/> 
                      <span>
                        {others.niveau === "BEGINNER" ? 'Débutant': null}
                        {others.niveau === "INTERMEDIARY" ? 'Intermediaire': null}
                        {others.niveau === "ADVANCED" ? 'Avancé': null}
                      </span>
                    </li> 
                    : 
                    null
                  }
                  {
                   ((others.prix && others.cpf) || others.cpf) ? 
                    <li className="flex items-center pr-3">
                      <BiCoinStack className="mr-2 text-yellow-600 text-xl"/> 
                      Eligible au CPF
                    </li> 
                    : 
                    null
                  }
          </ul>

        </div>

        <Link 
          className='bg-green-500 px-4 py-2 rounded-md items-center hidden link'
          href={link}
        >
          En savoir plus <BsArrowRightCircle className='ml-3'/>
        </Link>
      </div>
    </article>
  )
}

export default HoverCard