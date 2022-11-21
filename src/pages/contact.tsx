import Head from "next/head";
import ContactInfos from "../components/contact-infos";
import MainLayout from "../components/main-layout";
import { contact } from "../utils/data/pages-list";

export default function Contact() {
  return (
    <MainLayout>
      <Head>
        <title> {contact.title} </title>
      </Head>
      <header className="max-w-7xl items-center mx-auto flex flex-wrap px-3 md:px-0 py-12 md:py-0">
        <aside className="w-full sm:w-1/2">
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-900">
            {contact.header.title}
          </h1>
          <p className="sm:max-w-xl">{contact.header.subtitle}</p>
        </aside>
        <aside className="hidden sm:block w-1/2">
          <img
            src={"/images/esic-elearning.svg"}
            className="hidden sm:block w-3/5 mx-auto"
          />
        </aside>
      </header>
      <section className="max-w-7xl mx-auto flex flex-wrap">
        <aside className="w-full md:w-[35%] bg-secondary text-white  p-3 py-8 md:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {contact.infos.title}
          </h2>
          <p className="text-gray-100 text-base sm:text-lg mt-6">
            {contact.infos.description}
          </p>
          <div className="mt-8">
            <ContactInfos />
          </div>
        </aside>
        <aside className="w-full md:w-[65%] border px-3 py-8 sm:p-12 bg-secondary/5">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {contact.form.title}
          </h3>
          <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="input-label">
                {contact.form.first_name.label}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  className="input-text bg-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="input-label">
                {contact.form.last_name.label}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  className="input-text bg-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="input-label">
                {contact.form.email.label}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  className="input-text bg-transparent"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label className="input-label">
                  {contact.form.phone.label}
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  className="input-text bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="input-label">
                {contact.form.subject.label}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="input-text bg-transparent"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="message" className="input-label">
                  {contact.form.message.label}
                </label>
              </div>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input-text bg-transparent"
                  aria-describedby="message-max"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-lg bg-secondary text-white font-medium rounded-full"
              >
                {contact.form.submit.label}
              </button>
            </div>
          </form>
        </aside>
      </section>
    </MainLayout>
  );
}
