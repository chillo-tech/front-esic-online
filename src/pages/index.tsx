import Head from "next/head";
import MainLayout from "../components/main-layout";

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
    <MainLayout>
      <Head>
        <title> {home.title} </title>
      </Head>

      <Hero />

      <Stats />

      <FormationsOverview />

      <CertificationsOverview />

      <Testimonials />

      <Partners />

      <Location />
    </MainLayout>
  );
}
