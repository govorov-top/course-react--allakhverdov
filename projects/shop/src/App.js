import './App.scss';
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";
function App() {

    const [cartIsVisible, setCartIsVisible] = useState(false);

    const showCartHandler = () => {
        setCartIsVisible(true)
    }

    const hideCartHandler = () => {
        setCartIsVisible(false)
    }

    return (
        <CartContextProvider>
            <Header onShowCart={showCartHandler}/>
            { cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;