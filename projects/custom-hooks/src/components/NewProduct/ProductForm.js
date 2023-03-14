import { useRef } from "react";

import styles from "../../assets/scss/components/NewProduct/ProductForm.module.scss";

const ProductForm = (props) => {
    const productInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredValue = productInputRef.current.value;

        if (enteredValue.trim().length > 0) {
            props.onEnterProduct(enteredValue);
            productInputRef.current.value = '';
        }
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input type="text" ref={productInputRef} />
            <button>
                {props.loading ? "Обработка запроса..." : "Добавить Товар"}
            </button>
        </form>
    );
};

export default ProductForm;
