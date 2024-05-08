import { assign, createActor, createMachine, fromPromise } from "xstate";

enum MyStates {
  Idle = "Idle",
  Loading = "Loading",
}

const fetchUsers = fromPromise(() =>
  fetch("https://jsonplaceholder.typicode.com/users/").then((data) =>
    data.json()
  )
);

interface MyMachineContext {
  counter: number;
  users: any[] | null;
  error: string | null;
}

export const myMachine = createMachine(
  {
    id: "myMachine",
    context: {
      counter: 0,
      users: null,
      error: null,
    } as MyMachineContext,
    initial: MyStates.Idle,
    states: {
      [MyStates.Idle]: {
        on: {
          loadUsers: {
            target: MyStates.Loading,
          },
        },
      },
      [MyStates.Loading]: {
        entry: [
          assign({
            error: null,
          }),
        ],
        invoke: {
          src: "fetchUsers",
          onDone: {
            actions: assign({
              users: ({ event }) => event.output,
            }),
            target: MyStates.Idle,
          },
          onError: {
            actions: assign({
              error: ({ event }) => (event.error as Error).message,
            }),
            target: MyStates.Idle,
          },
        },
      },
    },
    on: {
      increment: {
        actions: assign({
          counter: ({ event, context }) =>
            (context.counter += (event as any).amount),
        }),
      },
      decrement: {
        actions: assign({
          counter: ({ event, context }) =>
            (context.counter -= (event as any).amount),
        }),
      },
    },
  },
  {
    actors: {
      fetchUsers,
    },
  }
);

const actor = createActor(myMachine);
actor.start();

console.log(actor.getSnapshot().value);

// const jsonStringSnapshot = JSON.stringify(actor.getSnapshot());

// const actor2 = createActor(myMachine, {
//   snapshot: JSON.parse(jsonStringSnapshot),
// });

actor.subscribe((snapshot) => {
  console.log(snapshot.value);
  console.log(snapshot.context.users);
});

// actor.send({ type: "increment", amount: 10 });
// actor.send({ type: "increment", amount: 10 });
// actor.send({ type: "increment", amount: 10 });

// actor.send({ type: "decrement", amount: 10 });

actor.send({ type: "loadUsers" });
