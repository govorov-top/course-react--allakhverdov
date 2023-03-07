import React from "react";
import styles from "../../assets/scss/components/UI/Input.module.scss"
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={props.className + ' ' + styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}>
                {props.children}
            </input>
        </div>
    );
});
export default Input;