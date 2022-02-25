import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import axios from "axios";

const Home = ({ query }) => {
  const [persons, setPersons] = useState([]);
  const [personsToList, setPersonsToList] = useState([]);

  useEffect(() => {
    const getPersons = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=6");
      if (result.data.results && result.data.results.length > 0) {
        setPersons(result.data.results);
        setPersonsToList(result.data.results);
      }
    };

    getPersons();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setPersonsToList(
        persons.filter(
          (person) =>
            person.name.first.toLowerCase().includes(query) ||
            person.name.last.toLowerCase().includes(query)
        )
      );
    } else {
      setPersonsToList(persons);
    }
  }, [query]);

  return (
    <div className="home-container">
      <CardList persons={personsToList} />
    </div>
  );
};

export default Home;
