const initialState = {
    data: {
      children: {},
      caregivers: {},
      financial: {},
      attendance: {},
      enrollments: [],
    },
  };
  
  export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
  