import Head from 'next/head'
import MainLayout from '../components/main-layout';

const page_content = {
  title : "Esic - Home"
}

export default function Home() {
  return (
    <MainLayout>
      <Head> 
        <title> {page_content.title}  </title>
      </Head>
    </MainLayout>
  )
}
