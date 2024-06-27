class Vehicle {
  //protected 클래스를 상속받은 자식 클래스에서도 접근 가능
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(98);
motorCycle.showNumberOfWheels();

const automobile = new Automobile();
automobile.showNumberOfWheels();
