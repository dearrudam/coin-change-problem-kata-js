module.exports = combinationsFor;

function combinationsFor(amount, coins) {
  let combinations = [];

  if (!coins || coins.length === 0) {
    return combinations;
  }

  const isValid = (items) => {
    return items.reduce((a, b) => a + b) === amount;
  };

  const print = (items) => {
    combinations.push(items);
  };

  recursiveCombinations(amount, coins, 0, [], isValid, print);

  return combinations;
}

function majorIntFor(a, c) {
  return Math.floor(a / c);
}

function recursiveCombinations(amount, coins, coinPos, items, isValid, print) {
  if (coinPos < 0) {
    return;
  }
  const coin = coins[coinPos];
  for (let x = majorIntFor(amount, coin); x >= 0; x--) {
    const newItens = [...items, x * coin];
    if (coinPos === coins.length - 1) {
      if (isValid(newItens)) {
        print(newItens);
      }
    } else {
      const newAmount = amount - coins[coinPos] * x;
      const nextCoinPos = coinPos + 1;
      recursiveCombinations(
        newAmount,
        coins,
        nextCoinPos,
        newItens,
        isValid,
        print
      );
    }
  }
}
