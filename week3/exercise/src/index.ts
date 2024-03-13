import { Observable, map } from "rxjs";


// Exercise #1
const interval = (ms: number) => new Observable(subscriber => {
  console.log('Subscribed');

  const intervalId = setInterval(() => {
    subscriber.next();
  }, ms);

  return () => {
    console.log('Unsubscribed');
    clearInterval(intervalId);
  };
});

const stream$ = interval(1000).pipe(
  map(() => {
    console.log('Thinking ...');
    return Math.floor(Math.random() * 100);
  })
);

const subscription1 = stream$.subscribe({
  // next: (value: number) => console.log(value), // this should log 0, 1, 2 because we will unsubsctibe after 3 seconds
  next: (d) => console.log('sub1', d),
  complete: () => console.log('Finish')
});


const subscription3 = stream$.subscribe((d) => console.log('sub3', d));
const subscription2 = stream$.subscribe((d) => console.log('sub2', d));

setTimeout(() => {
  subscription1.unsubscribe();
  setTimeout(() => {
    subscription2.unsubscribe();
    setTimeout(() => {
      subscription3.unsubscribe();
    }, 3000);
  }, 3000);
}, 3000);
