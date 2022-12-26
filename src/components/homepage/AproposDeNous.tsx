import ContactUsText from "components/shared/ContactUsText";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { ENTREPRISE_PARAMS } from "utils/index";

function AproposDeNous() {
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["Entreprise", "Apropos"],
    queryFn: () =>
      fetchData({
        path: "Entreprise",
        fields: ENTREPRISE_PARAMS
      })  
   });
  return (
    <>
    {(isSuccess && data?.data.data.apropos)? (
      <section className="clear-both py-16 bg-slate-800 bg-opacity-20">
        <div className="container mx-auto px-2">
          <div className="grid gap-4 md:grid-cols-3">
            {data?.data.data.apropos
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .map((item: any) => (
              <article
                key={`about_ov${item.id}`}
                className="shadow-lg p-8 relative bg-slate-100 border border-gray-200 text-slate-700"
              >
                <h3 className="text-2xl font-semibold">{item.libelle}</h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </article>
            ))}
          </div>
          
          <ContactUsText  classes="justify-end text-blue-700" />
        </div>
      </section>
    ): null}
    </>
  );
}

export default AproposDeNous;