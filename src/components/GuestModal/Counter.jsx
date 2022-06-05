import IconButton from 'components/IconButton';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';

function Counter() {
  return (
    <Wrap>
      <IconButton
        icon="minusCircle"
        width="30px"
        height="30px"
        fill={COLOR.WHITE}
        stroke={COLOR.GREY[400]}
      />
      <Count>3</Count>
      <IconButton
        icon="plusCircle"
        width="30px"
        height="30px"
        fill={COLOR.WHITE}
        stroke={COLOR.GREY[400]}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
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

export default Counter;
