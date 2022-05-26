import styled from 'styled-components';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { ReactComponent as User } from 'assets/user.svg';
import COLOR from 'styles/colors';
import { useState } from 'react';
import { BOX_SHADOW } from 'styles/utils';

function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccountBox>
      <AccountBtn onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon>
          <Menu />
        </MenuIcon>
        <UserIcon>
          <User />
        </UserIcon>
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

const AccountBtn = styled.button`
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
`;

const UserIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${COLOR.GREY[400]};

  path {
    stroke: #ffffff;
  }
`;

const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
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
