import Head from "next/head";
import Hero from "components/homepage/hero";
import { home } from "utils/data/pages-list";
import AboutOverview from "components/homepage/AboutOverview";
import NotreOffre from "components/homepage/NotreOffre";
import OpenedLayout from "containers/opened";
import TopTrainings from "components/homepage/TopTrainings";
import OurCustomers from "components/homepage/OurCustomers";
import Location from "components/homepage/Location";

export default function Home() {
  return (
    <OpenedLayout>
      <Head>
        <title>{home.title} </title>
      </Head>
      <Hero />
      <TopTrainings />
      <AboutOverview />
      <NotreOffre />
      <OurCustomers />
      <Location />
    </OpenedLayout>
  );
}
