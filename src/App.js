import React, { useState } from 'react';

const App = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('ТЕКСТ');

  const Increment = () => {
    setLikes(likes + 1);
  };
  const Decrement = () => {
    setLikes(likes - 1);
  };
  const onChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default App;
