import Head from 'next/head'
import MainLayout from '../components/main-layout';

import Hero from "../components/sections/hero";
import Stats from "../components/sections/stats";

const page_content = {
  title : "Esic - Home"
}

export default function Home() {
  return (
    <MainLayout>

      <Head> 
        <title> {page_content.title}  </title>
      </Head>

      <Hero />

      <Stats />
    
    </MainLayout>
  )
}
