const express = require('express');
const Ligacao = require('./src/ligacao');
const cors = require('cors')
const CalculadoraDeTarifa = require('./src/calculadoraDeTarifa');

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/tarifa', (req, res) => {
  const { duracao, dddOrigem, dddDestino, plano } = req.body;
  const ligacao = new Ligacao(Number(duracao), dddOrigem, dddDestino, JSON.parse(plano));
  const calculadora = new CalculadoraDeTarifa(ligacao);
  
  res.send({
    custoLigacaoComPlano: calculadora.calculaValorComPlano().toFixed(2),
    custodaLigacaoSemPlano: calculadora.calcularValorSemPlano().toFixed(2)
  })
})

app.listen(3001, () => console.log('http://localhost:3001'));