import CANVAS_SIZE from 'constants/canvasSize';
import MESSAGE from 'constants/message';
import PRIICE from 'constants/priceRange';

function priceSliderReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return {
        price: { low: PRIICE.MIN, high: PRIICE.MAX },
        inputValue: { low: 0, high: CANVAS_SIZE.WIDTH },
      };
    case 'SET_LOW':
      return {
        price: { ...state.price, low: action.value.price },
        inputValue: { ...state.inputValue, low: action.value.inputValue },
      };
    case 'SET_HIGH':
      return {
        ...state,
        price: { ...state.price, high: action.value.price },
        inputValue: { ...state.inputValue, high: action.value.inputValue },
      };
    default:
      throw new Error(MESSAGE.ERROR.WRONG_REDUCER_TYPE(action.type));
  }
}

export default priceSliderReducer;
