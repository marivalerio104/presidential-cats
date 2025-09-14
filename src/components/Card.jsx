import React from "react";
import '../styles/Card.css'

export default function Card({id, name, term}) {
  return (  // It's written in JSX
    <div className="card">
      <img src={`https://robohash.org/${name}?set=set4`} height="210px"/>
      <div>
        <h2>{name}</h2>
        <p>{term}</p>
      </div>
    </div>
  );
}
