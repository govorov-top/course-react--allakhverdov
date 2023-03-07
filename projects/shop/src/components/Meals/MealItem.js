import styles from "../../assets/scss/components/Meals/MealItem.module.scss"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../store/CartContext";

function MealItem( props ) {
    const cartContext = useContext(CartContext);
    const {id, name,description,price} = props.meals;

    const addToCartHandler = (amount) => {
        cartContext.addItem({id, name, amount, price});
    }

    const formattedPrice = `$${price.toFixed(2)}`;
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={id}/>
            </div>
        </li>
    );
}

export default MealItem;