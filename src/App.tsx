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
    /*Don't let them click this if no number is entered*/
    if (display==""){
      return;
    }
    setDisplay("");
    setval(0);
    setfxn("");
    setOperator_solve(false);
    setNew_valb(true);
    setHistory(history.concat(["CLEAR", ""]));
  }
  function update_history_same_line(text: string){
    setHistory(history.slice(0,history.length-1).concat(
      history.slice(history.length-1, history.length).toString().concat(text)
      )
    );
  }
  function change(digit: string){
    if(new_valb){
      setNew_valb(false);
      setDisplay(digit);
    }
    else{
      setDisplay(display+digit);
      
    }
    update_history_same_line(digit);   
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
    }
    update_history_same_line(operation);
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
      setHistory(history.concat(["=", tempval.toString(), "---------------"], ""))
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
