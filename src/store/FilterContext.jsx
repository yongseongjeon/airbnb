/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const MIN_PRICE = 0;
  const PRINT_MAX_PRICE = 1000000;
  const [lowPrice, setLowPrice] = useState(MIN_PRICE);
  const [highPrice, setHighPrice] = useState(PRINT_MAX_PRICE);

  return (
    <FilterContext.Provider
      value={{
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        lowPrice,
        setLowPrice,
        highPrice,
        setHighPrice,
        PRINT_MAX_PRICE,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
