import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [fxn, setfxn] = useState<string>("");
  const [val, setval] = useState<number>(0);
  const fxnClicked = false;

  function operate(operation: string){
    setval(parseInt(display, 10));
    setfxn(operation);
    setDisplay("");
    }

  function solve(){
    let tempval = parseInt(display, 10);
    if (fxn == "+"){
      setDisplay((val+tempval).toString());
    }
    if (fxn == "-"){
      setDisplay((val-tempval).toString());
    }
    if (fxn == "X"){
      setDisplay((val*tempval).toString());
    }
    if (fxn == "/"){
      setDisplay((val/tempval).toString());
    }
  }

  return (
    <div className="App">
      <Display text={display}></Display>
      <ButtonTable change={setDisplay} solve = {solve} operate={operate} disp={display}></ButtonTable>

    </div>
  );
}

export default App;
