import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Header(){

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        window.onscroll = function(){
            let navbar = document.getElementById("navbar");
            if( navbar != null){
                if(window.scrollY > navbar.offsetHeight){
                    navbar.classList.add("fixed");
                    navbar.classList.add("w-full");
                }else{
                    navbar.classList.remove("fixed");
                }
            }
        }
    },[])

    return <>
       
        <nav className="py-4 bg-white z-30 hidden md:block" id="navbar">
            <div className="max-w-7xl mx-auto flex items-center justify-between md:text-lg">
                <div>
                    <Image src={"/images/logo.png"} width={150} height={50} alt="Logo Esic"/>
                </div>
                <div className="flex items-center space-x-8 text-gray-700 font-medium">
                    <a href="" className="text-primary font-semibold">Accueil</a>
                    <a  href="#" > Formations </a>
                    <a href="#" > Certifications </a>
                    <a href="#" > Bilan de competences  </a>
                    <a href="#" >POE </a>
                    <a href="#" > VAE  </a>
                </div>
                <div className="text-lg">
                    <a href="#" className="px-4 py-1.5 inline-block  text-white bg-primary rounded-md hover:bg-primary/50 transition-colors"> Contactez-nous </a>
                </div>
            </div>
        </nav>
        <nav className="bg-primary md:hidden p-4 text-white">
            <div className="flex justify-between">
                <div>
                    <Image src={"/images/logo.png"} width={150} height={50} alt="Logo Esic"/>
                </div>
                <button  onClick={ () => setShowMobileMenu(true)}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
            </div>
            <div className={`${showMobileMenu ? "" :"hidden"} transition-display fixed h-screen w-full bg-primary top-0 left-0 z-50 p-6 `}>
                <div className="flex justify-between">
                    <div>
                        <Image src={"/images/logo.png"} width={200} height={150} alt="Logo Esic"/>
                    </div>
                    <button  onClick={ () => setShowMobileMenu(false)}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <ul className="space-y-4 mt-8">
                    <li> <a href="#" > Formations </a> </li>
                    <li> <a href="#" > Certifications </a> </li>
                    <li> <a href="#" > Bilan de competences  </a> </li>
                    <li> <a href="#" >POE </a> </li>
                    <li> <a href="#" > VAE  </a> </li>              
                </ul>
                <div className="text-lg mt-8 space-y-2">
                    <a href="#" className="px-4 py-1.5 block text-center  text-white bg-orange-500 rounded-md hover:bg-orange/50 transition-colors"> Contactez-nous </a>
                </div>
            </div>
        </nav>
    </>
}
