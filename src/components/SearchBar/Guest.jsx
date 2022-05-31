import Filter from './Filter';
// TODO: GUEST 모달 setActiveModal
function Guest(/* { setActiveModal } */) {
  const filterContests = [
    {
      title: '인원',
      value: '',
      placeholder: '게스트추가',
    },
  ];
  return (
    <Filter
      type="Price"
      filterContents={filterContests}
      modalName="GUEST"
      // setActiveModal={setActiveModal}
    />
  );
}

export default Guest;
