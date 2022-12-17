import { about_overview } from "utils";

export default function AboutOverview() {
  return (
    <section className="clear-both md:py-16">
      <div className="container mx-auto">
        <header className="text-center mb-4">
          <h2>{about_overview.title}</h2>
          <p>{about_overview.subtitle}</p>
        </header>
      </div>

      <div className=" container mx-auto py-4">
        <div className="grid gap-4 md:grid-cols-3">
          {about_overview.items.map((item, index) => (
            <article
              key={`about_ov${index}`}
              className="text-gray-700 bg-secondary/5  px-8 py-8 relative"
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
