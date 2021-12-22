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
export const getInputfromUser = (num) => {
    return {
        type: "GETUSERINPUT",
        payload: num
    }
}