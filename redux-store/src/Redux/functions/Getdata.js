const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://catfact.ninja/fact"); // Replace with your API
      const resdata = await response.json();
      console.log(resdata)
      dispatch({type: 'FETCH_DATA_SUCCESS', payload: resdata.fact})
    } catch (error) {
      console.log('error =>',error)
    }
  };
};
export default fetchData;
