import { equal } from 'assert';
import React, { useState } from 'react';

export const ButtonTable = ({change, clear, solve, operate, eq_g, fxn_g, clear_g, disp}: {
        change: (text: string) => void;
        clear: () => void;
        solve: (pressed_equals: boolean) => void;
        operate: (operation: string) => void;
        eq_g: boolean;
        fxn_g: boolean;
        clear_g: boolean;
        disp: string}
     ): JSX.Element => {

        let numbut_fxn: string = "Fxnr";
        let numbut_eq: string = "Fxnr";
        let numbut_clear: string = "Fxnr";
        if (fxn_g){
            numbut_fxn = "Fxng";
        }
        if (eq_g){
            numbut_eq = "Fxng";
        }
        if (clear_g){
            numbut_clear = "Fxng";
        }


return (
    <table className="buttonTable">
        <tr>
            <td>
                <button className="numBut" onClick={() => change("7")}>7</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("8")}>8</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("9")}>9</button>
            </td>
            <td>
                <button className={numbut_fxn} onClick={() => operate("/")}>/</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="numBut" onClick={() => change("4")}>4</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("5")}>5</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("6")}>6</button>
            </td>
            <td>
                <button className={numbut_fxn}  onClick={() => operate("*")}>*</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="numBut" onClick={() => change("1")}>1</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("2")}>2</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("3")}>3</button>
            </td>
            <td>
                <button className={numbut_fxn}  onClick={() => operate("-")}>-</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className={numbut_clear}  onClick={() => clear()}>C</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("0")}>0</button>
            </td>
            <td>
                <button className={numbut_eq} onClick={() => solve(true)}>=</button>
            </td>
            <td>
                <button className={numbut_fxn}  onClick={() => operate("+")}>+</button>
            </td>
        </tr>
    </table>
);
}
