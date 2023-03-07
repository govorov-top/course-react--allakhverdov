import styles from "../../assets/scss/components/Cart/Cart.module.scss"
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

function Cart( props ) {
    const cartContext = useContext(CartContext);
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }
    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }
    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={styles["cart-items"]}>
                {cartContext.items.map(
                    item => <CartItem
                        key={item.id}
                        meal={item}
                        onAdd={addCartItemHandler.bind(null, item)}
                        onRemove={removeCartItemHandler.bind(null, item.id)}
                    />
                )}
            </ul>
            <div>
                <span>Total:</span>
                <span>
                    {`$${Math.abs(Number(cartContext.totalAmount)).toFixed(2)}`}
                </span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button-alt"]} onClick={props.onHideCart}>Close</button>
                {
                    cartContext.items.length > 0 && <button className={styles.button}>Order</button>
                }
            </div>
        </Modal>
    );
}

export default Cart;