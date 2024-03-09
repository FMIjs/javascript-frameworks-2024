import {
  of,
  map,
  Observable,
  catchError,
  take,
  shareReplay,
  interval,
  fromEvent,
  mergeMap,
  debounceTime,
  switchMap,
} from "rxjs";

import { fromFetch } from "rxjs/fetch";

// // fetch("http://localhost:8081/api/user")
// //   .then((res) => res.json())
// //   .then(console.log);

// const oo = new Observable<number>((observer) => {
//   let i = 0;
//   setInterval(() => {
//     observer.next(i++);
//     // observer.error(new Error("BAD!"));
//   }, 1000);
// });

// const ooo = oo.pipe(
//   map((x) => x + 1),
//   map((x) => x + 2),
//   catchError((err) => of(100))
// );

// const ooooo = ooo.pipe();

// const subscription = ooo.subscribe({
//   next: (value) => console.log("next => ", value),
//   error: (err) => console.error("error => ", err),
// });

// // setInterval(() => subscription.unsubscribe(), 3000);

// const a = [1];
// const p = Promise.resolve(1);
// const o = of(1).pipe(
//   map((x) => x + 1),
//   map((x) => x + 1)
// );
// o.subscribe(console.log);

// [1, 2, 3, 4].map((x) => x + 1).map((x) => x + 1);
// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then(
//     (x) => x + 1,
//     (err) => console.error(err)
//   );

// // 1- pending
// // 2- resolved
// // 3- rejected
// const p2 = new Promise<number>((res, rej) => {
//   setTimeout(() => {
//     res(19);
//   }, 4000);
// });

// p2.then((x) => x + 1).catch();

// // setTimeout(() => {
// //   console.log(1000);
// // }, 4000);

// // for(let i = 0; i < Infinity; i++) {

// // }

// // setTimeout(() => console.log(1));

// const root = document.getElementById("root");

// function createInterval(delay: number = 0) {
//   return new Observable<number>((observer) => {
//     let i = 0;
//     const id = setInterval(() => {
//       observer.next(i++);
//     }, delay);

//     return () => {
//       clearInterval(id);
//     };
//   });
// }

// const serverMessages$ = new Observable<string>((observer) => {
//   const evtSource = new EventSource("/sse");
//   evtSource.onmessage = function (msg) {
//     observer.next(msg.data);
//   };
//   // observer.complete();
//   return () => {
//     evtSource.close();
//   };
// });

// function myTake<T>(count: number) {
//   return function (observable: Observable<T>) {
//     return new Observable<T>((observer) => {
//       const subscription = observable.subscribe({
//         next: (value: T) => {
//           // if (--count === 0) {
//           //   observer.next(value);
//           //   observer.complete();
//           // } else {
//           //   observer.next(value);
//           // }

//           if (--count === 0) {
//             subscription.unsubscribe();
//             // setTimeout(() => {
//             //   observer.complete();
//             // }, 0);
//             queueMicrotask(() => {
//               observer.complete();
//             });
//           }
//           observer.next(value);
//         },
//         error: (err) => observer.error(err),
//         complete: () => observer.complete(),
//       });
//     });
//   };
// }

// const int$ = interval(1000).pipe(myTake(10));
// const dateTime$ = int$.pipe(
//   map(() => new Date()),
//   shareReplay(1)
// );
// const currentDateTime$ = dateTime$.pipe(take(1));

// dateTime$.subscribe({
//   next: (currentDateTime) => {
//     root.innerHTML = currentDateTime.toString();
//     console.log("date time 1", currentDateTime);
//   },
//   error: (err) => console.error(err),
//   complete: () => {
//     console.log("date time completed");
//   },
// });

// dateTime$.subscribe({
//   next: (currentDateTime) => {
//     console.log("date time 2", currentDateTime);
//   },
//   complete: () => {
//     console.log("date time completed");
//   },
// });

// currentDateTime$.subscribe({
//   next: (value) => {
//     console.log("Current date time is", value);
//   },
//   complete: () => {
//     console.log("current date time completed");
//   },
// });

// cold
// dateTime --------------------> set inner HTML and log
// dateTime --------------------> log
// dateTime -> currentDateTime -> log

// hot
// dateTime --------------------> set inner HTML and log
// | --------------------> log
// | -> currentDateTime -> log

const myInput = document.getElementById("myInput");

fromEvent(myInput, "input")
  .pipe(
    map((e) => (e.target as HTMLInputElement).value),
    debounceTime(200),
    switchMap((inputValue) => {
      console.log(inputValue);
      return fromFetch(
        `http://localhost:8081/api/user${
          inputValue ? "?lastName=" + inputValue : ""
        } `
      );
    }),
    switchMap((res) => res.json())
  )
  .subscribe(console.log);
