import Card from "../UI/Card";
import './CostItem.css';
function CostItem(props) {
    const {costDate,costDesc,costAmount} = props;
    // new Date
    const month = costDate.toLocaleString('ru-RU', {
        month: 'long'
    });
    const year = costDate.getFullYear();
    const day = costDate.toLocaleString('ru-RU', {
        month: '2-digit'
    });

    return (
        <Card className="cost-item">
            <div className="cost-date">
                <div className="cost-date__month">{month}</div>
                <div className="cost-date__year">{year}</div>
                <div className="cost-date__day">{day}</div>
            </div>
            <div className="cost-item__description">
                <h2>{costDesc}</h2>
                <div className="cost-item__price">{costAmount}</div>
            </div>
        </Card>
    );
}
export default CostItem;