import Head from "next/head";
import MainLayout from "../components/main-layout";

import Hero2 from "../components/sections/hero-2";
import Stats from "../components/sections/stats";
import Testimonials from "../components/sections/testimonials";
import Location from "../components/sections/location";
import Partners from "../components/sections/partners";
import CertificationsOverview from "../components/sections/certifications-overview";
import { home } from "../utils/data/pages-list";
import TopFormations from "src/components/sections/top-formations";
import AboutOverview from "src/components/sections/about-overview";
import Features from "src/components/sections/features";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title> {home.title} </title>
      </Head>

      <Hero2 />

      <Stats />

      <TopFormations />

      <AboutOverview />

      <Features />

      <CertificationsOverview />

      <Testimonials />

      <Partners />

      <Location />
    </MainLayout>
  );
}
