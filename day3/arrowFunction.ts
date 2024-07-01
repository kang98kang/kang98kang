const myFunc = (message: string, title: string, age: number): boolean => {
  console.log(message);
  console.log(title);
  console.log(age);
  return true;
};

myFunc("hello", "myFirstArrow", 27);

const func = () => console.log("func");
const func1 = () => ({ name: "micle" });
const func2 = () => {
  const val = 20;
  return val;
};
