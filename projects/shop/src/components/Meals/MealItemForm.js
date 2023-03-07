import styles from "../../assets/scss/components/Meals/MealItemForm.module.scss"
import Input from "../UI/Input";
import {useRef, useState} from "react";

function MealItemForm( props ) {
    const [isAmountValid,setIsAmountValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = e => {
        e.preventDefault();
        const inputAmount = amountInputRef.current.value;
        if (inputAmount.trim().length === 0 || +inputAmount < 1){
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(+inputAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Count"
                input={{
                    id: props.id,
                    type: "number",
                    min: 1,
                    step: 1,
                    defaultValue: 1
                }}/>
            <button>Add</button>
            {!isAmountValid && <p>Введите корректное количество...</p>}
        </form>
    );
}

export default MealItemForm;