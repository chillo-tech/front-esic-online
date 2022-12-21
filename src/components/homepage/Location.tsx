import { useEffect } from "react";
function Location() {
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
    <section className="pt-4 pb-0 bg-gray-100">
      <header className="mb-4 container mx-auto px-2">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-1">Nos bureaux</h2>
      </header>
      <div className="w-full overflow-hidden">
        <iframe
          className="map mx-auto w-full"
          height="500"
          src="https://maps.google.com/maps?q=36%20avenue%20Pierre%20Brosolette&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </section>
  );
}
export default Location;