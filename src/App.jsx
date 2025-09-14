import { useState } from 'react'
import CardList from './components/CardList'
import SearchBox from "./components/SearchBox";
import { cats as initialCats } from './cats'
import './styles/App.css'

function App() {
  const [searchField, setSearchField] = useState("");
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredCats = initialCats.filter(cat => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase());
  });
  
  return (
    <div className='app'>
      <h1>Presidential Cats</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList cats={filteredCats}/>
    </div>
  )
}

export default App
