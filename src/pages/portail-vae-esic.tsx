import Head from "next/head";
import MainLayout from "../components/main-layout";
import { vae_portal } from "../utils/data/pages-list";

export default function PortalVAE() {
  return (
    <MainLayout>
      <Head>
        <title> {vae_portal.title} </title>
      </Head>
    </MainLayout>
  );
}
