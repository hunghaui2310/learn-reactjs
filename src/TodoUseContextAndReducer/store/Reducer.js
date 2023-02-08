import { ADD_TODO, SET_TODO_INPUT } from './constants';

const initState = {
    todos: [],
    todoInput: ''  
}

function Reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
        return {
            ...state,
            todoInput: action.payload
        }
        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
}

export { initState }
export default Reducer;