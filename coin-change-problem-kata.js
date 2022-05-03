
/**
 * Returns an array with the possible coin combinations for a given amount according to a give coins array
 * 
 * @see numberOfCombinations() function in cases of big amounts
 * @param {*} amount 
 * @param {*} coins 
 * @returns a possible coin combinations
 */
function combinationsFor(amount, coins) {
  let combinations = [];

  if (!coins || coins.length === 0) {
    return combinations;
  }

  const test = (items) => {
    return items.reduce((a, b) => a + b) === amount;
  };
  const collector = (items) => {
    combinations.push(items);
  };
  getCombinations(amount, coins, 0, [], test, collector);

  return combinations;
}

function majorIntFor(a, c) {
  return Math.floor(a / c);
}

function getCombinations(amount, coins, coinPos, items, test, collector) {
  if (coinPos < 0) {
    return;
  }
  const coin = coins[coinPos];
  for (let x = majorIntFor(amount, coin); x >= 0; x--) {
    const coinTotal = coin * x;
    const newItems = [...items, coinTotal];
    if (coinPos === coins.length - 1) {
      if (test(newItems)) {
        collector(newItems);
      }
    } else {
      const newAmount = amount - coinTotal;
      const nextCoinPos = coinPos + 1;
      getCombinations(newAmount, coins, nextCoinPos, newItems, test, collector);
    }
  }
}


/**
 * Returns the possible number of coin combinations for a given amount according to a give coins array
 * 
 * @param {*} amount 
 * @param {*} coins 
 * @returns the possible number of coin combinations
 */
function numberOfCombinations(amount, coins) {
  const combinations = [];
  combinations[0] = 1;
  for (let i = 0; i <= coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      if (!combinations[j]) { // it's needed because it's not initialized previously
        combinations[j] = 0;
      }
      combinations[j] += combinations[j - coins[i]];
    }
  }

  return combinations[amount];
}

module.exports = { combinationsFor, numberOfCombinations };
