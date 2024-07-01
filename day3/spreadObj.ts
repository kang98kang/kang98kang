namespace NamespaceA {
  class A {
    aname: string = "A1";
  }

  class B {
    bname: string = "B1";
  }

  const a = new A();
  const b = new B();
  //spread 를 쓰면 원본 값을 바꿨을때 사본 값이 바뀌지 않음
  //(새로운 객체가 생성되고 메모리 값 부여)
  const c = { ...a, ...b };
  //assign을 쓰면 원본 값에 따라 사본 값도 변함.
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.aname = "a1";
  console.log(c);
  console.log(d);
}
