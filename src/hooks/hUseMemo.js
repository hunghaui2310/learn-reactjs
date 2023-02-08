import { useMemo, useState, useRef } from "react";

// giúp tránh thực hiện 1 logic nào đó không cần thiết.

const HUseMemo = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);

    const handleSubmit = () => {
        setProducts([...products, {
            name, 
            price: +price
        }]);
        setName('');
        setPrice(0);
        nameRef.current.focus();
    }

    const nameRef = useRef();

    const total = useMemo(() => {
        const result = products.reduce((total, product) => total + product.price, 0);

        return result;
    }, [products]);

    return (
        <div>
            <h2>This session for using useMemo React Hooks</h2>
            <input value={name}
                ref={nameRef}
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input value={price} type='number'
                onChange={e => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <h3>Total price: {total}</h3>
            <ul>
            {products.map((item, index) => {
                return <li key={index} >{item.name} - {item.price}</li>
            })}
            </ul>
        </div>
    )
}

export default HUseMemo;