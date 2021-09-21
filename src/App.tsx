import React, { useState } from 'react';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [fxn, setfxn] = useState<string>("");
  const [val, setval] = useState<number>(0);
  const [operator_solve, setOperator_solve] = useState<boolean>(false);
  let [new_val, setNew_val] = useState<boolean>(false);

  function clear(){
    setDisplay("");
    setval(0);
    setfxn("");
    setOperator_solve(false);
    setNew_val(true);
  }
  function change(digit: string){
    if(new_val){
      setNew_val(false);
      setDisplay(digit);
    }
    else{
      setDisplay(display+digit);
    }
  }

  function operate(operation: string){
    setval(parseInt(display, 10));
    setfxn(operation);
    setNew_val(true);
    if (operator_solve){
      solve();
    }
    else{
      setOperator_solve(true);
    }
  }

  function solve(){
    setNew_val(true);
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
      <ButtonTable change={change} clear={clear} solve={solve} operate={operate} disp={display}></ButtonTable>
    </div>
  );
}

export default App;
