import React from "react";

const Card = ({ person }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={person.picture.large} alt="profile" />
      </div>
      <div className="card-body">
        <h3>{`${person.name.first} ${person.name.last}`}</h3>
        <p>{`I live in ${person.location.country} in the city of ${person.location.city}, ${person.location.state}. I am ${person.dob.age} years old. My email address is ${person.email} and my phone number is ${person.phone}`} .</p>
      </div>
    </div>
  );
};

export default Card;
