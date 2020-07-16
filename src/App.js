import React from 'react';

import Dropdown from './components/Dropdown';
import { dropdownValues } from './constants/mock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dropdown values={dropdownValues()} />
    </div>
  );
}

export default App;
