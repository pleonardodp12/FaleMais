const express = require('express');
const Ligacao = require('./src/ligacao');
const CalculadoraDeTarifa = require('./src/calculadoraDeTarifa');

const app = new express();

app.use(express.json());


app.post('/tarifa', (req, res) => {
  const { duracao, dddOrigem, dddDestino, plano } = req.body;
  const ligacao = new Ligacao(duracao, dddOrigem, dddDestino, plano);
  const calculadora = new CalculadoraDeTarifa(ligacao);


  console.log(`Nome do plano: ${ligacao.plano.nome}`);
  console.log(`Com plano: ${calculadora.calculaValorComPlano()}`);
  console.log(`Sem plano: ${calculadora.calcularValorSemPlano()}`);
  
  res.send({
    custoLigacaoComPlano: calculadora.calculaValorComPlano().toFixed(2),
    custodaLigacaoSemPlano: calculadora.calcularValorSemPlano().toFixed(2)
  })
})

app.listen(3001, () => console.log('http://localhost:3001'));