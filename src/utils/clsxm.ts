import clsx, { ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function clsxm(...classNames: ClassArray) {
    return twMerge(clsx(...classNames));
}
