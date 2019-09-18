import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  history: [],
};

export const ActionType = {
  HistorySearch: 'HISTORY_SEARCH',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HistorySearch:
      return Object.assign({}, state, {
        history: [...state.history, action.payload],
      });
    default:
      return state;
  }
};

export const historyUser = res => dispatch => dispatch({ type: ActionType.HistorySearch, payload: res });

export default function initializeState(state = initialState) {
  return createStore(
    reducer,
    state, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
