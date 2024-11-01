import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "./Redux/functions/Getdata";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>karan</h1>
    </div>
  );
}

export default App;
