// Write your Character component here


import React from 'react';

const Character = ({ data }) => {
  return (
    <div className="character">
      <h3>{data.name}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Skin Color: {data.skin_color}</p>
    </div>
  );
}

export default Character;
