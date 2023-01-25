import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { capitalize } from 'utils';
interface Params {
  text?: string;
  link?: string;
  icon?: boolean;
  uppercase?: boolean;
  classes?: string;
  training?: any
}
function AllTrainings({
  icon = true,
  uppercase = true,
  link = '/nos-formations',
  text = 'Voir toutes nos formations',
  classes
}: Params) {
  return (
    <span className={classNames('flex flex-col w-full justify-center items-center')}>
      <Link
        href={link}
        className={classNames(
          'flex justify-center items-center w-full px-8 py-3 rounded-lg relative',
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
