import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";

const Links = [
  {
    path: "/",
    text: "formations",
  },
  {
    path: "/",
    text: "certifications",
  },
  {
    path: "/",
    text: "financements",
  },
  {
    path: "/",
    text: "poe",
  },
  {
    path: "/",
    text: "bilan de compétences",
  },
  {
    path: "/",
    text: "blog",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex sm:hidden items-center justify-center container gap-2">
        {Links.map((item, idx) => (
          <div key={`${item.text}-${idx}`} className="w-fit">
            <Link href={item.path} className="text-emerald-950 text-lg" />
          </div>
        ))}
      </div>
      <div className="hidden sm:flex items-center justify-center container gap-2 relative">
        <Link href={"/"} className="">
          <Image
            src={"/images/logo.png"}
            width={150}
            height={50}
            alt="Logo Esic"
          />
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className=""
        >
          {isOpen ? (
            <GiCancel className="text-4xl" />
          ) : (
            <HiOutlineMenu className="text-4xl" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-100 bg-white w-full z-50 flex flec-col gap-2 p-4 rounded-lg shadow-lg">
            {Links.map((item, idx) => (
              <div key={`${item.text}-${idx}`} className="w-fit">
                <Link href={item.path} className="text-emerald-950 text-lg" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
