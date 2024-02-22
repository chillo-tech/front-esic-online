import React from "react";
import { TSection } from "types";

const Section = ({ section }: { section: TSection }) => {
  const { content, index, title } = section;
  return (
    <div className="container my-4">
      <h3 className="font-bold text-xl">
        <span className="italic">Section {index}</span> : {title}
      </h3>
      <p className="text-justify">{content}</p>
    </div>
  );
};

export default Section;
