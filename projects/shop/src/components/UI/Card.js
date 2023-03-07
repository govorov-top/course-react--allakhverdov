import styles from "../../assets/scss/components/UI/Card.module.scss"
const Card = (props) => {
    return (
        <div {...props} className={props.className + ' ' + styles.card}>
            {props.children}
        </div>
    );
}
export default Card;