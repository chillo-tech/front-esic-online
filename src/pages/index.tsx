import AproposDeNous from "components/homepage/AproposDeNous";
import Hero from "components/homepage/Hero";
import NosClients from "components/homepage/NosClients";
import NosMeilleuresFormations from "components/homepage/NosMeilleuresFormations";
import NosOffres from "components/homepage/NosOffres";
import OpenedLayout from "containers/opened";
import Head from "next/head";

export default function Home() {
  return (
    <OpenedLayout>
      <Hero />
      <NosMeilleuresFormations />
      <AproposDeNous />
      <NosOffres />
      <NosClients />    
    </OpenedLayout>
  );
}
