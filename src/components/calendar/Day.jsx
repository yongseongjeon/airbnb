import styled from 'styled-components';
import FONT from 'styles/font';
import COLOR from 'styles/colors';

function Day({ year, month, day }) {
  const calendarDateTime = new Date(year, month - 1, day).getTime();
  const curDateTime = new Date().getTime();
  const isDatePast = curDateTime > calendarDateTime;
  return (
    <StyledDay disabled={isDatePast} isDatePast={isDatePast}>
      {day}
    </StyledDay>
  );
}

export default Day;

const StyledDay = styled.button`
  margin: auto auto;
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${({ isDatePast }) => (isDatePast ? COLOR.GREY[300] : COLOR.GREY[600])};
`;
