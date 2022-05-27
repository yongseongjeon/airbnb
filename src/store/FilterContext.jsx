/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  return (
    <FilterContext.Provider value={{ checkIn, setCheckIn, checkOut, setCheckOut }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
