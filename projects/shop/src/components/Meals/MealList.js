import styles from "../../assets/scss/components/Meals/MealList.module.scss"
import Card from "../UI/Card";
import MealItem from "./MealItem";
import useFetch from "../../hooks/useFetch";
import {useEffect, useState} from "react";

function MealList( props ) {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendHttpRequest: fetchProducts } = useFetch();
    useEffect(() => {
        const manageProducts = (productsData) => {
            const loadedProducts = [];
            for (const productKey in productsData) {
                loadedProducts.push({
                    id: productKey,
                    description: productsData[productKey].description,
                    name: productsData[productKey].name,
                    price: productsData[productKey].price,
                });
            }
            setMeals(loadedProducts);
        };
        fetchProducts(
            {
                endpoint:
                    "https://rg-react-test-default-rtdb.firebaseio.com/meals.json",
            },
            manageProducts
        );

    }, [fetchProducts]);
    const mealList = meals.map(obj => <MealItem key={obj.id} meals={obj}/>);
    return (
        <>
            <section className={styles.meals}>
                <Card>
                    {
                        error
                            ? <p>{error}</p>
                            : isLoading
                                ? <p>Loading...</p>
                                : <ul className={styles.meals}>
                                    {mealList}
                                </ul>
                    }
                </Card>
            </section>

        </>
    );
}

export default MealList;