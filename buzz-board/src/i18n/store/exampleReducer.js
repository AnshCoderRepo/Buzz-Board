const initialState = {
    data: null,
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  