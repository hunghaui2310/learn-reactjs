import { useContext } from 'react';
import { useStore, actions } from '../store';

const TodoApp = () => {

    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    }

    return (
        <div>
            <br/>
            <h3>Todo app with Context + useReducer</h3>
            <input 
                value={state.todoInput}
                onChange={e => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
            {todos.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
            </ul>
        </div>
    )
}

export default TodoApp;