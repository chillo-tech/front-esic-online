import { useQuery } from "react-query";
import { read } from "../../services/index";

export default function AboutOverview() {
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["AboutOverview"],
    queryFn: () => read({
      path: 'apropos',
      fields: 'libelle,souslibelle,articles.article_id.id,articles.article_id.libelle,articles.article_id.ordre,articles.article_id.description'
    }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <>
    {isSuccess ? (
      <section className="clear-both py-16 bg-slate-800 bg-opacity-20">
        <div className="container mx-auto px-2">
          <header className="mb-4">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-1">{data?.data.data[0].libelle}</h2>
            <h4>{data?.data.data[0].souslibelle}</h4>
          </header>
          <div className="grid gap-4 md:grid-cols-3 md:mt-10">
            {data?.data.data[0].articles.map((item: any) => (
              <article
                key={`about_ov${item.article_id.id}`}
                className="shadow-lg p-8 relative bg-slate-100 border border-gray-200 text-slate-700"
              >
                <h3 className="text-lg font-semibold">{item.article_id.libelle}</h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: item.article_id.description }}
                ></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ): null}
    </>
  );
}
