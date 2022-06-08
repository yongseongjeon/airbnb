import { FilterProvider } from 'store/FilterContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import ReservationSuccess from 'pages/ReservationSuccess';

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/reservationSuccess" element={<ReservationSuccess />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
