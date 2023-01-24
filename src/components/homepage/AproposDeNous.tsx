import { useQuery } from "react-query";
import { fetchData } from "services/index";
import {ENTREPRISE_PARAMS} from "utils/index";
import React, {useContext, useState} from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";
import {BsFillRecordFill} from "react-icons/bs";
import {ApplicationContext} from "context/ApplicationContext";
import DisplayImage from "components/shared/DisplayImage";
import RenderHtmlContent from "components/shared/RenderHtmlContent";

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
    const {state} = useContext(ApplicationContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? state?.company.apropos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === state?.company.apropos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

  return (
    <>
    {(state?.company?.apropos)? (
      <section className="clear-both py-16 bg-app-light-blue">
        <div className="container mx-auto px-2">
            <ul
                className="list-none lg:mx-16 md:mb-8 hidden md:flex"
                style={{justifyContent: 'space-between'}}
            >
                {state?.company.apropos.map((item: any, index:number) => (
                    <li className="flex items-center cursor-pointer" key={index} onClick={() => {
                        goToSlide(index)
                    }}>
                        <button type="button" className={"mr-2 sm:text-xl md:text-2xl lg:text-3xl sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-10 lg:w-10 border-2 rounded-full flex "+ (index == currentIndex ? "border-blue-400 " : "border-gray-400 ")} style={{justifyContent: 'center',alignItems: 'center'}}>
                            <BsFillRecordFill className={`sm:text-xl md:text-2xl lg:text-3xl sm:h-4 sm:w-4 lg:h-8 lg:w-8 ${(index == currentIndex ? 'text-app-blue' : 'text-app-gray-400')}`}/>
                        </button>
                        <h3 className="title sm:text-xl md:text-2xl lg:text-3xl text-app-light-gray">{item.libelle}</h3>
                    </li>
                ))}
            </ul>
            <div className='w-full m-auto px-4 relative group'>
                <div className="flex items-center cursor-pointer md:hidden mb-8 justify-center" >
                        <button type="button" className={"mr-2 sm:text-xl text-3xl sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-10 lg:w-10 border-2 rounded-full flex border-blue-400 justify-center items-center"}>
                            <BsFillRecordFill className={`sm:text-xl text-3xl sm:h-4 sm:w-4 lg:h-8 lg:w-8 text-app-blue`}/>
                        </button>
                    <h3 className="title text-2xl md:text-3xl text-app-light-gray">{state?.company.apropos[currentIndex].libelle}</h3>
                </div>
                <article
                    className="grid py-5 md:grid-cols-6 gap-8 md:w-4/5 mx-auto justify-center items-center text-slate-700 text-center md:text-left"
                >
                    { state?.company.apropos[currentIndex].image &&
                        <DisplayImage
                            image={state?.company.apropos[currentIndex].image}
                            libelle={state?.company.apropos[currentIndex].libelle}
                            classes="md:col-span-3 !h-72 hidden md:block rounded-xl overflow-hidden"
                        />
                    }
                    <RenderHtmlContent
                        classes={`text-xl md:col-span-${state?.company.apropos[currentIndex].image ? 3 : 6}`}
                        content={state?.company.apropos[currentIndex].description}
                    />
                </article>
                <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-5 text-2xl rounded-full p-2 text-app-blue cursor-pointer">
                    <BiChevronLeft onClick={prevSlide} size={70} />
                </div>
                {/* Right Arrow */}
                <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-5 text-2xl rounded-full p-2 text-app-blue cursor-pointer'>
                    <BiChevronRight onClick={nextSlide} size={70} />
                </div>
                <div className='flex top-4 justify-center mt-8 -mb-8'>
                    {state?.company.apropos
                        .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                        .map((item: any, index: number) => (
                        <div
                            key={`about_ov${item.id}`}
                            onClick={() => {
                                goToSlide(index)
                            }}
                            className='text-2xl cursor-pointer mr-2'
                        >
                            <div className={"rounded-full w-6 h-2.5 border "+ (index == currentIndex ? "bg-app-blue w-10" : "bg-gray-400")}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    ): null}
    </>
  );
}

export default AproposDeNous;