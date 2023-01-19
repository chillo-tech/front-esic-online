import ContactUsText from "components/shared/ContactUsText";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { ENTREPRISE_PARAMS } from "utils/index";
import React, {useState} from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";

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

    const slides = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
            description: 'Avec plus de 2 000 formations et ceifications, ESIC répond à la\n' +
                'quasi-totalité des besoins de formation informatique des entreprises :\n' +
                'formations ocielles des éditeurs et formations100% développées par\n' +
                'ESIC. Notre catalogue s\'adresse ainsi à tous les grands domaines et\n' +
                'métiers de l\'informatique et à tous les niveaux : du débutant à l\'expe.\n' +
                'Nos contenus sont le fruit de notre veille technologique et des retours\n' +
                'de nos formateurs, pour une formation toujours basée sur la pratique'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            description: 'Avec plus de 2 000 formations et ceifications, ESIC répond à la\n' +
                'quasi-totalité des besoins de formation informatique des entreprises :\n' +
                'formations ocielles des éditeurs et formations100% développées par\n' +
                'ESIC. Notre catalogue s\'adresse ainsi à tous les grands domaines et\n' +
                'métiers de l\'informatique et à tous les niveaux : du débutant à l\'expe.\n' +
                'Nos contenus sont le fruit de notre veille technologique et des retours\n' +
                'de nos formateurs, pour une formation toujours basée sur la pratique'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
            description: 'Lorem ipsum'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    console.log("RolandDev --data");
    console.log(data?.data.data.apropos);

  return (
    <>
    {(isSuccess && data?.data.data.apropos)? (
      <section className="clear-both py-16 bg-app-light-blue">
        <div className="container mx-auto px-2">
            <ul
                className="list-none flex mx-16 mb-14"
                style={{justifyContent: 'space-between'}}
            >
                {slides.map((slide, slideIndex) => (
                    <li className="flex items-center">
                        <span className={"mr-2 text-3xl h-10 w-10 border-2 rounded-full flex "+ (slideIndex == currentIndex ? "border-blue-400 " : "border-gray-400 ")} style={{justifyContent: 'center',alignItems: 'center'}}>
                            <span className={"text-3xl h-6 w-6 rounded-full "+ (slideIndex == currentIndex ? "bg-app-blue" : "bg-gray-400")}></span>
                        </span>
                        <h3 className="title text-3xl text-app-light-gray">A propos de nous</h3>
                    </li>
                ))}
            </ul>
            <div className='max-w-[1400px] w-full m-auto px-4 relative group'>
                {/*<div*/}
                {/*    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}*/}
                {/*    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'*/}
                {/*></div>*/}
                <article
                    key={`about_ov${slides[currentIndex].id}`}
                    className="py-8 px-16 relative text-slate-700 duration-50 flex justify-center mx-20 mb-8"
                >
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})`,width: '30%' }}
                        className='rounded-xl bg-center bg-cover duration-500'
                    ></div>
                    <div
                    style={{width: '70%', marginLeft: 80}}
                    dangerouslySetInnerHTML={{ __html: slides[currentIndex].description }}
                    ></div>
                </article>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-app-blue cursor-pointer'>
                    <BiChevronLeft onClick={prevSlide} size={70} />
                </div>
                {/* Right Arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-app-blue cursor-pointer'>
                    <BiChevronRight onClick={nextSlide} size={70} />
                </div>
                <div className='flex top-4 justify-center mt-8 -mb-8'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => {
                                goToSlide(slideIndex)
                            }}
                            className='text-2xl cursor-pointer mr-2'
                        >
                            <div className={"rounded-full w-6 h-2.5 border "+ (slideIndex == currentIndex ? "bg-app-blue w-10" : "bg-gray-400")}></div>
                        </div>
                    ))}
                </div>
            </div>
          {/*<div className="grid gap-4 md:grid-cols-3">*/}
            {/*{data?.data.data.apropos*/}
            {/*.sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)*/}
            {/*.map((item: any) => (*/}
            {/*  <article*/}
            {/*    key={`about_ov${item.id}`}*/}
            {/*    className="shadow-lg p-8 relative bg-white text-slate-700"*/}
            {/*  >*/}
            {/*    <h3 className="text-2xl font-semibold">{item.libelle}</h3>*/}
            {/*    <div*/}
            {/*      className="mt-4"*/}
            {/*      dangerouslySetInnerHTML={{ __html: item.description }}*/}
            {/*    ></div>*/}
            {/*  </article>*/}
            {/*))}*/}
          {/*</div>          */}
        </div>
      </section>
    ): null}
    </>
  );
}

export default AproposDeNous;