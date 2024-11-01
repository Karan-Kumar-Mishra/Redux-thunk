import { combineReducers } from "redux";

const initialState = {
  data: "not found !",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  myData: myReducer,
});

export default rootReducer;
