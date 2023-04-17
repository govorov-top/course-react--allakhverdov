import React, { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";
import useFetch from "./hooks/useFetch";

function App() {
    const [products, setProducts] = useState([]);

    const httpRequestData = useFetch('https://rg-react-test-default-rtdb.firebaseio.com/products.json');
    const { isLoading, error, sendHttpRequest: fetchProducts } = httpRequestData;

    useEffect(() => {
        const manageProducts = (productsData) => {
            const loadedProducts = [];

            for (const productKey in productsData) {
                loadedProducts.push({
                    id: productKey,
                    text: productsData[productKey].text,
                });
            }

            setProducts(loadedProducts);
        };

        fetchProducts(
            {
                endpoint:
                    "https://react-course-http-8220d-default-rtdb.firebaseio.com/products.json",
            },
            manageProducts
        );

    }, [fetchProducts]);

    const productAddHandler = (product) => {
        setProducts((prevProducts) => prevProducts.concat(product));
    };

    return (
        <>
            <NewProduct onAddProduct={productAddHandler} />
            <Products
                items={products}
                loading={isLoading}
                error={error}
                onFetch={fetchProducts}
            />
        </>
    );
}

export default App;