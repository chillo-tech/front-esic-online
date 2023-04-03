import AllTrainings from "components/shared/AllTrainings";
import RenderHtmlContent from "components/shared/RenderHtmlContent";
import Image from "next/image";
import React, { useContext , useState } from "react";
import { cn, loaderProp } from "utils/image-loader";
import {ApplicationContext} from "context/ApplicationContext";

export default function NosOffres() {
  const {state} = useContext(ApplicationContext);
  const [isLoading, setLoading] = useState(true);
  return (
    <>
    {state?.company?.offres ? (
      <section className="text-white bg-app-blue bg-no-repeat bg-left bg-contain bg-[url('/images/pages/offers-left-arc.svg')]">
        <section className="py-16 bg-[length:1000px_230px] border border-red-3 bg-no-repeat bg-[right_bottom] bg-[url('/images/pages/offers-bottom-arc.svg')]">
          <div className="container mx-auto px-2 flex flex-col justity-center">
            <div className="grid gap-4 md:grid-cols-3">
              {state.company.offres
                  .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                  .slice(0, 3)
                  .map((item: any) => (
                    <article
                      key={`hf${item.id}`}
                      className="w-full px-6 py-8 relative text-center"
                    >
                      <div className="relative h-24">
                        <Image 
                          fill={true}
                          src={`${process.env.API_URL}/assets/${item.image}?w=50&h=50fill=true`}
                          alt={item.libelle}
                          loader={loaderProp}
                          unoptimized={true}
                          className={cn(
                            'relative object-contain duration-700 ease-in-out group-hover:opacity-75',
                            isLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </div>
                      <h3 className="text-4xl md:text-4xl font-semibold mt-6">
                        {item.libelle}
                      </h3>
                      {/* <h4>{item.subtitle}</h4> */}
                      <RenderHtmlContent 
                        content={item.description}
                        classes="mt-4 !font-extralight text-xl"
                      />
                    </article>
                  ))}
            </div> 
            <AllTrainings classes='outline-white-button' containerClasses="md:flex md:justify-center md:items-center"/>
          </div>
        </section>
      </section>
    ): null }
    </>
  )
}
