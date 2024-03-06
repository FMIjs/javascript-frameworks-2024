"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const utils_1 = require("../utils");
const router = (0, express_1.Router)();
const users = [
    {
        uid: (0, uuid_1.v4)(),
        firstName: "Ivan",
        lastName: "Ivanov",
        age: 20,
    },
    {
        uid: (0, uuid_1.v4)(),
        firstName: "Todor",
        lastName: "Todorov",
        age: 32,
    },
];
const validators = {
    String: (val) => typeof val === "string",
    Number: (val) => typeof val === "number",
};
function createSchemaFor(config) {
    const validation = {};
    for (const entry of (0, utils_1.objectEntries)(config)) {
        const [key, value] = entry;
        validation[key] = validators[value];
    }
    return validation;
}
const v = createSchemaFor({
    firstName: "String",
    lastName: "String",
    age: "Number",
});
function isValidUserData(data) {
    const invalidFields = [];
    for (const [key, value] of (0, utils_1.objectEntries)(data)) {
        const isValid = v[key](value);
        if (!isValid)
            invalidFields.push(key);
    }
    return {
        success: invalidFields.length === 0,
        invalidFields,
    };
}
function addUser(newUser) {
    const newUserEntry = Object.assign(Object.assign({}, newUser), { uid: (0, uuid_1.v4)() });
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
exports.default = router;
