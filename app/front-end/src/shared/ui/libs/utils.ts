import { Truthy } from 'lodash';

export function truthy<T>(value: T): value is Truthy<T> {
  return !!value;
}

export type Entries<T> = {
  [K in keyof T]-?: [K, T[K]];
}[keyof T][];
export const objectEntries = <T extends object>(object: T) => Object.entries(object) as Entries<T>;

export const objectKeys = <T extends object>(object: T) => Object.keys(object) as (keyof T)[];

export const getEnumValues = <T>(enumeration: Record<string | number, T>) => {
  return objectKeys(enumeration)
    .filter((value) => isNaN(Number(value)))
    .map((key) => enumeration[key]);
};

const fileSizePrefixes = ['К', 'М', 'Г', 'Т'] as const;
export const formatFileSize = (sizeInBytes: number, prefix?: (typeof fileSizePrefixes)[number]) => {
  const prefixIndex = prefix ? fileSizePrefixes.indexOf(prefix) : undefined;
  const reducedSize = fileSizePrefixes.reduce(
    (accumulator, prefixItem, index) => {
      if (prefixIndex) {
        return index <= prefixIndex
          ? {
              size: accumulator.size / 1024,
              prefix: prefixItem,
            }
          : accumulator;
      } else {
        return accumulator.size / 1024 > 1
          ? {
              size: accumulator.size / 1024,
              prefix: prefixItem,
            }
          : accumulator;
      }
    },
    {
      size: sizeInBytes,
      prefix: '',
    },
  );
  return `${Math.round(reducedSize.size)} ${reducedSize.prefix}Б`;
};
