import { describe, expect, jest, test } from "@jest/globals";
const consoleLog = console.log;

describe("mock reset", () => {
  test("should ", async () => {
    jest.spyOn(console, "log");
    const consoleLogAfterMocking = console.log;

    expect(consoleLog).not.toBe(consoleLogAfterMocking);
  });

  test("Mock함수를 호출한 후 MockClear를 호출하면, mock calls를 초기화한다", async () => {
    const mockFn = jest.fn();
    mockFn("1");
    mockFn("1", "2");

    expect(mockFn.mock.calls[0]).toEqual(["1"]);
    expect(mockFn.mock.calls[1]).toEqual(["1", "2"]);
    expect(mockFn.mock.calls).toHaveLength(2);
    mockFn.mockClear();

    expect(mockFn.mock.calls).toHaveLength(0);
  });

  test("mock함수를 호출한 후 mockReset를 호출하면, mock함수는 undefined를 반환한다", async () => {
    const mockAdd = jest.fn((a: number, b: number) => a + b);
    expect(mockAdd(1, 2)).toBe(3);

    mockAdd.mockReset();

    expect(mockAdd(1, 2)).toBe(undefined);
    expect(mockAdd.getMockImplementation()).toBe(undefined);
  });
  const someModule = {
    api: () => "origin",
  };
  test("spyOn으로 테스트 더블을 만든뒤에,someModule.api는 다른 함수가 된다", async () => {
    const originApi = someModule.api;
    const mockApi = jest.spyOn(someModule, "api");

    mockApi.mockRestore();

    const changedApi = someModule.api;

    expect(originApi).toBe(changedApi);
    expect(changedApi()).toBe("origin");
  });
});
