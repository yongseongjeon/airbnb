import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';
import Filter from './Filter';

function Schedule({ activeModalName, setActiveModal }) {
  const { checkIn, checkOut } = useContext(FilterContext);
  const filterContests = [
    {
      title: '체크인',
      value: checkIn && `${checkIn.month}월 ${checkIn.day}일`,
      placeholder: '날짜입력',
    },
    {
      title: '체크아웃',
      value: checkOut && `${checkOut.month}월 ${checkOut.day}일`,
      placeholder: '날짜입력',
    },
  ];

  return (
    <Filter
      type="Schedule"
      filterContents={filterContests}
      modalName="CALENDAR"
      activeModalName={activeModalName}
      setActiveModal={setActiveModal}
    />
  );
}

export default Schedule;
