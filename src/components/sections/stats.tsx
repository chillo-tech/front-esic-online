import { stats } from "../../utils/data";

export default function Stats() {
  return (
    <section className="md:-mt-[100px] lg:-mt-[150px] xl:-mt-[220px] 2xl:-mt-[250px] relative z-10">
      <div className="max-w-5xl mx-auto rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4 mt-4 md:mt-12">
        {stats.items.map((item, ind) => (
          <article key={`stat${ind}`} className="py-8 text-center">
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
