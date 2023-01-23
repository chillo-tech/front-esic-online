import {useState} from "react";
import Image from 'next/image'
import {cn, loaderProp} from 'utils';
import {className} from "postcss-selector-parser";
import classNames from "classnames";


function DisplayImage({image, libelle, classes}: any) {
    console.log({image, libelle});
    
    const [isImageLoading, setLoading] = useState(true);
    return (
        <>
            {
                image ? (
                        <div className={classNames('relative w-full h-full min-h-72 !rounded-t-lg overflow-hidden', classes)}>
                            <div
                                className="rounded-lg w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm"/>
                            <Image
                                fill={true}
                                src={`${process.env.API_URL}/assets/${(image && image.filename_disk) ? image.filename_disk : image}?w=300&h=200fill=true`}
                                alt={libelle}
                                loader={loaderProp}
                                unoptimized
                                className={cn(
                                    'rounded-lg relative object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                                    isImageLoading
                                        ? 'scale-110 blur-2xl grayscale'
                                        : 'scale-100 blur-0 grayscale-0'
                                )}
                                onLoadingComplete={() => setLoading(false)}
                            />
                        </div>
                    ) :
                    null
            }
        </>
    )

}

export default DisplayImage;