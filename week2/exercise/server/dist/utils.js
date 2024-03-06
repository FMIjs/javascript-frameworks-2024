"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectEntries = exports.createTuple = void 0;
function createTuple(...args) {
    return Object.freeze(args);
}
exports.createTuple = createTuple;
function objectEntries(object) {
    return Object.entries(object);
}
exports.objectEntries = objectEntries;
const r1 = objectEntries([1, 2, 3]);
const r2 = objectEntries({ a: 1, b: 2 });
