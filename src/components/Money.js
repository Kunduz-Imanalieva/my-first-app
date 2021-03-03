import { useState } from "react";

function Money({ value }) {
  const [num, setNum] = useState(value ?? 0);

  return (
    <div className="YourNum">
      <p>{num * 85}som</p>
      $<input
        type="number"
        value={num}
        onInput={(event) => setNum(event.target.value)}
      />
    </div>
  );
}

export default Money;
