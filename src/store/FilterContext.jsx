/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useReducer } from 'react';
import guestReducer from 'reducer/guestReducer';
import modalReducer from 'reducer/modalReducer';
import scheduleReducer from 'reducer/scheduleReducer';

const FilterContext = createContext();

const INIT_STATE = {
  SCHEDULE: { checkIn: null, checkOut: null },
  ACTIVE_MODAL_NAME: 'NOTHING',
  GUEST: { adult: 0, child: 0, infant: 0 },
};

function FilterProvider({ children }) {
  const [schedule, scheduleDispatch] = useReducer(scheduleReducer, INIT_STATE.SCHEDULE);
  const [activeModalName, modalDispatch] = useReducer(modalReducer, INIT_STATE.ACTIVE_MODAL_NAME);
  const [guest, guestDispatch] = useReducer(guestReducer, INIT_STATE.GUEST);
  const MIN_PRICE = 0;
  const PRINT_MAX_PRICE = 1000000;
  const [lowPrice, setLowPrice] = useState(MIN_PRICE);
  const [highPrice, setHighPrice] = useState(PRINT_MAX_PRICE);

  return (
    <FilterContext.Provider
      value={{
        schedule,
        scheduleDispatch,
        activeModalName,
        modalDispatch,
        guest,
        guestDispatch,
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
