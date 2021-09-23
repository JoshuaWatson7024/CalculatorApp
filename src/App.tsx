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
  let [can_press_fxn, setCan_press_fxn] = useState<boolean>(false);
  const [history, setHistory] = useState<Array<string>>([]);
  let [can_press_eq, setCan_press_eq] = useState<boolean>(false);

  function clearHistory(){
    clear();
    setHistory([]);
  }

  function clear(){
    /*Don't let them click this if no number is entered*/
    if (display===""){
      return;
    }
    setCan_press_eq(false);
    setCan_press_fxn(false);
    setDisplay("");
    setval(0);
    setfxn("");
    setOperator_solve(false);
    setNew_valb(true);
    if (history[history.length-1] == ""){
      update_history_same_line("CLEAR", false);
    }
    else{setHistory(history.concat(["CLEAR", ""]));
    }
  }

  function update_history_same_line(text: string, remove_dashes: boolean){
    if (remove_dashes){
      setHistory(history.slice(0,history.length-2).concat(
        history.slice(history.length-1, history.length).toString().concat(text)
        )
      );
    }
    else{
      if (text == "CLEAR"){
        setHistory(history.slice(0,history.length-1).concat(
          history.slice(history.length-1, history.length).toString().concat(text),
          [""]
          )
        );
      }
      else{
        setHistory(history.slice(0,history.length-1).concat(
          history.slice(history.length-1, history.length).toString().concat(text)
          )
        );
      }
    }
  }

  function change(digit: string){
    if(new_valb){
      setNew_valb(false);
      setDisplay(digit);
    }
    else{
      setDisplay(display+digit);
      
    }
    update_history_same_line(digit,false);
    setCan_press_fxn(true);
    setCan_press_eq(true);   
  }

  function operate(operation: string){
    /*Don't let them click this if not allowed*/
    if (!can_press_fxn){
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
    update_history_same_line(operation, (history[history.length-1] == "" && history[history.length-2] == "---------------"));
    setCan_press_fxn(false);
    setCan_press_eq(false);
  }

  function solve(pressed_equals: boolean){
    /*Don't let them click this if not allowed*/
    if (!can_press_fxn){
      return;
    }
    if (pressed_equals && !can_press_eq){
      return;
    }
    setCan_press_fxn(false);
    let tempval = parseInt(display, 10);
    if (fxn == "+"){
      tempval = val + tempval;
      setDisplay((tempval).toString());
    }
    if (fxn == "-"){
      tempval = val - tempval;
      setDisplay((tempval).toString());
    }
    if (fxn == "*"){
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
      setCan_press_fxn(true);
      setCan_press_eq(false);
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
      <ButtonTable change={change} clear={clear} solve={solve} operate={operate} eq_g = {can_press_eq} fxn_g = {can_press_fxn} clear_g={!(display == "")} disp={display}></ButtonTable>
      <button className = "clearHist" onClick = {() => clearHistory()}>Clear History</button>
      <ol className = "sidebar">{hist}</ol>
    </div>
  );
}

export default App;
