

import React, { createContext, useReducer } from 'react';
import Counter from './components/Counter';

const State = createContext();
const Dispatch = createContext();

const reducerfun=(state,action)=>{
    console.log(state,action)
    if (action.type === "INCREMENT"){
        return {...state, count: state.count + +state.inputsteps}
    }
    if (action.type === "DECREMENT"){
        return {...state, count: state.count - state.inputsteps}
    }
    if (action.type === "inputsteps"){
        return {...state, inputsteps:action.value}
    }
    return state
}

const middlewarefun=(action)=>{
 
    return action

  // console.log("middleware")
  // return action
}

const Middleware = (reducerfun, initialState, middlewareFun) => {
  const [state, dispatch] = useReducer(reducerfun, initialState);

  const dispatchWithMiddleware = (action) => {
    const newAction = middlewareFun(action);
    dispatch(newAction);
  };

  return [state, dispatchWithMiddleware];
}


export default function App() {

    const [state, dispatch] = Middleware(reducerfun, {count:0, inputsteps:1},middlewarefun)
    return (
      <div>
      <State.Provider value={state}>
        <Dispatch.Provider value={dispatch}>
          <Counter />
        </Dispatch.Provider>
      </State.Provider>
    </div>  
    )
}
export { State, Dispatch }

