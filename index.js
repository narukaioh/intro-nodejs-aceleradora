const express = require("express")
const app = express()
const port = 3000

const pokemons = [
    {
        name: "pikachu",
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
    return response.send("implemente a função que retorna o NOME do pokemon por tipo")
}

app.get("/pokemon", listPokemons)

app.get("/pokemon/:type", getPokemonByType)

app.listen(port, () => {
    console.log("http://localhost:3000")
})
