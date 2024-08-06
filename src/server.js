import express from 'express';
const app = express();

app.use(express.json());

app.post('/auth/signup', (req, res) => {
    res.json({ message: "rota de POST auth/signup" });
});

app.post('/auth/login', (req, res) => {
    res.json({ message: "rota de POST login" });
});

app.post('/auth/logout', (req, res) => {
    res.json({ message: "rota de POST logout" });
});

app.post('/account', (req, res) => {
    res.json({ message: "rota de POST account" });
});
app.get('/account/list', (req, res) => {
    res.json({ message: "rota de GET list" });
});

app.get('/account/:id', (req, res) => {
    res.json({ message: "rota de GET account id" });
});

app.put('/account/:id', (req, res) => {
    res.json({ message: "rota de PUT account id" });
});

app.delete('/account/:id', (req, res) => {
    res.json({ message: "rota de DELETE account id" });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
