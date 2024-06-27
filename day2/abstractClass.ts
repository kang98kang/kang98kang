namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
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
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    //부모 클래스와 동일한 함수는 자식 클래스에서 작동됨.
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(98);
  motorCycle.showNumberOfWheels();

  const automobile = new Automobile();
  automobile.updateWheelCount(5);
  automobile.showNumberOfWheels();
}
