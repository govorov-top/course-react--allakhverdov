import CostItem from "./components/Costs/CostItem";
import Card from "./components/UI/Card";
import NewCost from "./components/NewCost/NewCost";
function App() {
    const costs =[
        {
            costDate: new Date(2021, 2, 12),
            costDesc: 'Холодильник',
            costAmount: 999.99,
        },
        {
            costDate: new Date(2021, 2, 15),
            costDesc: 'Джинсы',
            costAmount: 58,
        },
        {
            costDate: new Date(2021, 2, 17),
            costDesc: 'Футболка',
            costAmount: 25,
        },
    ]

    return (
        <div>
            <h1>Hi!</h1>
            <NewCost/>
            <Card className="costs">
                {
                    costs.map( (c, k) => <CostItem
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
