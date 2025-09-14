import Card from "./Card";
import '../styles/CardList.css'

export default function CardList({cats}) {
  const cards = cats.map(cat => {
    return (
      <Card 
        key = {cat.id} 
        id = {cat.id} 
        name = {cat.name} 
        term = {cat.term} 
      />
    );
  });

  return (
    <div className="card-list">
      {cards}
    </div>
  );
}
