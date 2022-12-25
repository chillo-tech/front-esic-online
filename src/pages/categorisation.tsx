import { useEffect, useState } from "react";
import { axiosInstance } from "services/axios-instance";
import { find } from "utils/json-storage";
export default function Categorisation(){

    const [loading, setLoading] = useState<boolean>(true);
    const [formations, setFormations] = useState<any[]>([]);
    const [categories, setCategories] =useState<any[]>([]);

    const [formation, setFormation] = useState<number>(0);
    const [category, setCategory] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const [succes, setSucces] = useState<string>("");

    function handleFormation(e:any){
       setFormation(e.target.value);
    }

    function handleCategory(e:any){
        setCategory(e.target.value);
    }

    function submit(){
        setLoading(true)
        axiosInstance.post("sousCategories_formations", {
            sousCategories_id: category,
            formations_id: formation,
            status: "published"
        }).then( res => {
            setFormations(() => formations.filter( item => item.id != formation));
            const data =  window.localStorage.getItem("esic-categories");
            if(data == undefined){
                window.localStorage.setItem("esic-categories",JSON.stringify([formation]));
            }else{
                window.localStorage.setItem("esic-categories",JSON.stringify([...JSON.parse(data), formation]))
            }          
            return axiosInstance.post(`classified`,{
                id: formation,
            });
        }).catch( error => {
            setError("Une erreur c'est produite. Selectionner un autre element");
            console.log(error);
        }).finally( () => {
            console.log("Formation categorisee avec succes");
            setSucces("Formation categorisé");
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        axiosInstance.get("classified").then( classified => {
            return axiosInstance.get("non_categorises").then( res => {
                setFormations(() => res.data.data.filter( (item :any)=> classified.data.data.find( (e:any) => e.id == item.id) == undefined ));
                return axiosInstance.get("sousCategories?limit=100").then( res => {
                    setCategories(res.data.data);
                })
            }).catch(error => console.log(error)).finally(() => {
                setLoading(false);
            })
        })
    },[])

    return (
        <div className="w-full px-4">
        <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 mt-8">
                        <select onChange={handleFormation} className="w-full">
                            <option value={0}>----</option>
                            {formations.map( 
                                item => <option key={`category${item.id}`}  value={item.id}>{item.libelle}</option>)
                            }
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 mt-8">
                        <select onChange={handleCategory} className="w-full">
                           <option value="0">----</option>
                            {categories.map( 
                                item => <option key={`category${item.id}`} value={item.id}>{item.libelle}</option>)
                            }
                        </select>
                    </div>
          
            </div>
            <div className="text-center mt-8 w-full">
                <button onClick={submit} className="w-full px-4 py-2 text-white bg-red-500 rounded-md">
                    {loading ? "Chargement...": " Valider"}
                </button>
                {error == "" ? "":<div className="mt-8 px-3 bg-red-500 text-white">
                    {error}
                </div> }
                {succes == "" ? "":<div className="mt-8 px-3 bg-green-600 text-white">
                    {succes}
                </div> }
                
            </div>
    </div>
    )
   
}