import styled from 'styled-components';
import notFound from 'assets/404.PNG';
import FONT from 'styles/font';
import { Link } from 'react-router-dom';
import COLOR from 'styles/colors';

function NoMatch() {
  return (
    <Wrap>
      <NotFoundImg src={notFound} alt="404" />
      <Content>찾으시는 페이지가 없습니다.</Content>
      <Link to="/">
        <HomeBtn>🏠 홈으로</HomeBtn>
      </Link>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  transform: translateY(-100%);
`;

const NotFoundImg = styled.img`
  margin: auto auto;
`;

const Content = styled.div`
  width: fit-content;
  margin: auto auto;
  font-size: ${FONT.SIZE.X_LARGE};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

const HomeBtn = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  margin-top: 30px;
  width: fit-content;
  font-size: ${FONT.SIZE.X_LARGE};
  font-weight: ${FONT.WEIGHT.REGULAR};
  background-color: ${COLOR.GREY[100]};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  :hover {
    background-color: ${COLOR.GREY[200]};
  }
`;

export default NoMatch;
