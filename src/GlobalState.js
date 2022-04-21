import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
 const initialstate = {
transactions:  [
     {id: 1, text: "Cellphone", amount: -800},
     {id: 2, text: "Laptop", amount:-900},
     {id: 3, text: "Project Payment", amount:1900}
]
 }

export const GlobalContext = createContext(initialstate)

export const  GlobalProvider=({children})=>{
const [state, dispatch]= useReducer(AppReducer, initialstate)

const deleteTransaction=(id)=>{
    dispatch({
        type: 'Delete-transaction',
        payload: id,
    })
}
const addTransaction=(transaction)=>{
    dispatch({
        type: 'Add-transaction',
        payload: transaction
    })
}
return(<GlobalContext.Provider value={{transactions:state.transactions, 
deleteTransaction, addTransaction}}>
    {children}
</GlobalContext.Provider>)
}