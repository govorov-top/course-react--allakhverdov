import './App.css';
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [users, setUsers] = useState([]);
    const addNewUserHandler = (name,age) => {
        const newUser = {
            id: uuidv4(),
            name,
            age,
        }
        setUsers([...users, newUser]);
    }

    return (
        <div className="App">
            <Form users={users} addNewUser={addNewUserHandler}/>
            <ListUsers users={users}/>
        </div>
    );
}

export default App;
