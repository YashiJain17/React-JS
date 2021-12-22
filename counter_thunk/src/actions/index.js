export const incrementNum = () => {
    return {
        type: "INCREMENT",
    }
}
export const decrementNum = () => {
    return {
        type: "DECREMENT"
    }
}
export const getInputfromUser = (num) => {         //calling it in async way
    return {
        type: "GETUSERINPUT",
        payload: num
    }
}

export const getUserInput = (num) => {
    return (dispatch) => {
        setTimeout(() => {
            if (num < 0 || num === "" || isNaN(num) === true) {
                return dispatch(getInputfromUser(1));
            } else {
                return dispatch(getInputfromUser(num));
            }
        }, 1000);
    };
}
