const TARIFAS = {
  "011": {"016": 1.90, "017": 1.70, "018": 0.90},
  "016": {"011": 2.90},
  "017": {"011": 2.70},
  "018": {"018": 1.90}
}

class CalculadoraDeTarifa {

  constructor(ligacao) {
    this.ligacao = ligacao
    ligacao.plano.acrescimo = 1.1
  }
  
  calcularValorSemPlano() {
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
module.exports = CalculadoraDeTarifa;