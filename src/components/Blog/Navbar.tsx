import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { capitalize } from "utils/capitalize";

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
      <div className="hidden sm:flex items-center justify-end container text-xl gap-5 font-medium py-4 px-4">
        {Links.map((item, idx) => (
          <div
            key={`${item.text}-${idx}`}
            className="w-fit hover:bg-emerald-300 rounded-md px-2 py-1"
          >
            <Link href={item.path} className="text-emerald-950 ">
              {item.text.toUpperCase()}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden items-center justify-between container gap-2 relative py-4 px-4">
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
            <GiCancel
              className="text-4xl text-emerald-700"
              // color={"rgb(2 44 34 / var(--tw-text-opacity))"}
            />
          ) : (
            <HiOutlineMenu className="text-4xl" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-full left-[2%] bg-white w-[96%] z-50 flex flex-col container gap-2 p-4 rounded-lg shadow-lg py-4 px-4">
            {Links.map((item, idx) =>
              idx === Links.length - 1 ? (
                <div
                  key={`${item.text}-${idx}`}
                  className="w-full text-center font-medium p-3"
                >
                  <Link href={item.path} className="text-emerald-950 text-xl">
                    {capitalize(item.text)}
                  </Link>
                </div>
              ) : (
                <div
                  key={`${item.text}-${idx}`}
                  className="w-full text-center font-medium p-3 border-b border-emerald-950"
                >
                  <Link href={item.path} className="text-emerald-950 text-xl">
                    {capitalize(item.text)}
                  </Link>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
