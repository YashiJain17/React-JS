import { useReducer } from "react"
import React from 'react'


const reducerfun=(state,action)=>{
    console.log(state,action)
    if (action.type === "INCREMENT"){
        return {...state, count: state.count + +state.inputsteps}
    }
    if (action.type === "DECREMENT"){
        return {...state, count: state.count + +state.inputsteps}
    }
    if (action.type === "inputsteps"){
        return {...state, inputsteps:action.value}
    }
    return state
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducerfun, {count:0, inputsteps:1})
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
