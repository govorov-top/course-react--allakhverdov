import styles from "./CostList.scss";
import CostItem from "./CostItem";

function CostList({costs}) {
    return (
        <ul className={styles.costList}>
            {
                costs.length > 0 ? costs.map( (c) => <CostItem
                    costDate={c.costDate}
                    costDesc={c.costDesc}
                    costAmount={c.costAmount}
                    key={c.id}
                />): <h2 className={styles.costList__fallback}>Ничего не найдено!</h2>
            }
        </ul>
    );
}
export default CostList;