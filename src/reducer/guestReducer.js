import MESSAGE from 'constants/message';

function guestReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return { adult: 0, child: 0, infant: 0 };
    case 'INCREASE_adult':
      return { ...state, adult: state.adult + 1 };
    case 'DECREASE_adult':
      return { ...state, adult: state.adult - 1 };
    case 'INCREASE_child':
      return { ...state, child: state.child + 1 };
    case 'DECREASE_child':
      return { ...state, child: state.child - 1 };
    case 'INCREASE_infant':
      return { ...state, infant: state.infant + 1 };
    case 'DECREASE_infant':
      return { ...state, infant: state.infant - 1 };
    default:
      throw new Error(MESSAGE.ERROR.WRONG_REDUCER_TYPE(action.type));
  }
}

export default guestReducer;
