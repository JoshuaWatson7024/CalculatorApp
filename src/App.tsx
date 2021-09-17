import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [fxn, setfxn] = useState<string>("");
  const [val, setval] = useState<number>(0);
  const fxnClicked = false;

  function multiply(){
    setval(parseInt(display, 10));
    setfxn("X")
    setDisplay("")
    }

  function solve(){
    let tempval = parseInt(display, 10);
    console.log(fxn)
    if (fxn == "X"){
      setDisplay((tempval*val).toString())
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
