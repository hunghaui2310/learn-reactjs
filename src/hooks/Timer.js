import { useEffect, useState } from "react";

const Timer = () => {

    const [countdown, setCountdown] = useState(180);

    useEffect(() => { 
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    // const countDownFn = () => {
    //     setInterval(() => {
    //         setCountdown(prev => prev - 1);
    //     }, 1000);
    // }

    return (
        <div>
            <h4>{countdown}</h4>
        </div>
    )
}

export default Timer;
