import MESSAGE from 'constants/message';

function scheduleReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return { checkIn: null, checkOut: null };
    case 'SET_CHECK_IN':
      return { ...state, checkIn: action.date };
    case 'SET_CHECK_OUT':
      return { ...state, checkOut: action.date };
    case 'SET_CHECK_IN_ONLY':
      return { checkIn: action.date, checkOut: null };
    default:
      throw new Error(MESSAGE.ERROR.WRONG_REDUCER_TYPE(action.type));
  }
}

export default scheduleReducer;
