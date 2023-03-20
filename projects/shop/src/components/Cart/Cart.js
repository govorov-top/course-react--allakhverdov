import styles from "../../assets/scss/components/Cart/Cart.module.scss"
import Modal from "../UI/Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";
import useFetch from "../../hooks/useFetch";

function Cart( props ) {
    const [isShowOrderForm,setIsShowOrderForm] = useState(false);
    const [isDataSubmitting,setIsDataSubmitting] = useState(false);
    const [wasDataSendingSuccessful,setWasDataSendingSuccessful] = useState(false);
    const { isLoading, error, sendHttpRequest } = useFetch();
    const cartContext = useContext(CartContext);
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }
    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }
    const doOrderHandler = (e) => {
        setIsShowOrderForm(true)
    }
    const submitOrderHandler = (userData) => {
        setIsDataSubmitting(true);
        sendHttpRequest(
            {
                endpoint: "https://rg-react-test-default-rtdb.firebaseio.com/orders.json",
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: {
                    user: userData,
                    orderedMeals: cartContext.items
                },
            }
        );
        setIsDataSubmitting(false);
        setWasDataSendingSuccessful(true);
        cartContext.removeItems();
    }

    const cartItems = <>
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
        <div className={styles.total}>
            <span>Total:</span>
            <span>
                    {`$${Math.abs(Number(cartContext.totalAmount)).toFixed(2)}`}
                </span>
        </div>
    </>
    const modalButtons = <div className={styles.actions}>
        {
            error && <p>{error}</p>
        }
        <button className={styles["button-alt"]} onClick={props.onHideCart}>Close</button>
        {
            cartContext.items.length > 0 && <button className={styles.button} onClick={doOrderHandler}>
                {
                    isLoading ? 'Sending data...' : 'Order'
                }
            </button>
        }
    </div>

    return (
        <Modal onHideCart={props.onHideCart}>

            {
                !isDataSubmitting && !wasDataSendingSuccessful && <>
                    {cartItems}
                    {
                        isShowOrderForm
                            ? <SubmitOrder onSubit={submitOrderHandler} onCanselToOrder={props.onHideCart}/>
                            : modalButtons
                    }
                </>
            }
            {isDataSubmitting  && 'Sending data...'}
            {wasDataSendingSuccessful   && <>
                <p>Data sent, thanks for the order!</p>
                <div className={styles.actions}>
                    <button className={styles["button-alt"]} onClick={props.onHideCart}>Close</button>
                </div>
            </>
            }
        </Modal>
    );
}

export default Cart;