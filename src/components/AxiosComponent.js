import React, { useState } from 'react'
import axios from "axios";

// Destructuring to update our data
// Setting up useState as an empty array as we will be retrieving an array of pokemon
const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    // Creating the function to use axios and easily fetch data
    const fetchPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((response) => {
                console.log(response);
                // Setting the retrieved data to the pokemons variable 
                setPokemons(response.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="App">
            {/* Creating the Button to be able to populate list of Pokemon */}
            <button onClick={fetchPokemons}> Fetch Pokemon </button>
            <ul>
                {
                    // using the map built-in to output EACH iteration of our pokemon and listing each name attribute
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemon;