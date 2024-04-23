export class MyNumber {
  constructor(private value: number) {}

  add(other: number) {
    return new MyNumber(this.value + other);
  }

  subtract(other: number) {
    return new MyNumber(this.value - other);
  }

  times(other: number) {
    return new MyNumber(this.value * other);
  }

  divide(other: number) {
    return new MyNumber(this.value / other);
  }

  equals(other: number) {
    return this.value === other;
  }
}
