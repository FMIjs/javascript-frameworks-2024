"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const uuid_1 = require("uuid");
const data = new Map();
exports.DB = {
    create: (todoInput) => {
        const id = (0, uuid_1.v4)();
        const todo = Object.assign({ id, finished: false }, todoInput);
        data.set(id, todo);
        return todo;
    },
    edit: (todoInput) => {
        const { id } = todoInput;
        if (!id) {
            return null;
        }
        const existingTodo = data.get(id);
        if (!existingTodo) {
            return null;
        }
        const todo = Object.assign(Object.assign({}, existingTodo), todoInput);
        data.set(id, todo);
        return todo;
    },
    // get: (id: Todo['id']): Todo => {
    //   return data.get(id);
    // },
    getAll: () => {
        return Array.from(data.values());
    },
    remove: (id) => {
        data.delete(id);
    }
};
exports.DB.create({ description: 'lorem ipsum' });
exports.DB.create({ description: 'lorem ipsum dolor set imet' });
