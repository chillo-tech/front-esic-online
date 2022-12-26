import ContactUsText from "components/shared/ContactUsText";
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
      <section className="md:bg-blue-900 text-white py-10">
        <div className="container mx-auto px-2">
          <div className="grid gap-4 md:grid-cols-4">
            {data?.data.data[0].articles
                .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                .map((item: any) => (
                  <article
                    key={`hf${item.id}`}
                    className="w-full px-6 py-8 relative text-center bg-blue-900"
                  >
                    <div className="relative h-16">
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
                    <h3 className="text-xl md:text-xl font-semibold my-4">
                      {item.libelle}
                    </h3>
                    {/* <h4>{item.subtitle}</h4> */}
                    <div
                      className="mt-4 !font-extralight"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    >
                    </div>
                  </article>
                ))}
          </div> 
          <ContactUsText classes="justify-end"/>
        </div>
      </section>
    ): null }
    </>
  )
}
