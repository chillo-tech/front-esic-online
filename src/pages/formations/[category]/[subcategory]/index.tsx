import Head from "next/head";
import OpenedLayout from "containers/opened";
import { useQuery } from "react-query";
import { getSubCategories } from "services/index";
import { slugify } from "utils/slugify";
import HoverCard from "components/shared/HoverCard";
import PageHeader from 'components/shared/PageHeader';
import classNames from "classnames";
function SousCategories({id: subcategoryid, link}: {id:string, link: string}) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryKey: ["SousCategories", subcategoryid],
    queryFn: () =>
      getSubCategories({
        id: subcategoryid as string,
        fields:
          "id,libelle,description,formations.formations_id.id,formations.formations_id.libelle,formations.formations_id.description",
      })
  });
  return (
    <OpenedLayout>
      {isSuccess ? (
        <PageHeader data={data?.data.data}/>
      ) : null}
        {isSuccess && data.data.data ? (
          <section className={classNames(' bg-red-50', {
            'pt-10 pb-10 px-2': data.data.data.formations && data.data.data.formations.length
          })}>
            <main className="container mx-auto ">
              <section className="grid md:grid-cols-3 gap-6">
                {data.data.data.formations.map((formation: any, index: number) => (
                  <>
                  <HoverCard
                    id={formation.formations_id.id}
                    title={formation.formations_id.libelle}
                    subtitle={formation.formations_id.subtitle}
                    image={formation.formations_id.image ? `${process.env.API_URL}/assets/${ formation.formations_id.image}`: "/images/esic-image-5.jpg"}
                    key={`${formation.id}-${index}`}
                    link={`/nos-formations/${slugify(formation.formations_id.libelle)}-${formation.formations_id.id}`}
                  />
                  </>
                ))}
              </section>
            </main>
          </section>
        ) : null}

    </OpenedLayout>
  );
}

export default SousCategories;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.subcategory.substring(params.subcategory.lastIndexOf("-") + 1);
  return { props: { ...params, id, link:`${params.category}/${params.subcategory}` } };
}