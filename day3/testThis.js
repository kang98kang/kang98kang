function myFunction() {
    console.log(this);
}
myFunction();
var test = new myFunction();
