import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import './App.css'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
    return (
        <GlobalProvider>
        <div className="hero">
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <History />
                <AddTransaction />
            </div>
        </div>
        </GlobalProvider>
    )
}

export default App
