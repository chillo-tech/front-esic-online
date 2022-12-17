import {formations, formations_overview} from "utils";
import { useState } from "react";

export default function FormationsOverview() {
  const [selected, setSelected] = useState<any>(formations[1]);

  return (
    <section className="py-8 sm:py-24 bg-gray-100">
      <header className="max-w-4xl mx-auto text-center">
        <h2>{formations_overview.title}</h2>
        <p>{formations_overview.subtitle}</p>
      </header>
      <div className="max-w-6xl mx-auto flex flex-wrap mt-6 sm:mt-12">
        <aside className="w-full md:w-2/5 py-8 md:py-12">
          <ul className={` bg-secondary/10 rounded-2xl`}>
            {formations.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setSelected(item)}
                  className={`${
                    item.name == selected.name
                      ? "bg-secondary text-white"
                      : "hover:bg-primary/10"
                  } w-full rounded-xl px-8  inline-flex space-x-4 items-center py-4 transition-colors text-lg `}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>{item.name} </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <aside className="w-full md:w-3/5 rounded-xl sm:-ml-4 bg-white border-l-4 border-secondary shadow-2xl">
          <p className="p-4 sm:p-8 text-gray-700">{selected.description}</p>
          {selected.courses.length > 0 ? (
            <div className="px-4 sm:px-8">
              {selected.courses
                .filter((item: any, i: number) => i < 6)
                .map((course: any, index: number) => (
                  <article
                    key={`leaf${index}`}
                    className="border-t py-4 flex items-center justify-between"
                  >
                    <div>
                      <h5 className="text-lg font-semibold"> {course.name}</h5>
                      <h6>{course.hours}</h6>
                    </div>
                    <div>
                      <button className="px-4 py-2 text-sm rounded-full text-white bg-secondary shadow">
                        {formations_overview.cta.label}
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          ) : (
            <div className="px-8">
              <button className="px-8 py-2 sm:text-lg rounded-full text-white bg-secondary shadow">
                {formations_overview.cta.label}
              </button>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
