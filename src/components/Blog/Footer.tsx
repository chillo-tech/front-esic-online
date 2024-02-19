import Link from "next/link";
import React from "react";

const Links = [
  {
    path: "/",
    text: "twitter",
  },
  {
    path: "/",
    text: "linkedin",
  },
  {
    path: "/",
    text: "RSS feed",
  },
  {
    path: "/",
    text: "add to feedly",
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start container gap-3 text-lg text-emerald-950 ">
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
