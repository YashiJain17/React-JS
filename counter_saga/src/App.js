import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Counter from './Counter';
import { incrementNum, decrementNum, getInputfromUser } from './actions/index';

export default function App() {

  const myState = useSelector((state) => state.changeCount)
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <div>
          <h1>Increment/Decrement Counter with redux Saga</h1>
        </div>
        <div>
          <input type="text" placeholder="Enter a difference value" onChange={(e) => dispatch(getInputfromUser(e.target.value))} />
        </div>
        <br/>
        <div>
          <button onClick={() => dispatch(decrementNum())}> - </button>
         {myState.count}
          <button onClick={() => dispatch(incrementNum())}>+</button>
        </div>

      
      
      </div>
    </div>
  );
}


