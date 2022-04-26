const express = require("express")
const app = express()
const port = 3000

const pokemons = [
    {
        name: "pikachu",
        type: "eletric"
    },
    {
        name: "jolteon",
        type: "eletric"
    },
    {
        name: "charmander",
        type: "fire"
    },
    {
        name: "squirtle",
        type: "water"
    },
    {
        name: "bulbasaur",
        type: "plant"
    }
]

function listPokemons(request, response) {
    return response.send(pokemons)
}

function getPokemonByType(request, response) {
    const { type } = request.params
    const pokemon = pokemons.filter(pokemon => pokemon.type === type)
    return response.send(pokemon)
}

app.get("/pokemon", listPokemons)
app.get("/pokemon/:type", getPokemonByType)


app.listen(port, () => {
    console.log("http://localhost:3000")
})
