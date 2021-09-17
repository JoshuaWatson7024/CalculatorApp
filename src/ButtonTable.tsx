import React, { useState } from 'react';

export const ButtonTable = ({change, disp}: {change: (text: string) => void; disp: string}): JSX.Element => {
  return (
    <table>
        <tr>
            <td>
                <button onClick={() => change(disp + "7")}>7</button>
            </td>
        </tr>
    </table>
  );
}
