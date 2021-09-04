import React from 'react';
import './CSS/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = ({title,amount,date}) => {
	
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={date}/>
				<div className="expense-item__description">
					<h2>{title}</h2>
				</div>
				<div className="expense-item__price">{amount} Rs</div>
			</Card>
		</li>
	)
}

export default ExpenseItem;