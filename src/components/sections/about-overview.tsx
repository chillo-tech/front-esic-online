import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { about_overview } from "src/utils/data";

export default function AboutOverview() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-20">
      <header className="text-center">
        <h2>{about_overview.title}</h2>
        <p>{about_overview.subtitle}</p>
      </header>
      <div className="flex flex-wrap md:flex-nowrap space-x-8  mt-12 md:mt-16">
        {about_overview.items.map((item) => (
          <article className="w-full  text-gray-700 bg-secondary/5  p-8 relative pb-20">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {/* <h4>{item.subtitle}</h4> */}
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
            <Link href="/nous-connaitre">
              <div className="with-animated-icon absolute bottom-4 mt-4 text-white px-4 py-2 bg-secondary flex items-center space-x-4">
                <span>More </span>
                <span className=" animated-icon">
                  <HiArrowNarrowRight className="w-5 h-5 transition-all" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
