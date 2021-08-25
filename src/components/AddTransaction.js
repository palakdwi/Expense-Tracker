import React, {useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
const [text, setText] = useState('')
const [amount, setAmt] = useState(0)

const { addTransaction }= useContext(GlobalContext)

const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction)
}

    return (
        <div className="transact">
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label><br/>
                    <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder="Enter Text"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label><br/>
                    <input type="number" value={amount} onChange={ (e) => setAmt(e.target.value)} placeholder="Enter amount"></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
