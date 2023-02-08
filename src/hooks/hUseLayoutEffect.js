import { useEffect, useLayoutEffect, useState } from "react";

// useLayoutEffect gần giống với useEffect

    // useEffect
    // 1. Cập nhật lại state
    // 2. Cập nhật DOM (mutated)
    // 3. Render lại UI
    // 4. Gọi cleanup nếu deps thay đổi
    // 5. Gọi useEffect callback

    // useLayoutEffect
    // 1. Cập nhật lại state
    // 2. Cập nhật DOM (mutated)
    // 3. Gọi cleanup nếu deps thay đổi(sync)
    // 4. Gọi useLayoutEffect callback(sync)
    // 5. Render lại UI 

const HUseLayoutEffect = () => {

    const [count, setCount] = useState(0);
    
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}

export default HUseLayoutEffect;