type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function objectEntries<T extends Record<string, any>>(obj: T) {
  return Object.entries(obj) as Entries<T>;
}
