import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { capitalize } from 'utils';
interface Params {
  text?: string;
  link?: string;
  icon?: boolean;
  blank?: boolean;
  uppercase?: boolean;
  classes?: string;
  training?: any;
  containerClasses?: string;
}
function AllTrainings({
  icon = true,
  uppercase = true,
  link = '/nos-formations',
  text = 'Voir toutes nos formations',
  blank = false,
  classes,
  containerClasses
}: Params) {
  return (
      <span className={classNames("link-wrapper", containerClasses)}>
        <Link
         target={blank ?'_blank' : ''}
          href={link}
          className={classNames(
            'block flex justify-center items-center text-xs md:text-sm rounded-lg relative',
            classes,
            { uppercase: uppercase }
          )}>
          <span>{capitalize(text)}</span>
          {icon && <BsArrowRightShort className="text-4xl ml-5" />}
        </Link>
     </span>
  );
}

export default AllTrainings;
