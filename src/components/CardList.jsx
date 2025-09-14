import React from "react";
import Card from "./Card";

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

  return (<>{cards}</>);
}
