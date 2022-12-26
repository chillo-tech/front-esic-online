import Link from "next/link";
import { BsImageAlt } from "react-icons/bs";
import Head from "next/head";
import MainLayout from "../components/main-layout";
import { formations, formations_page } from "../utils";
import { FormationCTA } from "../components/sections/formation-cta";

export default function Formations() {
  function get_formation_courses(slug: string): any[] {
    const formation = formations.find((item: any) => item.slug == slug);
    if (formation == undefined) {
      return [];
    } else {
      return formation.courses;
    }
  }

  return null;
}
