import React from "react";
import Card from "./Card";

const CardList = ({ persons }) => {
  return (
    <div className="card-list">
      {persons.slice(0, 4).map((person) => {
        return <Card key={person.login.uuid} person={person}></Card>;
      })}
    </div>
  );
};

export default CardList;
