import { useEffect } from "react";
import { useState } from "react";

const lessions = [
    {
        id: 1,
        name: 'What is React'
    },
    {
        id: 2,
        name: 'What is SPA, MPA'
    },
    {
        id: 3,
        name: 'Arrow functions'
    }
]

const ChatApp = () => {

    const [lessionId, setLessionId] = useState(1);

    useEffect(() => {
        const handleComment = ({type}) => {
            console.log(type);
        }

        window.addEventListener(`lesson-${lessionId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessionId}`, handleComment);
        }
    }, [lessionId])

    // Khi xây dựng ứng dụng Chat, cần clean up kênh cũ và
    // lắng nghe kênh mới(tránh dò rỉ bộ nhớ)

    return (
        <div>
            <ul>
                {lessions.map((lesson, index) => {
                    return <li key={index}
                    style={{
                        color: lessionId === lesson.id ? 'red' : '#333'
                    }}
                    onClick={() => setLessionId(lesson.id)}
                    >{lesson.name}</li>
                })}
            </ul>
        </div>

    )
}

export default ChatApp;