import {useRef} from "react";
import styles from "../assets/scss/components/AddJoke.module.css"
const AddJoke = (props) => {
    const typeRef = useRef('')
    const setupRef = useRef('')
    const punchlineRef = useRef('')

    const submitHandler = (e) => {
        e.preventDefault();
        const joke = {
            type: typeRef.current.value,
            setup: setupRef.current.value,
            punchline: punchlineRef.current.value,
        }
        props.onAddJoke(joke)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor="type">Type</label>
                <input id="type" type="text" ref={typeRef}/>
            </div>
            <div className={styles.control}>
                <label htmlFor="setup">Type</label>
                <textarea rows={5} id="setup" ref={setupRef}> </textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor="punchline">Type</label>
                <textarea rows={5} id="punchline" ref={punchlineRef}></textarea>
            </div>
            <button>Add</button>
        </form>
    );
};

export default AddJoke;