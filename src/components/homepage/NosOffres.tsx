import AllTrainings from "components/shared/AllTrainings";
import ContactUsText from "components/shared/ContactUsText";
import RenderHtmlContent from "components/shared/RenderHtmlContent";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { cn, loaderProp } from "utils/image-loader";

export default function NosOffres() {
  const [isLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["nosoffres"],
    queryFn: () => fetchData({
      path: 'nosoffres',
      fields: 'libelle,articles.*'
    })
  });
  return (
    <>
    {isSuccess ? (
      <section className="bg-app-blue text-white bg-no-repeat bg-left bg-contain bg-[url('/images/pages/offers-left-arc.svg')]">
        <section className="py-16 bg-[length:1000px_230px] border border-red-3 bg-no-repeat bg-[right_bottom] bg-[url('/images/pages/offers-bottom-arc.svg')]">
          <div className="container mx-auto px-2 flex flex-col justity-center">
            <div className="grid gap-4 md:grid-cols-3">
              {data?.data.data[0].articles
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
            <AllTrainings classes='border border-app-white text-app-white hover:bg-white hover:text-app-blue'/>
          </div>
        </section>
      </section>
    ): null }
    </>
  )
}
