import { newsletter } from "../../utils/data";

export default function Newsletter() {
  return (
    <section className="bg-white py-8 md:py-20">
      <div className="max-w-7xl flex flex-wrap mx-auto items-center px-3 md:px-0">
        <aside className="w-full sm:w-1/2">
          <header>
            <h2 className="text-center sm:text-left">{newsletter.title}</h2>
            <p className="text-center sm:text-left">{newsletter.subtitle}</p>
          </header>
          <form action="#" className="mt-4 md:mt-6 sm:max-w-lg sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="cta-email" className="sr-only">
                {newsletter.form.email.label}
              </label>
              <input
                id="cta-email"
                type="email"
                className="big-input"
                placeholder={newsletter.form.email.placeholder}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button type="submit" className="btn-secondary">
                {newsletter.button}
              </button>
            </div>
          </form>
        </aside>
        <aside className="w-full sm:w-1/2">
          <img
            src={"/images/newsletter.svg"}
            className="hidden sm:block w-3/4 mx-auto"
          />
        </aside>
      </div>
    </section>
  );
}
