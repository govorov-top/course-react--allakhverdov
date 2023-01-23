import "./CostList.css";
import CostItem from "./CostItem";

function CostList({costs}) {
    return (
        <ul className="cost-list">
            {
                costs.length > 0 ? costs.map( (c) => <CostItem
                    costDate={c.costDate}
                    costDesc={c.costDesc}
                    costAmount={c.costAmount}
                    key={c.id}
                />): <h2 className="cost-list__fallback">Ничего не найдено!</h2>
            }
        </ul>
    );
}
export default CostList;