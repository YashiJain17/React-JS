import { isDisabled } from "@testing-library/user-event/dist/utils";

const initialState = {
    itemName: "",
    // item: {id: 0, itemName: ""},
    showitem: false,
    items: [],
    deleteditem: [],
    showDeleted: false,
    completedItem: [],
    showCompleted: false,
    allitems: [],
    showAll: false

};

const ReducerList = (state = initialState, action) => {
    switch (action.type) {
        case "Additem":
            return { ...state, itemName: action.payload };
        case "Showitem":
            // var singleItem = {...state.item};
            // singleItem.id = state.item.id + 1;
            // singleItem.itemName = state.itemName;
            // console.log(singleItem)
            var { id, value } = action.payload;
            // state.id = state.id + 1;
            // id = state.id;
            console.log(id, value)
            //  return{...state,showitem:true, items:state.item}
            // state.showitem = true;
            return {
                ...state,
                showitem: true,
                items: [
                    ...state.items,
                    {
                        id: id,
                        value: value
                    }], itemName:""

            }


        case "Deleteitem":
            var pappu = state.items.filter((val) => {
                if (val.id === action.payload.id) {
                    return val
                }
            })


            var arr = [...state.items]
            var idToDelete = arr.indexOf(pappu[0])
            if (idToDelete !== -1) {
                arr.splice(idToDelete, 1);
            }


            // var idToDelete = state.items.indexOf(pappu[0])
            // var items = [...state.items]
            // items.splice(idToDelete, 1);


            // console.log(pappu)
            return { ...state, deleteditem: [...state.deleteditem, action.payload], items: arr }

        case "Completeitem":
            var pappu = state.items.filter((val) => {
                if (val.id === action.payload.id) {
                    console.log(val)
                    return val
                }
            })

            return { ...state, completedItem: [...state.completedItem, action.payload] }

        case "showCompleteditem":
            console.log("object")
            // state.showCompleted = true;
            console.log(state.completedItem)
            return { ...state, showCompleted: true,showDeleted:false,showAll: false }


        case "showDeleteditem":
            console.log("object")

            console.log(state.deleteditem)
            return { ...state, showDeleted: true,showCompleted:false,showAll:false }

        case "ShowAllitem":
            var itemsarr = [...state.allitems]
            itemsarr.push(...state.items)
            itemsarr.push(...state.deleteditem)
            console.log(itemsarr)
            return { ...state, showAll: true, allitems: itemsarr,showCompleted:false,showDeleted:false}
        default: return state
    }
}

export default ReducerList