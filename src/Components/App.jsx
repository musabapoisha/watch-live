import { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [index, setIndex] = useState(time);

  setInterval(() => {
    setIndex(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="container">
      <h1>{index}</h1>
    </div>
  );
}

export default App;
