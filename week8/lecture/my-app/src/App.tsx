import { useState, createContext } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';
import { useTodos } from './hooks/todos.hook';

export const ThemeContext = createContext('light');

const defaultTodos: ITodo[] = [
  { id: 1, name: 'Learn React', done: true },
  { id: 2, name: 'Learn TypeScript', done: true },
  { id: 3, name: 'Learn Next.js', done: false },
  { id: 4, name: 'Build something awesome', done: false }
];

function App() {
  const todosTitle = 'My Todos';

  const [showTodoComponent, setShowTodoComponent] = useState<boolean>(true);
  const { todos, changeHandler, addHandler, removeHandler } = useTodos(defaultTodos);

  return (
    <ThemeContext.Provider value="red">
      <div className="App">
        <span>Testing style encapsulation</span>
        <button onClick={() => setShowTodoComponent(!showTodoComponent)}>Toggle Todo Component</button>
        {showTodoComponent &&
          <TodoList
            todos={todos}
            title={todosTitle}
            todoChangeHandler={changeHandler}
            todoAddHandler={addHandler}
            todoRemoveHandler={removeHandler}
          />
        }
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
