// class ClassA {
//   static typeName: string;

//   constructor() {}

//   static getFullName() {
//     return "ClassA" + ClassA.typeName;
//   }
// }

// const a = new ClassA();
// //console.log(a.typeName); a를 ClassA의 새로운 객체로 설정

// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}
  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const a = new Runner("a");
const b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName);
