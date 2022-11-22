import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/sections/newsletter";
import Hero from "../components/sections/hero";
import Stats from "../components/sections/stats";
import Testimonials from "../components/sections/testimonials";
import Location from "../components/sections/location";
import Partners from "../components/sections/partners";
import CertificationsOverview from "../components/sections/certifications-overview";
import FormationsOverview from "../components/sections/formations-overview";
import { home } from "../utils/data/pages-list";

export default function Home() {
  return (
    <main id="home-police-4">
      <Head>
        <title> {home.title} </title>
      </Head>

      <Header />

      <Hero />

      <Stats />

      <FormationsOverview />

      <CertificationsOverview />

      <Testimonials />

      <Partners />

      <Location />

      <Newsletter />

      <Footer />
    </main>
  );
}
