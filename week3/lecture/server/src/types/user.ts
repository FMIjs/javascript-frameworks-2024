export type User = {
  uid: string;
  firstName: string;
  lastName: string;
  age: number;
};

export type UserCreationAttributes = Omit<User, "uid">;
