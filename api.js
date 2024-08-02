
import express from 'express';

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da solicitação como JSON
const port = 3000;

// Rota que retorna uma mensagem em JSON
app.get('/data', (req, res) => {
    res.json({ message: 'Olá, Mundo' });
});

// Rota que retorna uma mensagem em texto
app.get('/maldicao', (req, res) => {
    res.send('Já me livrei da maldição');
});


app.post('/enviar', (req, res) => {
    const data = req.body;
    res.send(`Dados recebidos: ${JSON.stringify(data)}`);
});


app.post('/victor', (req, res) => {
    const data = req.body; 
    res.send(`Dados recebidos na rota /victor: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
