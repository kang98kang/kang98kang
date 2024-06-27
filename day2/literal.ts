let literal: "kjy" | "gpt" | "pyh" | "atg" = "pyh";

literal = "kjy";

literal = "atg";

console.log(literal);

//선언과 동시에 값을 넣어준다
/*
let literal: "kjy" | "gpt" | "pyh" | "atg"
literal = "pyh";
이 두 과정을 한 과정으로 바꾼게
let literal: "kjy" | "gpt" | "pyh" | "atg" = "pyh";

type L = "kjy" | "gpt" | "pyh" | "atg" ;
let literal: L;
이런식으로도 가능.

*/
