import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");

  function handlechange(event) {
    setname(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input
        onChange={handlechange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
