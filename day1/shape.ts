class Hack {
  name: string;
  age: number;
}

const jill: Hack = {
  name: "jill",
  age: 15,
};

class Talk {
  msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  speak() {
    this.msg = "speak" + this.msg;
    console.log(this.msg);
  }
}

const kevin = new Talk("dsfsdfsdfssddffssdff");
kevin.speak();
