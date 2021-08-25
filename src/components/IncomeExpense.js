import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map( transaction => transaction.amount)

    const income = amounts
    .filter(item => item>0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2)

    const expense = amounts
    .filter(item => item<0)
    .reduce((acc,item) => (acc += item), 0)* -1
    .toFixed(2)

    return (
        <div className="inc-exp-container">
             <div className="inc">
                 <h4>Income</h4>
                 <p id="inc" >Rs {income}</p>
             </div>
             <div className="exp">
                 <h4>Expense</h4>
                 <p id="exp" >Rs {expense}</p>
             </div>
            
        </div>
    )
}

export default IncomeExpense
