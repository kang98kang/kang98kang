namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  // Thing 인터페이스를 상속했기에, Thing의 멤버를 가지지 않는다 -> 인터페이스는 구현 X, 정의만
  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberOfWheels: () => void;
  }

  // 클래스가 인터페이스를 상속했기에 구현 존재
  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;
    constructor(name: string) {
      // no super for interfaces
      this.name = name;
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount} miles`);
    }
    getFullName() {
      return "MC-" + this.name;
    }
  }

  const moto = new Motorcycle("beginner-cycle");
  console.log(moto.getFullName());
}
