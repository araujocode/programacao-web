const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/filmesDB");


// Modelo Filme
const Filme = mongoose.model("Filme", {
    titulo: String,
    diretor: String,
    ano: Number,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.get("/filmes", async (req, res) => {
    const filmes = await Filme.find();
    res.json(filmes);
});

app.post("/filmes", async (req, res) => {
    const filme = new Filme(req.body);
    await filme.save();
    res.json(filme);
});

app.put("/filmes/:id", async (req, res) => {
    const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(filme);
});

app.delete("/filmes/:id", async (req, res) => {
    await Filme.findByIdAndDelete(req.params.id);
    res.json({ message: "Filme removido" });
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
