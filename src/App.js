import React, { useState } from "react";

function App() {
  const [ likes, setLikes ] = useState(0);
  const [ inputValue, setInputValue] = useState('Some text');

  const incr = () => setLikes(likes + 1);
  const decr = () => setLikes(likes - 1);

  return (
    <div className="App">
      <h1>{likes}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={incr}>plus one</button>
      <button onClick={decr}>minus one</button>
    </div>
  );
}

export default App;
