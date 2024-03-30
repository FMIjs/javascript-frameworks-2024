export type Unpack<T> = T extends Array<infer I>
  ? I
  : T extends (...args: any) => infer R
  ? R
  : T extends Promise<infer P>
  ? P
  : T;
