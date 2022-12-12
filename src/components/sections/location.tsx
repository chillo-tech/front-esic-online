import { useEffect } from "react";
import { location } from "../../utils/data";
export default function Location() {
  useEffect(() => {
    // Adjust map size to screen size
    const map = document.querySelector(".map");
    if (map != null) {
      map.setAttribute("width", `${window.innerWidth}`);
      // if (window.innerWidth > 1280) {
      //   map.setAttribute("width", "1280"); // max-w-7xl
      // } else {
      //   map.setAttribute("width", `${window.innerWidth}`);
      // }
    }
  }, []);

  return (
    <section className="pt-8 pb-0 sm:pt-20 bg-gray-100">
      <header className="max-w-3xl mx-auto text-center">
        <h2>{location.title}</h2>
        <p>{location.subtitle}</p>
      </header>
      <div className="w-full overflow-hidden">
        <iframe
          className="map mx-auto mt-4 sm:mt-12"
          width=""
          height="500"
          src="https://maps.google.com/maps?q=36%20avenue%20Pierre%20Brosolette&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </section>
  );
}
