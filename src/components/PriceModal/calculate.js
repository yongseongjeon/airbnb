function getAverage(array) {
  const sum = array.reduce((prev, next) => prev + next);
  return Math.floor(sum / array.length);
}

function convertPriceToLocaleString(price) {
  return price.toLocaleString('ko-KR');
}

function getRangeCount({ rangeCount, priceArray, highPrice, priceInterval }) {
  const rangeArray = new Array(rangeCount).fill(0);

  priceArray.forEach((price) => {
    const priceRangeCalc = Math.floor(price / priceInterval);
    const rangeIndex = price > highPrice ? rangeArray.length - 1 : priceRangeCalc;
    rangeArray[rangeIndex] += 1;
  });

  return rangeArray;
}

function getYpoint(canvasheight, max, value) {
  return canvasheight - (value / max) * 100;
}
export { getAverage, convertPriceToLocaleString, getRangeCount, getYpoint };
