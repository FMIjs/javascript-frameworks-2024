import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import styles from './TodoList.module.css';
import { ITodo, IUser } from '../interfaces';
import { Todo } from './Todo';

interface TodoListProps {
  title: string;
  todos: ITodo[];
  todoChangeHandler: (todo: ITodo) => void;
  todoRemoveHandler: (id: number) => void;
  todoAddHandler: (name: string) => void;
}
export const TodoList = (props: TodoListProps) => {
  console.log('TodoList rendered');
  const { todos, title, todoChangeHandler, todoRemoveHandler, todoAddHandler } = props;

  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showTodos, setShowTodos] = useState<boolean>(true);
  const [showUsers, setShowUsers] = useState<boolean>(false);

  const [filterString, setFilterString] = useState<string>('');

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // react on every render
  });
  useEffect(() => {
    // react on initial render

    // cleanup function
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    if (!showUsers) return;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersResponse => setUsers(usersResponse));
  }, [showUsers]);


  const inputRef = useRef<HTMLInputElement>(null);

  const filteredTodos = useMemo(() => {
    console.log('Filtering todos');
    return todos.filter(todo => todo.name.includes(filterString));
  }, [filterString, todos]);

  const inputHandler = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setFilterString(value);
  }, []);

  const addHandler = useCallback(() => {
    if (!inputRef.current) return;
    const newTodoValue = inputRef.current.value;
    todoAddHandler(newTodoValue);
  }, [todoAddHandler]);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={() => setShowTitle(!showTitle)}>Toggle Title</button>
        <button onClick={() => setShowTodos(!showTodos)}>Toggle Todos</button>
        <button onClick={() => {
          setShowUsers(!showUsers);
          setUsers([]);
        }}>Toggle Users</button>
        <input type="text" placeholder="Filter todos" onInput={inputHandler} />
      </div>

      {showTitle && (<h1 className={`my-title`}>{title} - 2</h1>)}
      {showTodos && <div className={styles.todosContainer}>
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onChange={todoChangeHandler}
            onRemove={todoRemoveHandler}
          />
        ))}
        <br />

        <div>
          <input type="text" ref={inputRef} />
          <button type="button" onClick={addHandler}>Add</button>
        </div>
      </div>}
      {showUsers && <div className={styles.userContainer}>
        {users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
        {users.length === 0 && <span>Loading users...</span>}
      </div>}
    </div>
  );

};