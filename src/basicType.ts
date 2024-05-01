/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const str: string = "str";
const num: number = 10;
const isLoggedIn: boolean = false;

// eslint-disable-next-line @typescript-eslint/ban-types
const object: Object = {
  name: "choi",
  age: 31,
};

//array
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

//tuple
const tuple: [string, number] = ["hi", 1];
export default {};

//Enum

enum Avengers {
  Capt = 2,
  IronMan = 3,
  Thor = 4,
}

const hero: Avengers = Avengers.Capt;

//any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const str11: any = "99";

//void
function printSomething(): void {
  console.log("sth");
}

//Never
