interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  //   if (arg.hasOwnProperty("length")) {
  //     return arg["length"];
  //   }
  return arg.length;
}

console.log(getLength<number>(22));
console.log(getLength("Hello world."));
