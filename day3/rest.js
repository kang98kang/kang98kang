function doSomething(a, ...others) {
  //...other = [2, 3, 4, 5, 6, 7];

  //[others.length - 1]배열의 제일 마지막 값을 표현
  console.log(a, others, others[others.length - 1]);
}

doSomething(1, 2, 3, 4, 5, 6, 7);
