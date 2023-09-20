const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen (3000, ()=> {
    console.log("Server is running on port 3000")
});

app.get('/results/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const resultado = n1 + n2;
    res.json({resultado});
  });

app.post('/results', (request, response) => {
    const { n1, n2 } = request.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        response.status(400).json({ error: 'Ingrese solo números' });
    } else {
        const resultado = n1 * n2;
        response.json({ Resultado: resultado });
    }
});

app.put('/results', (request, response) => {
    const { n1, n2 } = request.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        response.status(400).json({ error: 'Ingrese solo números' });
    } else if (n2 === 0) {
        response.status(400).json({ error: 'No se puede dividir por cero' });
    } else {
        const resultado = n1 / n2; 
        response.json({ division: resultado });
    }
});
  
app.patch('/results', (request, response) => {
    const { n1, n2 } = request.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        response.status(400).json({ error: 'Ingrese solo números' });
    } else {
        const resultado = Math.pow(n1, n2); 
        response.json({ potencia: resultado });  
    }
});
  
app.delete('/results/:n1/:n2', (req, res) => {
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const resultado = n1 - n2;
    res.json({resultado});
});