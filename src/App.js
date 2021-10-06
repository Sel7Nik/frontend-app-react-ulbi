import React, { useState } from 'react';

const App = () => {
  // const state = useState(0);
  const [likes, setLikes] = useState(0);

  const Increment = () => {
    setLikes(likes + 1);
  };
  const Decrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default App;
