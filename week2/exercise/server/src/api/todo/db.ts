import { v4 } from "uuid";
import { CreateTODO, EditTODO, Todo } from "../../types";

const data = new Map<Todo['id'], Todo>();

export const DB = {
  create: (todoInput: CreateTODO): Todo => {
    const id = v4();
    const todo: Todo = {
      id,
      finished: false,
      ...todoInput
    };
    data.set(id, todo);

    return todo;
  },
  edit: (todoInput: EditTODO): Todo | null => {
    const { id } = todoInput;
    if (!id) {
      return null;
    }
    const existingTodo = data.get(id);
    if (!existingTodo) {
      return null;
    }

    const todo: Todo = {
      ...existingTodo,
      ...todoInput
    };

    data.set(id, todo);

    return todo;
  },
  // get: (id: Todo['id']): Todo => {
  //   return data.get(id);
  // },
  getAll: (): Todo[] => {
    return Array.from(data.values());
  },
  remove: (id: Todo['id']): void => {
    data.delete(id);
  }
};


DB.create({ description: 'lorem ipsum' });
DB.create({ description: 'lorem ipsum dolor set imet' });
