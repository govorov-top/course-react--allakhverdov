import styles from "../../assets/scss/components/Cart/SubmitOrder.module.scss";
import useInputValidation from "../../hooks/useInputValidation";

const SubmitOrder = (props) => {
    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues
    } = useInputValidation(val => val.trim() !== '');

    const {
        value: enteredCity,
        hasError: hasCityInputError,
        isValid: isEnteredCityValid,
        inputChangeHandler: cityInputChangeHandler,
        inputLostFocusHandler: cityInputLostFocusHandler,
        resetValues: resetCityInputValues
    } = useInputValidation(val => val.trim() !== '');

    const {
        value: enteredAddress,
        hasError: hasAddressInputError,
        isValid: isEnteredAddressValid,
        inputChangeHandler: addressInputChangeHandler,
        inputLostFocusHandler: addressInputLostFocusHandler,
        resetValues: resetAddressInputValues
    } = useInputValidation(val => val.trim() !== '');

    let formValid = isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

    const confirmOrderHandler = (e) => {
        e.preventDefault();

        if (!formValid){
            alert('Some of the fields are incorrect');
            return;
        }

        props.onSubit({
            name: enteredName,
            city: enteredCity,
            address: enteredAddress,
        });

        resetNameInputValues();
        resetCityInputValues();
        resetAddressInputValues();
    }

    return <form className={styles.form}>
        <div className={`${styles.control} ${hasNameInputError && styles.invalid}`}>
            <label htmlFor="name">Input Name</label>
            <input
                type="text"
                id="name"
                value={enteredName}
                onChange={nameInputChangeHandler}
                onBlur={nameInputLostFocusHandler}
            />
            {hasNameInputError && <p className={styles['error-text']}>Name is not correct</p>}
        </div>
        <div className={`${styles.control} ${hasCityInputError && styles.invalid}`}>
            <label htmlFor="city">Input City</label>
            <input
                type="text"
                id="city"
                value={enteredCity}
                onChange={cityInputChangeHandler}
                onBlur={cityInputLostFocusHandler}
            />
            {hasCityInputError && <p className={styles['error-text']}>City is not correct</p>}
        </div>
        <div className={`${styles.control} ${hasAddressInputError && styles.invalid}`}>
            <label htmlFor="address">Input Address</label>
            <input
                type="text"
                id="address"
                value={enteredAddress}
                onChange={addressInputChangeHandler}
                onBlur={addressInputLostFocusHandler}
            />
            {hasAddressInputError && <p className={styles['error-text']}>Address is not correct</p>}
        </div>
        <div className={styles.actions}>
            <button className={styles.submit} onClick={confirmOrderHandler}>Send</button>
            <button onClick={props.onCanselToOrder}>Cancel</button>
        </div>
    </form>
}
export default SubmitOrder;