import "reflect-metadata";

class A {

  methodA(): void {
    console.log("you called methodA");
  }
}

let constructor = A;

class B {

  Aconst: Function = A;
}

let b: B = new B();
let a: A = Reflect.construct(b.Aconst, []);

console.log(a);


