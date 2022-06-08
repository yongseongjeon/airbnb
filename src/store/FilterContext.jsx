import CANVAS_SIZE from 'constants/canvasSize';
import PRICE from 'constants/priceRange';
import { createContext, useReducer } from 'react';
import guestReducer from 'reducer/guestReducer';
import modalReducer from 'reducer/modalReducer';
import priceReducer from 'reducer/priceReducer';
import scheduleReducer from 'reducer/scheduleReducer';

const FilterContext = createContext();

const INIT_STATE = {
  SCHEDULE: { checkIn: null, checkOut: null },
  ACTIVE_MODAL_NAME: 'NOTHING',
  GUEST: { adult: 0, child: 0, infant: 0 },
  PRICE_SIDER: {
    price: { low: PRICE.MIN, high: PRICE.MAX },
    inputValue: { low: 0, high: CANVAS_SIZE.WIDTH },
  },
};

function FilterProvider({ children }) {
  const [schedule, scheduleDispatch] = useReducer(scheduleReducer, INIT_STATE.SCHEDULE);
  const [activeModalName, modalDispatch] = useReducer(modalReducer, INIT_STATE.ACTIVE_MODAL_NAME);
  const [guest, guestDispatch] = useReducer(guestReducer, INIT_STATE.GUEST);
  const [priceSlider, priceSliderDispatch] = useReducer(priceReducer, INIT_STATE.PRICE_SIDER);

  return (
    <FilterContext.Provider
      value={{
        schedule,
        scheduleDispatch,
        activeModalName,
        modalDispatch,
        guest,
        guestDispatch,
        priceSlider,
        priceSliderDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
