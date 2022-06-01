/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useReducer } from 'react';
import scheduleReducer from 'reducer/scheduleReducer';

const FilterContext = createContext();

const INIT_STATE = {
  SCHEDULE: { checkIn: null, checkOut: null },
};

function FilterProvider({ children }) {
  const [schedule, scheduleDispatch] = useReducer(scheduleReducer, INIT_STATE.SCHEDULE);
  const MIN_PRICE = 0;
  const PRINT_MAX_PRICE = 1000000;
  const [lowPrice, setLowPrice] = useState(MIN_PRICE);
  const [highPrice, setHighPrice] = useState(PRINT_MAX_PRICE);

  return (
    <FilterContext.Provider
      value={{
        schedule,
        scheduleDispatch,
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
