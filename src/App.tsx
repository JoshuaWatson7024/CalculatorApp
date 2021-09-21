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
  const [history_i, setHistory_i] = useState<number>(0);

  function clear(){
    setDisplay("");
    setval(0);
    setfxn("");
    setOperator_solve(false);
    setNew_valb(true);
  }
  function change(digit: string){
    if(new_valb){
      setNew_valb(false);
      setDisplay(digit);
    }
    else{
      setDisplay(display+digit);
    }
    console.log(history);
    setHistory(history.slice(0,history.length-1).concat([display]));
  }

  function operate(operation: string){
    /*Don't let them click this if no number is entered*/
    if (display==""){
      return;
    }
    setfxn(operation);
    setNew_valb(true);
    if (operator_solve){
      solve();
    }
    else{
      setval(parseInt(display, 10));
      setOperator_solve(true);
      setHistory(history.concat([""]));
    }
  }

  function solve(){
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
    setHistory(history.concat([""]));
  }

  const hist = history.map((input, x) => {
    return (
        <li key = {input}>
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
