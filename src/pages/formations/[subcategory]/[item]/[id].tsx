import Head from "next/head";
import OpenedLayout from "containers/opened";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getFormations, getSubCategories } from "services/index";
function Formation() {
  const router = useRouter()
  const { item, subcategory, id = '' as string } = router.query;
  const  { isSuccess, isLoading, data} = useQuery<any>({
    queryKey:  ["formations", item],
    queryFn:  () => getSubCategories({ 
      id,
      fields: 'id,libelle,formations.formations_id.id,formations.formations_id.libelle,formations.formations_id.description'
    }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000 //1jour
  });
  return (
    <OpenedLayout>
      
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url(images/esic-image-5.jpg)" }}>
        <div className="bg-black/10 bg-gradient-to-r from-secondary w-full h-full">
          <div className="container mx-auto flex py-16 text-white flex-col">
          {isSuccess?
           (
              <pre>
                {JSON.stringify(data.data, null,2)}
              </pre>
           )
           : null
          }
          </div>
        </div>
      </div>
      <main className='container mx-auto pt-5 pb-10'>
       
      </main>

    </OpenedLayout>
  )
}

export default Formation;