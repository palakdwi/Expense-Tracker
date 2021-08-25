import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 500},
        { id: 3, text: 'food', amount: -100 },
        { id: 4, text: 'movie', amount: -50 },
    ]
}

 export const GlobalContext = createContext(initialState)

 export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
 }
