namespace OptionalChainingNS {
  interface Wheels {
    //?는 null일 수도 있다 라는 뜻. null이 떠도 error가 안뜸 (nullable)
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  //value = (조건) ? statment1 : (조건2) ? statment2 : statment3;
  console.log("count ", car?.wheels?.count);

  const val1 = undefined;
  const val2 = 10;
  //val1이 null이 아니면 result==val1, null이면 val2
  const result = val1 ?? val2;

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;
}
