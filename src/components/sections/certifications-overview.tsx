import { certifications_overview } from "../../utils/data";
import DottedLayer from "../ui//dotted-layer";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Certifications() {
  return (
    <section className="">
      <div className="max-w-7xl flex flex-wrap mx-auto pt-8 pb-0 sm:py-20">
        <aside className="relative w-full sm:w-2/5 px-3 sm:px-0">
          <img
            className="relative z-20 h-full w-full sm:w-[80%]   object-cover rounded-lg"
            src={certifications_overview.image}
            alt=""
          />
          <DottedLayer
            width={500}
            height={480}
            className="hidden sm:block absolute -top-16 right-0 z-0"
          />
        </aside>
        <aside className="w-full sm:w-3/5 px-3 sm:px-12 py-12 bg-secondary/10">
          <h2 className="text-3xl font-bold sm:text-5xl">
            {certifications_overview.title}
          </h2>
          <p className="text-xl text-gray-700 mt-2 sm:mt-8">
            {certifications_overview.subtitle}
          </p>
          <ul className="mt-4">
            {certifications_overview.items.map((item, index) => (
              <li
                key={`certif${index}`}
                className="flex space-x-2 items-center text-gray-700 mt-3 text-base sm:text-lg"
              >
                <AiOutlineCheckCircle className="text-secondary w-6 h-6" />
                <Link href={item.link}>
                  <span className="hover:underline hover:text-secondary">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
