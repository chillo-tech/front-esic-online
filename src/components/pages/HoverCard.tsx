import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
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
}
function HoverCard({id, title, subtitle, image, price="1 300 HT", duration="3 Jours"}: Params) {
  const [isLoading, setLoading] = useState(true);
  const {query} = useRouter();
  return (
    <article className='relative h-96 font-sans'>
       <Image 
          fill={true}
          src={image}
          alt={`${title} ${subtitle}`}
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
          <h3 className='text-xl ont-extralight'>{title}</h3>
          <p className='text-xl text-semibold flex pt-3'>
            <span>{duration}</span> 
            <span className='mx-2'>-</span> 
            <span>{price}</span>
          </p>
        </div>

        <Link 
          className='bg-green-500 px-4 py-2 rounded-md items-center hidden link'
          href={`/formations/${query.category}/${query.subcategory}/${slugify(title)}-${id}`}
        >
          En savoir plus <BsArrowRightCircle className='ml-3'/>
        </Link>
      </div>
    </article>
  )
}

export default HoverCard