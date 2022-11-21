import Link from "next/link";
import {
  contacts,
  about_us,
  usefull_links,
  formations_footer,
  copyright,
  quality_label,
} from "../utils/data";

import formations from "../utils/data/formations-list";
import ContactInfos from "../components/contact-infos";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white px-4 sm:px-0">
      <div className="max-w-7xl mx-auto  pt-8 sm:pt-16">
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
            <h2 className="font-bold text-2xl "> {usefull_links.title} </h2>
            <ul className="mt-2 sm:mt-4">
              {usefull_links.links.map((link, ind) => (
                <li key={`ul${ind}`}>
                  <Link href={link.target}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="w-full sm:w-2/5 mt-8 sm:mt-0">
            <h2 className="font-bold text-2xl">{quality_label.title}</h2>
            <p className="mt-2  sm:mt-6 text-gray-300">
              {quality_label.description}
            </p>
            <img src={quality_label.image} className="mt-8 rounded-xl" />
          </article>
        </section>

        <section className="w-full mt-12 border-t  border-gray-700 pt-8">
          <h2 className="font-bold text-2xl"> {formations_footer.title} </h2>
          <div className="flex flex-wrap mt-6">
            {formations.map((categorie, ind) => (
              <article key={`cat${ind}`} className="w-full sm:w-1/4 mb-8">
                <a
                  href={categorie.link}
                  className="font-semibold hover:underline"
                >
                  {categorie.name}
                </a>
                <ul className="mt-3 space-y-2 sm:space-y-3">
                  {categorie.courses.map((course, ind1) => (
                    <li
                      key={`course${ind}${ind1}`}
                      className="flex flex-wrap space-x-2 items-center hover:underline"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <Link href={course.link}>{course.name}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 py-6 border-t border-gray-700 text-center">
          Copyright &copy; {new Date().getFullYear()} {copyright}
        </section>
      </div>
    </footer>
  );
}
