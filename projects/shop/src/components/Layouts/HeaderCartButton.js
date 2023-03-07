import styles from "../../assets/scss/components/Layouts/HeaderCartButton.module.scss"
import {BsCart4} from "react-icons/bs";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/CartContext";
function HeaderCartButton(props) {
    const [isBtnAnimated, setIsBtnAnimated] = useState(false)
    const cartContext = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    let buttonClasses = `${styles.button} ${isBtnAnimated ? styles.bump : ''}`

    useEffect(()=>{
        if (cartContext.items.length === 0){
            return;
        }
        setIsBtnAnimated(true);
        const timer = setTimeout(()=>{
            setIsBtnAnimated(false);
        },300);

        return ()=>{
            clearTimeout(timer)
        };
    }, [cartContext.items])

    return (
        <>
            <button className={buttonClasses} onClick={props.onShowCart}>
                <span className={styles.icon}><BsCart4/></span>
                <span>Корзина</span>
                <span className={styles.badge}>{cartItemsNumber}</span>
            </button>
        </>
    );
}

export default HeaderCartButton;