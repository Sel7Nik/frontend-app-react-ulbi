import React, { useState } from 'react';

const App = () => {
  // const state = useState(0);
  let [likes, setLikes] = useState(0);
  console.log(likes);
  return (
    <div>
      <h1>{likes}</h1>
      <button
        onClick={() => {
          setLikes((likes += 1));
          console.log(likes);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setLikes((likes -= 1));
          console.log(likes);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
