import Image from "next/image";
import { useState } from "react";
import { cn, loaderProp } from "utils/image-loader";
import { home_features } from "../../utils/data";

export default function Features() {
  const [isLoading, setLoading] = useState(true);
  return (
    <section className="md:bg-blue-900 text-white py-8">
      <div className="container mx-auto grid gap-4 md:grid-cols-4">
        {home_features.items.map((item, index) => (
          <article
            key={`hf${index}`}
            className="w-full px-6 py-8 relative text-center bg-blue-900"
          >
            <div className="relative h-16">
              <Image 
                fill={true}
                src={item.image}
                alt={item.title}
                loader={loaderProp}
                unoptimized={true}
                className={cn(
                  'relative object-contain duration-700 ease-in-out group-hover:opacity-75',
                  isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
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
