import styles from "../../assets/components/UI/scss/Card.module.scss"
const Card = (props) => {
    return (
        <div {...props} className={props.className + ' ' + styles.card}>
            {props.children}
        </div>
    );
}
export default Card;