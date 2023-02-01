import './Costs.scss';
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs({costs}) {
    const date = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(date);

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filterCosts = costs.filter( (c) => Number(selectedYear) === c.costDate.getFullYear());

    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={changeYearHandler}/>
            <CostsDiagram costs={filterCosts}/>
            <CostList costs={filterCosts}/>
        </Card>
    );
}
export default Costs;