import bannerImg from 'assets/hero-img.jpg';
import styled from 'styled-components';

function Banner() {
  return (
    <Container>
      <img src={bannerImg} alt="배너 이미지" />
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  img {
    width: 100%;
  }
`;
