const express = require('express');
const app = express();
const port = 3000;
const naipeController = require('./controllers/naipe.js');
const cartaController = require('./controllers/carta.js');

app.use(express.json());

// GERENCIAMENTO DE NAIPES
app.post("/naipe", (req,res) => {
    const naipe = req.body
    const code = naipeController.store(naipe);
    res.status(code).json();
})
app.get("/naipe", (req, res) => {
    res.json(naipeController.index());
})
app.get("/naipe/:id", (req,res) => {
    const naipe = naipeController.show(req.params.id);
    res.json(naipe);
});
app.put("/naipe/:id", (req,res) => {
    const naipe = req.body;
    const code = naipeController.update(req.params.id, naipe);
    res.status(code).json();
});
app.delete("/naipe/:id", (req, res) => {
    naipeController.destroy(req.params.id);
    res.json()
});

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})

// GERENCIAMENTO DE CARTAS
app.post("/cartas", (req, res) => {
    const carta = req.body;
    const code = cartaController.store(carta)
    res.status(code).json();
})
app.get("/cartas", (req, res) => {
    res.json(cartaController.index());
})
app.get("/cartas/:id", (req, res) => {
    const carta = cartaController.show(req.params.id);
    res.json(carta);
})
app.put("/carta/:id", (req, res) => {
    const carta = req.body;
    const code = cartaController.update(carta, req.params.id);
    res.status(code).json();  
})
app.delete("/carta/:id", (req, res) => {
    cartaController.destroy(req.params.id);
    res.json();
})