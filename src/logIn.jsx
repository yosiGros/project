import { useEffect } from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
     const navigate = useNavigate(); 
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users));

    }, [])
    

    const [inputValueUser, setInputValueUser] = useState("");
    const [inputValuePas, setInputValuePas] = useState("");
    const [users, setUsers] = useState('')

           

    const user = (e) => {
        e.preventDefault()
        const theUser = users.find(user =>
            user.username === inputValueUser && inputValuePas === user.address.geo.lat.slice(-4)
        );
        console.log(theUser)

        if (theUser) {
            navigate('./myhome');
            localStorage.setItem('user', JSON.stringify(theUser))
        }
        else{alert("Unregistered user")}
    }


    return (
        <div>
            <form onSubmit={user} >
                <input type="text" value={inputValueUser} onChange={(e) => setInputValueUser(e.target.value)} />
                <input type="pass" value={inputValuePas} onChange={(e) => setInputValuePas(e.target.value)} />
                <button type='submit' >log in</button>
            </form>
        </div>
    );
}

export default Login;