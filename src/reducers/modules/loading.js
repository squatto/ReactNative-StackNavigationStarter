import { REHYDRATE } from 'redux-persist';

const initialState = {
  isLoading: false,
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return {
        isLoading: false,
      };
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}