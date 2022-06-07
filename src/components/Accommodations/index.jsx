import SIZE from 'constants/size';
import ACCOMODATIONS from 'mockData/accommodation';
import styled from 'styled-components';
import AccommodationHeader from './AccommodationHeader';
import AccommodationItem from './AccommodationItem';

function Accommodations() {
  return (
    <Wrap>
      <AccommodationHeader />
      <AccommodationItems>
        {ACCOMODATIONS.map(({ imageURL, local, desc, option, price, grade, reviewCnt }, i) => (
          <AccommodationItem
            key={i}
            imageURL={imageURL}
            local={local}
            desc={desc}
            option={option}
            price={price}
            grade={grade}
            reviewCnt={reviewCnt}
          />
        ))}
      </AccommodationItems>
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1;
  height: calc(100vh - ${SIZE.RESULT_PAGE_HEADER});
  padding: 32px 24px;
`;

const AccommodationItems = styled.div`
  display: flex;
  height: calc(100% - 80px);
  overflow-y: scroll;
  flex-direction: column;
  gap: 24px;
`;

export default Accommodations;
