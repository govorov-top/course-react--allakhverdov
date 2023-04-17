import styles from "../assets/components/scss/Form.module.scss";
import {useRef, useState} from "react";
import Modal from "./Modal";
import Button from "./UI/Button";
import Card from "./UI/Card";
const Form = ({ addNewUser }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [errors, setErrors] = useState([]);
    const [isError, setIsError] = useState(false);
    const inputNameEl = useRef('');
    const inputAgeEl = useRef('');
    const getValueInputsHandler = (name, value) => {
        console.log(inputNameEl.current.value)
        if (name === 'userName'){
            setName(value)
        }
        if (name === 'userAge'){
            setAge(+value)
        }
    }
    const validations = (name,age) => {
        if (name.length < 3){
            setErrors(prevState => [...prevState, 'Name is less 3 symbols']);
        }
        if (age <= 0){
            setErrors(prevState => [...prevState, 'The age cannot be less than or equal to zero']);
        }
        return name.length >= 3 && age > 0;
    }
    const addNewUserHandler = (e) => {
        e.preventDefault();
        const isValid = validations(name,age);
        if (isValid){
            addNewUser(name,age);
            setName('');
            setAge(0);
        }else {
            setIsError(true)
        }
    }

    const checkErrorsHandler = () => {
        setIsError(false)
        setErrors([])
    }

    return (
        <Card className={styles.card}>
            <form onSubmit={addNewUserHandler}>
                {
                    isError && <Modal errors={errors} checkErrors={checkErrorsHandler}/>
                }
                <h2 className={styles.h2}>Form</h2>
                <label className={styles.label} htmlFor="name">
                    <b>Name user:</b>
                    <input
                        ref={inputNameEl}
                        value={name}
                        onChange={(e)=> getValueInputsHandler(e.target.name,e.target.value)}
                        className={styles.input}
                        type="text"
                        id="name"
                        name="userName"/>
                </label>
                <label className={styles.label} htmlFor="age">
                    <b>Age user:</b>
                    <input
                        ref={inputAgeEl}
                        value={age}
                        onChange={(e)=> getValueInputsHandler(e.target.name,e.target.value)}
                        className={styles.input}
                        type="number"
                        id="age"
                        name="userAge"/>
                </label>
                <Button>Add new user</Button>
            </form>
        </Card>
    );
}
export default Form;