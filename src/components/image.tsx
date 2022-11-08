import * as React from 'react';
import NextImage, { ImageProps } from 'next/future/image';
import clsx from 'clsx';

type ImageType = ImageProps & {};

const Image = ({ src, alt, className, ...props }: ImageType) => {
  return (
    <div className="relative h-auto w-auto overflow-hidden rounded-md ring-1 ring-slate-200">
      <NextImage
        src={src}
        alt={alt}
        placeholder="blur"
        className={clsx('object-cover object-center', className)}
        // style={{ aspectRatio: `${props.width} / ${props.height}` }}
        {...props}
      />
    </div>
  );
};

const ImageWithCaption = ({ src, alt, ...props }: ImageType) => {
  return (
    <figure className="flex flex-col items-start space-y-2">
      <Image src={src} alt={alt} {...props} />
      <figcaption className="text-xs font-semibold italic">{alt}</figcaption>
    </figure>
  );
};

Image.WithCaption = ImageWithCaption;

export { Image };
