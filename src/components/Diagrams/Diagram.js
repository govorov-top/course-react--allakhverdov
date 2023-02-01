import './Diagram.scss';
import DiagramBar from "./DiagramBar";

function Diagram({dataSets}) {
    const dataSetsValue = dataSets.map(dataSet => dataSet.value);
    const maxMonthCosts = Math.max(...dataSetsValue);

    return (
        <div className="diagram">
            {
                dataSets.map(dataSet => <DiagramBar
                    value={dataSet.value}
                    maxValue={maxMonthCosts}
                    label={dataSet.label}
                    key={dataSet.label}
                />)
            }
        </div>
    );
}
export default Diagram;