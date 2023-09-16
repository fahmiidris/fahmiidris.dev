import clsxm from '@/utils/clsxm';

import type { ClassValue } from 'clsx';
import type { TModifyConfig, TProps } from '@/types/modify.type';

function falsyToString<T>(value: T) {
    return typeof value === 'boolean' ? `${value}` : value === 0 ? '0' : value;
}

export default function modify<T>(className: ClassValue, { variants, defaultVariants }: TModifyConfig<T>) {
    return function (props: TProps<T>) {
        const variantClassNames = Object.keys(variants).map(function (variant: keyof typeof variants) {
            const variantProp = props?.[variant as keyof typeof props];
            const defaultVariantProp = defaultVariants?.[variant];

            const variantKey = falsyToString(variantProp || defaultVariantProp) as keyof (typeof variants)[typeof variant];

            return variants[variant][variantKey];
        });

        return clsxm(className, variantClassNames, props.className);
    };
}
