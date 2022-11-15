import React from 'react';
import { useEffect, useState } from "react";


const myUser = JSON.parse(localStorage.getItem('user'))
console.log(myUser.id);



const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${myUser.id}/todos`)
            .then(response => response.json())
            .then(todos => setTodos(todos))
    }, [])

    const hendleChange = (e) => {
        const key = e.target.value
        console.log(key);
        switch (key) {
            case 'abc':
                setTodos([...todos].sort((a, b) =>
                    a.title > b.title ? 1 : -1,
                )
                )
                console.log(todos)
                break;
            case 'completed':
                setTodos([...todos].sort((a, b) =>
                    a.completed > b.completed ? 1 : -1,
                ))
                break;
            default:
                setTodos([...todos].sort((a, b) =>
                    a.id > b.id ? 1 : -1,
                ));
                break;
        }
    }

    return (

        <div><select onChange={hendleChange} name="choice">
            <option value="abc" defaultValue>abc</option>
            <option value="completed" > completed </option>
            <option value="random">random</option>
        </select>

            <h1>Todos:</h1>
            {todos.map((item, idx) =>
                <h1 key={idx}
                    style={{ "border": "solid 1px", "backgroundColor": "purple" }}>
                    <input key={idx} type="checkbox" onChange={() => { }} checked={item.completed} />{item.title}
                </h1>
            )}

        </div>
    )


}


export default Todos;
