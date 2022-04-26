const express = require("express")
const app = express()
const port = 3000

const produtos = []

// configuração que permite uso do payload pelo body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/produto", (request, response) => {
    return response.send(produtos)
})

app.post("/produto", (request, response) => {
    const body = request.body
    produtos.push(body)
    return response.send(produtos)
})

app.listen(port, () => {
    console.log("Está rodando aula 02 em:")
    console.log("http://localhost:3000")
})