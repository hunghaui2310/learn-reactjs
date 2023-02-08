import { useState } from "react";

// Lưu ý:
// Component được rerender sau khi setState
// Initial state chỉ dùng cho lần đầu
// setState có thể truyền vào 1 callback function
// Initial state có thể truyền vào callback function: dùng giá trị return của callback function làm initial state.

function HUseState() {
    
    const [counter, setCounter] = useState(1);

    function usingWithCallback(callback) {
        setCounter(prev => prev + 1);
     }

    function handleCounter(counter) {
        setCounter(counter+1);
    }

    return (
        <>  
            <h1>{counter}</h1>
            <button onClick={() => handleCounter(counter)}>Increse</button>
        </>
    )
}

export default HUseState;