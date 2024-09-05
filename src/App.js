import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [joke, setJoke] = useState('');

  async function fetchMovie() {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'
    );
    const data = await res.json();
    setJoke(data.joke);
  }

  return (
    <div className='wrapper'>
      <span>&#128514;</span>
      <p>{joke}</p>
      <button onClick={() => fetchMovie()}>Get Random Joke</button>
    </div>
  );
};

export default App;
