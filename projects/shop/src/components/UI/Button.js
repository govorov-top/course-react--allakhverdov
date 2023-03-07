import styles from "../../assets/scss/components/UI/Button.module.scss"
const Button = (props) => {
    return (
        <button {...props} className={props.className + ' ' + styles.btn}>{props.children}</button>
    );
}
export default Button;