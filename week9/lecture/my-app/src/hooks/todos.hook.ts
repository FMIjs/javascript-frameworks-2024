import { useCallback, useState } from "react";
import { ITodo } from "../interfaces";

interface UseTodosResponse {
  todos: ITodo[];
  changeHandler: (todo: ITodo) => void;
  addHandler: (name: string) => void;
  removeHandler: (id: number) => void;
}
export const useTodos = (initialTodos: ITodo[]): UseTodosResponse => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  const changeHandler = useCallback((changedTodo: ITodo) => {
    const newTodos: ITodo[] = todos.map(todo => todo.id === changedTodo.id ? changedTodo : todo)
    setTodos(newTodos);
  }, [todos]);

  const addHandler = useCallback((name: string) => {
    const newTodo: ITodo = {
      id: Math.max(...todos.map(todo => todo.id)) + 1,
      name,
      done: false
    };
    setTodos([...todos, newTodo]);
  }, [todos]);

  const removeHandler = useCallback((id: number) => {
    const newTodos: ITodo[] = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }, [todos]);

  return {
    todos,
    changeHandler,
    addHandler,
    removeHandler
  }
}