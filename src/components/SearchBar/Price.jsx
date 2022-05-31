import Filter from './Filter';
// TODO: PRICE 모달 setActiveModal
function Price(/* { setActiveModal } */) {
  const filterContests = [
    {
      title: '요금',
      value: '',
      placeholder: '금액대 설정',
    },
  ];
  return (
    <Filter
      type="Price"
      filterContents={filterContests}
      modalName="PRICE"
      // setActiveModal={ setActiveModal }
    />
  );
}

export default Price;
