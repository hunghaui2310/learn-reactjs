import { useRef, useState } from "react"

function HUseRef() {

    const [count, setCount] = useState(100);

    let timerId = useRef();
    const h2Ref = useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    return (

        <div>
            <h2 ref={h2Ref}>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default HUseRef;