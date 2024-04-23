import { MyNumber } from "./myNumber";
import { test, expect, describe } from "@jest/globals";
let number = new MyNumber(1);
const number2 = new MyNumber(2);

describe("MyNumber을 1로 생성하고", () => {
  let number = new MyNumber(1);
  describe("2를 더하고 3을 곱한다", () => {
    number = number.add(2);
    number = number.times(3);
    test("2로 나누면 4.5가 나올 것이다. ", () => {
      number = number.divide(2);
      expect(number.equals(4.5)).toBeTruthy();
    });
  });
});

describe("MyNumber을 2로 생성하고", () => {
  const number2 = new MyNumber(2);
  test("2에서 5를 빼면 -3이 나올 것이다. ", () => {
    expect(number2.subtract(5).equals(-3)).toBeTruthy();
  });
});
