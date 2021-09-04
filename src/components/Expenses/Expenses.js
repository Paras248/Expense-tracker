import React, {useState} from 'react';
import './CSS/Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({items}) => {

	const currentYear = new Date().getFullYear().toString();

	const [year, setYear] = useState(currentYear);

	const filterChangeHandler = (selectedYear) => {
		setYear(selectedYear);
	} 

	const filteredExpenses = items.filter((expense) => expense.date.getFullYear().toString() === year)
	

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter onChangeFilter={filterChangeHandler} selected={year}/>	
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	)
}

export default Expenses;