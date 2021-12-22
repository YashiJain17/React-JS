export const Add = (item) => {
    return {
        type: "Additem",
        payload: item

    }
}
var nextid = 0;
export const ShowAddeditems = (item) => {
    return {
        type: "Showitem",
        payload: {
            value: item,
            id: ++nextid
        }
    }
}

export const Delete = (value) => {
    return {
        type: "Deleteitem",
        payload: value
    }
}

export const showDeleted = () => {
    return {
        type: "showDeleteditem",

    }
}

export const Complete = (value) => {
    return {
        type: "Completeitem",
        payload: value,

    }
}


export const showCompleted = () => {
    return {
        type: "showCompleteditem",
    }
}




export const showAll = () => {
    return {
        type: "ShowAllitem"
    }
}








