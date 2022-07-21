import React from 'react';

import './App.css';

import FetchData from './components/FetchData';
import EmployeeData from './components/EmployeeData';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <FetchData />
      <EmployeeData />
      <Login />
    </div>
  );
}

export default App;