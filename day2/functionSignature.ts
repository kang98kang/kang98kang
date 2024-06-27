type Run = (miles: number) => boolean;

//Run 이라는 타입의 조건과 함수 조건이 일치하기 때문에 에러가 나지 않는다.
let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
};

console.log(runner(9));
