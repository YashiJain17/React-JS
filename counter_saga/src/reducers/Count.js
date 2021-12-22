const initialState = {
  count:0,
  defaultdifference:1
};

const changeCount = (state = initialState, action) => {
  switch (action.type) {
      case "INCREMENT": return {...state,count:state.count + +state.defaultdifference}
      case "DECREMENT": return {...state,count:state.count - state.defaultdifference}
      case "USERINPUT": return {...state, defaultdifference:action.value}
      default: return state
  }
}

export default changeCount