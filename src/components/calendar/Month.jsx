import styled from 'styled-components';
import DaysWrap from 'components/calendar/DaysWrap';
import FONT from 'styles/font';

function Month({ year, month, lastDay }) {
  return (
    <MonthContainer>
      <YearMonth>
        {year}년 {month}월
      </YearMonth>
      <MonthWrap>
        <DaysWrap year={year} month={month} lastDay={lastDay} />
      </MonthWrap>
    </MonthContainer>
  );
}

const MonthContainer = styled.div`
  position: relative;
`;

const YearMonth = styled.h3`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -270%);
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  text-align: center;
`;

const MonthWrap = styled.div`
  width: 336px;
  height: 336px;
  display: grid;
  grid-template-columns: repeat(7, 48px);
  grid-template-rows: 24px auto;
`;

export default Month;
