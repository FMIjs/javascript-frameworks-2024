import { useState, useRef } from "react";
import { Logger } from "../../Logger";
import IsAuthenticated from "../../hocs/is-authenticated";
import { useLogger } from "../../hooks/logger.hook";
import { useTodos } from "../../hooks/todos.hook";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import TodoList from "../TodoList/TodoList";
import { ITodo } from "../../interfaces";

import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const defaultTodos: ITodo[] = [
  { id: 1, name: 'Learn React', done: true },
  { id: 2, name: 'Learn TypeScript', done: true },
  { id: 3, name: 'Learn Next.js', done: false },
  { id: 4, name: 'Build something awesome', done: false }
];

function Home() {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const params = useParams();

  console.log('location', location);
  console.log('params', params);


  const todosTitle = 'My Todos';

  const AuthenticatedTodoList = IsAuthenticated(TodoList);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const {
    todos,
    changeHandler,
    addHandler,
    removeHandler
  } = useTodos(defaultTodos);

  useLogger(todos);


  const todoListRef = useRef<HTMLDivElement>(null);

  // searchParams.keys().next().value && console.log(searchParams.keys().next().value);

  console.log(searchParams.getAll('qp'));
  console.log(searchParams.get('qp'));

  return (
    <div className="home">
      <Navbar />

      <button type="button" onClick={() => navigate('/about')}>About</button>
      <button
        type="button"
        onClick={() => setSearchParams(
          searchParams.get('qp')
            ? {}
            : { qp: 'test' }
        )
        }>
        Set params
      </button>

      <Logger data={todos} />

      <Logout
        isAuthenticated={isAuthenticated}
        logout={() => setIsAuthenticated(false)}
      />

      <Login
        isAuthenticated={isAuthenticated}
        login={() => setIsAuthenticated(true)}
      />

      <AuthenticatedTodoList
        isAuthenticated={isAuthenticated}

        todos={todos}
        title={todosTitle}
        todoChangeHandler={changeHandler}
        todoAddHandler={addHandler}
        todoRemoveHandler={removeHandler}
      />
    </div>
  );
}

export default Home;
