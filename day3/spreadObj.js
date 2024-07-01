var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = "A1";
        }
    }
    class B {
        constructor() {
            this.bname = "B1";
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);
    a.aname = "a1";
    console.log(c);
    console.log(d);
})(NamespaceA || (NamespaceA = {}));
