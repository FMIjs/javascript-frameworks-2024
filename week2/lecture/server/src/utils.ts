import { Entry, LiteralTuple } from "./types/helpers";

export function createTuple<T extends ReadonlyArray<number | string | object>>(
  ...args: T
): LiteralTuple<T> {
  return Object.freeze(args);
}

export function objectEntries<T extends object>(
  object: T
): ReadonlyArray<Entry<T>> {
  return Object.entries(object) as unknown as ReadonlyArray<Entry<T>>;
}

const r1 = objectEntries([1, 2, 3] as const);
const r2 = objectEntries({ a: 1, b: 2 });
