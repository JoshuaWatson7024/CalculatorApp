import React, { useState } from 'react';

export const ButtonTable = ({change, disp}: {change: (text: string) => void; disp: string}): JSX.Element => {
  return (
    <table>
        <tr>
            <td>
                <button className="numBut" onClick={() => change(disp + "7")}>7</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "8")}>8</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "9")}>9</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("")}>/</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="numBut" onClick={() => change(disp + "4")}>4</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "5")}>5</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "6")}>6</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("")}>X</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="numBut" onClick={() => change(disp + "1")}>1</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "2")}>2</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "3")}>3</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change("")}>-</button>
            </td>
        </tr>
        <tr>
            <td>
                <button className="fxnBut" onClick={() => change("")}>C</button>
            </td>
            <td>
                <button className="numBut" onClick={() => change(disp + "0")}>0</button>
            </td>
            <td>
                <button className="blankBut" onClick={() => change("")}> </button>
            </td>
            <td>
                <button className="fxnBut" onClick={() => change("0")}>+</button>
            </td>
        </tr>
    </table>
  );
}
