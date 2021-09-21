import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [fxn, setfxn] = useState<string>("");
  const [val, setval] = useState<number>(0);
  const [operator_solve, setOperator_solve] = useState<boolean>(false);

  function operate(operation: string){
    setval(parseInt(display, 10));
    setfxn(operation);
    setDisplay("");
    if (operator_solve){
      solve();
    }
    else{
      setOperator_solve(true);
    }
  }

  function solve(){
    setOperator_solve(false);
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
