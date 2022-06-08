import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';
import { getGuestText } from 'utils/fromStateToString';
import Filter from './Filter';

function Guest() {
  const { guest } = useContext(FilterContext);
  const { adult, child, infant } = guest;
  const guestText = getGuestText({ adult, child, infant });
  const filterContests = [
    {
      title: '인원',
      value: guestText,
      placeholder: '게스트추가',
    },
  ];
  return <Filter type="Guest" filterContents={filterContests} modalName="GUEST" />;
}

export default Guest;
