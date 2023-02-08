// Sử dụng useCallback để tránh tạo ra những hàm mới không cần thiết.
// -> Chỉ sử dụng với component con có sử dụng memo
import { useCallback, useState } from "react";
import Content from './memo';

const HUseCallback = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() =>  {
        setCount(prev => prev + 1);
    }, []);

    return (
        <>
            <h2>Su dung UseCallback {count}</h2>
            <Content onIncrease={handleIncrease}/>
        </>
    )
}

export default HUseCallback;