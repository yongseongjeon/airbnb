import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';

const GNB_LIST = [
  {
    id: 'accommodation',
    title: '숙소',
  },
  {
    id: 'experience',
    title: '체험',
  },
  {
    id: 'online experience',
    title: '온라인 체험',
  },
];

function GNB() {
  return (
    <Container>
      {GNB_LIST.map((menu) => (
        <li key={menu.id}>{menu.title}</li>
      ))}
    </Container>
  );
}

export default GNB;

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    padding: 16px 12px;
    color: ${COLOR.GREY[600]};
    cursor: pointer;

    &:hover {
      color: ${COLOR.BLACK};
      font-weight: ${FONT.WEIGHT.MEDIUM};
      text-decoration: underline;
    }
  }
`;
