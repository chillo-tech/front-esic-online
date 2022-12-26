import { formation_cta } from "../../utils/data";
import Link from "next/link";
export function FormationCTA() {
  return (
    <section className="py-16 bg-secondary text-white max-w-7xl mx-auto rounded-2xl">
      <header className="max-w-3xl mx-auto">
        <h2 className="text-white text-center">{formation_cta.title} </h2>
        <p className="text-center text-white">{formation_cta.subtitle}</p>
        <p className="text-center">
          <Link href={formation_cta.button.link}>
            <button className="px-8 py-3 text-secondary bg-white mt-8 text-lg font-semibold rounded-full">
              {formation_cta.button.label}
            </button>
          </Link>
        </p>
      </header>
    </section>
  );
}
