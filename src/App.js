import Costs from "./components/Costs/Costs";
import Card from "./components/UI/Card";
import NewCost from "./components/NewCost/NewCost";
import CostsFilter from "./components/CostsFilter/CostsFilter";
import {useState} from "react";
function App() {
    const date = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(date);

    const costs =[
        {
            id: 'c1',
            costDate: new Date(2021, 2, 12),
            costDesc: 'Холодильник',
            costAmount: 999.99,
        },
        {
            id: 'c2',
            costDate: new Date(2021, 2, 15),
            costDesc: 'Джинсы',
            costAmount: 58,
        },
        {
            id: 'c3',
            costDate: new Date(2021, 2, 17),
            costDesc: 'Футболка',
            costAmount: 25,
        },
    ]

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log('App');
    }

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <div>
            <h1>Hi!</h1>
            <NewCost onAddCost={addCostHandler}/>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={changeYearHandler}/>
                {
                    costs.map( (c, k) => <Costs
                        costDate={c.costDate}
                        costDesc={c.costDesc}
                        costAmount={c.costAmount}
                        key={k}
                    />)
                }
            </Card>
        </div>
    );
}

export default App;
