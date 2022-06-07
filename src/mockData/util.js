function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function createPriceRandomly() {
  const diceResult = getRandomNumber({ min: 0, max: 100 });
  if (diceResult <= 15) {
    return getRandomNumber({ min: 50000, max: 300000 });
  }
  if (diceResult >= 70) {
    return getRandomNumber({ min: 700000, max: 1500000 });
  }
  return getRandomNumber({ min: 300000, max: 700000 });
}

export { getRandomNumber, createPriceRandomly };
