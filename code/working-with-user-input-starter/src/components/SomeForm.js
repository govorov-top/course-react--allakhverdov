import useInputPlusReducer from "../hooks/useInputPlusReducer";

const SomeForm = (props) => {
    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues
    } = useInputPlusReducer(val => val.trim() !== '');

    const {
        value: enteredLastName,
        hasError: hasLastNameInputError,
        isValid: isEnteredLastNameValid,
        inputChangeHandler: lastNameInputChangeHandler,
        inputLostFocusHandler: lastNameInputLostFocusHandler,
        resetValues: resetLastNameInputValues
    } = useInputPlusReducer(val => val.trim() !== '');

    const {
        value: enteredEmail,
        hasError: hasEmailInputError,
        isValid: isEnteredEmailValid,
        inputChangeHandler: emailInputChangeHandler,
        inputLostFocusHandler: emailInputLostFocusHandler,
        resetValues: resetEmailInputValues
    } = useInputPlusReducer(val => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return val.trim() !== '' && regex.test(val);
    });

    let isFormValid = false;
    if (isEnteredNameValid && isEnteredLastNameValid && isEnteredEmailValid) isFormValid = true;
    console.log('isFormValid',isFormValid);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(!isFormValid){
            return;
        }
        console.log(enteredName);
        console.log(enteredLastName);
        console.log(enteredEmail);
        resetNameInputValues();
        resetLastNameInputValues();
        resetEmailInputValues();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={`form-control ${hasNameInputError && 'invalid'}`}>
                    <label htmlFor="name">Input Name</label>
                    <input
                        type="text"
                        id="name"
                        value={enteredName}
                        onChange={nameInputChangeHandler}
                        onBlur={nameInputLostFocusHandler}
                    />
                    {hasNameInputError && <p className="error-text">Name is not correct</p>}
                </div>
                <div className={`form-control ${hasLastNameInputError && 'invalid'}`}>
                    <label htmlFor="lastName">Input Lastname</label>
                    <input
                        type="text"
                        id="lastName"
                        value={enteredLastName}
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameInputLostFocusHandler}
                    />
                    {hasLastNameInputError && <p className="error-text">Lastname is not correct</p>}
                </div>
            </div>
            <div className={`form-control ${hasEmailInputError && 'invalid'}`}>
                <label htmlFor="email">Input E-Mail</label>
                <input
                    type="text"
                    id="email"
                    value={enteredEmail}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputLostFocusHandler}
                />
                {hasEmailInputError && <p className="error-text">Email is not correct</p>}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid && 'disabled'}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeForm;
