import styled from 'styled-components';
import { ReactComponent as ResetIcon } from 'assets/x-circle.svg';
import COLOR from 'styles/colors';

function FilterResetButton() {
  return (
    <ResetButton>
      <Icon />
    </ResetButton>
  );
}

export default FilterResetButton;

const ResetButton = styled.button`
  position: absolute;
  top: 50%;
  right: 26px;
  transform: translateY(-50%);
`;

const Icon = styled(ResetIcon)`
  path {
    fill: ${COLOR.GREY[100]};
  }
`;
