import React from 'react'
import { slugify } from 'utils/slugify';

function HighlightedText ({text, pattern}: any){
  // Split text on highlight term, include term itself into parts, ignore case
  if (text.trim().length && pattern.trim().length) {
    const parts = text.split(new RegExp(`(${pattern})`, 'gi'));
    return <span>{parts.map((part:string, index:number) => part.toLowerCase() === pattern.toLowerCase() ? (<span className="font-extrabold" key={`${slugify(part)}-${index}`}>{part}</span> ): part)}</span>;  
  } else {
    return text;
  }
}

export default HighlightedText