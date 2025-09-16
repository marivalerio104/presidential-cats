import '../styles/Card.css'

export default function Card({name, term}) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${name}?set=set4`} height="175px"/>
      <div>
        <h2>{name}</h2>
        <p>{term}</p>
      </div>
    </div>
  );
}
