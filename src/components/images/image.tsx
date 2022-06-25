import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';
import clsx from 'clsx';

export const Image = ({ src, alt, className, ...props }: ImageProps) => {
    return (
        <figure className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-100 dark:border-transparent">
            <NextImage src={src} alt={alt} className={clsx("object-cover object-center", className)} {...props} placeholder="blur" />
        </figure>
    );
};
