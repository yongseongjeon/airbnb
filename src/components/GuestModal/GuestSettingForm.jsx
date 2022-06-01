import { useContext } from 'react';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import IconButton from 'components/IconButton';
import { FilterContext } from 'store/FilterContext';

function GuestSettingForm({ type, title, titleInfo }) {
  const { guest, guestDispatch } = useContext(FilterContext);
  const count = guest[type];
  const isMaxCnt = count === 8;
  return (
    <Wrap>
      <Column>
        <Title>{title}</Title>
        <TitleInfo>{titleInfo}</TitleInfo>
      </Column>
      <Counter>
        <IconButton
          icon="minusCircle"
          width="30px"
          height="30px"
          fill={COLOR.WHITE}
          stroke={count ? COLOR.GREY[400] : COLOR.GREY[200]}
          clickHandler={handleDecreaseCount}
          disabled={isMaxCnt}
        />
        <Count>{count}</Count>
        <IconButton
          icon="plusCircle"
          width="30px"
          height="30px"
          fill={COLOR.WHITE}
          stroke={COLOR.GREY[400]}
          clickHandler={handleIncreaseCount}
          disabled={isMaxCnt}
        />
      </Counter>
    </Wrap>
  );

  function handleIncreaseCount() {
    if (type === 'infant' && guest.adult <= 0) {
      guestDispatch({ type: 'INCREASE_adult' });
    }
    guestDispatch({ type: `INCREASE_${type}` });
  }

  function handleDecreaseCount() {
    const canDecrease = count > 0;
    if (!canDecrease) {
      return;
    }
    guestDispatch({ type: `DECREASE_${type}` });
  }
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  gap: 80px;
`;

const Title = styled.div`
  width: 80px;
  height: 23px;
  font-size: ${FONT.SIZE.MEDIUM};
`;

const TitleInfo = styled.div`
  width: 80px;
  height: 20px;
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLOR.GREY[400]};
`;

const Counter = styled.div`
  display: flex;
  width: 95px;
  height: 30px;
`;

const Count = styled.div`
  width: 50px;
  height: 30px;
  font-size: ${FONT.SIZE.X_LARGE};
  text-align: center;
  line-height: 30px;
`;

export default GuestSettingForm;
