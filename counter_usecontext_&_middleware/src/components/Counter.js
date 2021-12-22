
import React, { useContext } from 'react';
// import { State, Dispatch } from './App';
import {State, Dispatch} from '../App'

export default function Counter() {
    const state = useContext(State)
    const dispatch = useContext(Dispatch)


    return (
        <>
        <div>
            <p>{state.count}</p>
            <input type="number" onChange={(e)=>dispatch({type:"inputsteps", value:e.target.value})} />



            <button 
            onClick={()=>dispatch({type:"INCREMENT"})}>Inc
                </button>
            <button 
            onClick={()=>dispatch({type:"DECREMENT"})}>Dec
                </button>
        </div>
        </>
    )
}

