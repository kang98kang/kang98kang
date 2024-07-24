const a = true;

if (a) {
  const m1 = await import("./func.mjs");
  console.log(m1);
  const m2 = await import("./var.mjs");
  console.log(m2);
  const m3 = import("./func.mjs");
  console.log(m3);
  const m4 = import("./var.mjs");
  console.log(m4);
}

console.log("성공");
