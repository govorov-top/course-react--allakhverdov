import styles from "../../assets/scss/components/Card.module.scss";

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
