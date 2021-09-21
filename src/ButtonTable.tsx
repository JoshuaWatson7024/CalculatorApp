import { equal } from 'assert';
import React, { useState } from 'react';

export const ButtonTable = ({change, clear, solve, operate, disp}: {
        change: (text: string) => void;
        clear: () => void;
        solve: () => void;
        operate: (operation: string) => void;
        disp: string}
     ): JSX.Element => {

return (
    <table>
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
                <button className="numBut" onClick={() => operate("/")}>/</button>
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
                <button className="numBut" onClick={() => operate("X")}>X</button>
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
                <button className="fxnBut" onClick={() => operate("-")}>-</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="fxnBut" onClick={() => clear()}>C</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("0")}>0</button>
            </td>
            <td>
                <button className="fxnBut" onClick={() => solve()}>=</button>
            </td>
            <td>
                <button className="fxnBut" onClick={() => operate("+")}>+</button>
            </td>
        </tr>
    </table>
);
}
