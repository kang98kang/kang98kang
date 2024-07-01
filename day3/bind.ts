class A {
  name: string = "A";
  age: number = 18;
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "b";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a);
b.go();

console.log(b);
console.log(b.go);
