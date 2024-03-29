import classNames from 'classnames';
import React from 'react';
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

function Rating({rate, label, classes, displayRate = false, displayLabel = false, isDecimal = false}: any) {
  return (
    <>
    { 
      (rate) ? (
        <span className={classNames("flex py-1 items-center text-white", classes)}>
          {displayRate ? (<span className="mr-2">{rate.slice(0, 3)}</span>): null}
          <span className='text-left flex mr-2'>
              {
                Array.from(Array(Math.floor(rate.replace(/,/g, '.'))).keys())
                    .map((entry: number) => 
                    <BsStarFill className='text-xs text-yellow-400' key={`moyenne-${entry}`} />
                )
              }
              {isDecimal ? (<BsStarHalf className='text-xs text-yellow-400' />): null}
              
              {
                Array
                  .from(Array((isDecimal ? 4: 5) - Math.floor(rate.replace(/,/g, '.'))).keys())
                  .map((entry: number) => <BsStar className='text-xl' key={`moyenne-${entry}`} />
                )
              }
            </span>
          {displayLabel ? (<span>{label}</span>): null}
        </span>)
        : null
      }
    </>
  )
}

export default Rating
