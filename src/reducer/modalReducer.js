import MESSAGE from 'constants/message';

function modalReducer(state, action) {
  switch (action.type) {
    case 'OPEN_CALENDAR':
      return 'CALENDAR';
    case 'OPEN_PRICE':
      return 'PRICE';
    case 'OPEN_GUEST':
      return 'GUEST';
    case 'CLOSE':
      return 'NOTHING';
    default:
      throw new Error(MESSAGE.ERROR.WRONG_REDUCER_TYPE(action.type));
  }
}

export default modalReducer;
