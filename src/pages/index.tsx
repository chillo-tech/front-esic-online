import AproposDeNous from 'components/homepage/AproposDeNous';
import Hero from 'components/homepage/Hero';
import NosClients from 'components/homepage/NosClients';
import NosMeilleuresFormations from 'components/homepage/NosMeilleuresFormations';
import NosOffres from 'components/homepage/NosOffres';
import Statistiques from 'components/homepage/Statistiques';
import OpenedLayout from 'containers/opened';
import NousTrouver from "components/homepage/NousTrouver";
import AvisUtilisateurs from 'components/homepage/AvisUtilisateurs';
import { ApplicationContext } from 'context/ApplicationContext'
import { useContext } from 'react'
import Metadata from 'components/metadata';


export default function Home() {
  const {state} = useContext(ApplicationContext);
  return (
    <OpenedLayout>
      <Metadata entry={state?.company} />
      <Hero />
      <NosMeilleuresFormations />
      <AproposDeNous />
      <NosOffres />
      <AvisUtilisateurs />
      <Statistiques />
      <NousTrouver />
      <NosClients />
    </OpenedLayout>
  );
}
