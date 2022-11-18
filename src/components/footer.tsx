import Image from "next/image";
import Link from "next/link";

function createRange(n: number){
    let tab: number[] = [];
    for(let i = 0; i< n; i++){
        tab.push(i)
    }
    return tab;
}

const usefull_links = {
    title : "More informations",
    links : [
        { target: "/#", text: "Link 1"},
        { target: "/#", text: "Link 2"},
        { target: "/#", text: "Link 3"},
        { target: "/#", text: "Link 4"},
        { target: "/#", text: "Link 5"}
    ]
}

const agencies = {
    title : "Our agencies",
    links : [
        { target: "/#", text: "Link 1"},
        { target: "/#", text: "Link 2"},
        { target: "/#", text: "Link 3"},
        { target: "/#", text: "Link 4"},
        { target: "/#", text: "Link 5"}
    ]
}

const about_us = {
    title: "About us",
    subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore accusamus ad, blanditiis deleniti esse eum quisquam ratione doloribus fugit aperiam, et mollitia vero, nobis praesentium repudiandae odio hic a laboriosam.",
    contacts: {
        location: "36 avenue Pierre Brosolette - 92240 MALAKOFF",
        phone: "01 53 90 15 20",
        email: "",
        siret: "Siret : 45303523000094"
    }
}

const formations = {
    title: "Ours courses",
    categories: createRange(10).map((i) => ({
        title: `Category ${i+1}`,
        link: "#",
        courses: createRange(10).map( (i) => ({
            title: `Course ${i+1}`,
            link: "#"
        }))
    }))
}

const copyright : string = "2022 - ESIC. Tous droits reservés.";

export default function Footer(){
    return (
        <footer id="footer" className="bg-gray-100 text-gray-700">
            <div className="max-w-7xl mx-auto  py-8 md:py-16">
                <div>
                    <Link href="/" className="w-48 block mx-auto"> 
                        <Image src={"/images/logo.png"} width={200} height={150} alt="Logo Esic"/>
                    </Link>
                    <div className="flex space-x-2 mt-8  justify-center">
                        <Link href="https://facebook.com/" className="flex space-x-2">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><rect fill="currentColor" /><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg> 
                        </Link>                   
                        <Link href="https://instagram.com/" className="flex space-x-2 items-center"> 
                            <svg className="w-8 h-8" aria-hidden="true" focusable="false"  role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.youtube.com/" className="flex space-x-2 items-center"> 
                            <svg className="w-8 h-8" aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                        </Link>
                    </div>             
                </div>

                <div className="mt-8 md:mt-12 flex flex-wrap space-y-8">

                    <div className="w-full md:w-1/3 px-4 md:px-8">
                        <div>
                            <h1 className="text-2xl font-semibold"> {about_us.title} </h1>
                            <p className="my-4 ">
                                {about_us.subtitle}
                            </p>
                            <ul className="mt-4 space-y-4">
                                <li className="flex space-x-2 items-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>{about_us.contacts.location}</span>
                                </li>
                                <li className="flex space-x-2 items-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span>{about_us.contacts.phone}</span>
                                </li>
                                <li className="flex space-x-2 items-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                                    <span>{about_us.contacts.siret}</span>
                                </li>
                            </ul> 
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-4 mt-4 md:mt-0 md:px-8">
                        <h1 className="font-bold text-2xl "> {usefull_links.title} </h1>
                        <ul className="mt-4">
                            {
<<<<<<< HEAD
                                usefull_links.links.map( (link,ind) => 
                                    <li key={`ul${ind}`} className="flex space-x-2 items-center">
=======
                                usefull_links.links.map( (link, index) => 
                                    <li className="flex space-x-2 items-center" key={`link-${index}`}>
>>>>>>> 66beb6c962fc1c58aa695cc812817a365298e949
                                        <i className="">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                                        </i>
                                        <Link href={link.target}>{link.text}</Link>
                                    </li> 
                                )
                            }                               
                        </ul> 
                    </div>   

                    <div className="w-full md:w-1/4 px-4 mt-4 md:mt-0 md:px-8">
                        <h1 className="font-bold text-2xl"> {agencies.title} </h1>
                        <ul className="mt-4">
                            {
<<<<<<< HEAD
                                agencies.links.map( (link,ind) => 
                                    <li  key={`agency${ind}`}className="flex space-x-2 items-center">
=======
                                agencies.links.map( (link, index) => 
                                    <li className="flex space-x-2 items-center"  key={`link-${index}`}>
>>>>>>> 66beb6c962fc1c58aa695cc812817a365298e949
                                        <i className="">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                                        </i>
                                        <Link href={link.target}>{link.text}</Link>
                                    </li> 
                                )
                            }                               
                        </ul> 
                    </div>   
                    <div className="md:w-1/3"></div>
                    <div className="w-full md:w-2/3 px-4 md:px-8 mt-12 md:mt-0">
                        <h1 className="font-bold text-2xl"> {formations.title} </h1>
                        <div className="flex flex-wrap mt-6">
                            {
<<<<<<< HEAD
                                formations.categories.map( (categorie,ind) => 
                                    <div key={`cat${ind}`} className="w-full md:w-1/3 px-4 mb-8">
                                         <h3 className="font-semibold">{categorie.title}</h3>
                                         <ul className="mt-3">
                                            {
                                                categorie.courses.map( (course,ind1) =>  <li key={`course${ind}${ind1}`} className="flex space-x-2 items-center">
                                                        <i className="">
=======
                                formations.categories.map( (categorie, index) => 
                                    <div className="w-full md:w-1/3 px-4 mb-8" key={`link-${index}`}>
                                         <h3 className="font-semibold">{categorie.title}</h3>
                                         <ul className="mt-3">
                                            {
                                                categorie.courses.map( (course, index) =>  <li className="flex space-x-2 items-center" key={`link-${index}`}>
                                                        <i className=""  key={`link-${course}`}>
>>>>>>> 66beb6c962fc1c58aa695cc812817a365298e949
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                                                        </i>
                                                        <Link href={course.link}>{course.title}</Link>
                                                </li> )
                                            }
                                        </ul>
                                    </div>                                   
                                )
                            }  
                        </div>  
                    </div>   

                </div>
            </div>

            <div className="border-t border-gray-200 py-8">
                <div className="max-w-7xl md:items-center  md:flex md:justify-center mx-auto px-4">
                    <div className="mt-8 md:mt-0">
                        Copyright &copy; {copyright}
                    </div>
                </div>
            </div>

        </footer>
    )
}




