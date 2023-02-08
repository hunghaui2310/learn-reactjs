import { useState } from "react";

const todoInit = localStorage.getItem('todos');

const TodoList = () => {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) ?? [];
    });
    const [job, setJob] = useState('');

    const add = () => {
        setTodos(prev => {
            
            const datas = [...prev, job];
            localStorage.setItem('todos', JSON.stringify(datas));
            
            return datas;
        });
        setJob('');
    }

    return (
        <>
            <div>
                <h1>Todo list app</h1>
                <input value={job} onChange={e => setJob(e.target.value)}/>
                <button type="button" onClick={add}>Add</button>

                <ul>
                    {todos.map((todo, index) =>  
                        <li key={index}>{todo}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default TodoList;