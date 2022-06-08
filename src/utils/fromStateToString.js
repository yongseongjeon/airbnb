import { convertPriceToLocaleString } from 'components/PriceModal/calculate';
import PRICE_RANGE from 'constants/priceRange';

function getScheduleText({ checkIn, checkOut }) {
  return `${checkIn.month}월 ${checkIn.day}일 - ${checkOut.month}월 ${checkOut.day}일`;
}

function getSelectDayText({ month, day }) {
  return `${month}월 ${day}일`;
}

function getConvertPriceText({ lowPrice = 0, highPrice = PRICE_RANGE.MAX }) {
  const convertLowPrice = convertPriceToLocaleString(lowPrice);
  const convertHighPrice = getConvertHighPriceText(highPrice);
  return `₩${convertLowPrice} - ₩${convertHighPrice}`;
}

function getConvertHighPriceText(highPrice) {
  const convertPrice = convertPriceToLocaleString(highPrice);
  return highPrice === PRICE_RANGE.MAX ? `${convertPrice}+` : `${convertPrice}`;
}

function getGuestText({ adult, child, infant }) {
  const peopleCnt = adult + child;
  const peopleValue = peopleCnt ? `게스트 ${peopleCnt}명 ` : '';
  const infantValue = infant ? `유아 ${infant}명` : '';

  return peopleValue + infantValue;
}

export {
  getScheduleText,
  getSelectDayText,
  getConvertPriceText,
  getConvertHighPriceText,
  getGuestText,
};
