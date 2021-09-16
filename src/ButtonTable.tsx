import { useState } from "react"

export const ButtonTable = ({change}: {change: (text: string) => void}): JSX.Element => {
    const one = () => {
        change("1");
    }

  return <button onClick={() => one()}>Swap Prompt</button>
}
