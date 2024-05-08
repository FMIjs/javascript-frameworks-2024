import { useDispatch, useSelector } from "react-redux";
import { selectors, actions, AppDispatch } from "./store";
import { useCallback, useEffect, useRef } from "react";
import { fetchUsers } from "./store/thunks";
// import { useMachine } from "@xstate/react";
// import { myMachine } from "./xstate";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  // const [state, send, actor] = useMachine(myMachine);

  // useEffect(() => {
  //   actor.subscribe(() => {})
  // }, [])

  const amountInputRef = useRef<HTMLInputElement | null>(null);
  const value = useSelector(selectors.counter.value);
  const users = useSelector(selectors.users.users);
  const isLoading = useSelector(selectors.users.isLoading);

  const buttonClickHandler = useCallback(() => {
    const amount = amountInputRef.current?.valueAsNumber || 1;
    dispatch(actions.counter.incrementByAmount(amount));
  }, [dispatch]);

  const loadUsersButtonHandler = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h3>Value: {value}</h3>
        <input type="number" defaultValue={1} ref={amountInputRef} />
        <button onClick={buttonClickHandler}>Increment</button>
      </div>
      <div>
        <h3>Users</h3>
        {isLoading ? "Loading..." : !users && "Users are not loaded"}
        {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
        <button onClick={loadUsersButtonHandler}>
          {!users ? "Load users" : "Re-load users"}
        </button>
      </div>
    </div>
  );
}

export default App;
