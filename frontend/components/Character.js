import React, { useState } from 'react'

function Character({ name, homeworld }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{name}</h3>
      {showHomeworld && (
        <p>
          Planet:
          <span className='character-planet'>{homeworld}</span>
        </p>
      )}
    </div>
  )
}

export default Character
