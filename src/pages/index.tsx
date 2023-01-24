import AproposDeNous from 'components/homepage/AproposDeNous';
import Carte from 'components/homepage/Carte';
import Hero from 'components/homepage/Hero';
import NosClients from 'components/homepage/NosClients';
import NosMeilleuresFormations from 'components/homepage/NosMeilleuresFormations';
import NosOffres from 'components/homepage/NosOffres';
import Statistiques from 'components/homepage/Statistiques';
import OpenedLayout from 'containers/opened';
import Head from 'next/head';
import NousTrouver from "components/homepage/NousTrouver";
import AvisUtilisateurs from 'components/homepage/AvisUtilisateurs';

export default function Home() {
  return (
    <OpenedLayout>
      <Hero />
      <NosMeilleuresFormations />
      <AproposDeNous />
      <NosOffres />
      <Statistiques />
      <NousTrouver />
      <NosClients />
      <AvisUtilisateurs />
    </OpenedLayout>
  );
}
