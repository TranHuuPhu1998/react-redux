import * as Types from "../constants/ActionTypes";

var initialState = [
    {
        itemtodo: "hello",
        id: 1
    }
];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TODO:

            state.push(action.payload.data);
            console.log(state);

            return [...state]
        default:
            return state;
    }
};

export default myReducer;
