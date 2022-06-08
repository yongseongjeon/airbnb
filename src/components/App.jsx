import { FilterProvider } from 'store/FilterContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';
import ReservationSuccess from 'pages/ReservationSuccess';
import NoMatch from 'pages/NoMatch';
import { AccommodationProvider } from 'store/AccommodationContext';

function App() {
  return (
    <FilterProvider>
      <AccommodationProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/reservationSuccess" element={<ReservationSuccess />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </AccommodationProvider>
    </FilterProvider>
  );
}

export default App;
