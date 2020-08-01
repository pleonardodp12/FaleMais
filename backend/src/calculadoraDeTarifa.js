const TARIFAS = {
  "011": {"016": 1.90, "017": 1.70, "018": 0.90},
  "016": {"011": 2.9},
  "017": {"011": 2.7},
  "018": {"018": 1.9}
}

class CalculadoraDeTarifa {

  constructor(ligacao) {
    this.ligacao = ligacao
    this.ligacao.plano.acrescimo = 1.1;
  }
  
  calcularValorSemPlano() { 
    console.log("tarifas>>>>",TARIFAS[this.ligacao.dddOrigem][this.ligacao.dddDestino]);
    return this.ligacao.duracao * TARIFAS[this.ligacao.dddOrigem][this.ligacao.dddDestino];
  }

  calculaValorComPlano() {
    if (this.ligacao.duracao <= this.ligacao.plano.franquia) {
      return 0
    }

    const duracaoSemFranquia = this.ligacao.duracao - this.ligacao.plano.franquia;
    return (duracaoSemFranquia * TARIFAS[this.ligacao.dddOrigem][this.ligacao.dddDestino]) * this.ligacao.plano.acrescimo;
  }
  
}
// ddd Origem>>011 DDD Destino >>016 duracao>>20 FaleMais 30 $  com plano>>0,00 semPlano>>$ 38,00 
// Origem >> 011  destino >>>017 duracao>>>80 FaleMais 60 $ comPlano>>>>37,40 semPlano>>>>$ 136,00 
module.exports = CalculadoraDeTarifa;