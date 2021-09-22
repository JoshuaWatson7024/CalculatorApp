import React, { useState } from 'react';
import { TupleType } from 'typescript';
import './App.css';
import { ButtonTable } from './ButtonTable';
import { Display } from './Display';

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>("");
  const [fxn, setfxn] = useState<string>("");
  const [val, setval] = useState<number>(0);
  const [operator_solve, setOperator_solve] = useState<boolean>(false);
  let [new_valb, setNew_valb] = useState<boolean>(false);

  const [history, setHistory] = useState<Array<string>>([]);

  function clear(){
    setDisplay("");
    setval(0);
    setfxn("");
    setOperator_solve(false);
    setNew_valb(true);
    setHistory(history.concat(["CLEAR", ""]));
  }
  function change(digit: string){
    if(new_valb){
      setNew_valb(false);
      setDisplay(digit);
      setHistory(history.slice(0,history.length-1).concat([digit]));
    }
    else{
      setDisplay(display+digit);
      setHistory(history.slice(0,history.length-1).concat([display+digit]));
    }
    
  }

  function operate(operation: string){
    /*Don't let them click this if no number is entered*/
    if (display==""){
      return;
    }
    setfxn(operation);
    setNew_valb(true);
    if (operator_solve){
      solve(false);
    }
    else{
      setval(parseInt(display, 10));
      setOperator_solve(true);
      setHistory(history.concat([operation, " "]));
    }
  }

  function solve(pressed_equals: boolean){
    /*Don't let them click this if no number is entered*/
    if (display==""){
      return;
    }
    let tempval = parseInt(display, 10);
    if (fxn == "+"){
      tempval = val + tempval;
      setDisplay((tempval).toString());
    }
    if (fxn == "-"){
      tempval = val - tempval;
      setDisplay((tempval).toString());
    }
    if (fxn == "X"){
      tempval = val * tempval;
      setDisplay((tempval).toString());
    }
    if (fxn == "/"){
      tempval = val / tempval;
      setDisplay((tempval).toString());
    }
    setval(tempval);
    setNew_valb(true);
    if (pressed_equals){
      setOperator_solve(false);
    }
  }

  const hist = history.map((input, x) => {
    return (
        <li key = {x}>
            <div>{input}</div>
        </li>
      );
  });

  return (
    <div className="App">
      <Display text={display}></Display>
      <ButtonTable change={change} clear={clear} solve={solve} operate={operate} disp={display}></ButtonTable>
      <ol>{hist}</ol>
    </div>
  );
}

export default App;
