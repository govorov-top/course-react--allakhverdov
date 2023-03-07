import styles from "../../assets/scss/components/Cart/CartItem.module.css";

const CartItem = (props) => {
    const {name, amount, price} = props.meal;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{`$${price.toFixed(2)}`}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
