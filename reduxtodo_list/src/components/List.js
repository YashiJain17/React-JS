import React from 'react'
import { Add, ShowAddeditems, Delete, Complete, showCompleted, showDeleted, showAll } from '../actions'
import { useSelector, useDispatch } from 'react-redux';

export default function List() {
    const myState = useSelector((state) => state.ReducerList)
    const dispatch = useDispatch();
    return (

        <div>
            <br />
            <h3>To-Do List</h3>
            <br />
            <input type="text" placeholder='Enter item here' value={myState.itemName} onChange={(e) => dispatch(Add(e.target.value))} />
            <button type="button" style={{ marginLeft: "10px" }} onClick={() => {
                dispatch(ShowAddeditems(myState.itemName))
            }} >Add item</button><br /><br /><br />
            <ul>{myState.showitem ? myState.items.map((val) => {
                return (
                    <div key={val.id}>
                        <p>{val.value}
                            <button type="button" style={{ marginLeft: "10px", marginRight: '10px' }} onClick={() => dispatch(Delete(val))}>Delete</button>
                            <button type="button" onClick={(e) => {
                                e.target.disabled = true;
                                return dispatch(Complete(val))

                            }}>Complete </button>
                        </p>
                    </div>
                )
            }) : null}</ul>
            Show Items : <button type="button" style={{ marginLeft: "10px", marginRight: '10px' }} onClick={() => dispatch(showAll())}>All items</button>

            <button type="button" style={{ marginRight: '10px' }} onClick={() => dispatch(showDeleted())}>Deleted</button>
            <button type="button" onClick={() => dispatch(showCompleted())}>Completed</button>

            <hr />
            <div>

                {myState.showDeleted ? <h3>Deleted Items : </h3> : null}
                {myState.showDeleted ? myState.deleteditem.map((val) => {
                    return <p>{val.value}</p>
                }) : null}
               
            </div>
            <div>
                {myState.showCompleted ? <h3>Completed Items : </h3> : null}
                {myState.showCompleted ? myState.completedItem.map((val) => {
                    return <p>{val.value}</p>
                }) : null}
              
            </div>
            <div>
                {myState.showAll ? <h3>All Items : </h3> : null}
                {myState.showAll ? myState.allitems.map((val) => {
                    return <p>{val.value}</p>
                }) : null}

            </div>
        </div>
    )
}
