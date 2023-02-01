import './NewCost.scss';
import CostForm from "./CostForm";
import {useState} from "react";
export default function NewCost(props) {

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    }

    const hiddenFormHandler = () => {
        setShowForm(false);
    }

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);

        hiddenFormHandler();
    }
    return (
        <div className="new-cost">
            {
                showForm ?
                    <CostForm onSaveCostData={saveCostDataHandler} onHiddenForm={hiddenFormHandler}/> :
                    <button onClick={showFormHandler}>Добавмить новый расход</button>
            }
        </div>
    );
}