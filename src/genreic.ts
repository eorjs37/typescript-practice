// eslint-disable-next-line @typescript-eslint/no-unused-vars
function identify(arg: number): number {
  return arg;
}

function identify2<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);

  return arg;
}

const output: string = identify2<string>("myString");
console.log(output);

const arr = [1, 2, 3];
const logging = loggingIdentity<number>(arr);
console.log(logging.length);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myIdentity: <T>(arg: T) => T = identify2;

function logText<T>(text: T): T {
  return text;
}

const str: <T>(text: T) => T = logText;
const result = str("string");
console.log(result);

interface GenericLogTextFn {
  <T>(text: T): T;
}

function logText2<T>(text: T): T {
  return text;
}

const mystring2: GenericLogTextFn = logText2;
const result2 = mystring2("TTTTTT");
console.log(result2);

export default {};
