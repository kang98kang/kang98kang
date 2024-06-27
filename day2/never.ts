function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Too Old!");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}
