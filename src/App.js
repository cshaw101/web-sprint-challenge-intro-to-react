import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.log(err))
  },[])



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {data.map((item, index) => (
        <Character key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
