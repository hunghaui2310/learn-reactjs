import { useReducer } from "react";

// Sử dụng useReducer cung cấp thêm lựa chọn cho việc sử dụng state cho function component
// Sử dụng trong những tình huống state phức tạp

// useState
// 1. Init State
// 2. Actions

// useReducer
// 1. Init State
// 2. Actions
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}

// Dispatch


const HUseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <>
            <h3>This session is useReducer</h3>
            <div>Count = {count}</div>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </>
    )
}

export default HUseReducer;