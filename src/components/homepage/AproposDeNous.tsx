import ContactUsText from "components/shared/ContactUsText";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { ENTREPRISE_PARAMS } from "utils/index";
import React, {useState} from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";
import {BsFillRecordFill} from "react-icons/bs";

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data?.data.data.apropos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === data?.data.data.apropos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

  return (
    <>
    {(isSuccess && data?.data.data.apropos)? (
      <section className="clear-both py-16 bg-app-light-blue">
        <div className="container mx-auto px-2">
            <ul
                className="list-none lg:mx-16 md:mb-8 hidden md:flex"
                style={{justifyContent: 'space-between'}}
            >
                {data?.data.data.apropos.map((item: any, index:number) => (
                    <li className="flex items-center" key={index}>
                        <span className={"mr-2 sm:text-xl md:text-2xl lg:text-3xl sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-10 lg:w-10 border-2 rounded-full flex "+ (index == currentIndex ? "border-blue-400 " : "border-gray-400 ")} style={{justifyContent: 'center',alignItems: 'center'}}>
                            <BsFillRecordFill className={`sm:text-xl md:text-2xl lg:text-3xl sm:h-4 sm:w-4 lg:h-8 lg:w-8 ${(index == currentIndex ? 'text-app-blue' : 'text-app-gray-400')}`}/>
                        </span>
                        <h3 className="title sm:text-xl md:text-2xl lg:text-3xl text-app-light-gray">{item.libelle}</h3>
                    </li>
                ))}
            </ul>
            <div className='max-w-[1400px] w-full m-auto px-4 relative group'>
                <h3 className="md:hidden text-2xl font-semibold text-center text-app-blue">{data?.data.data.apropos[currentIndex].libelle}</h3>
                <article
                    key={`about_ov${data?.data.data.apropos[currentIndex].id}`}
                    className="py-8 md:px-16 relative text-slate-700 duration-50 flex justify-center lg:mx-20 mb-8"
                >
                    <div
                        style={{ backgroundImage: `url(${data?.data.data.apropos[currentIndex].image})`,width: '30%' }}
                        className='rounded-xl bg-center bg-cover duration-500 hidden lg:block'
                    ></div>
                    <div
                        className="w-full lg:w-3/4 lg:ml-20 text-justfy"
                        style={{textAlign: 'justify'}}
                        dangerouslySetInnerHTML={{ __html: data?.data.data.apropos[currentIndex].description }}
                    ></div>
                </article>
                <div className="block absolute md:top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-5 text-2xl top-0 rounded-full p-2 text-app-blue cursor-pointer">
                    <BiChevronLeft onClick={prevSlide} size={70} />
                </div>
                {/* Right Arrow */}
                <div className='block absolute md:top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-5 text-2xl top-0 rounded-full p-2 text-app-blue cursor-pointer'>
                    <BiChevronRight onClick={nextSlide} size={70} />
                </div>
                <div className='flex top-4 justify-center mt-8 -mb-8'>
                    {data?.data.data.apropos
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