import React, { useState } from "react";
import './CSS/ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData, onCancel}) => {

	const [title,setTitle] = useState('');
	const [amount,setAmount] = useState('');
	const [date,setDate] = useState('');

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		
		const expenseData = {
			title,
			amount: +amount,
			date: new Date(date),
		}

		onSaveExpenseData(expenseData);

		setTitle('');
		setAmount('');
		setDate('');

	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={(event)=> titleChangeHandler(event)}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="text" value={amount} onChange={(event) => amountChangeHandler(event)}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={date} onChange={(event) => dateChangeHandler(event)} min="2021-08-01" max="2050-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;