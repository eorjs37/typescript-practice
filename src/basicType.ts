let str: string = "str";
let num: number = 10;
let isLoggedIn: boolean = false;

const object: Object = {
  name: "choi",
  age: 31,
};

//array
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

//tuple
let tuple: [string, number] = ["hi", 1];
export default {};

//Enum

enum Avengers {
  Capt = 2,
  IronMan = 3,
  Thor = 4,
}

let hero: Avengers = Avengers.Capt;

//any
let str11: any = "99";

//void
function printSomething(): void {
  console.log("sth");
}

//Never
