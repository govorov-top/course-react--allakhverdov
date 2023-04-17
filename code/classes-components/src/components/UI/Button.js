import styles from "../../assets/components/UI/scss/Button.module.scss"
const Button = (props) => {
    return (
        <button {...props} className={props.className + ' ' + styles.btn}>{props.children}</button>
    );
}
export default Button;