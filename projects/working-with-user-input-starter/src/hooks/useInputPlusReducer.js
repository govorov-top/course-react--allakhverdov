import {useReducer} from "react";

const initialInputState = {
    inputValue: '',
    wasTouched: false,
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT_CHANGE')
        return {
            inputValue: action.value,
            wasTouched: state.wasTouched,
        }
    if (action.type === 'INPUT_BLUR')
        return {
            inputValue: state.inputValue,
            wasTouched: true,
        }
    if (action.type === 'INPUT_RESET')
        return {
            inputValue: '',
            wasTouched: false,
        }
    return initialInputState;
}

const useInputPlusReducer = (validateValueFunc) => {

    const [inputState, dispatchAction] = useReducer(inputStateReducer,initialInputState)

    const isValueValid = validateValueFunc(inputState.inputValue);

    const inputChangeHandler = (e) => {dispatchAction({type: "INPUT_CHANGE", value: e.target.value})}
    const inputLostFocusHandler = () => {dispatchAction({type: "INPUT_BLUR"})}
    const resetValues = () => {
        dispatchAction({type: "INPUT_RESET"})
    }
    return {
        value: inputState.inputValue,
        hasError: !isValueValid && inputState.wasTouched,
        isValid: isValueValid,
        inputChangeHandler,
        inputLostFocusHandler,
        resetValues
    }
};

export default useInputPlusReducer;
