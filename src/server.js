//const express = require(express)
import express from "express";

const app = express()

app.get('/', (req, res) => {
res.json({
    message: "vamos pra cima express",
    success: "Executou Bonito"
})
})
app.listen(3000, () => {
    console.log('servidor rodando na porta http://localhost:3000')
})
