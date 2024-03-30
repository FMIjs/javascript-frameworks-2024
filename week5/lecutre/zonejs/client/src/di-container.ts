type ValueProvider<T extends any = any> = {
  provide: string;
  value: T;
};

type ClassProvider<T = any> = {
  provide: string;
  useClass: T;
};

type FactoryProvider<T = any> = {
  provide: string;
  useFactory: (di: DIContainer) => T;
};

type Provider = ValueProvider | ClassProvider | FactoryProvider;

class DIContainer {
  private providers: Provider[] = [];
  private instances: { injectionToken: string; instance: any }[] = [];

  provide(provider: Provider) {
    this.providers.push(provider);
  }

  get(injectionToken: string) {
    const provider = this.providers.find((p) => p.provide === injectionToken);
    if (!provider) {
      throw new Error("No provider found for " + injectionToken);
    }
    if ("value" in provider) return provider.value;
    const existingInstance = this.instances.find(
      (i) => i.injectionToken === provider.provide
    );
    if (existingInstance) return existingInstance.instance;
    if ("useClass" in provider) {
      const instance = new provider.useClass(this);
      this.instances.push({ injectionToken: provider.provide, instance });
      return instance;
    }
    return provider.useFactory(this);
  }
}

const diContainer = new DIContainer();

diContainer.provide({
  provide: "TEST",
  value: 123,
});

class MyClass {
  value: number;
  constructor(di: DIContainer) {
    this.value = di.get("TEST");
  }
}

diContainer.provide({
  provide: "TEST-2",
  useClass: MyClass,
});

class App {
  a: MyClass;
  constructor(di: DIContainer) {
    this.a = di.get("TEST-2");
  }
}

diContainer.provide({
  provide: "App",
  useClass: App,
});

class Something {
  constructor(private something: any) {}
}

diContainer.provide({
  provide: "FACTORY",
  useFactory: (di) => {
    const value = di.get("TEST");
    return new Something(value);
  },
});

const app = diContainer.get("App");
console.log(app);

(window as any).diContainer = diContainer;
