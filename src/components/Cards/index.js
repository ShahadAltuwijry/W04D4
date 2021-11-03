import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Cards = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const openPage = (id) => {
    history.push(`/CardDetails/${id}`);
  };

  const getPokemon = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=9"
    );
    setPokemon(response.data.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  
  return (
    <div>
      {/*start of search function */}
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h1>Cards</h1>

      <div className="searchDiv">
        {pokemon
          .filter((val) => {
            if (search === "") {
              return "no words written";
            } else if (
              val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="card">
                <img
                  className="img"
                  src={val.images.large}
                  alt={val.name}
                  onClick={() => {
                    openPage(val.id);
                  }}
                />
                <h2 className="name">{val.name}</h2>
              </div>
            );
          })}
      </div>
      {/*end of search function */}
    </div>
  );
};

export default Cards;
