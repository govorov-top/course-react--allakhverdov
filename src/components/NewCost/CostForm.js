import './CostForm.css';
import {useState} from "react";
export default function CostForm(props) {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    const nameChangeHandler = (e) => {
        setInputName(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveCostData({
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        })
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }
    return (
        <form className="new-cost__controls" action="" onSubmit={submitHandler}>
            <label className="new-cost__control" htmlFor="">Название
                <input value={inputName} onChange={nameChangeHandler} type="text"/>
            </label>
            <label className="new-cost__control" htmlFor="">Сумма
                <input value={inputAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01"/>
            </label>
            <label className="new-cost__control" htmlFor="">Дата
                <input value={inputDate} onChange={dateChangeHandler} type="date" min="1950-01-01"/>
            </label>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
                <button type="submit">Отмена</button>
            </div>
        </form>
    );
}