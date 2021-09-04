import React,{ useState } from 'react';
import './CSS/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		onAddExpense(expenseData);
		setIsEditing(false);
	}

	const startEditing = () => {
		setIsEditing(true);
	}

	const stopEditing = () => {
		setIsEditing(false)
	}

	return (
		<div className="new-expense">
			{!isEditing && <button type="button" onClick={startEditing}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
		</div>	
	)
}

export default NewExpense;