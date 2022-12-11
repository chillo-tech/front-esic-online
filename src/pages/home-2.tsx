import Head from "next/head";
import Hero2 from "../components/sections/hero-2";
import Testimonials from "../components/sections/testimonials";
import Location from "../components/sections/location";
import Partners from "../components/sections/partners";
import CertificationsOverview from "../components/sections/certifications-overview";
import FormationsOverview from "../components/sections/formations-overview";
import { home } from "../utils/data/pages-list";
import Footer from "../containers/components/footer";
import Newsletter from "../components/sections/newsletter";
import Header from "../containers/components/header";

export default function Home2() {
  return (
    <>
      <Head>
        <title> {home.title} </title>
      </Head>

      <Header />

      <Hero2 />

      <FormationsOverview />

      <CertificationsOverview />

      <Testimonials />

      <Partners />

      <Location />

      <Newsletter />

      <Footer />
    </>
  );
}
