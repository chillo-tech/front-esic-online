import { about_overview } from "../../utils/data";

export default function AboutOverview() {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <header className="text-center">
        <h2>{about_overview.title}</h2>
        <p>{about_overview.subtitle}</p>
      </header>
      <div className="mt-12 md:mt-16">
        <div className="flex flex-wrap md:flex-nowrap space-x-8">
          {about_overview.items.map((item, index) => (
            <article
              key={`about_ov${index}`}
              className="w-full  text-gray-700 bg-secondary/5  p-8 relative pb-20"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
