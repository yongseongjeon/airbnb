import styled from 'styled-components';
import COLOR from 'styles/colors';
import { useState } from 'react';
import { BOX_SHADOW } from 'styles/utils';
import IconButton from 'components/IconButton';

function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccountBox>
      <AccountBtn onClick={() => setIsOpen(!isOpen)}>
        <IconBox>
          <IconButton
            icon="menu"
            width="16"
            height="16"
            fill="none"
            stroke={COLOR.BLACK}
            disabled
          />
        </IconBox>
        <IconBox className="user">
          <IconButton
            icon="user"
            width="16"
            height="16"
            fill="none"
            stroke={COLOR.WHITE}
            disabled
          />
        </IconBox>
        <span hidden>account menu</span>
      </AccountBtn>
      {isOpen ? (
        <MenuList>
          <li>로그인</li>
        </MenuList>
      ) : null}
    </AccountBox>
  );
}

export default AccountMenu;

const AccountBox = styled.div`
  position: relative;
`;

const AccountBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 76px;
  height: 40px;
  padding: 4px;
  border-radius: 30px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};
  cursor: pointer;
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  &.user {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${COLOR.GREY[400]};
  }

  button {
    font-size: 0;
  }
`;

const MenuList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 200px;
  padding: 16px 32px;
  border-radius: 10px;
  ${BOX_SHADOW[100]};
  background: ${COLOR.WHITE};

  > li {
    padding: 16px 0;
    cursor: pointer;

    & + li {
      border-top: 1px solid #c4c4c4;
    }
  }
`;
