import styled from 'styled-components';
import COLOR from 'styles/colors';
import { POSITION_CENTER, BOX_SHADOW } from 'styles/utils';

function ReservationModal() {
  return (
    <Wrap>
      <Contents>{/* TODO: 예약 모달창 컨텐츠 생성 */}</Contents>
    </Wrap>
  );
}

export default ReservationModal;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLOR.MODAL_DIM};
`;

const Contents = styled.div`
  ${POSITION_CENTER}
  background: ${COLOR.WHITE};
  padding: 24px;
  border-radius: 10px;
  ${BOX_SHADOW[100]}
`;
