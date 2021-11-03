import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

const CardDetails = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=9"
    );
    setPokemon(response.data.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  // const { id } = useParams();
  // const myItem = pokemon.find((ele) => {
  //   return Number(id) === ele.id;
  // });
  return (
    <div>
      <h1 className="cardHead">{pokemon.name} Pokemon Details </h1>
      {/* <img
        className="img2"
        src={pokemon[id].images.large}
        alt={pokemon[id].name}
      /> */}
    </div>
  );
};

export default CardDetails;
