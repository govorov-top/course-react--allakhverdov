import styles from "../assets/components/scss/ItemUser.module.scss"
const ItemUser = (props) => {
    return (
        <div className={styles.itemUser}>
            <h5 data-id={props.id}>{props.name} - {props.age} лет</h5>
        </div>
    );
}
export default ItemUser;