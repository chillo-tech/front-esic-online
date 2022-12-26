import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { ENTREPRISE_PARAMS, cn, loaderProp, slugify } from "utils/index";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";


export default function Footer() {

  const [isImageLoading, setLoading] = useState(true);

  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["Entreprise-data"],
    queryFn: () =>
      fetchData({
        path: "Entreprise",
        fields: ENTREPRISE_PARAMS
      })  
   });
  return (
    <footer className="shadow-xl py-8 w-full bg-blue-900 text-white font-sans font-extralight">
      {
        isSuccess ? (
          <div className="container text-xl">
            <div className="grid gap-7 md:grid-cols-4 items-start">
              <article className="py-5 md:col-span-2">
                <Link href={'/'} className="font-extrabold text-4xl">{data.data.data.libelle}</Link>
                {
                   (data?.data.data.description) ? 
                      <div className="py-3" dangerouslySetInnerHTML={{__html: data.data.data.description}}/>
                    : 
                    null
                  }
                  {
                   (data?.data.data.telephone) ? 
                    <Link href={`tel:${data?.data.data.telephone}`} className="flex items-center py-2 pr-3">
                      <BsPhone className="mr-2 text-white text-3xl"/> 
                      {data?.data.data.telephone}
                    </Link> 
                    : 
                    null
                  }
                  {
                   (data?.data.data.email) ? 
                    <Link href={`mailto:${data?.data.data.email}`} className="flex items-center py-2 pr-3">
                      <HiOutlineMail className="mr-2 text-white text-3xl"/> 
                      {data?.data.data.email}
                    </Link> 
                    : 
                    null
                  }
                  {
                    (data?.data.data.adresses) ? 
                    (
                      <p>
                        {data?.data.data.adresses[0].rue}, {data?.data.data.adresses[0].codepostal}
                        <span className="uppercase ml-1">{data?.data.data.adresses[0].ville}</span>
                      </p>
                    )
                    :null
                  }
                  {
                   (data?.data.data.liens) ? 
                    <p className="flex py-4">
                      {data?.data.data.liens.map((item: any, index: number) => (
                        <Link href={item.lien} className="inline-block mr-5 items-center py-2 px-3 w-12 h-12 relative" key={`liens-${index}-${data?.data.data.libelle}`}>
                           <Image
                              fill={true}
                              src={`${process.env.API_URL}/assets/${item.image.filename_disk}`}
                              alt={data?.data.data.libelle}
                              loader={loaderProp}
                              unoptimized
                              className={cn(
                                'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                                isImageLoading
                                  ? 'scale-110 blur-2xl grayscale'
                                  : 'scale-100 blur-0 grayscale-0'
                              )}
                              onLoadingComplete={() => setLoading(false)}
                            />
                        </Link> 
                      ))}
                    </p>
                   
                    : 
                    null
                  }
              </article>
              <article className="py-5 items-start justify-start flex flex-col">
                {
                  (data?.data.data.pages) ? 
                  (
                    <>                
                      <h2 className="font-extrabold text-2xl mb-4">Nous connaitre</h2>
                        {data?.data.data.pages.map((item: any) => (
                          <Link href={`a-propos-de-nous/${slugify(item.libelle)}-${item.id}`} key={`pages-${item.id}`}
                                className="inline-block items-center mb-2">
                            {item.libelle}
                          </Link> 
                        ))}
                    </>
                  )
                    : 
                    null
                  }
              </article>
              <article className="py-5">
                {
                  (data?.data.data.certifications) ? 
                    <>
                      {data?.data.data.certifications.map((item: any) => (
                        <div className="inline-block items-center w-60 h-32 relative" key={`certifications-${item.id}`}>
                           <Image
                              fill={true}
                              src={`${process.env.API_URL}/assets/${item.directus_files_id.filename_disk}`}
                              alt={data?.data.data.libelle}
                              loader={loaderProp}
                              unoptimized
                              className={cn(
                                'relative object-contain duration-700 ease-in-out group-hover:opacity-75',
                                isImageLoading
                                  ? 'scale-110 blur-2xl grayscale'
                                  : 'scale-100 blur-0 grayscale-0'
                              )}
                              onLoadingComplete={() => setLoading(false)}
                            />
                        </div> 
                      ))}
                    </>
                    : 
                    null
                  }
              </article>
            </div>
          </div>
        ): null
      }
      <div className="border-t border-slate-500 text-center py-2">
        <div className="container mx-auto py-2">
          Copyright &copy; {new Date().getFullYear()} ESIC. Tous droits reservés.
        </div>
      </div>
    </footer>
  );
}
