import Head from "next/head";
import MainLayout from "../components/main-layout";

import Hero2 from "../components/sections/hero-2";
import Stats from "../components/sections/stats";
import Testimonials from "../components/sections/testimonials";
import Location from "../components/sections/location";
import Partners from "../components/sections/partners";
import CertificationsOverview from "../components/sections/certifications-overview";
import FormationsOverview from "../components/sections/formations-overview";
import { home } from "../utils/data/pages-list";

export default function Home2() {
  return (
    <MainLayout>
      <Head>
        <title> {home.title} </title>
      </Head>

      <Hero2 />

      <Stats />

      <FormationsOverview />

      <CertificationsOverview />

      <Testimonials />

      <Partners />

      <Location />
    </MainLayout>
  );
}
