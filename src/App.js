import React from 'react';

import './App.css';

import FetchData from './components/FetchData';
import EmployeeData from './components/EmployeeData';
import Login from './components/Login';
import ListItems from './components/list component/ListItems';

function App() {
  return (
    <div className='App'>
      <FetchData />
      <EmployeeData />
      <Login />
      <ListItems />
    </div>
  );
}

export default App;