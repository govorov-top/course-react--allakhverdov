import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS =[
    {
        id: 'c1',
        costDate: new Date(2023, 2, 12),
        costDesc: 'Refrigerator',
        costAmount: 999.99,
    },
    {
        id: 'c2',
        costDate: new Date(2023, 5, 15),
        costDesc: 'Jeans',
        costAmount: 58,
    },
    {
        id: 'c3',
        costDate: new Date(2023, 10, 17),
        costDesc: 'T-shirt',
        costAmount: 25,
    },
]

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        console.log('APP', cost)
        setCosts((prevState) => [cost, ...prevState]);
    }

    return (
        <>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </>
    );
}

export default App;
