class One {
  constructor(config: { name: string }) {}
}

function main() {
  // const one = new One({ name: "asd" });
  const TEST = 123;
  const k1 = new Klass1(TEST);
  const k2 = new Klass2(TEST);
  const k3 = new Klass3(TEST);
}

class Klass1 {
  constructor(public TEST: number) {
    // this.one = new One({ name: 'sda' });
  }
}

class Klass2 {
  constructor(public TEST: number) {
    // this.one = new One({ name: 'asd' });
  }
}

class Klass3 {
  constructor(public TEST: number) {
    // this.one = new One({ name: 'sda' });
  }
}
