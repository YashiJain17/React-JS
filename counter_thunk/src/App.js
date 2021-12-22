import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum, getUserInput } from './actions/index';

export default function App() {

  const myState = useSelector((state) => state.changeCount)
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <div>
          <h1>Increment/Decrement Counter with redux Thunk</h1>
        </div>
        <div>
          <input type="text" placeholder="Enter a difference value" onChange={(e) => dispatch(getUserInput(e.target.value))} />
        </div>
        <br/>
        <div>
          <button onClick={() => dispatch({type:"INCREMENT"})}> - </button>
         {myState.count}
          <button onClick={() => dispatch(incrementNum())}>+</button>
        </div>

      
      
      </div>
    </div>
  );
}

