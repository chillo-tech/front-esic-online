import { useState } from 'react';
import Image from 'next/image';
import { cn, loaderProp } from 'utils';
import classNames from 'classnames';

function DisplayImage({
  image,
  libelle,
  classes,
  wrapperClasses = 'h-56 rounded-t-lg ',
  imageClasses = 'object-cover',
  positionRelative = true,
}: any) {
  const [isImageLoading, setLoading] = useState(true);
  return (
    <>
      {image ? (
        <div
          className={classNames(
              wrapperClasses,
              'w-full overflow-hidden',
              {'relative': positionRelative},
              classes
          )}>
          <Image
            fill={true}
            src={`${process.env.API_URL}/assets/${
              image && image.filename_disk ? image.filename_disk : image
            }?w=500&h=400fill=true`}
            alt={libelle}
            loader={loaderProp}
            unoptimized
            className={cn(
              'rounded-lg relative duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
              imageClasses,
              isImageLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      ) : null}
    </>
  );
}

export default DisplayImage;
