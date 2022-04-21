import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import { Transactions } from './Transactions'

export const Transactionlist = () => {
   const {transactions}=useContext(GlobalContext)
   
 
  return (
      <div>
    <h5>History</h5>
    <ul className='list'>
      {transactions.map(transaction=>(<Transactions key={transaction.id} transaction = {transaction}/>))}
    </ul>
    </div>
  )
}
