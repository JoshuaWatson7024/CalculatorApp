import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("0");

  return (
    <div className="App">
      <Display text={display}></Display>
      <ButtonTable change={setDisplay} disp={display}></ButtonTable>

    </div>
  );
}

export default App;
