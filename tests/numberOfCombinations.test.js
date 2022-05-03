const { numberOfCombinations } = require("../coin-change-problem-kata");

describe("testing numberOfCombinations()", () => {
  const coins = [25, 10, 5, 1];

  describe(`given [${coins}] coins...`,()=>{

    test(`should be possible to change 4 cents into 1 coin combinations`, () => {
      const combinations = numberOfCombinations(4, coins);
      expect(combinations).toBe(1);
    });


    test(`should be possible to change 15 cents into 6 coin combinations`, () => {
      const combinations = numberOfCombinations(15, coins);
      expect(combinations).toBe(6);
    });

  });
  

});
