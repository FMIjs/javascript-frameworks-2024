import "./di-container";
// const API_URL = "https://jsonplaceholder.typicode.com";
// import "zone.js";
// import { Unpack } from "./types/helpers";
// import { Todo } from "./types/data/todo";

// function apiFetch<T>(path: string) {
//   if (Zone.current === Zone.root)
//     return Promise.reject({ error: "Cannot run operation from root zone " });
//   return fetch(`${API_URL}${path}`)
//     .then((res) =>
//       res.ok
//         ? res
//             .json()
//             .then((data) => ({ data }))
//             .catch(() => ({ error: new Error("Parsing error") }))
//         : res
//             .json()
//             .then((result) => {
//               if ("error" in result) return result;
//               return { error: result };
//             })
//             .catch(() => res.text())
//             .then((text) => ({ error: new Error(text) }))
//     )
//     .then((result) => {
//       if ("error" in result) {
//         return { success: false, error: result.error };
//       }
//       return { success: true, data: result.data };
//     }) as
//     | Promise<{ success: true; data: T }>
//     | Promise<{ success: false; error: Error }>;
// }

// const handleApiResponse = <T>(
//   result: Unpack<ReturnType<typeof apiFetch<T>>>
// ) => {
//   if (result.success === false) {
//     console.log(result.error);
//   }
//   if (result.success) {
//     const selector = Zone.current.get("selector") as string;
//     const element = document.querySelector(selector) as HTMLElement;
//     element.innerHTML = JSON.stringify(result.data);
//   }
// };

// function getTodos() {
//   apiFetch<Todo>("/todos").then(handleApiResponse);
// }

// function getUsers() {
//   apiFetch<Todo>("/users").then(handleApiResponse);
// }

// getUsers();

// function runChangeDetection() {
//   console.log("Run change detection...");
// }

// const scheduleChangeDetection = (() => {
//   let isScheduled = false;
//   return () => {
//     if (isScheduled) return;
//     isScheduled = true;
//     Zone.root.run(() => {
//       setTimeout(function () {
//         console.log(Zone.current.name);
//         isScheduled = false;
//         runChangeDetection();
//       }, 0);
//     });
//   };
// })();

// Zone.root
//   .fork({
//     name: "ngZone",
//     properties: {
//       selector: "#cmp1",
//     },
//     onHasTask: (
//       parentZoneDelegate: ZoneDelegate,
//       currentZone: Zone,
//       targetZone: Zone,
//       hasTaskState: HasTaskState
//     ) => {
//       const hasTask = hasTaskState.macroTask || hasTaskState.microTask;
//       if (hasTask === false) scheduleChangeDetection();
//     },
//   })
//   .run(() => {
//     getUsers();
//   });

// // Zone.root
// //   .fork({
// //     name: "Component-2",
// //     properties: {
// //       selector: "#cmp2",
// //     },
// //   })
// //   .run(() => {
// //     getUsers();
// //   });
