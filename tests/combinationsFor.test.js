const { combinationsFor } = require("../coin-change-problem-kata");

describe("testing combinationsFor()", () => {
  const coins = [25, 10, 5, 1];

  describe(`given [${coins}] coins...`, () => {

    test("should be possible to change 15 cents into 6 coin combinations ", () => {
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
});
