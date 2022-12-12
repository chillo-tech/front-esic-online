import { home_features } from "../../utils/data";

export default function Features() {
  return (
    <section className="bg-[#0C4A6E] text-white  py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap">
        {home_features.items.map((item, index) => (
          <article
            key={`hf${index}`}
            className="w-full px-6 relative text-center"
          >
            <img
              className="w-16 h-16 mx-auto"
              alt={item.title}
              src={item.image}
            ></img>
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              {item.title}
            </h3>
            {/* <h4>{item.subtitle}</h4> */}
            <p
              className="mt-4 r"
              // dangerouslySetInnerHTML={{ __html: item.description }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              tenetur provident eligendi quibusdam ab numquam delectus?
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
