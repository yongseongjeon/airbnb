import MESSAGE from 'constants/message';
import PRICE_RANGE from 'constants/priceRange';

function priceReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return { low: PRICE_RANGE.MIN, high: PRICE_RANGE.MAX };
    case 'SET_LOW':
      return { ...state, low: action.value };
    case 'SET_HIGH':
      return { ...state, high: action.value };
    default:
      throw new Error(MESSAGE.ERROR.WRONG_REDUCER_TYPE(action.type));
  }
}

export default priceReducer;
