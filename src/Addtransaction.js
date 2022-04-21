import React, { useState, useContext } from 'react'
import { GlobalContext } from './GlobalState'
export const Addtransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount]=useState('0');
    const{addTransaction}=useContext(GlobalContext);

    const onsubmit=e=>{
        e.preventDefault();

        const newtransaction ={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newtransaction);
    }
    return (
    <>
    <h5>Add New Transaction</h5>
    <form onSubmit={onsubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Enter Item Name</label>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} 
            placeholder='Enter Text...'/>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'> Enter Amount <br/>
            (Type "-" for expense and "+" for income) </label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}
            placeholder='Enter Amount...'/>
        </div>
        <button className='btn'> Add Transaction</button>
    </form>
    </>
  )
}
