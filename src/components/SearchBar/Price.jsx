import { useContext } from 'react';
import { convertPriceToLocaleString } from 'components/PriceModal/calculate';
import PRICE_RANGE from 'constants/priceRange';
import { FilterContext } from 'store/FilterContext';
import Filter from './Filter';

function Price() {
  const { lowPrice, highPrice } = useContext(FilterContext);
  const convertMaxPrice = convertPriceToLocaleString(PRICE_RANGE.MAX);
  const convertLowPrice = convertPriceToLocaleString(lowPrice);
  const convertHighPrice = convertPriceToLocaleString(highPrice);
  const isChangePriceRange = lowPrice === PRICE_RANGE.MIN && highPrice === PRICE_RANGE.MAX;
  const highPriceValue = highPrice >= PRICE_RANGE.MAX ? `${convertMaxPrice}+` : convertHighPrice;
  const filterContests = [
    {
      title: '요금',
      value: isChangePriceRange ? null : `₩${convertLowPrice} - ₩${highPriceValue}`,
      placeholder: '금액대 설정',
    },
  ];
  return <Filter type="Price" filterContents={filterContests} modalName="PRICE" />;
}

export default Price;
