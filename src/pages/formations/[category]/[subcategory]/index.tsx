import Head from "next/head";
import OpenedLayout from "containers/opened";
import { useQuery } from "react-query";
import { getSubCategories } from "services/index";
import PageHeader from "components/pages/PageHeader";
import HoverCard from "components/pages/HoverCard";
import { slugify } from "utils/slugify";
import Debug from "components/Debug";
function SousCategories({id: subcategoryid, link}: {id:string, link: string}) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryKey: ["SousCategories", subcategoryid],
    queryFn: () =>
      getSubCategories({
        id: subcategoryid as string,
        fields:
          "id,libelle,description,formations.formations_id.id,formations.formations_id.name,formations.formations_id.description",
      }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <OpenedLayout>
      {isSuccess ? (
        <PageHeader
          title={data.data.data.libelle}
          description={data.data.data.description}
        />
      ) : null}
      <main className="container mx-auto pt-5 pb-10 px-2">
        {isSuccess && data.data.data ? (
          <>
            <section className="grid md:grid-cols-3 gap-6">
              {data.data.data.formations.map((formation: any, index: number) => (
                <HoverCard
                  id={formation.formations_id.id}
                  title={formation.formations_id.libelle}
                  subtitle={formation.formations_id.subtitle}
                  image="/images/esic-image-5.jpg"
                  key={`${formation.id}-${index}`}
                  link={`/formations/${link}/${slugify(formation.formations_id.libelle)}-${formation.formations_id.id}`}
                />
              ))}
            </section>
          </>
        ) : null}
      </main>
    </OpenedLayout>
  );
}

export default SousCategories;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.category.substring(params.category.lastIndexOf("-") + 1);
  return { props: { ...params, id, link:`${params.category}/${params.subcategory}` } };
}