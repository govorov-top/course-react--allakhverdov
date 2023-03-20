import useInput from "../hooks/useInput";

const SomeInput = (props) => {

    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues
    } = useInput(val => val.trim() !== '');

    const {
        value: enteredEmail,
        hasError: hasEmailInputError,
        isValid: isEnteredEmailValid,
        inputChangeHandler: emailInputChangeHandler,
        inputLostFocusHandler: emailInputLostFocusHandler,
        resetValues: resetEmailInputValues
    } = useInput(val => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return val.trim() !== '' && regex.test(val);
    });

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) isFormValid = true;

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(hasNameInputError && hasEmailInputError){
            return;
        }
        resetNameInputValues();
        resetEmailInputValues();
        console.log(enteredName);
        console.log(enteredEmail);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${hasNameInputError && 'invalid'}`}>
                <label htmlFor="name">Введите Имя</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                    onBlur={nameInputLostFocusHandler}
                />
                {hasNameInputError && <p className="error-text">Имя не корректно</p>}
            </div>
            <div className={`form-control ${hasEmailInputError && 'invalid'}`}>
                <label htmlFor="email">Введите email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputLostFocusHandler}
                />
                {hasEmailInputError && <p className="error-text">Email не корректен</p>}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid && 'disabled'}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeInput;