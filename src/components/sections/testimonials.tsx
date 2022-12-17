import { testimonials } from "../../utils/data";

export default function Testimonials() {
  return (
    <section className="">
      <div className="max-w-7xl flex flex-wrap mx-auto ">
        <header className="w-full sm:w-2/5 px-3 sm:px-12 py-12 bg-white sm:bg-secondary/10">
          <h2 className="text-3xl font-bold sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="text-xl mt-2 sm:mt-8">{testimonials.subtitle}</p>
        </header>
        <aside className="w-full sm:w-3/5  text-white bg-secondary py-12 sm:py-0"></aside>
      </div>
    </section>
  );
}
