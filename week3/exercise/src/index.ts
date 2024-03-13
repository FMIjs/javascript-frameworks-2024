import { BehaviorSubject, Observable, Subject, combineLatest, filter, from, map, mapTo, merge, mergeMap, of, switchMap, tap } from "rxjs";


// Exercise #1
const exercise1 = () => {
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
}
// exercise1();


// Subjects
const subjects = () => {
  const users$: Observable<string[]> = of(['Ivan', 'Pesho', 'Gosho']);
  const filterValue$$ = new BehaviorSubject<string>('');

  const filteredUsers$ = combineLatest([
    users$,
    filterValue$$.asObservable()
  ]).pipe(
    map(([users, filterValue]) => {
      console.log(users, filterValue);
      return users.filter(user => user.includes(filterValue));
    })
  );
  filteredUsers$.subscribe(console.log);


  filterValue$$.next('Iv');
  filterValue$$.next('Pesho');
};
// subjects();


// Exercise #2
const exercise2 = () => {
  const fromFetch = (url: string) => new Observable(subscriber => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw (response.status);
        }
        return response.json();
      })
      .then(responseBody => {
        subscriber.next(responseBody);
        subscriber.complete();
      })
      .catch(err => {
        subscriber.error(err);
        subscriber.complete();
      })
  });

  const paths = of('/users', '/posts', '/comments');
  const jsonPlaceholderRoot = `https://jsonplaceholder.typicode.com`
  paths.pipe(
    map(path => `${jsonPlaceholderRoot}${path}`),
    mergeMap(fromFetch),
  ).subscribe(console.log);
};
// exercise2();
