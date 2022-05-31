import { useContext } from 'react';
import styled from 'styled-components';
import accommodation from 'mockData/accommodation';
import { FilterContext } from 'store/FilterContext';
import SearchBarModal from 'components/modal/SearchBarModal';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import Canvas from './Canvas';
import { convertPriceToLocaleString, getAverage } from './calculate';

function PriceModal() {
  const accommodationPrice = accommodation.map((item) => item.price);
  const averagePrice = getAverage(accommodationPrice);
  const { lowPrice, highPrice, PRINT_MAX_PRICE } = useContext(FilterContext);

  const convertLowPrice = convertPriceToLocaleString(lowPrice);
  const convertHighPrice = convertPriceToLocaleString(highPrice);
  const convertAveragePrice = convertPriceToLocaleString(averagePrice);

  return (
    <SearchBarModal padding="52px 64px 66px" borderRadius="40px">
      <Title>가격 범위</Title>
      <div>
        <PriceRange>
          ₩ {convertLowPrice} - ₩{convertHighPrice}
          {highPrice === PRINT_MAX_PRICE && '+'}
        </PriceRange>
        <PriceAverage>평균 1박 요금은 ₩{convertAveragePrice} 입니다.</PriceAverage>
      </div>
      <RangeSlideWrap>
        <Canvas accommodationPrice={accommodationPrice} />
      </RangeSlideWrap>
    </SearchBarModal>
  );
}
export default PriceModal;

const Title = styled.h4`
  margin-bottom: 16px;
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

const PriceRange = styled.p`
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

const PriceAverage = styled.p`
  margin-top: 10px;
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${COLOR.GREY[400]};
`;

const RangeSlideWrap = styled.div`
  margin-top: 45px;
`;
