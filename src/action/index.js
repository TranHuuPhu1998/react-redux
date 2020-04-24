import * as Types from '../constants/ActionTypes'

export const actAddTodo = data => {
    return {
        type: Types.ADD_TODO,
        payload: {
            data
        }
    };
};
