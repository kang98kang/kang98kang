let val1: unknown = 22;
val1 = "string value";
val1 = new Array();

console.log(val1 instanceof Array);

if (val1 instanceof Array) {
  val1.push(33);
}

console.log(val1);
