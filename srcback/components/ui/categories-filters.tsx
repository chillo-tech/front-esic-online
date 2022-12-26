import { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function CategorieFilter() {
  const [showChooseCategorie, setShowChooseCategorie] = useState<any>(false);
  const [categories, setCategories] = useState<any>([]);

  const categoryFilter = useRef(null);

  return (
    <div className="w-full md:w-1/4 flex items-center justify-between relative">
      <div
        className="border rounded-md flex w-full px-4 py-2 items-center justify-between"
        onClick={() => setShowChooseCategorie(true)}
        ref={categoryFilter}
      >
        <span>Select a categorie</span>
        <span>
          <AiFillCaretDown className="text-secondary" />
        </span>
      </div>
      <ul
        className={`${
          showChooseCategorie ? "" : "hidden"
        } absolute z-30 top-12 left-0 bg-white shadow-xl w-full`}
      >
        {categories.map((item: any) => (
          <li
            key={`cat${item.name}`}
            className="w-full hover:bg-secondary/20 cursor-pointer transition-colors px-4 py-1"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
