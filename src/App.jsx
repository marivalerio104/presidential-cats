import { useState } from 'react'
import CardList from './components/CardList'
import { cats as initialCats } from './cats'
import './App.css'

function App() {
  const [cats, setCats] = useState(initialCats);
  
  return (
    <>
      <h1>Presidential Cats</h1>
      <CardList cats={cats}/>
    </>
  )
}

export default App
