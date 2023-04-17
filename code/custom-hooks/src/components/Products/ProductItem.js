import styles from "../../assets/scss/components/Products/ProductItem.module.scss";

const ProductItem = (props) => {
  return <li className={styles.product}>{props.children}</li>;
};

export default ProductItem;
