import Debug from "components/Debug";
import ContactUsText from "components/shared/ContactUsText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useQuery } from "react-query";
import { read } from "services/index";
import { cn, loaderProp } from "utils/image-loader";

export default function NotreOffre() {
  const [isLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["nosoffres"],
    queryFn: () => read({
      path: 'nosoffres',
      fields: 'libelle,articles.article_id.id,articles.article_id.libelle,articles.article_id.ordre,articles.article_id.description,articles.article_id.image'
    }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <>
    {isSuccess ? (
      <section className="md:bg-blue-900 text-white py-8">
        <div className="container mx-auto px-2">
          <div className="grid gap-4 md:grid-cols-4">
            {data?.data.data[0].articles.map((item: any) => (
              <article
                key={`hf${item.id}`}
                className="w-full px-6 py-8 relative text-center bg-blue-900"
              >
                <div className="relative h-16">
                  <Image 
                    fill={true}
                    src={`${process.env.API_URL}/assets/${item.article_id.image}?w=50&h=50fill=true`}
                    alt={item.article_id.libelle}
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
                  {item.article_id.libelle}
                </h3>
                {/* <h4>{item.subtitle}</h4> */}
                <div
                  className="mt-4 !font-extralight"
                  dangerouslySetInnerHTML={{ __html: item.article_id.description }}
                >
                </div>
              </article>
            ))}
          </div> 
          <ContactUsText />
        </div>
      </section>
    ): null }
    </>
  )
}
