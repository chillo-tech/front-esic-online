import Head from 'next/head'
import MainLayout from '../components/main-layout';

const page_content = {
  title : "Esic - Certifications",
  subtitle: "Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio."
}

export default function Home() {
  return (
    <MainLayout>

      <Head> 
        <title> {page_content.title}  </title>
      </Head>

      <section className="relative bg-indigo-800">
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{page_content.title}</h1>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">{page_content.subtitle}</p>
            </div>
       </section>
    
    </MainLayout>
  )
}
