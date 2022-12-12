import { partners } from "../../utils/data";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn, loaderProp } from "utils/image-loader";

export default function Partners() {
  const [isLoading, setLoading] = useState(true);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-0">
        <header className="text-center mb-10">
          <h2 >{partners.title}</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {partners.items.map((item, index) => (
            <article
              key={`partners${index}`}
              className="h-48 relative"
            >
            
            <Image 
                  fill={true}
                  src={item.image}
                  alt={item.name} 
                  loader={loaderProp}
                  className={cn(
                    'relative object-contain duration-700 ease-in-out group-hover:opacity-75',
                    isLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
            </article>
          ))}
        </div>
        {/* <article className="mt-8 text-center">
          <Link href={partners.button.link}>
            <button className="px-8 py-3 bg-secondary text-white hover:bg-secondary/90 mx-auto sm:text-lg rounded-full">
              {partners.button.label}
            </button>
          </Link>
        </article> */}
      </div>
    </section>
  );
}
