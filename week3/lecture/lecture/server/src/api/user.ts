import { Router } from "express";
import { v4 } from "uuid";
import { User, UserCreationAttributes } from "../types/user";
import { objectEntries } from "../utils";

const router = Router();
const users: User[] = [
  {
    uid: v4(),
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 20,
  },
  {
    uid: v4(),
    firstName: "Todor",
    lastName: "Todorov",
    age: 32,
  },
];

const validators = {
  String: (val: any) => typeof val === "string",
  Number: (val: any) => typeof val === "number",
};

function createSchemaFor<
  T extends object,
  CFG extends Record<keyof T, keyof typeof validators> = Record<
    keyof T,
    keyof typeof validators
  >
>(config: CFG): Record<keyof T, (typeof validators)[keyof typeof validators]> {
  const validation = {} as Record<
    keyof T,
    (typeof validators)[keyof typeof validators]
  >;
  for (const entry of objectEntries(config)) {
    const [key, value] = entry as [keyof T, keyof typeof validators];
    validation[key] = validators[value];
  }
  return validation;
}

const v = createSchemaFor<UserCreationAttributes>({
  firstName: "String",
  lastName: "String",
  age: "Number",
});

function isValidUserData(data: UserCreationAttributes): {
  success: boolean;
  invalidFields: (keyof UserCreationAttributes)[];
} {
  const invalidFields = [] as (keyof UserCreationAttributes)[];
  for (const [key, value] of objectEntries(data)) {
    const isValid = v[key](value);
    if (!isValid) invalidFields.push(key);
  }

  return {
    success: invalidFields.length === 0,
    invalidFields,
  };
}

function addUser(newUser: UserCreationAttributes): User {
  const newUserEntry: User = {
    ...newUser,
    uid: v4(),
  };
  users.push(newUserEntry);
  return newUserEntry;
}

router.get("/", (req, res) => {
  res.send(users);
});

router.put("/", (req, res) => {
  const userData = req.body;
  const validationResult = isValidUserData(userData);
  if (!validationResult.success) {
    res.status(400).send({ invalidFields: validationResult.invalidFields });
  }
  const newUser = addUser(userData);
  res.send(201).send(newUser);
});

export default router;
