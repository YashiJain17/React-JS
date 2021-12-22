import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {incNum,decNum} from './actions/index';




function App() {
  const handleCounter=useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();
return (
  <>
  <h1>incre/dec counter using Redux</h1>
  <button onClick={()=>dispatch(incNum())}>+</button>
  <input type="number" value={handleCounter}/>
  <button onClick={()=>dispatch(decNum())}>-</button>
</>
)}
export default App;