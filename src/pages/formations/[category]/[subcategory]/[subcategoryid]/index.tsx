import OpenedLayout from "containers/opened";
import { useQuery } from "react-query";
import { getSubCategories } from "services/index";
import PageHeader from "components/pages/PageHeader";
import HoverCard from "components/pages/HoverCard";
import { useRouter } from "next/router";
import Debug from "components/Debug";
function Formation() {
  const router = useRouter();
  const { subcategoryid } = router.query;
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryKey: ["formations", subcategoryid],
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
      <main className="container mx-auto pt-5 pb-10">
        {isSuccess && data.data.data ? (
          <>
          <section className="grid md:grid-cols-3 gap-6">
            {data.data.data.formations.map((formation: any) => (
              <HoverCard
                id={formation.formations_id.id}
                title={formation.formations_id.name}
                image="/images/esic-image-5.jpg"
                key={formation.id}
              />
            ))}
          </section>
          </>
        ) : null}
      </main>
    </OpenedLayout>
  );
}
export async function getServerSideProps(context: any) {
  const { params } = context;
  return { props: { params } };
}
export default Formation;
