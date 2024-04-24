import { useState, useMemo, useCallback, useRef, forwardRef, Ref } from 'react';

import styles from './TodoList.module.css';
import { ITodo } from '../../interfaces';
import { Todo } from '../Todo/Todo';
import Input from '../Input/Input';

interface TodoListProps {
  title: string;
  todos: ITodo[];
  todoChangeHandler: (todo: ITodo) => void;
  todoRemoveHandler: (id: number) => void;
  todoAddHandler: (name: string) => void;
}
const TodoList = (props: TodoListProps) => {
  const { todos, title, todoChangeHandler, todoRemoveHandler, todoAddHandler } = props;

  const [filterString, setFilterString] = useState<string>('');

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
    inputRef.current.focus();
  }, [todoAddHandler]);


  const [test, setTest] = useState<string>('');
  const testRef = useRef<string>('');

  return (
    <div className={styles.container}>
      <div>
        {test}
        <button onClick={() => setTest(test + '1')}>Click me</button>
      </div>
      <div>
        {testRef.current}
        <button onClick={() => testRef.current += '1'}>Click me</button>
      </div>
      <div className={styles.controls}>
        <input type="text" placeholder="Filter todos" onInput={inputHandler} />
      </div>

      <h1 className={`my-title`}>{title}</h1>
      <div className={styles.todosContainer}>
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
          <Input placeholder="Add new todo" ref={inputRef} />
          <button type="button" onClick={addHandler}>Add</button>
        </div>
      </div>
    </div>
  );
};


// export default IsAuthenticated(TodoList);
export default TodoList;