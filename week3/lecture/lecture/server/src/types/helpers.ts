export type ElementOf<T extends any[]> = T extends (infer U)[] ? U : never;

export type LiteralTuple<T extends ReadonlyArray<any>> = {
  [K in keyof T]: T[K];
};

// This is way too generic because it returns Array.prototype methods and the length when working with arrays
// which is something that Object.entries won't because those properties are not iterable. I'm leaving it so we can
// keep it as reference for someone watching the video
// export type Entries<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][];

// TupleEntry - Generate Union Type of all key - value paris for array
type TupleEntry<
  T extends readonly any[], // T is the provided tuple array
  I extends any[] = [], // in I we will keep the indexes
  R = never // R will be the result
> = T extends readonly [infer Head, ...infer Tail] // check if T extends array if it doesn't return current R if it does -> execute TupleEntry again
  ? // on the first iteration we remove the first element from the provided tuple we increment the indexes (I will be []) so we will get a new array [any]
    // and we use the I for the result to get the current length of I which will be 0 and set the result to [0, HEAD]
    // on the next iterations we repeat the process until we don't have an array (we iterated all over the items in the array and then we just return R)
    TupleEntry<Tail, [...I, any], R | [`${I["length"]}`, Head]>
  : R;

// this type is only for demo purposes so we can see what TupleEntry generates
type UnionTypeOfAllKeyValuePairsForProvidedArray = TupleEntry<[1, 2, 3]>;

// ObjectEntry - Generate Union Type of all key - value paris for object (similar to TupleEntry but for object)
type ObjectEntry<T extends object> = T extends object
  ? { [K in keyof T]: [K, T[K]] }[keyof T] extends infer E // iterate over the key-values and create a tuples of [key, value]
    ? E extends [infer K, infer V] // infer the types of each key and value
      ? K extends string | number // check if the key is string or number, we do this to assure that we won't get any Symbols because they are not iterable
        ? [K, V] // if everything is ok then we return tuple [key, value] if not then we return never so we don't do anything
        : never
      : never
    : never
  : never;

// we create a symbol so we can use it inside the object we provide to ObjectEntry
const sym = Symbol(1);
const sym2 = Symbol(1);
// this type is only for demo purposes so we can see what ObjectEntry generates
type UnionOfAllKeyValueParisForProvidedObject = ObjectEntry<{
  a: 1;
  b: 2;
  [sym]: 100;
  [sym2]: 100;
  10: 20;
}>;

export type Entry<T extends object> = T extends readonly [any, ...any[]]
  ? TupleEntry<T>
  : ObjectEntry<T>;

type test1 = Entry<[1, 2, 3]>;
type test2 = Entry<{ a: 1; b: 2; c: 3 }>;

// // Object.getOwnPropertySymbols(obj);

// const obj = { a: 1, };
// Object.defineProperty({}, 'b', {
//   value: 2,
//   enumerable: false,
//   configurable: true
// });
