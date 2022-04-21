import React from 'react';
import { Header } from './Header';
import './App.css';
import { Balance } from './Balance';
import Income from './Income';
import { Transactionlist } from './Transactionlist';
import { Addtransaction } from './Addtransaction';
import {GlobalProvider} from './GlobalState';

function App() {
  return (
   <GlobalProvider>
      <Header/>
      <Balance/>
      <Income/>
      <Transactionlist/>
      <Addtransaction/>
      </GlobalProvider>
  );
}

export default App;
