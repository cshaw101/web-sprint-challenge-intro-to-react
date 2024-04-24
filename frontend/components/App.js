import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  // ❗ Create state to hold the data from the API

  useEffect(() => {
    axios.get(urlPeople)
          .then((res) => {
            setPeople(res.data)
            console.log(people)
          })
          .catch(err => console.error(err))
  }, [])
useEffect(() => {
  axios.get(urlPlanets)
  .then((res) => {
    setPlanets(res.data)
    console.log(planets)
  })
  .catch(err => console.error(err))
},[])
  
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map(p => (
        <Character
        key={p.id}
        name={p.name}
        homeworld={planets.homeworld}
        />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
