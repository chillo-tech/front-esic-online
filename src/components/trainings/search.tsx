import classNames from "classnames";
import HighlightedText from "components/shared/HighlightedText";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { useQuery } from "react-query";
import { fetchData } from "services/index";
import { slugify } from "utils/slugify";
type FormData = {
  text: string;
};
interface Params {
  text?: string;
  classes?: string;
  isFocused?: boolean;
}
function Search({ classes, isFocused }: Params) {
  const [query, setTrainingQuery] = useState("");
  const { data, isSuccess } = useQuery<any>({
    queryKey: [
      "Trainings",
      (Object.values(query) as string[])
        .map((param: string) => slugify(String(param)))
        .join("-"),
    ],
    queryFn: () =>
      fetchData({
        fields: "id,libelle,slug",
        path: "formations",
        filter: { "libelle": { "_icontains": query }},
        sort: "libelle",
        limit: 10,
      }),
    enabled: query.length > 2,
  });
  const { register } = useForm<FormData>();
  const handleInputChange = (event: any) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setTrainingQuery(value);
  };

  const { onChange, onBlur, name } = register("text", {
    onChange: handleInputChange,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  if (isFocused) inputRef?.current?.focus();

  return (
    <div className={classNames('search w-full', {
      'search-empty': !isSuccess || (isSuccess && !data?.data.data.length),
      'search-list': (isSuccess && data?.data.data.length)
    })}>
      <form action="" className='flex relative'>
        <input 
          placeholder="Rechercher une formation, e.g: Introduction à python"
          className={classNames(
            classes,
            "!focus:!border-white focus:bg-white focus:shadow-xl focus:text-gray-700",
            "placeholder:text-white bg-transparent text-xl w-full rounded-t-2xl py-4 border-t-4 border-l-4 border-r-4 text-white border-gray-300 px-5"
          )}
          onChange={onChange}
          onBlur={onBlur}
          ref={inputRef}
          name={name}
        />
        <GoSearch className='md:absolute md:block right-5 top-6 text-4xl hidden' />
      </form>
      <div className="results relative" style={{ height: "1px" }}>
        {(isSuccess && data?.data.data.length )? (
          <ul className="absolute left-0 top-0 right-0 z-50">
            {data?.data.data.map((item: any, index: any) => (
              <li key={`search-${index}-${item.id}`}>
                <Link
                  href={`/nos-formations/${item.slug}`}
                  title={item.libelle}
                  className="block bg-white py-2 px-2 text-gray-700 text-md text-left"
                >
                  <HighlightedText text={item.libelle} pattern={inputRef?.current?.value}/>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
