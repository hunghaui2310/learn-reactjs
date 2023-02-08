import { useState } from "react";

const gifts = [
    'Laptop HP',
    'MacBook 2021',
    'PC',
]

const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
]

function TwowayBinding () {

    const [gift, setGift] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState([]);

    function layThuong() {
        const indexT = Math.floor(Math.random() * gifts.length);

        setGift(gifts[indexT]);
    }

    function submit () {
        console.log(name, email);
    }

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
        console.log('kk = ', checked);
    }

    return (
        <>  
            <h4>Game lấy thưởng</h4>
            <h5>{gift || 'Chưa có phần thưởng'}</h5>
            <button onClick={layThuong}>Lấy thưởng</button>

            <h4>Two way binding</h4>

            <div>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <button onClick={submit}>Submit</button>
            </div>

            <div>
                {courses.map(course => 
                    <div key={course.id}>
                        <input type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}/>{course.name}
                    </div>)}
            </div>
        </>
    )

}

export default TwowayBinding;