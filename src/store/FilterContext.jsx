/* eslint-disable react/jsx-no-constructed-context-values */
import PRIICE from 'constants/priceRange';
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
  const [lowPrice, setLowPrice] = useState(PRIICE.MIN);
  const [highPrice, setHighPrice] = useState(PRIICE.MAX);

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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
