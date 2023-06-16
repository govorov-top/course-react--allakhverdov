import Card from "../UI/Card";

function CostItem({costDate,costDesc,costAmount}) {
    return (
        <Card className="cost-item">
            <div className="cost-date">
                <div className="cost-date__month">{costDate.toLocaleString('en-EN', {month: 'long'})}</div>
                <div className="cost-date__year">{costDate.getFullYear()}</div>
                <div className="cost-date__day">{costDate.toLocaleString('en-EN', {month: '2-digit'})}</div>
            </div>
            <div className="cost-item__description">
                <h2>{costDesc}</h2>
                <div className="cost-item__price">{costAmount} ₽</div>
            </div>
        </Card>
    );
}
export default CostItem;