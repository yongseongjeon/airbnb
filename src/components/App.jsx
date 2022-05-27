import Header from 'components/Header';
import Banner from 'components/Banner';
import FilterProvider from 'store/FilterContext';

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Header pageType="main" />
        <Banner />
      </div>
    </FilterProvider>
  );
}

export default App;
