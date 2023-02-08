import { useEffect } from "react";
import { useState } from "react";

// Side effect

// useEffect used to:
// 1. Update DOM
// 2. Call API
// 3. Listen DOM events(Scroll, Resize)
// 4. Cleanup (Remove listener / Unsubscribe )
// 5. Clear timer 

const tabs = ['posts', 'comments', 'albums'];

const HUseEffect = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

    // Trong cả 3 trường hợp dưới đây, 
    //          - Callback luôn được gọi sau khi component mounted
    //          - Khi return trong useEffect, hàm đó sẽ được gọi trước khi component mounted -> clearTimer, dọn dẹp bộ nhớ...
    // 1.useEffect(callback);
    // Gọi callback mỗi khi Component rerender
    // Gọi callback sau khi Component thêm element vào DOM
    useEffect(() => {
        document.title = title
    })

    const callFake = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts => console.log(posts))
    }

    // 2.useEffect(callback, []);
    // Chỉ gọi callback 1 lần sau khi Component mounted
    useEffect(() => {  
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then()
    }, []);

    // 3.useEffect(callback, [dept]);
    // callback sẽ được gọi lại mỗi khi dependencies(dept) thay đổi

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type).then(res => res.json()).then()
    }, [type])

    // Sử dụng useEffect để listen DOM event
    useEffect(() => {

        const handleScoll = () => {
            setShowGoToTop(window.scrollYœ > 200);
        }
        window.addEventListener('scroll', handleScoll);

        // cleanup function: dọn dẹp bộ nhớ, clear timeout, timeInterval. Được gọi trước khi Component unmounted
        return () => {
            window.removeEventListener('scroll', handleScoll);
        }
    }, []);

    const goToTop = () => {

    }

    return (
        <div>
            <h3>Use Effect</h3>
            {tabs.map((tab, i) => <button 
            key={i} 
            style={type === tab ? {
                color: '#fff',
                backgroundColor: '#333',
            } : {}}
            onClick={() => setType(tab)}
            >{tab}</button>)}
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <h4>Use effect to listen DOM event</h4>
            {showGoToTop ? <button 
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
            onClick={goToTop}>Go to top</button> : ''}
        </div>
    )
}

export default HUseEffect;