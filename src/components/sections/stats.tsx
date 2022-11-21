import { stats } from "../../utils/data";

export default function Stats() {
  return (
    <section className="py-12 sm:py-32">
      <header className="max-w-4xl mx-auto text-center">
        <h2 className="">{stats.title}</h2>
        <p className="">{stats.subtitle}</p>
      </header>
      <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4 mt-4 md:mt-12">
        {stats.items.map((item, ind) => (
          <article
            key={`stat${ind}`}
            className="p-6 text-center sm:border-0 sm:border-r"
          >
            <div className="text-6xl font-extrabold text-secondary">
              {item.value}
            </div>
            <div className="mt-2 text-lg leading-6 font-medium text-gray-500">
              {item.label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
