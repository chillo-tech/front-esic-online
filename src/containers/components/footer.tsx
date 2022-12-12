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
    <footer className="shadow-xl py-16 w-full bg-blue-900 text-white font-sans font-extralight">
      <div className="container mx-auto grid grid-cols-4 gap-6">
          <article>
            <h2 className="text-2xl font-semibold"> {contacts.title} </h2>
            <ContactInfos />
          </article>

          <article>
            <h2 className="mb-3 font-bold text-2xl"> {about_us.title} </h2>
            <ul>
              {about_us.links.map((link, ind) => (
                <li key={`agency${ind}`} className="ml-3">
                  <Link href={link.target} className="py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="mb-3 font-bold text-2xl "> {formations_links.title} </h2>
            <ul>
              {formations.map((formation, ind) => (
                <li key={`formation${ind}`} className="ml-3">
                  <Link href={formation.link} className="py-1 block">
                    {formation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex items-center justify-center">
            <Image
              width={500}
              height={400}
              alt="Qualiopi"
              src={quality_label.image}
            />
          </article>
      </div>

      <div className="border-t border-blue-800 text-center py-2">
        <div className="container mx-auto py-1">
          Copyright &copy; {new Date().getFullYear()} {copyright}
        </div>
      </div>
    </footer>
  );
}
