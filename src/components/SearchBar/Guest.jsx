import Filter from './Filter';

function Guest() {
  const filterContests = [
    {
      title: '인원',
      value: '',
      placeholder: '게스트추가',
    },
  ];
  return <Filter type="Price" filterContents={filterContests} modalName="GUEST" />;
}

export default Guest;
