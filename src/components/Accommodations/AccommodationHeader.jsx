import styled from 'styled-components';
import FONT from 'styles/font';

function AccommodationHeader() {
  return (
    <>
      <FilterInfo>
        300개 이상의 숙소 · 5월 12일 · 5월 18일 · ₩100,000-₩1,000,000 · 게스트 3명
      </FilterInfo>
      <Title>지도에서 선택한 지역의 숙소</Title>
    </>
  );
}

const FilterInfo = styled.div`
  width: 398px;
  height: 17px;
  font-size: ${FONT.SIZE.X_SMALL};
  font-weight: ${FONT.WEIGHT.REGULAR};
  margin-bottom: 8px;
`;

const Title = styled.h1`
  width: 684px;
  height: 35px;
  font-size: ${FONT.SIZE.TITLE};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  margin-bottom: 32px;
`;

export default AccommodationHeader;
