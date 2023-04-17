import styles from "../../assets/scss/components/Section.module.scss";

const Section = (props) => {
  return <section className={styles.section}>{props.children}</section>;
};

export default Section;
