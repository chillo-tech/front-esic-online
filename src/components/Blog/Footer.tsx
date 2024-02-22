import { Links } from "data/Blog/FooterLinks";
import Link from "next/link";
import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start container gap-3 text-lg py-4 text-emerald-950 font-medium">
      <span className="hidden sm:block">&copy; {year}</span>
      {Links.map((item, idx) => (
        <div key={`${item.text}-${idx}`} className="w-fit">
          <Link href={item.path} className="text-emerald-950 text-lg">
            {item.text}
          </Link>
        </div>
      ))}
      <span className="sm:hidden">&copy; {year}</span>
    </div>
  );
};

export default Footer;
