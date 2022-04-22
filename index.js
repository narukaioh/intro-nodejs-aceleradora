const express = require("express")
const app = express()
const port = 3000

// GET, POST, PUT, DELETE

function helloWorld(request, response) {
    return response.send("Olá mundo!")
}

function soma(request, response) {
    const n1 = request.params.pokemon
    const n2 = request.params.numero2

    const resultado = parseInt(n1) + parseInt(n2)
    return response.send(`A soma dos numeros foi: ${resultado}`)
}

app.get("/", helloWorld)

app.get("/soma/:pokemon/:numero2", soma)

app.post("/produto", (request, response) => {
    return response.send("produto 1")
})

app.listen(port, () => {
    console.log("http://localhost:3000")
})
