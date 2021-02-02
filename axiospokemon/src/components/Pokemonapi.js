import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const[pokemon, setPokemon] = useState([]);
    const onClickHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => setPokemon(response.data.results) )
    }; 
    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            <ol>{pokemon.length > 0 && pokemon.map((pokemon) =><li>{pokemon.name}</li>)}</ol>
        </div>
) 
}

export default Pokemon
