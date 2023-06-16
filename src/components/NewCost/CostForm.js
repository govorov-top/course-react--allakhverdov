import './CostForm.scss';
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
            costDesc: inputName,
            costAmount: inputAmount,
            costDate: new Date(inputDate)
        })
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }
    const cancelSubmitHandler = () => {
        props.onHiddenForm(false)
    }

    return (
        <form className="new-cost__controls" action="" onSubmit={submitHandler}>
            <label className="new-cost__control" htmlFor="">Title
                <input value={inputName} onChange={nameChangeHandler} type="text"/>
            </label>
            <label className="new-cost__control" htmlFor="">Amount
                <input value={inputAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01"/>
            </label>
            <label className="new-cost__control" htmlFor="">Date
                <input value={inputDate} onChange={dateChangeHandler} type="date" min="1950-01-01"/>
            </label>
            <div className="new-cost__actions">
                <button type="submit">Add expense</button>
                <button type="button" onClick={cancelSubmitHandler}>Cancel</button>
            </div>
        </form>
    );
}