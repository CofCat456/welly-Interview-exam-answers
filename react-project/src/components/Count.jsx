import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>問題五</h2>
      <h3>數字：{count}</h3>
      <div className="content">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default Count;
