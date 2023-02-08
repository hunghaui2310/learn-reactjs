import { useReducer, useRef } from 'react';

// This session to execise about useReducer

// Init state
const initState = {
    job: '',
    jobs: []
}

// Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const setJobs = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            
            return {
                ...state,
                jobs: newJobs
            }
        default:
            return new Error(`Invalid action ${action.type}`)
    }
}

const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    const { job, jobs } = state;

    const handleAdd = () => {
        dispatch(setJobs(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    const inputRef = useRef();

    return (
        <div>
            <h3>Todo app using useReducer</h3>
            <input
            ref={inputRef}
             placeholder="Enter todo..." 
             value={job} 
             onChange={(e) => dispatch(setJob(e.target.value))} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((item, index) =>
                    <li key={index}>{item} 
                    <span onClick={() => dispatch(deleteJob(item))}>&times;</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todo;