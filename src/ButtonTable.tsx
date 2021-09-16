import { useState } from "react"

export const SwapButton = ({change}: {change: (text: string) => void}): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const toggle = () => {
    if (active) {
      change("FIRST PROMPT");
    } else {
      change("SECOND PROMPT");
    }
    setActive(!active);
  }

  return <button onClick={() => toggle()}>Swap Prompt</button>
}
