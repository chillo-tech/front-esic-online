import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";

type LayoutProps = {
    children: React.ReactNode,
}

export default function MainLayout( {children} : LayoutProps ) {
  return (
    <section>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <Header />
        <main className="bg-gray-200">
                {children}
        </main>
      <Footer />

    </section>
  )
}
