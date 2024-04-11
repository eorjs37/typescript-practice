import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3 ", async () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
