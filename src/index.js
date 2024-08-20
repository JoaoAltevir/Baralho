const express = require('express');
const app = express();
const port = 3000;
const naipeController = require('./controllers/naipe.js');

app.use(express.json());

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