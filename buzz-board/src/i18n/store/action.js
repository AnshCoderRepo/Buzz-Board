import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    axios.get('/api/dashboard-data')  // Replace with your actual API endpoint
      .then((response) => {
        dispatch({
          type: 'SET_DATA',
          payload: response.data
        });
      })
      .catch((error) => {
        console.error("Error fetching dashboard data", error);
      });
  };
};
