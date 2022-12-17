import Head from "next/head";
import Hero from "../components/sections/hero";
import Location from "../components/sections/location";
import Partners from "../components/sections/partners";
import { home } from "../utils/data/pages-list";
import TopFormations from "../components/sections/top-formations";
import AboutOverview from "../components/sections/about-overview";
import Features from "../components/sections/features";
import OpenedLayout from "containers/opened";

export default function Home() {
  return (
    <OpenedLayout>
      <Head>
        <title> {home.title} </title>
      </Head>

      <Hero />

      <TopFormations />

      <AboutOverview />

      <Features />

      <Partners />

      <Location />
    </OpenedLayout>
  );
}
