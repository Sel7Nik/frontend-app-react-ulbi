import React, { useState } from 'react';

const App = () => {
  let likes = 0;
  console.log(likes);
  return (
    <div>
      <h1>{likes}</h1>
      <button
        onClick={() => {
          likes += 1;
          console.log(likes);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          likes -= 1;
          console.log(likes);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
