import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>(" ");
  let fxn = "";
  let value = 0;
  const fxnClicked = false;

  function multiply(){
    value = parseInt(display, 10);
    fxn = "X";
    }

  function solve(){
    let tempval = parseInt(display, 10);
    if (fxn == "X"){
      setDisplay((tempval*value).toString())
    }
  }

  return (
    <div className="App">
      <Display text={display}></Display>
      <ButtonTable change={setDisplay} solve = {solve} multiply={multiply} disp={display}></ButtonTable>

    </div>
  );
}

export default App;
