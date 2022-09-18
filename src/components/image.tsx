import * as React from 'react';
import Image, { ImageProps } from 'next/future/image';

type ImageType = ImageProps & {};

export const ImageWithCaption = ({ src, alt, ...props }: ImageType) => {
  return (
    <figure className="flex flex-col items-start">
      <div
        onClick={() => console.log('click')}
        className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg border border-slate-200"
      >
        <Image src={src} alt={alt} placeholder="blur" className="my-0 object-cover object-center" {...props} />
      </div>

      <figcaption className="text-xs font-semibold italic text-slate-800">{alt}</figcaption>
    </figure>
  );
};
