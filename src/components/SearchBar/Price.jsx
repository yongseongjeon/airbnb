import { useContext } from 'react';
import { convertPriceToLocaleString } from 'components/PriceModal/calculate';
import PRICE_RANGE from 'constants/priceRange';
import { FilterContext } from 'store/FilterContext';
import { getConvertHighPriceText } from 'utils/fromStateToString';
import Filter from './Filter';

function Price() {
  const { priceSlider } = useContext(FilterContext);
  const { price } = priceSlider;
  const convertLowPrice = convertPriceToLocaleString(price.low);
  const convertHighPrice = getConvertHighPriceText(price.high);
  const isChangePriceRange = price.low === PRICE_RANGE.MIN && price.high === PRICE_RANGE.MAX;
  const filterContests = [
    {
      title: '요금',
      value: isChangePriceRange ? null : `₩${convertLowPrice} - ₩${convertHighPrice}`,
      placeholder: '금액대 설정',
    },
  ];
  return <Filter type="Price" filterContents={filterContests} modalName="PRICE" />;
}

export default Price;
