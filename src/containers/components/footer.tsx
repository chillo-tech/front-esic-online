import Link from "next/link";
import Image from "next/image";
import {
  contacts,
  about_us,
  formations_links,
  copyright,
  quality_label,
} from "../../utils/data";

import formations from "../../utils/data/formations-list.json";
import ContactInfos from "../../components/contact-infos";

export default function Footer() {
  return (
    <footer id="footer" className="bg-sky-900 text-white px-4 sm:px-0">
      <div className="container mx-auto  pt-8 sm:pt-16">
        <section className="flex flex-wrap">
          <article className="w-full sm:w-1/5 mt-8 sm:mt-0">
            <h2 className="text-2xl font-semibold"> {contacts.title} </h2>
            <ContactInfos />
          </article>

          <article className="w-full sm:w-1/5 mt-8 sm:mt-0">
            <h2 className="font-bold text-2xl"> {about_us.title} </h2>
            <ul className="mt-4">
              {about_us.links.map((link, ind) => (
                <li key={`agency${ind}`}>
                  <Link href={link.target}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="w-full sm:w-1/5 mt-8 sm:mt-0">
            <h2 className="font-bold text-2xl "> {formations_links.title} </h2>
            <ul className="mt-2 sm:mt-4">
              {formations.map((formation, ind) => (
                <li key={`formation${ind}`}>
                  <Link href={formation.link}>{formation.name}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative w-full sm:w-2/5 mt-8 sm:mt-0 px-6 flex items-center justify-center">
            <Image
              width={500}
              height={400}
              alt="Qualiopi"
              src={quality_label.image}
              className="mt-8 rounded-xl mx-auto"
            />
          </article>
        </section>

        <section className="mt-8 py-6 border-t border-gray-700 text-center">
          Copyright &copy; {new Date().getFullYear()} {copyright}
        </section>
      </div>
    </footer>
  );
}
