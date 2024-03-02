interface User1 {
  firstName: string;
  lastName: string;
  age: number;
}

interface AuthenticatedUser1 extends User {
  token: string;
}

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

type AuthenticatedUser = User & { token: string };

const user = {} as AuthenticatedUser1;

type MyCollection = Record<string, string>;
type MyCollection2 = Record<number, { prop1: string }>;

function addToCollection<
  T extends Record<any, any>,
  K extends T extends Record<infer U, any> ? U : never,
  V extends T extends Record<any, infer U> ? U : never
  // K extends { [key: infer U]: any } ? U : never
  // V extends { [key: any]: infer U } ? U : never
>(collection: T, key: K, value: V): T {
  collection[key] = value;
  return collection;
}

function doSomething<
  T extends Record<any, any>,
  K extends T extends Record<infer U, any> ? U : never,
  V extends T extends Record<any, infer U> ? U : never,
  OUTPUT = Record<Capitalize<WITH_TEST<K>>, V>
>(collection: T): OUTPUT {
  const newCollection = {} as OUTPUT;
  for (const key of collection as any) {
    newCollection[`Test_${key}`] = collection[key];
  }
  return newCollection;
}

const myCollection: MyCollection = {};
const myCollection2: MyCollection2 = {};

const res = myCollection["0"];

const res1 = addToCollection(myCollection, "1", "1");
const res2 = addToCollection(myCollection2, 1, { prop1: "1" });

// type MyCollection = { [key: number] : string };
// myCollection['a'] = '1';

function test(value: { prop1: number } & { prop2: string }) {}

test({ prop1: 1, prop2: "1" });

type a = "hello";

type WITH_TEST<T extends string> = `test_${T}`;

type b = WITH_TEST<a>;
type c = WITH_TEST<"something">;

const res3 = doSomething({ 1: "hello" });

res3.Test_1;
