import Card from "../UI/Card";
import './Costs.css';

function Costs(props) {
    const {costDate,costDesc,costAmount} = props;

    return (
        <Card className="cost-item">
            <div className="cost-date">
                <div className="cost-date__month">{costDate.toLocaleString('ru-RU', {month: 'long'})}</div>
                <div className="cost-date__year">{costDate.getFullYear()}</div>
                <div className="cost-date__day">{costDate.toLocaleString('ru-RU', {month: '2-digit'})}</div>
            </div>
            <div className="cost-item__description">
                <h2>{costDesc}</h2>
                <div className="cost-item__price">{costAmount} ₽</div>
            </div>
        </Card>
    );
}
export default Costs;