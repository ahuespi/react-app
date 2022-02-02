import React, { useState } from "react"

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseDate)

        // Limpio los input
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Titulo</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Monto</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Fecha</label>
                <input type="date" value={enteredDate} min="2020-01-01" max="2023-01-01" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">add expense</button>
        </div>
    </form>
}

export default ExpenseForm
