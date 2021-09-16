import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("Do Something!");

  return (
    <div className="App">
      <Display text={display}></Display>
      <ButtonTable change={setDisplay}></ButtonTable>

    </div>
  );
}

export default App;
