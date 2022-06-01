/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-template */
import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';
import Filter from './Filter';

function Guest() {
  const { guest } = useContext(FilterContext);
  const { adult, child, infant } = guest;
  const peopleCnt = adult + child;
  const peopleValue = peopleCnt ? `게스트 ${peopleCnt}명 ` : '';
  const infantValue = infant ? `유아 ${infant}명` : '';
  const filterContests = [
    {
      title: '인원',
      value: peopleValue + infantValue,
      placeholder: '게스트추가',
    },
  ];
  return <Filter type="Price" filterContents={filterContests} modalName="GUEST" />;
}

export default Guest;
