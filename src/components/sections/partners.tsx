import { partners } from "../../utils/data";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section className=" py-8 md:py-20 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-0">
        <header className="text-center">
          <h2>{partners.title}</h2>
          <p>{partners.subtitle}</p>
        </header>
        <aside className="mt-4 md:mt-16  flex w-full flex-wrap justify-center gap-2 md:gap-12">
          {partners.items.map((item, index) => (
            <article
              key={`partners${index}`}
              className="mt-4 md:mt-0 w-full  sm:w-64 relative"
            >
              <img src={item.image} className="w-full h-auto" alt={item.name} />
            </article>
          ))}
        </aside>
        <article className="mt-8 text-center">
          <Link href={partners.button.link}>
            <button className="px-8 py-3 bg-secondary text-white hover:bg-secondary/90 mx-auto sm:text-lg rounded-full">
              {partners.button.label}
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
}
