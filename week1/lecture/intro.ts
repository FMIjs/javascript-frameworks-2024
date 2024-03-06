let number: number; // :string :boolean

number = 10;

number = +"100";

const arr: number[] = [];

type UserArray = { firstName: string; lastName?: string }[];
const arr2: UserArray = [];

arr2.push({ firstName: "1", lastName: "1" });
arr2.push({ firstName: "1" });
const value = arr2.pop();

const result3 = value?.firstName;

arr.push(10);
// arr.push("10");
// arr.push({ prop: 1 });

arr[0]?.toFixed(10);

let myString = "Hello World";

function convertStrToNum(str: string): number {
  // return { a: 1 };
  return +str;
}

const result = convertStrToNum("10");

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

function userFactory(data: {
  firstName: string;
  lastName: string;
  age: number;
}) {
  return data;
}

const result2 = userFactory({ firstName: "", lastName: "", age: 10 });
console.log(result2.firstName);

class MyUser implements User {
  firstName = "";
  lastName = "";
  age = 1;
}

function isMyUser(
  value: number | string | MyUser | { hello: "" }
): value is MyUser {
  return value instanceof MyUser;
}

// function printId(id: number | string | MyUser | { hello: "" }) {
//   if (typeof id === "object") {
//     if (isMyUser(id)) {
//      id
//     }
//     // if ('hello' in id) return id.hello;
//     // return id.age;
//   }
//   if (typeof id === "number") {
//     return "Number";
//   }
//   console.log(id.toUpperCase());
// }

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(...args: any[]): any {
//   return args.reduce((acc, curr) => acc + curr);
// }

// add(1, '1');

type Container<T> = {
  data: T;
};

type MyUserContainer = Container<MyUser>;
const test: MyUserContainer = {
  data: {
    firstName: "1",
    lastName: "1",
    age: 1,
  },
};

function add<ARG1 extends number | string, ARG2 extends number | string>(
  a: ARG1,
  b: ARG2
): ARG1 extends number
  ? ARG2 extends number
    ? number
    : ARG2 extends string
    ? string
    : never
  : ARG1 extends string
  ? ARG2 extends number
    ? string
    : ARG2 extends string
    ? string
    : never
  : never {
  return (a as any) + (b as any);
}

let str = "hello world" as const;
const a = 1;
let b = 2 as const;
add(1, 2);
add("1", 2);
add(1, "2");
add("1", "2");

type LengthOf<T extends any[]> = T["length"];
type ElementOf<T extends any[]> = T extends (infer U)[] ? U : never;

type myArray = [1, 2, 3, 4, 5];
type result1 = LengthOf<myArray>;
type result2 = ElementOf<myArray>;

const [head] = [1, 2, 3, 4, 5];

type Head<T extends any[]> = T extends [head: infer U, ...tail: any]
  ? U
  : never;
type Tail<T extends any[]> = T extends [head: any, ...tail: infer U]
  ? U
  : never;

type h1 = Head<[{ prop: 1 }, 1, 2, 3, 4, 4]>;
type h2 = Head<[{ prop: 1; prop2: "hello world" }, 1, 2, 3, 4, 4]>;

type t1 = Tail<myArray>;
type t2 = Tail<[{ prop: 1; prop2: "hello world" }, 1, 2, 3, 4, 4]>;

function test1(a: number, b: string, c: boolean) {}
type a = Parameters<typeof test1>;

type Push<T extends any[], E = any> = [...T, E];
type Unshift<T extends any[], E = any> = [E, ...T];
type c1 = Push<[1, 2, 3], 4>;
type c2 = Unshift<[1, 2, 3], 4>;

type Eq<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type r = Eq<1, 2>;
type r2 = Eq<[1], [1]>;

type RangeTo<N, T extends number[] = []> = {
  0: T;
  1: RangeTo<N, Push<T, LengthOf<T>>>;
}[Eq<LengthOf<Tail<T>>, N> extends true ? 0 : 1];

type aaaa = RangeTo<10>;

function rageTo<T extends number>(limit: T): RangeTo<T> {
  return new Array(limit + 1).fill(null).map((_, i) => i) as any;
}

const rangeToResult = rageTo(10);

const el = rangeToResult[5];

// const myArray2000 = [1, 2, 3, 4, 5];

// function getRandomNumberBetween(a, b) {
//   return 0
// };

// function getElementFromMyArray(): ElementOf<myArray> {
//   return myArray2000[getRandomNumberBetween(0, myArray2000.length)] as any;
// }

// const t = getElementFromMyArray()

// Check this - https://github.com/joonhocho/tsdef
