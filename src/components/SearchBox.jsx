import '../styles/SearchBox.css'

export default function SearchBox ({searchChange}) {
  return (
    <input 
      className="search-box"
      type="search" 
      placeholder="search cats"
      onChange={searchChange}
    />
  );
}
