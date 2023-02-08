import { memo } from 'react';

// Là một HOC: Hider Order Component
// Quyết định xem có cần render lại component đó không
// Nếu có ít nhất 1 props bị thay đổi giá trị, thì memo sẽ cho component re-render
// Nếu ko có props nào bị thay đổi giá trị thì memo sẽ không cho component re-render
// -> Thường sử dụng trong component con 


const Content = ({onIncrease}) => { 

    return (
        <>
            <div>This is session to learn memo in React</div>
            <button onClick={onIncrease}>Increase</button>
        </>
    )
}

export default memo(Content);