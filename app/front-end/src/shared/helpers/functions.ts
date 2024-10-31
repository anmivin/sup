import { Truthy } from 'lodash';

import { PositionProps } from '@type/interfaces';

export const isWithin = (posArray: number[], boxPosArray: number[]) => {
  return (
    posArray[0] > boxPosArray[0] - 100 &&
    posArray[0] < boxPosArray[0] + 100 &&
    posArray[1] > boxPosArray[1] - 100 &&
    posArray[1] < boxPosArray[1] + 100
  );
};

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

export const getRoundedPosition = (position: PositionProps, interval: number) => {
  return {
    x: Math.round(position.x / interval) * interval,
    y: Math.round(position.y / interval) * interval,
  };
};
