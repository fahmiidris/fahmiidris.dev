import type { ClassValue } from 'clsx';

type TOmitUndefined<T> = T extends undefined ? never : T;

type TStringToBoolean<T> = T extends 'true' | 'false' ? boolean : T;

type TConfigSchema = Record<string, Record<string, ClassValue>>;

type TConfigVariants<T> = {
    [Variant in keyof T]?: TStringToBoolean<keyof T[Variant]>;
};

export type TProps<T> = TConfigVariants<T> & {
    className: ClassValue;
};

export type TModifyConfig<T> = T extends TConfigSchema
    ? {
          variants: T;
          defaultVariants: TConfigVariants<T>;
      }
    : never;

export type TModifyProps<T extends (params: TProps<T>) => string> = Omit<TOmitUndefined<Parameters<T>[0]>, 'className'>;
