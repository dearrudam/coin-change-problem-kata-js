const combinationsFor = require("./coin-amount");

describe("testing change for 15 cents", () => {

  const coins = [25, 10, 5, 1];

  test("should result a valid change for 15 cents", () => {
    expect(combinationsFor(15, coins)).toBeTruthy();
  });

  test("should result 6 ways to make change for 15 cents", () => {
    const combinations = combinationsFor(15, coins);
    expect(combinations.length).toBe(6);
    expect(combinations).toEqual(
      expect.arrayContaining([
        [0, 10, 5, 0],
        [0, 10, 0, 5],
        [0, 0, 15, 0],
        [0, 0, 10, 5],
        [0, 0, 5, 10],
        [0, 0, 0, 15],
      ])
    );
  });
});
